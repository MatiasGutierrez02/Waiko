<template>
  <section class="nuestro-impacto">
    <h2 class="section-title-impacto" ref="titleRef">Nuestro Impacto</h2>

    <div class="impacto-container">
      <div class="estadisticas">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="estadistica-item"
          ref="itemRefs"
          :style="{ '--delay': `${i * 120}ms` }"
        >
          <h3 class="contador-wrap" :aria-label="`${item.label}: ${formatted(i)}${item.suffix || ''}`">
            <span class="contador">{{ displayValues[i] }}</span><span class="suffix">{{ item.suffix || '' }}</span>
          </h3>
          <p class="label">{{ item.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount, watch, nextTick, defineProps } from 'vue'

const props = defineProps({
  stats: {
    type: Array,
    default: () => ([
      { target: 350,  label: 'Proyectos Completados',        suffix: '+' },
      { target: 2300, label: 'Toneladas de CO₂ Reducidas',   suffix: 'k' },
      { target: 600,  label: 'Clientes Satisfechos',         suffix: '+' },
      { target: 13,   label: 'Años de Experiencia',          suffix: '+' },
    ])
  },
  duration: { type: Number, default: 1200 },
  once: { type: Boolean, default: true },
  easing: { type: String, default: 'easeOutCubic' },
  formatThousands: { type: Boolean, default: true }
})

const items = reactive(props.stats)
const itemRefs = ref([])
const displayValues = ref(items.map(() => '0'))
let observer
const titleRef = ref(null)
let titleIO

function ease(t) {
  if (props.easing === 'linear') return t
  return 1 - Math.pow(1 - t, 3)
}

function formatNumber(n) {
  if (!props.formatThousands) return String(n)
  return new Intl.NumberFormat('es-AR').format(n)
}

function animateCount(index, target) {
  const start = 0
  const startTime = performance.now()
  function step(now) {
    const elapsed = now - startTime
    const t = Math.min(1, elapsed / props.duration)
    const value = Math.round(start + (target - start) * ease(t))
    displayValues.value[index] = formatNumber(value)
    if (t < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

function formatted(i) {
  return displayValues.value[i]
}

function observeOnce() {
  if (observer) observer.disconnect()
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const idx = itemRefs.value.indexOf(entry.target)
      if (entry.isIntersecting && idx > -1) {
        entry.target.classList.add('in-view')
        animateCount(idx, Number(items[idx].target) || 0)
        if (props.once) observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.25 })
  itemRefs.value.forEach(el => el && observer.observe(el))
}

onMounted(async () => {
  await nextTick()
  observeOnce()

  const title = titleRef.value
  if (title) {
    title.style.opacity = '0'
    title.style.transform = 'translateX(-40px)'
    title.style.setProperty('--line-scale', '0')
    titleIO = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      const start = performance.now()
      const dur = 900
      function step(now){
        const t = Math.min(1, (now - start) / dur)
        const e = ease(t)
        title.style.opacity = String(e)
        title.style.transform = `translateX(${(1 - e) * -40}px)`
        title.style.setProperty('--line-scale', String(e))
        if (t < 1) requestAnimationFrame(step)
        else titleIO.disconnect()
      }
      requestAnimationFrame(step)
    }, { threshold: 0.35 })
    titleIO.observe(title)
  }
})

onBeforeUnmount(() => {
  observer && observer.disconnect()
  titleIO && titleIO.disconnect()
})

watch(() => props.stats, (nv) => {
  displayValues.value = nv.map(() => '0')
  nextTick().then(observeOnce)
})
</script>

<style scoped>
.nuestro-impacto{
  width: 100%;
  padding: 4rem 1.5rem;
  background: linear-gradient(180deg, #144553 0%, #1f3d25 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: clip;
}
@supports not (overflow-x: clip){
  .nuestro-impacto{ overflow-x: hidden; }
}


.section-title-impacto {
  --line-scale: 0;
  width: 100%;
  max-width: 1100px;
  font-size: 2.2rem;
  font-weight: 800;
  color: #aee79d;
  margin: 0 0 2.2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: clamp(14px, 2.5vw, 28px);
  opacity: 0;
  transform: translateX(-40px);
  will-change: transform, opacity;
  position: relative;
  isolation: isolate;
}
.section-title-impacto::before {
  content: "";
  flex: 1 1 auto;
  height: 12px;
  background-repeat: no-repeat;
  background-size: 100% 2px, 100% 2px;
  background-position: right 2px, right 10px;
  border-radius: 999px;
  background-image:
    linear-gradient(to left, rgba(255,255,255,.98) 0%, rgba(255,255,255,.55) 30%, rgba(255,255,255,0) 100%),
    linear-gradient(to left, rgba(255,255,255,.98) 0%, rgba(255,255,255,.55) 30%, rgba(255,255,255,0) 100%);
  transform: scaleX(var(--line-scale));
  transform-origin: left center;
}

.impacto-container {
  width: 100%;
  max-width: 900px;
}

.estadisticas {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
}

.estadistica-item {
  background: rgba(244, 247, 245, 0.98);
  border-radius: 12px;
  padding: 1.75rem 1.25rem;
  text-align: center;
  box-shadow: 0 10px 26px rgba(0,0,0,0.16);
  backdrop-filter: saturate(1.1);
  border: 1px solid rgba(255,255,255,0.45);
  transform: translateX(40vw);
  opacity: 0;
  transition:
    transform 900ms cubic-bezier(.22,.61,.36,1),
    opacity 900ms cubic-bezier(.22,.61,.36,1),
    box-shadow .2s ease;
  transition-delay: var(--delay, 0ms);
  will-change: transform, opacity;
}
.estadistica-item.in-view {
  transform: translateX(0);
  opacity: 1;
}
.estadistica-item:hover {
  transform: translateX(0) translateY(-4px);
  box-shadow: 0 14px 32px rgba(0,0,0,0.2);
}

.contador-wrap {
  font-size: 2.2rem;
  color: #144553;
  margin: 0 0 .35rem 0;
  line-height: 1;
  font-weight: 800;
  letter-spacing: .5px;
}
.contador { display: inline-block; min-width: 2ch; }
.suffix { margin-left: .15rem; font-weight: 800; }
.label {
  font-size: 0.95rem;
  color: #3f4a40;
}

@media (max-width: 700px) {
  .estadisticas { grid-template-columns: 1fr; }
  .estadistica-item { transform: translateX(20vw); }
}
</style>
