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
            Tu aliado estratégico en gestión ambiental y cumplimiento normativo
          </h1>
          <h2 class="banner-subtitle" data-hero>
            Con más de 10 años de experiencia ayudando a empresas a ser mejor
          </h2>
          <button class="banner-button" @click="scrollToContact" data-hero>
            Contacta nuestro servicio aquí
          </button>
        </div>
      </div>
    </div>

    <SobreNosotros />
    <ValoresDestacados />

    <section id="section">
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
  overflow-x: clip;
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
  padding-right: min(10vw, 8rem);
  background-color: #000;
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
  max-width: min(1000px, 90vw);
  width: 100%;
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
  width: 100%;
  max-width: 800px;
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
  height: 100px;
  aspect-ratio: 1 / 1;
  object-fit: contain;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.45));
  margin-right: -20px;
}
.brand-letters {
  letter-spacing: 0.04em;
}

.banner-main-title {
  font-size: clamp(2rem, 4vw + 1rem, var(--hero-title-size));
  font-weight: bold;
  margin-bottom: 1rem;
  margin-top: -20px;
  line-height: 1.1;
  word-wrap: break-word;
  hyphens: auto;
}
.banner-subtitle {
  font-size: clamp(1.1rem, 2vw + 0.5rem, 1.7rem);
  margin-bottom: 2rem;
  line-height: 1.4;
  max-width: 600px;
}
.banner-button {
  background-color: #264d2c;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: clamp(1rem, 1.5vw + 0.5rem, 1.3rem);
  white-space: nowrap;
  min-width: fit-content;
}
.banner-button:hover {
  background-color: #3b6e40;
  transform: translateY(-2px);
}

#section {
  width: 100%;
}

@media (max-width: 1024px) {
  .banner {
    justify-content: center;
    padding-right: 0;
    padding-left: 0;
  }
  .banner-content {
    align-items: center;
    text-align: center;
    padding: 0 2rem;
  }
  .banner-right {
    align-items: center;
    --hero-title-size: clamp(2.8rem, 6vw + 1rem, 4.5rem);
  }
}

@media (max-width: 900px) {
  .banner {
    justify-content: center;
    padding: 0;
  }
  .banner-content {
    align-items: center;
    text-align: center;
    padding: 0 1.5rem;
  }
  .banner-right {
    align-items: center;
    --hero-title-size: clamp(2.2rem, 7vw + 0.8rem, 3.6rem);
  }
  .brand-w {
    height: 1em;
    margin-right: 0;
  }
  .banner-main-title {
    margin-top: 0;
  }
  .banner-subtitle {
    font-size: clamp(1.2rem, 3.5vw + 0.4rem, 1.6rem);
    margin-bottom: 1.8rem;
    max-width: 90%;
  }
}

/* Tablets y móviles grandes */
@media (max-width: 768px) {
  .banner {
    justify-content: center;
    padding: 0 1rem;
    min-height: 500px;
    height: 90vh;
  }
  .banner-content {
    align-items: center;
    text-align: center;
    padding: 0;
    max-width: 100%;
  }
  .banner-right {
    align-items: center;
    --hero-title-size: clamp(2.2rem, 8vw + 0.6rem, 3.2rem);
    gap: 1rem;
  }
  .brand-w {
    height: 1em;
    margin-right: 0;
  }
  .banner-main-title {
    margin-top: 0;
    font-size: clamp(2rem, 7vw + 0.5rem, 3rem);
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  .banner-subtitle {
    font-size: clamp(1.1rem, 4vw + 0.3rem, 1.4rem);
    margin-bottom: 1.8rem;
    line-height: 1.4;
    max-width: 95%;
  }
  .banner-button {
    font-size: clamp(1rem, 3.5vw + 0.3rem, 1.2rem);
    padding: 0.8rem 1.4rem;
  }
}

/* Móviles pequeños */
@media (max-width: 480px) {
  .home-page {
    padding-bottom: 1.5rem;
  }

  .banner {
    height: 85vh;
    min-height: 450px;
    padding: 0 1rem;
  }

  .banner-content {
    padding: 0 0.5rem;
  }

  .banner-right {
    --hero-title-size: clamp(1.8rem, 8vw + 0.5rem, 2.8rem);
    gap: 0.8rem;
  }

  .banner-main-title {
    font-size: clamp(1.6rem, 7vw + 0.4rem, 2.4rem);
    margin-bottom: 0.8rem;
    line-height: 1.3;
    padding: 0;
  }

  .banner-subtitle {
    font-size: clamp(1rem, 4vw + 0.3rem, 1.2rem);
    margin-bottom: 1.4rem;
    line-height: 1.4;
    padding: 0;
    max-width: 100%;
  }

  .banner-button {
    font-size: clamp(0.9rem, 3.5vw + 0.3rem, 1.1rem);
    padding: 0.7rem 1.2rem;
    min-height: 44px;
    border-radius: 6px;
    margin-top: 0.5rem;
  }
}

/* Móviles extra pequeños */
@media (max-width: 360px) {
  .banner {
    min-height: 400px;
    padding: 0 0.5rem;
  }

  .banner-content {
    padding: 0;
  }

  .banner-main-title {
    font-size: clamp(1.4rem, 8vw + 0.2rem, 2rem);
    line-height: 1.2;
  }

  .banner-subtitle {
    font-size: clamp(0.9rem, 4.5vw + 0.2rem, 1.1rem);
    line-height: 1.3;
  }

  .banner-button {
    font-size: clamp(0.8rem, 4vw + 0.2rem, 1rem);
    padding: 0.6rem 1rem;
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
@supports not (overflow-x: clip) {
  .home-page,
  .banner {
    overflow-x: hidden;
  }
}
</style>
