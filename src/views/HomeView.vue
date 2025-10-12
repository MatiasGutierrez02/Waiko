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
import { onMounted } from 'vue'
import CarruselServicios from '@/components/CarruselServicios.vue'
import NuestroImpacto from '@/components/NuestroImpacto.vue'
import ValoresDestacados from '@/components/ValoresDestacados.vue'
import SobreNosotros from '@/components/SobreNosotros.vue'
import ContactoComponente from '@/components/ContactoComponente.vue'

onMounted(() => {})

const scrollToContact = () => {
  const el = document.getElementById('contacto')
  if (!el) return
  const header = document.querySelector('header.header')
  const headerH = header ? header.offsetHeight : 80
  const y = el.getBoundingClientRect().top + window.pageYOffset - headerH - 2
  window.scrollTo({ top: y, behavior: 'smooth' })
}
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  padding-bottom: 3rem;
}

.banner {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10vw;
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
  letter-spacing: .02em;
  color: #fff;
  text-shadow: 0 2px 12px rgba(0,0,0,.55);
  margin-bottom: .25rem;
}
.brand-w {
  height: 100px;
  aspect-ratio: 1 / 1;
  object-fit: contain;
  filter: drop-shadow(0 2px 8px rgba(0,0,0,.45));
  margin-right: -20px;
}
.brand-letters { letter-spacing: .04em; }

.banner-main-title {
  font-size: var(--hero-title-size);
  font-weight: bold;
  margin-bottom: 1rem;
  margin-top: -20px;
  line-height: 1;
}
.banner-subtitle {
  font-size: 1.7rem;
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
.banner-button:hover { background-color: #3b6e40; }

#section {
  width: 100%;
}

@media (max-width: 900px) {
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
    --hero-title-size: clamp(2.2rem, 9vw + 0.6rem, 3.6rem);
  }
  .brand-w {
    height: 1em;
    margin-right: 0;
  }
  .banner-main-title {
    margin-top: 0;
  }
  .banner-subtitle {
    font-size: clamp(1rem, 3.2vw + .5rem, 1.2rem);
    margin-bottom: 1.4rem;
  }
  .banner-button {
    font-size: 1.05rem;
    padding: 0.7rem 1.2rem;
  }
}

/* Animación de entrada solo en elementos del banner */
@keyframes heroIn {
  0% { opacity: 0; transform: translateY(22px) scale(.98); filter: blur(2px); }
  100% { opacity: 1; transform: none; filter: blur(0); }
}
.banner-content [data-hero] {
  opacity: 0;
  animation: heroIn .7s ease-out forwards;
}
.brand-waiko[data-hero] { animation-delay: .05s; }
.banner-main-title[data-hero] { animation-delay: .15s; }
.banner-subtitle[data-hero] { animation-delay: .28s; }
.banner-button[data-hero] { animation-delay: .42s; }

@media (prefers-reduced-motion: reduce) {
  .banner-content [data-hero] { animation: none; opacity: 1; transform: none; filter: none; }
}
.home-page{ overflow-x: clip; }
.banner{ overflow-x: clip; }
@supports not (overflow-x: clip){
  .home-page, .banner{ overflow-x: hidden; }
}

</style>
