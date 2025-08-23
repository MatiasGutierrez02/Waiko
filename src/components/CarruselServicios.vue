<template>
  <section class="servicios">
    <h2 class="section-title-servicios">Servicios</h2>

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
            <img :src="s.img" :alt="s.title" />
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
import {
  ref, computed, onMounted, onBeforeUnmount,
  defineProps, defineEmits
} from 'vue'
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
        title: 'Nuestro servicio pirncipal',
        desc: 'Detalle sobre nuestro servicio más solicitado dentro del mercado.',
        img: new URL('@/assets/ImpactoAcustico.jpg', import.meta.url).href,
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
        to: '/servicios/impacto-acustico'
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

/* Navegación + paginación */
const navigation = { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
const pagination = { el: '.swiper-pagination', clickable: true, dynamicBullets: true }

/* 3 visibles en desktop; 1 en mobile para que no quede apretado */
const breakpoints = {
  900:  { slidesPerView: 2, spaceBetween: 20 },
  1200: { slidesPerView: 3, spaceBetween: 24 }   // ✅ 3 visibles
}

function onSelect(item) { emit('select', item) }

/* Robustez en el primer render (sin “cortes”) */
function onSwiperReady(swiper) {
  swiperRef.value = swiper
  requestAnimationFrame(() => swiper.update())
  window.addEventListener('load', handleWindowLoad)
}
function handleWindowLoad() { swiperRef.value?.update() }
onMounted(() => setTimeout(() => swiperRef.value?.update(), 120))
onBeforeUnmount(() => window.removeEventListener('load', handleWindowLoad))
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

.section-title-servicios {
  font-size: 2.2rem;
  font-weight: 700;
  color: #264d2c;
  margin-bottom: 2.5rem;
  text-align: center;
}

.carousel-wrapper {
  width: 100%;
  max-width: 1280px;
  position: relative;
  overflow: hidden; /* ✅ oculta cualquier slide extra: sólo se ven las 3 configuradas */
}

.servicios-swiper {
  padding: 30px 10px 48px; /* espacio para bullets */
}

/* Card */
.servicio-card {
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
.servicio-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}
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

/* Flechas: visibles al hover */
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
.carousel-wrapper:hover .swiper-button-next {
  opacity: 1; pointer-events: auto;
}

/* Bullets */
.swiper-pagination-bullet { background: #a7c4ad; opacity: 1; }
.swiper-pagination-bullet-active { background: #264d2c; }

/* Destacar card activa (centrada) */
:deep(.swiper-slide-active .servicio-card) {
  transform: scale(1.08);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
clip-path: inset(0 round 12px); /* recorta sombra en esquinas */
}

/* Opcional: suavizar un poco las vecinas */
:deep(.swiper-slide-next .servicio-card),
:deep(.swiper-slide-prev .servicio-card) {
  transform: scale(0.95);
  opacity: 0.9;
}

</style>
