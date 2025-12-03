<template>
  <div class="home-page">
    <div class="banner">
      <video
        class="banner-video"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        fetchpriority="high"
      >
        <source src="@/assets/bannerAnimado.webm" type="video/webm" />
      </video>
      
      <div class="banner-content">
        <div class="banner-right">
          <div class="brand-waiko" aria-label="WAIKO" data-hero>
            <img
              class="brand-w"
              src="@/assets/Logo_con_nombre_blanco.webp"
              alt="W"
            />
          </div>

          <h1 class="banner-main-title" data-hero>
            {{ t("mainTitle") }}
          </h1>

          <h2 class="banner-subtitle" data-hero>
            {{ t("subtitle") }}
          </h2>

          <button
            aria-label="contacta desde aqui"
            class="banner-button"
            @click="scrollToContact"
            data-hero
          >
            {{ t("contactBtn") }}
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
import { ref, onMounted, defineEmits } from "vue";
import CarruselServicios from "@/components/CarruselServicios.vue";
import NuestroImpacto from "@/components/NuestroImpacto.vue";
import ValoresDestacados from "@/components/ValoresDestacados.vue";
import SobreNosotros from "@/components/SobreNosotros.vue";
import ContactoComponente from "@/components/ContactoComponente.vue";

/* 🔥 Necesario para enviar el evento al App.vue */
const emit = defineEmits(["video-loaded"]);

const currentLang = ref(localStorage.getItem("lang") || "es");

onMounted(() => {
  window.addEventListener("lang-changed", (e) => {
    currentLang.value = e.detail;
  });

  const video = document.querySelector(".banner-video");

  if (!video) return;

  /* 🔥 Cuando el video carga, avisamos al App.vue que puede ocultar el poster global */
  video.addEventListener("loadeddata", () => {
    emit("video-loaded");
    requestAnimationFrame(() => {
      video.style.opacity = "1";
    });
  });
});

/* --- Traducciones --- */
const translations = {
  es: {
    mainTitle: "Tu aliado estratégico en gestión ambiental",
    subtitle:
      "Trayectoria, conocimiento normativo y soluciones efectivas para cada desafío regulatorio",
    contactBtn: "Contacta nuestro servicio aquí",
  },
  en: {
    mainTitle: "Your strategic ally in environmental management",
    subtitle:
      "Expertise, regulatory knowledge and effective solutions for every compliance challenge",
    contactBtn: "Contact our service here",
  },
};

const t = (key) => translations[currentLang.value][key];

window.addEventListener("storage", (e) => {
  if (e.key === "lang") {
    currentLang.value = e.newValue;
  }
});

/* --- Scroll hacia contacto --- */
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
  margin-bottom: -9.5rem;
}

.brand-w {
  height: 4em;
  aspect-ratio: 1 / 1;
  object-fit: contain;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.45));
  z-index: 10;
  flex-shrink: 0;
}

.banner-main-title {
  font-size: var(--hero-title-size);
  font-weight: 700;
  margin: -20px 0 1rem 0;
  line-height: 1;
}

.banner-subtitle {
  font-size: 1.6rem;
  margin-bottom: 2rem;
}

.banner-button {
  background-color: #144553;
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

.banner-poster,
.banner-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.4s ease-out;
}

.banner-poster {
  z-index: 1;
  opacity: 1;
}

.banner-video {
  z-index: 0;
  opacity: 0;
}

@keyframes heroIn {
  0% { opacity: 0; transform: translateY(22px) scale(0.98); filter: blur(2px); }
  100% { opacity: 1; transform: none; filter: none; }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .banner-right {
    --hero-title-size: 4.5rem;
  }

  .brand-waiko {
    margin-bottom: -6.5rem;
  }

  .brand-w {
    height: 3.5em;
  }

  .banner-main-title {
    margin-top: 0.4rem;
    line-height: 1.1;
    width: 70%;
  }

  .banner-subtitle {
    font-size: 1.4rem;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .banner-content,
  .banner-right {
    align-items: center;
    text-align: center;
  }

  .banner-right {
    --hero-title-size: 3.2rem;
    gap: 0.75rem;
  }

  .brand-waiko {
    margin-bottom: -4.5rem;
  }

  .brand-w {
    height: 4em;
  }

  .banner-main-title {
    margin-top: 0.3rem;
    line-height: 1.15;
  }

  .banner-subtitle {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
    max-width: 85%;
  }

  .banner-button {
    font-size: 1.05rem;
    padding: 0.75rem 1.25rem;
  }
}

@media (max-width: 767px) {
  .banner {
    justify-content: center;
    padding-right: 0;
    height: 100vh;
    min-height: 450px;
    margin-top: 69px;
  }

  .banner-content {
    align-items: center;
    text-align: center;
    padding: 1rem;
  }

  .banner-right {
    align-items: center;
    --hero-title-size: clamp(2.2rem, 8vw + 1rem, 3.2rem);
    margin-top: 1rem;
  }

  .brand-waiko {
    margin-bottom: -4rem;
  }

  .brand-w {
    height: 3.2em;
  }

  .banner-main-title {
    margin-top: 0.3rem;
  }

  .banner-subtitle {
    font-size: clamp(1rem, 3vw + 0.5rem, 1.2rem);
    line-height: 1.4;
  }

  .banner-button {
    font-size: clamp(1rem, 4vw + 0.2rem, 1.2rem);
    padding: 0.7rem 1.2rem;
  }
}
</style>