<template>
  <section id="servicios" class="servicios">
    <div class="section-heading" ref="headingRef">
      <h2 class="section-title-servicios" ref="titleRef"><span>Servicios</span></h2>
    </div>

    <div class="carousel-wrapper" @mouseenter="hover = true" @mouseleave="hover = false">
      <Swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="24"
        :centered-slides="true"
        :loop="true"
        :keyboard="{ enabled: true }"
        :navigation="navigation"
        :pagination="pagination"
        :breakpoints="breakpoints"
        :observer="true"
        :observe-parents="true"
        :update-on-window-resize="true"
        :watch-slides-progress="true"
        @swiper="onSwiperReady"
        :autoplay="{ delay: 2500, disableOnInteraction: false }"
        class="servicios-swiper"
      >
        <SwiperSlide v-for="(s, i) in items" :key="i">
          <article class="servicio-card">
            <div class="img-wrap">
              <img :src="s.img" :alt="s.title" />
              <span
                v-if="s.premium || i === 0"
                class="premium-corner"
                title="Servicio destacado"
                aria-label="Servicio destacado"
              >
                <svg viewBox="0 0 24 24" class="crown" aria-hidden="true">
                  <g fill="yellow" stroke="#b88a00" stroke-width=".6" stroke-linejoin="round">
                    <path d="M5 10l4 3 3-4 3 4 4-3v6H5z"/>
                    <rect x="5" y="17" width="14" height="2.4" rx="1.2"/>
                    <circle cx="7" cy="9" r="1.1"/>
                    <circle cx="12" cy="8" r="1.1"/>
                    <circle cx="17" cy="9" r="1.1"/>
                  </g>
                </svg>
              </span>
            </div>

            <h3>{{ s.title }}</h3>
            <p>{{ s.desc }}</p>
            <button @click="onSelect(s)">Más información</button>
          </article>
        </SwiperSlide>

        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev" :class="{ 'is-visible': hover }" aria-label="Anterior"></div>
        <div class="swiper-button-next" :class="{ 'is-visible': hover }" aria-label="Siguiente"></div>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, defineProps, defineEmits } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Keyboard, A11y, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const props = defineProps({
  services: {
    type: Array,
    default: () => ([
      {
        premium: true,
        title: 'Nuestro servicio principal',
        desc: 'Detalle sobre nuestro servicio más solicitado dentro del mercado.',
        img: new URL('@/assets/imagenTrabajo.jpg', import.meta.url).href,
        to: '/servicios/asesoria-tecnica'
      },
      {
        title: 'Gestión Ambiental',
        desc: 'Soluciones integrales para cumplir con normativas y mejorar el desempeño ambiental.',
        img: new URL('@/assets/GestionAmbiental.jpg', import.meta.url).href,
        to: '/servicios/gestion-ambiental'
      },
      {
        title: 'Impacto Acústico',
        desc: 'Estudios y asesoramiento para el control del ruido en entornos urbanos e industriales.',
        img: new URL('@/assets/ImpactoAcustico.jpg', import.meta.url).href,
        to: '/servicios/impacto-acústico'
      },
      {
        title: 'Habilitaciones Comerciales',
        desc: 'Asistencia completa para tramitar habilitaciones bajo normas ambientales.',
        img: new URL('@/assets/HabilitacionesComerciales.jpg', import.meta.url).href,
        to: '/servicios/habilitaciones-comerciales'
      },
      {
        title: 'Asesoría Técnica',
        desc: 'Consultoría en políticas sostenibles, residuos y planes de mitigación.',
        img: new URL('@/assets/AsesoriaTecnica.jpg', import.meta.url).href,
        to: '/servicios/asesoria-tecnica'
      },
    ])
  }
})

const emit = defineEmits(['select'])
const modules = [Navigation, Pagination, Keyboard, A11y, Autoplay]
const hover = ref(false)
const swiperRef = ref(null)
const items = computed(() => props.services)
const navigation = { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
const pagination = { el: '.swiper-pagination', clickable: true, dynamicBullets: true }
const breakpoints = { 900:{slidesPerView:2,spaceBetween:20}, 1200:{slidesPerView:3,spaceBetween:24} }
function onSelect(item){ emit('select', item) }
function onSwiperReady(swiper){ swiperRef.value = swiper; requestAnimationFrame(() => swiper.update()); window.addEventListener('load', handleWindowLoad) }
function handleWindowLoad(){ swiperRef.value?.update() }
onMounted(() => setTimeout(() => swiperRef.value?.update(), 120))
onBeforeUnmount(() => window.removeEventListener('load', handleWindowLoad))

const headingRef = ref(null)
const titleRef = ref(null)

onMounted(() => {
  const box = headingRef.value
  const title = titleRef.value
  if (!box || !title) return

  box.style.setProperty('--line-scale', '0')
  title.style.opacity = '0'
  title.style.transform = 'translateX(40px)'

  const io = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return
    const start = performance.now()
    const dur = 900
    const step = (now) => {
      const t = Math.min(1, (now - start) / dur)
      const e = 1 - Math.pow(1 - t, 3)
      box.style.setProperty('--line-scale', String(e))
      title.style.opacity = String(e)
      title.style.transform = `translateX(${(1 - e) * 40}px)`
      if (t < 1) requestAnimationFrame(step)
      else io.disconnect()
    }
    requestAnimationFrame(step)
  }, { threshold: 0.4 })

  io.observe(box)
})
</script>

<style scoped>
.servicios {
  width: 100%;
  background-color: #ffffff;
  padding: 4rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-heading{
  --line-grad: linear-gradient(90deg, transparent 0%, #aee79d 12%, #264d2c 50%, #aee79d 88%, transparent 100%);
  --line-height: 2px;
  --line-gap: 8px;
  --line-scale: 0;
  width: 100%;
  max-width: 1100px;
  position: relative;
  margin-bottom: 2.5rem;
  isolation: isolate;
}
.section-heading::before{
  content: "";
  position: absolute;
  left: 0; right: 0;
  top: 50%;
  transform: translateY(-50%) scaleX(var(--line-scale));
  transform-origin: left center;
  height: calc(var(--line-height) * 2 + var(--line-gap));
  opacity: .55;
  background:
    var(--line-grad) left top / 100% var(--line-height) no-repeat,
    var(--line-grad) left calc(var(--line-height) + var(--line-gap)) / 100% var(--line-height) no-repeat;
  z-index: 0;
}

.section-title-servicios{
  position: relative;
  margin: 0;
  text-align: left;
  font-weight: 800;
  font-size: 2.2rem;
  letter-spacing: .02em;
  color: #264d2c;
  opacity: 0;
  transform: translateX(40px);
  will-change: transform, opacity;
  z-index: 1;
}
.section-title-servicios > span{
  display: inline-block;
  padding-right: .75rem;
  background: #fff;
}

.carousel-wrapper {
  width: 100%;
  max-width: 1100px;
  position: relative;
  overflow: hidden;
}
.servicios-swiper { padding: 30px 10px 48px; }

.servicio-card {
  position: relative;
  background-color: #f4f7f5;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.servicio-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 24px rgba(0,0,0,0.15);
}

.img-wrap { position: relative; }
.servicio-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.premium-corner{
  position: absolute;
  top: 10px;
  left: 10px;
  width: 42px;
  height: 42px;
  border-radius: 999px;
  background: rgba(255,255,255,.96);
  border: 2px solid #F5E3A3;
  display: grid;
  place-items: center;
  box-shadow: 0 10px 22px rgba(0,0,0,.18);
  z-index: 2;
  transform: translateY(-2px);
  transition: transform .25s ease;
}
:deep(.swiper-slide-active .premium-corner){ transform: translateY(0) scale(1.05); }

.servicio-card h3 {
  font-size: 1.4rem;
  color: #264d2c;
  margin-bottom: 0.5rem;
  font-weight: bold;
}
.servicio-card p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
}
.servicio-card button {
  background-color: #264d2c;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.servicio-card button:hover { background-color: #3b6e40; }

.swiper-button-prev,
.swiper-button-next {
  color: #264d2c;
  background: rgba(255,255,255,0.9);
  width: 44px;
  height: 44px;
  border-radius: 999px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  translate: 0 -50%;
  top: 45%;
  opacity: 0;
  pointer-events: none;
  transition: opacity .25s ease;
}
.swiper-button-prev::after,
.swiper-button-next::after { font-size: 18px; font-weight: 700; }
.carousel-wrapper:hover .swiper-button-prev,
.carousel-wrapper:hover .swiper-button-next { opacity: 1; pointer-events: auto; }

.swiper-pagination-bullet { background: #a7c4ad; opacity: 1; }
.swiper-pagination-bullet-active { background: #264d2c; }

:deep(.swiper-slide-active .servicio-card) {
  transform: scale(1.08);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
  clip-path: inset(0 round 12px);
}
:deep(.swiper-slide-next .servicio-card),
:deep(.swiper-slide-prev .servicio-card) {
  transform: scale(0.95);
  opacity: 0.9;
}
.servicios{ overflow-x: clip; }
.carousel-wrapper{ overflow: hidden; }
@supports not (overflow-x: clip){
  .servicios{ overflow-x: hidden; }
}

</style>
