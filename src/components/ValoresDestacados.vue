<template>
  <section class="values-section">
    <h2 class="values-title" ref="titleRef"><span>{{ t("title") }}</span></h2>

    <div class="values-grid">
      <article
        v-for="(v, i) in translatedItems"
        :key="i"
        class="value-card"
        data-aos="card-tilt"
        :data-aos-delay="i * 140"
      >
        <div class="accent-bar"></div>

        <div
          class="icon-badge"
          :aria-label="v.title"
          data-aos="badge-pop"
          :data-aos-delay="i * 140 + 120"
        >
          <svg v-if="v.icon === 'mision'" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
              d="M12 3l7 3v6c0 4.97-3.05 8.48-7 9-3.95-.52-7-4.03-7-9V6l7-3z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
              d="M9 12l2 2 4-4"/>
          </svg>

          <svg v-else-if="v.icon === 'vision'" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
              d="M2.04 12.32c0 .12 0 .24 0 .36C3.42 16.69 7.36 20 12 20s8.58-3.31 9.96-7.32c.02-.12.02-.24 0-.36C20.58 7.31 16.64 4 12 4S3.42 7.31 2.04 12.32Z"/>
            <circle cx="12" cy="12" r="3" stroke-width="1.8"/>
          </svg>

          <svg v-else-if="v.icon === 'objetivo'" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="9" stroke-width="1.8"/>
            <circle cx="12" cy="12" r="5.5" stroke-width="1.8"/>
            <circle cx="12" cy="12" r="2" stroke-width="1.8"/>
            <path d="M12 12l6-6" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M15 6h3v3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="9" stroke-width="1.8"/>
            <path d="M8 12h8" stroke-width="1.8" stroke-linecap="round"/>
          </svg>
        </div>

        <h3 class="value-title" data-aos="fade-up" :data-aos-delay="i * 140 + 200">
          {{ v.title }}
        </h3>
        <p class="value-text" data-aos="fade-up" :data-aos-delay="i * 140 + 240">
          {{ v.text }}
        </p>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, onMounted, defineProps } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const currentLang = ref(localStorage.getItem("lang") || "es")

const dict = {
  es: {
    title: "Nuestros Valores",
    values: [
      {
        title: "Misión",
        text: "Ofrecer asesoramiento técnico y gestión ambiental de alta calidad, garantizando el cumplimiento normativo y la mejora continua en cada proyecto.",
        icon: "mision",
      },
      {
        title: "Visión",
        text: "Ser referentes en consultoría ambiental, promoviendo una cultura empresarial basada en la excelencia y la sostenibilidad.",
        icon: "vision",
      },
      {
        title: "Objetivo",
        text: "Desarrollar soluciones integrales que fortalezcan el desempeño ambiental y la competitividad de nuestros clientes.",
        icon: "objetivo",
      }
    ]
  },

  en: {
    title: "Our Values",
    values: [
      {
        title: "Mission",
        text: "Provide high-quality technical consulting and environmental management, ensuring regulatory compliance and continuous improvement in every project.",
        icon: "mision",
      },
      {
        title: "Vision",
        text: "Be leaders in environmental consulting, promoting a business culture based on excellence and sustainability.",
        icon: "vision",
      },
      {
        title: "Objective",
        text: "Develop comprehensive solutions that enhance environmental performance and the competitiveness of our clients.",
        icon: "objetivo",
      }
    ]
  }
}

const t = (key) => dict[currentLang.value][key]

const props = defineProps({
  values: {
    type: Array,
    default: () => ([])
  }
})

const translatedItems = computed(() => {
  if (!props.values.length) return dict[currentLang.value].values

  return props.values.map((x, i) => ({
    ...x,
    title: dict[currentLang.value].values[i]?.title ?? x.title,
    text: dict[currentLang.value].values[i]?.text ?? x.text
  }))
})

const titleRef = ref(null)

onMounted(() => {
  window.addEventListener("lang-changed", (e) => {
    currentLang.value = e.detail
  })

  AOS.init({ duration: 900, once: true, easing: 'ease-out-quart', offset: 80 })

  const el = titleRef.value
  if (!el) return

  el.style.setProperty('--line-scale', '0')
  el.style.opacity = '0'
  el.style.transform = 'translateX(-40px)'

  const io = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return

    const start = performance.now()
    const dur = 900

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
  background: linear-gradient(180deg, #144553 0%, #1f3d25 100%);
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
  will-change: transform, opacity, filter;
}
.value-card:hover {
  box-shadow: 0 16px 40px rgba(0,0,0,0.18);
  translate: 0 -4px;
}

/* Animación robusta (tilt 3D + shear + brillo al entrar) */
[data-aos="card-tilt"]{
  opacity: 0;
  transform: perspective(900px) rotateX(14deg) translateY(36px) scale(.94);
  filter: drop-shadow(0 10px 18px rgba(0,0,0,.08)) blur(1px);
  transition:
    transform .95s cubic-bezier(.2,.9,.2,1),
    opacity .9s ease,
    filter .9s ease,
    box-shadow .9s ease;
}
[data-aos="card-tilt"].aos-animate{
  opacity: 1;
  transform: perspective(900px) rotateX(0) translateY(0) scale(1);
  filter: drop-shadow(0 12px 26px rgba(0,0,0,.14)) blur(0);
}
/* destello sutil al entrar */
.value-card::after{
  content:"";
  position:absolute; inset:0;
  background: linear-gradient(120deg, transparent 35%, rgba(255,255,255,.55) 50%, transparent 65%);
  transform: translateX(-120%);
  opacity: 0;
  pointer-events:none;
}
.value-card.aos-animate::after{
  animation: sheen 1.1s cubic-bezier(.25,.8,.25,1) .12s forwards;
}
@keyframes sheen{
  0%   { transform: translateX(-120%); opacity: .0; }
  30%  { opacity: .85; }
  100% { transform: translateX(120%);  opacity: 0; }
}

/* badge */
[data-aos="badge-pop"]{
  opacity: 0;
  transform: translateY(-10px) scale(.7);
  transition: transform .7s cubic-bezier(.2,1,.22,1), opacity .6s ease;
}
[data-aos="badge-pop"].aos-animate{
  opacity: 1;
  transform: translateY(0) scale(1);
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
  color: #144553;
  border-radius: 999px;
  display: grid;
  place-items: center;
  box-shadow: 0 8px 22px rgba(0,0,0,0.18);
  border: 3px solid #aee79d;
}
.icon-badge svg { width: 26px; height: 26px; }

.value-title {
  color: #144553;
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
