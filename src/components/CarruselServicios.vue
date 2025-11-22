<template>
  <section id="servicios" class="servicios">
    <div class="section-heading" ref="headingRef">
      <h2 class="section-title-servicios" ref="titleRef">
        <span>Servicios</span>
      </h2>
    </div>

    <div
      class="carousel-wrapper"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
    >
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
        :autoplay="{ delay: 4000, disableOnInteraction: false }"
        class="servicios-swiper"
      >
        <SwiperSlide v-for="(s, i) in items" :key="i">
          <article class="servicio-card">
            <div class="img-wrap">
              <img :src="s.img" :alt="s.title" :class="{ 'logo-img': s.title.includes('CAF-BID-BM') }"/>
              <span
                v-if="s.premium || i === 0"
                class="premium-corner"
                title="Servicio destacado"
                aria-label="Servicio destacado"
              >
                <svg viewBox="0 0 24 24" class="crown" aria-hidden="true">
                  <g
                    fill="yellow"
                    stroke="#b88a00"
                    stroke-width=".6"
                    stroke-linejoin="round"
                  >
                    <path d="M5 10l4 3 3-4 3 4 4-3v6H5z" />
                    <rect x="5" y="17" width="14" height="2.4" rx="1.2" />
                    <circle cx="7" cy="9" r="1.1" />
                    <circle cx="12" cy="8" r="1.1" />
                    <circle cx="17" cy="9" r="1.1" />
                  </g>
                </svg>
              </span>
            </div>

            <h3 v-html="s.title"></h3>
            <p>{{ s.desc }}</p>
            <button @click="onSelect(s)">Más información</button>
          </article>
        </SwiperSlide>

        <div class="swiper-pagination"></div>
        <div
          class="swiper-button-prev"
          :class="{ 'is-visible': hover }"
          aria-label="Anterior"
        ></div>
        <div
          class="swiper-button-next"
          :class="{ 'is-visible': hover }"
          aria-label="Siguiente"
        ></div>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import {
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
  defineProps,
  defineEmits,
} from "vue";
import { useRouter } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  Navigation,
  Pagination,
  Keyboard,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const props = defineProps({
  services: {
    type: Array,
    default: () => [
      {
        premium: true,
        title: "Abono Mensual",
        desc: "¿Quiere olvidarse de los vencimientos y evitar intimaciones?",
        img: new URL("@/assets/imagenTrabajo.jpg", import.meta.url).href,
        to: "/servicios/abono-mensual",
      },
      {
        title: "Impacto Ambiental",
        desc: "Estudio de Impacto Ambiental APRA | Cumplimiento Ley 123 | Evite Multas",
        img: new URL("@/assets/GestionAmbiental.jpg", import.meta.url).href,
        to: "/servicios/gestion-ambiental",
      },
      {
        title: "Inscripción Generador de Residuos Peligrosos APra",
        desc: "Revisamos y optimizamos la gestión de sus residuos peligrosos.",
        img: new URL("@/assets/apra.jpg", import.meta.url).href,
        to: "/servicios/habilitaciones-comerciales",
      },
      {
        title: "Residuos Peligrosos (Sayds)",
        desc: "Cumpla con la Ley 24.051 y asegure la correcta inscripción de residuos peligrosos, evitando sanciones y clausuras.",
        img: new URL("@/assets/sayds.jpg", import.meta.url).href,
        to: "/servicios/habilitaciones-comerciales-nacion",
      },
      {
        title: "Estudio de Impacto Acústico - RAC",
        desc: "Asesoramos en la inscripción de actividades con potencial impacto acústico, garantizando el cumplimiento legal.",
        img: new URL("@/assets/impacto acustico.png", import.meta.url).href,
        to: "/servicios/impacto-acustico",
      },
      {
        title: "Habilitaciones Y Permisos",
        desc: "Brindamos un servicio integral de habilitaciones comerciales y ambientales.",
        img: new URL("@/assets/HabilitacionesComerciales.jpg", import.meta.url)
          .href,
        to: "/servicios/habilitaciones-permisos",
      },
      {
        title: "Intimaciones Y Cédulas",
        desc: "Respuesta a Intimaciones Ambientales | Cédulas APRA y AGC | Evite Multas",
        img: new URL("@/assets/IntimacionesCedulas.jpg", import.meta.url).href,
        to: "/servicios/intimaciones-cedulas",
      },
      {
        title: "Organismos Internacionales<br>de Crédito<br>(CAF-BID-BM)",
        desc: "Asistencia técnica en evaluaciones ambientales exigidas por organismos internacionales (CAF, BID, BM).",
        img: new URL("@/assets/caf_bid.jpg", import.meta.url)
          .href,
        to: "/servicios/internacionales-credito",
      },
      {
        title: "Empresas Extranjeras",
        desc: "Asesoramiento Ambiental para Empresas Extranjeras | Cumplimiento Legal en Argentina",
        img: new URL("@/assets/EmpresasExtranjeras.jpg", import.meta.url).href,
        to: "/servicios/empresas-extranjeras",
      },
      {
        title: "Registro de Campanas, Conductos y Afines",
        desc: "Si tu establecimiento tiene campanas o conductos de extracción, debe cumplir con la Disposición 913/2025 y mantener un Certificado Digital de Limpieza vigente.",
        img: new URL("@/assets/campana.jpg", import.meta.url).href,
        to: "/servicios/registro-campanas",
      },
    ],
  },
});
const emit = defineEmits(["select"]);
const router = useRouter();
const modules = [Navigation, Pagination, Keyboard, A11y, Autoplay];
const hover = ref(false);
const swiperRef = ref(null);
const items = computed(() => props.services);
const navigation = {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
};
const pagination = {
  el: ".swiper-pagination",
  clickable: true,
  dynamicBullets: true,
};
const breakpoints = {
  480: {
    slidesPerView: 1,
    spaceBetween: 16,
    centeredSlides: true,
  },
  768: {
    slidesPerView: 1.5,
    spaceBetween: 18,
    centeredSlides: true,
  },
  900: {
    slidesPerView: 2,
    spaceBetween: 20,
    centeredSlides: true,
  },
  1200: {
    slidesPerView: 3,
    spaceBetween: 24,
    centeredSlides: true,
  },
};
function onSelect(item) {
  if (item.to) {
    router.push(item.to);
  }

  emit("select", item);
}
function onSwiperReady(swiper) {
  swiperRef.value = swiper;
  requestAnimationFrame(() => swiper.update());
  window.addEventListener("load", handleWindowLoad);
}
function handleWindowLoad() {
  swiperRef.value?.update();
}
onMounted(() => setTimeout(() => swiperRef.value?.update(), 120));
onBeforeUnmount(() => window.removeEventListener("load", handleWindowLoad));

const headingRef = ref(null);
const titleRef = ref(null);

onMounted(() => {
  const box = headingRef.value;
  const title = titleRef.value;
  if (!box || !title) return;

  box.style.setProperty("--line-scale", "0");
  title.style.opacity = "0";
  title.style.transform = "translateX(40px)";

  const io = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      const start = performance.now();
      const dur = 900;
      const step = (now) => {
        const t = Math.min(1, (now - start) / dur);
        const e = 1 - Math.pow(1 - t, 3);
        box.style.setProperty("--line-scale", String(e));
        title.style.opacity = String(e);
        title.style.transform = `translateX(${(1 - e) * 40}px)`;
        if (t < 1) requestAnimationFrame(step);
        else io.disconnect();
      };
      requestAnimationFrame(step);
    },
    { threshold: 0.4 }
  );

  io.observe(box);
});
</script>

<style scoped>
.servicios {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  background-color: #ffffff;
  padding: 4rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}
.section-heading {
  --line-grad: linear-gradient(
    90deg,
    transparent 0%,
    #aee79d 12%,
    #144553 50%,
    #aee79d 88%,
    transparent 100%
  );
  --line-height: 2px;
  --line-gap: 8px;
  --line-scale: 0;
  width: 100%;
  max-width: 1100px;
  position: relative;
  margin-bottom: 2.5rem;
  isolation: isolate;
}
.section-heading::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%) scaleX(var(--line-scale));
  transform-origin: left center;
  height: calc(var(--line-height) * 2 + var(--line-gap));
  opacity: 0.55;
  background: var(--line-grad) left top / 100% var(--line-height) no-repeat,
    var(--line-grad) left calc(var(--line-height) + var(--line-gap)) / 100%
      var(--line-height) no-repeat;
  z-index: 0;
}

.section-title-servicios {
  position: relative;
  margin: 0;
  text-align: left;
  font-weight: 800;
  font-size: 2.2rem;
  letter-spacing: 0.02em;
  color: #144553;
  opacity: 0;
  transform: translateX(40px);
  will-change: transform, opacity;
  z-index: 1;
}
.section-title-servicios > span {
  display: inline-block;
  padding-right: 0.75rem;
  background: #fff;
}

.carousel-wrapper {
  width: 100%;
  max-width: 1100px;
  position: relative;
  overflow: hidden;
}
.servicios-swiper {
  padding: 30px 10px 48px;
}

.servicio-card {
  position: relative;
  background-color: #f4f7f5;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  height: 500px;
  display: flex;
  flex-direction: column;
}
.servicio-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);
}

.img-wrap {
  position: relative;
  flex-shrink: 0;
}
.servicio-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.premium-corner {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 42px;
  height: 42px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.96);
  border: 2px solid #f5e3a3;
  display: grid;
  place-items: center;
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.18);
  z-index: 2;
  transform: translateY(-2px);
  transition: transform 0.25s ease;
}
:deep(.swiper-slide-active .premium-corner) {
  transform: translateY(0) scale(1.05);
}

.servicio-card h3 {
  font-size: 1.2rem;
  color: #144553;
  margin-bottom: 1rem;
  font-weight: bold;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.3;
}
.servicio-card p {
  font-size: 1rem;
  color: #555;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: center;
  line-height: 1.5;
  height: 120px;
}
.servicio-card button {
  background-color: #144553;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: auto;
}
.servicio-card button:hover {
  background-color: #3b6e40;
}

.swiper-button-prev,
.swiper-button-next {
  color: #144553;
  background: rgba(255, 255, 255, 0.9);
  width: 44px;
  height: 44px;
  border-radius: 999px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  translate: 0 -50%;
  top: 45%;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 18px;
  font-weight: 700;
}
.carousel-wrapper:hover .swiper-button-prev,
.carousel-wrapper:hover .swiper-button-next {
  opacity: 1;
  pointer-events: auto;
}

.swiper-pagination-bullet {
  background: #a7c4ad;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background: #144553;
}

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

/* Responsive Design */
@media (max-width: 768px) {
  .servicios-swiper {
    padding: 20px 5px 40px;
  }

  .servicio-card {
    padding: 1.2rem;
    height: 420px;
  }

  .servicio-card img {
    height: 180px;
  }

  .servicio-card h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    height: 60px;
  }

  .servicio-card p {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    height: 100px;
  }

  .servicio-card button {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 36px;
    height: 36px;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 14px;
  }

  :deep(.swiper-slide-active .servicio-card) {
    transform: scale(1.02);
  }
}

@media (max-width: 480px) {
  .section-heading {
    margin-bottom: 2rem;
  }

  .section-title-servicios {
    font-size: clamp(1.8rem, 6vw, 2.2rem);
  }

  .servicios-swiper {
    padding: 15px 0 35px;
  }

  .servicio-card {
    padding: 1rem;
    margin: 0 0.5rem;
    height: 380px;
  }

  .servicio-card img {
    height: 160px;
    margin-bottom: 0.8rem;
  }

  .servicio-card h3 {
    font-size: 1.1rem;
    height: 55px;
    margin-bottom: 0.8rem;
  }

  .servicio-card p {
    font-size: 0.85rem;
    line-height: 1.4;
    height: 90px;
    margin-bottom: 1rem;
  }

  .premium-corner {
    width: 36px;
    height: 36px;
    top: 8px;
    left: 8px;
  }

  .crown {
    width: 18px;
    height: 18px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
}
.logo-img {
  object-fit: contain !important;
  background-color: white;
  padding: 0.5rem;
  height: 220px;
  width: 100%;
  border-radius: 8px;
  box-sizing: border-box;
}



.servicios {
  overflow-x: clip;
}
.carousel-wrapper {
  overflow: hidden;
}
@supports not (overflow-x: clip) {
  .servicios {
    overflow-x: hidden;
  }
}
</style>
