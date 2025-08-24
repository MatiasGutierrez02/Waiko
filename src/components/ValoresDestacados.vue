<template>
  <section class="values-section">
    <h2 class="values-title" ref="titleRef"><span>Nuestros Valores</span></h2>

    <div class="values-grid">
      <article
        v-for="(v, i) in items"
        :key="i"
        class="value-card"
        data-aos="fade-up"
        :data-aos-delay="i * 120"
      >
        <div class="accent-bar"></div>

        <div
          class="icon-badge"
          :aria-label="v.title"
          data-aos="zoom-in"
          :data-aos-delay="i * 120 + 80"
        >
          <svg v-if="v.icon === 'mision'" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
              d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.63 8.41m5.96 5.96a14.93 14.93 0 0 1-5.84 2.58m-.12-8.54a6 6 0 0 0-7.38 5.84h4.8m2.58-5.84a14.93 14.93 0 0 0-2.58 5.84m2.7 2.7c-.1.02-.21.04-.31.06a15.09 15.09 0 0 1-2.45-2.45 14.9 14.9 0 0 1 .06-.31m-2.24 2.39a4.49 4.49 0 0 0-1.76 4.31 4.49 4.49 0 0 0 4.31-1.76M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
          </svg>

          <svg v-else-if="v.icon === 'vision'" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
              d="M2.04 12.32c0 .12 0 .24 0 .36C3.42 16.69 7.36 20 12 20s8.58-3.31 9.96-7.32c.02-.12.02-.24 0-.36C20.58 7.31 16.64 4 12 4S3.42 7.31 2.04 12.32Z"/>
            <circle cx="12" cy="12" r="3" stroke-width="1.8"/>
          </svg>

          <svg v-else-if="v.icon === 'objetivo'" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
              d="M11.35 3.84c-.07.21-.1.43-.1.66 0 .41.34.75.75.75h4.5a.75.75 0 0 0 .75-.75c0-.23-.03-.45-.1-.66M9.55 3.92A2.25 2.25 0 0 1 13.5 2.25H15c1.01 0 1.87.67 2.15 1.67m-7.6 0c-.38.02-.75.05-1.12.08C9.1 4.01 8.25 4.97 8.25 6.11V8.25M17.15 3.92c.38.02.75.05 1.12.08 1.13.09 1.98 1.05 1.98 2.19V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.88c-.62 0-1.13.5-1.13 1.12v11.25c0 .62.5 1.13 1.13 1.13h9.75c.62 0 1.12-.5 1.12-1.13V18.75M8.25 14.25l1.5 1.5 3-3.75"/>
          </svg>

          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="9" stroke-width="1.8"/>
            <path d="M8 12h8" stroke-width="1.8" stroke-linecap="round"/>
          </svg>
        </div>

        <h3 class="value-title" data-aos="fade-up" :data-aos-delay="i * 120 + 140">{{ v.title }}</h3>
        <p class="value-text" data-aos="fade-up" :data-aos-delay="i * 120 + 180">{{ v.text }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, onMounted, defineProps } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const props = defineProps({
  values: {
    type: Array,
    default: () => ([
      { title: 'Misión',   text: 'Brindar asesoramiento y gestión ambiental de calidad excepcional para empresas y organismos.', icon: 'mision' },
      { title: 'Visión',   text: 'Consolidar un futuro donde la excelencia ambiental sea parte integral de cada negocio.',     icon: 'vision' },
      { title: 'Objetivo', text: 'Impulsar soluciones prácticas que aseguren el cumplimiento normativo y protejan el entorno.', icon: 'objetivo' }
    ])
  }
})

const items = computed(() => props.values)
const titleRef = ref(null)

onMounted(() => {
  // Igual que en “Sobre nosotros”
  AOS.init({ duration: 850, once: true, easing: 'ease-out-quart', offset: 80 })

  const el = titleRef.value
  if (!el) return
  el.style.setProperty('--line-scale', '0')
  el.style.opacity = '0'
  el.style.transform = 'translateX(-40px)'

  const io = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return
    const start = performance.now()
    const dur = 900 // igual que el título de “Sobre nosotros”
    const tick = (now) => {
      const t = Math.min(1, (now - start) / dur)
      const ease = 1 - Math.pow(1 - t, 3)
      el.style.setProperty('--line-scale', ease.toString())
      el.style.opacity = ease.toString()
      el.style.transform = `translateX(${(1 - ease) * -40}px)`
      if (t < 1) requestAnimationFrame(tick)
      else io.disconnect()
    }
    requestAnimationFrame(tick)
  }, { threshold: 0.4 })
  io.observe(el)
})
</script>

<style scoped>
.values-section {
  width: 100%;
  background: linear-gradient(180deg, #264d2c 0%, #1f3d25 100%);
  padding: 3.2rem 1.25rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.values-title{
  --line-scale: 0;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto 2.6rem;
  color: #eaf7ee;
  font-size: 2.2rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: .75rem;
  opacity: 0;
  transform: translateX(-40px);
  will-change: transform, opacity;
}
.values-title > span{ position: relative; z-index: 1; }
.values-title::before{
  content: "";
  flex: 1 1 auto;
  height: 12px;
  background-image:
    linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.55) 70%, rgba(255,255,255,.98) 100%),
    linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.55) 70%, rgba(255,255,255,.98) 100%);
  background-repeat: no-repeat;
  background-size: 100% 2px, 100% 2px;
  background-position: 0 2px, 0 10px;
  border-radius: 999px;
  transform: scaleX(var(--line-scale));
  transform-origin: left center;
  will-change: transform;
}

.values-grid {
  width: 100%;
  max-width: 1100px;
  display: grid;
  gap: 1.6rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.value-card {
  position: relative;
  background: #f4f7f5;
  border-radius: 16px;
  padding: 2.4rem 1.4rem 1.6rem;
  box-shadow: 0 8px 28px rgba(0,0,0,0.14);
  transition: box-shadow .25s ease, translate .25s ease;
}
.value-card:hover {
  box-shadow: 0 16px 40px rgba(0,0,0,0.18);
  translate: 0 -4px;
}

.accent-bar {
  position: absolute;
  inset: 0 0 auto 0;
  height: 6px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background: linear-gradient(90deg, #aee79d, #67c56b, #aee79d);
  background-size: 200% 100%;
  animation: sweep 6s linear infinite;
}
@keyframes sweep {
  0%   { background-position: 0% 50% }
  100% { background-position: 200% 50% }
}

.icon-badge {
  position: absolute;
  top: -22px;
  left: 16px;
  width: 48px;
  height: 48px;
  background: #ffffff;
  color: #264d2c;
  border-radius: 999px;
  display: grid;
  place-items: center;
  box-shadow: 0 8px 22px rgba(0,0,0,0.18);
  border: 3px solid #aee79d;
}
.icon-badge svg { width: 26px; height: 26px; }

.value-title {
  color: #264d2c;
  font-weight: 800;
  font-size: 1.35rem;
  margin: .6rem 0 .35rem;
  text-align: center;
}
.value-text {
  color: #3f4a40;
  font-size: 1.02rem;
  line-height: 1.6;
  text-align: center;
}
.values-section{ overflow-x: clip; }
@supports not (overflow-x: clip){
  .values-section{ overflow-x: hidden; }
}

</style>
