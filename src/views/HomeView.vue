<template>
  <div class="home-page">
    <div class="banner">
      <video
        class="banner-video"
        src="@/assets/bannerAnimado.mp4"
        autoplay
        muted
        loop
        playsinline
      ></video>
      <div class="banner-content">
        <div class="banner-right">
          <div class="brand-waiko" aria-label="WAIKO" data-hero>
            <img class="brand-w" src="@/assets/LogoFinalIcono.png" alt="W" />
            <span class="brand-letters">AIKO</span>
          </div>

          <h1 class="banner-main-title" data-hero>
            Tu aliado estratégico en gestión ambiental
          </h1>
          <h2 class="banner-subtitle" data-hero>
            Trayectoria, conocimiento normativo y soluciones efectivas para cada desafío regulatorio
          </h2>
          <button class="banner-button" @click="scrollToContact" data-hero>
            Contacta nuestro servicio aquí
          </button>
        </div>
      </div>
    </div>

    <SobreNosotros id="quien-somos" />
    <ValoresDestacados />

    <section id="servicios">
      <CarruselServicios />
    </section>

    <NuestroImpacto :duration="3200" :once="true" />

    <section id="contacto">
      <ContactoComponente />
    </section>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import CarruselServicios from "@/components/CarruselServicios.vue";
import NuestroImpacto from "@/components/NuestroImpacto.vue";
import ValoresDestacados from "@/components/ValoresDestacados.vue";
import SobreNosotros from "@/components/SobreNosotros.vue";
import ContactoComponente from "@/components/ContactoComponente.vue";

onMounted(() => {});

const scrollToContact = () => {
  const el = document.getElementById("contacto");
  if (!el) return;
  const header = document.querySelector("header.header");
  const headerH = header ? header.offsetHeight : 80;
  const y = el.getBoundingClientRect().top + window.pageYOffset - headerH - 2;
  window.scrollTo({ top: y, behavior: "smooth" });
};
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  padding-bottom: 3rem;
  width: 100%;
  overflow-x: hidden;
  min-height: 100vh;
}

.banner {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 clamp(2rem, 8vw, 10vw) 0 0;
  background-color: #000;
  margin-top: 84px;
}
.banner-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}
.banner-content {
  position: relative;
  z-index: 2;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  color: white;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}
.banner-right {
  --hero-title-size: 7.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
}

.brand-waiko {
  display: inline-flex;
  align-items: baseline;
  gap: 0.05em;
  font-weight: 900;
  font-size: var(--hero-title-size);
  line-height: 1;
  letter-spacing: 0.02em;
  color: #fff;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.55);
  margin-bottom: 0.25rem;
}
.brand-w {
  height: 1em; /* Use em units to scale proportionally with text */
  aspect-ratio: 1 / 1;
  object-fit: contain;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.45));
  margin-right: -0.15em; /* Proportional negative margin */
  z-index: 10;
  flex-shrink: 0;
}
.brand-letters {
  letter-spacing: 0.04em;
  z-index: 10;
  font-weight: 900;
  margin-left: -0.05em; /* Additional negative margin to get closer */
}

.banner-main-title {
  font-size: var(--hero-title-size);
  font-weight: bold;
  margin-bottom: 1rem;
  margin-top: -20px;
  line-height: 1;
}
.banner-subtitle {
  font-size: 1.6rem;
  margin-bottom: 2rem;
}
.banner-button {
  background-color: #264d2c;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1.3rem;
}
.banner-button:hover {
  background-color: #3b6e40;
}

#section {
  width: 100%;
}

/* === TABLETS PORTRAIT === */
@media (max-width: 1024px) and (min-width: 768px) {
  .banner {
    justify-content: center;
    padding-right: 0;
  }
  .banner-content {
    align-items: center;
    text-align: center;
    padding: 0 1rem;
  }
  .banner-right {
    align-items: center;
    --hero-title-size: 3.8rem;
  }
  .brand-w {
    height: 1em;
    margin-right: -0.15em;
  }
  .brand-letters {
    margin-left: -0.05em;
  }

  .banner-main-title {
    margin-top: 0;
  }
  .banner-subtitle {
    font-size: clamp(1rem, 3.2vw + 0.5rem, 1.2rem);
    margin-bottom: 1.4rem;
  }
  .banner-button {
    font-size: 1.05rem;
    padding: 0.7rem 1.2rem;
  }
}
/* === TABLETS EN HORIZONTAL (Landscape) === */
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  :deep(.banner-right) {
    --hero-title-size: 3.5rem;
    padding-top: 80px;
  }

  :deep(.banner-main-title) {
    font-size: 3.5rem !important;
  }

  :deep(.banner-subtitle) {
    font-size: 1.2rem !important;
  }

  :deep(.banner-button) {
    font-size: 1rem !important;
    margin-top: 1rem;
  }

  .brand-w {
    height: 1em;
    margin-right: -0.1em;
  }
  .brand-letters {
    margin-left: -0.03em;
  }
}

/* === MÓVILES MEDIANOS A GRANDES (415px - 767px) === */
@media (max-width: 767px) and (min-width: 415px) {
  .banner {
    justify-content: center;
    padding: 0;
    height: 75vh;
    min-height: 450px;
  }
  .banner-content {
    align-items: center;
    text-align: center;
    padding: 1rem;
  }
  .banner-right {
    align-items: center;
    --hero-title-size: clamp(2.2rem, 7vw + 0.8rem, 3.2rem);
    gap: clamp(0.8rem, 2vw, 1.2rem);
  }
  .brand-w {
    height: 1em;
    margin-right: -0.13em;
  }
  .brand-letters {
    margin-left: -0.04em;
  }

  .banner-main-title {
    margin-top: 0.4rem;
    margin-bottom: 1rem;
    line-height: 1.1;
  }
  .banner-subtitle {
    font-size: clamp(1rem, 3vw + 0.5rem, 1.2rem);
    margin-bottom: 1.4rem;
    line-height: 1.4;
  }
  .banner-button {
    font-size: clamp(1rem, 3vw + 0.3rem, 1.1rem);
    padding: 0.7rem 1.2rem;
  }
}

/* === NOTEBOOKS Y PANTALLAS MEDIANAS (ej. 1366px, 1536px) === */
@media (min-width: 1200px) and (max-width: 1600px) {
  :deep(.banner-right) {
    --hero-title-size: 4.5rem;
    padding-top: 60px;
  }

  :deep(.banner-main-title) {
    font-size: 4.5rem !important;
  }

  :deep(.banner-subtitle) {
    font-size: 1.4rem !important;
  }

  .brand-w {
    height: 1em;
    margin-right: -0.15em;
  }
  .brand-letters {
    margin-left: -0.05em;
  }

  :deep(.banner-button) {
    font-size: 1.1rem !important;
    margin-top: 1rem;
  }
}

/* === iPhone XR y móviles similares (414px) === */
@media (max-width: 414px) and (min-width: 375px) {
  .banner {
    justify-content: center;
    padding: 0;
    height: 70vh;
    min-height: 420px;
  }
  .banner-content {
    align-items: center;
    text-align: center;
    padding: 1rem 0.8rem;
  }
  .banner-right {
    align-items: center;
    --hero-title-size: clamp(2rem, 8vw + 0.5rem, 2.8rem);
    gap: clamp(0.6rem, 2vw, 1rem);
  }
  .brand-w {
    height: 1em;
    margin-right: -0.12em;
  }
  .brand-letters {
    margin-left: -0.04em;
  }

  .banner-main-title {
    margin-top: 0.3rem;
    margin-bottom: 0.8rem;
    line-height: 1.15;
  }
  .banner-subtitle {
    font-size: clamp(0.9rem, 3vw + 0.4rem, 1.1rem);
    margin-bottom: 1.2rem;
    line-height: 1.4;
  }
  .banner-button {
    font-size: clamp(0.9rem, 4vw + 0.2rem, 1rem);
    padding: 0.6rem 1rem;
  }
}

/* === Móviles pequeños (iPhone SE, etc.) === */
@media (max-width: 374px) {
  .banner {
    justify-content: center;
    padding: 0;
    height: 65vh;
    min-height: 380px;
  }
  .banner-content {
    align-items: center;
    text-align: center;
    padding: 0.8rem 0.6rem;
  }
  .banner-right {
    align-items: center;
    --hero-title-size: clamp(1.6rem, 10vw + 0.2rem, 2.4rem);
    gap: 0.5rem;
  }
  .brand-w {
    height: 1em;
    margin-right: -0.1em;
  }
  .brand-letters {
    margin-left: -0.03em;
  }

  .banner-main-title {
    margin-top: 0.2rem;
    margin-bottom: 0.6rem;
    line-height: 1.2;
  }
  .banner-subtitle {
    font-size: clamp(0.85rem, 4vw + 0.3rem, 1rem);
    margin-bottom: 1rem;
    line-height: 1.3;
  }
  .banner-button {
    font-size: clamp(0.85rem, 5vw + 0.1rem, 0.95rem);
    padding: 0.5rem 0.8rem;
  }
}

/* === Pantallas muy pequeñas === */
@media (max-width: 320px) {
  .banner {
    min-height: 360px;
  }

  .banner-content {
    padding: 0.6rem 0.4rem;
  }

  .banner-right {
    --hero-title-size: clamp(1.4rem, 12vw, 2rem);
  }

  .banner-button {
    padding: 0.5rem 0.7rem;
    font-size: 0.85rem;
  }
}

/* === Móviles en orientación horizontal === */
@media (max-width: 767px) and (orientation: landscape) {
  .banner {
    height: 85vh;
    min-height: 350px;
  }

  .banner-right {
    gap: 0.4rem;
  }

  .banner-main-title {
    margin-bottom: 0.5rem;
  }

  .banner-subtitle {
    margin-bottom: 1rem;
  }
}

/* Animación de entrada solo en elementos del banner */
@keyframes heroIn {
  0% {
    opacity: 0;
    transform: translateY(22px) scale(0.98);
    filter: blur(2px);
  }
  100% {
    opacity: 1;
    transform: none;
    filter: blur(0);
  }
}
.banner-content [data-hero] {
  opacity: 0;
  animation: heroIn 0.7s ease-out forwards;
}
.brand-waiko[data-hero] {
  animation-delay: 0.05s;
}
.banner-main-title[data-hero] {
  animation-delay: 0.15s;
}
.banner-subtitle[data-hero] {
  animation-delay: 0.28s;
}
.banner-button[data-hero] {
  animation-delay: 0.42s;
}

@media (prefers-reduced-motion: reduce) {
  .banner-content [data-hero] {
    animation: none;
    opacity: 1;
    transform: none;
    filter: none;
  }
}
.home-page {
  overflow-x: clip;
}
.banner {
  overflow-x: clip;
}
/* iOS Safari specific fixes */
@supports (-webkit-touch-callout: none) {
  .banner {
    height: -webkit-fill-available;
    min-height: 450px;
  }

  @media (max-width: 414px) {
    .banner {
      min-height: 420px;
    }
  }

  @media (max-width: 374px) {
    .banner {
      min-height: 380px;
    }
  }
}

@supports not (overflow-x: clip) {
  .home-page,
  .banner {
    overflow-x: hidden;
  }
}
</style>
