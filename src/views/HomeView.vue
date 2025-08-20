<template>
  <div class="home-page">
    <div class="banner">
      <div class="banner-overlay" data-aos="fade-down">
        <h1 class="banner-title">WAIKO</h1>
        <h2 class="banner-subtitle">
          Tu Aliado Estratégico en Gestión Ambiental
        </h2>
      </div>
    </div>

    <section class="servicios-destacados" data-aos="fade-up">
      <h2 class="section-title-servicios" data-aos="fade-down">
        Servicios Destacados
      </h2>
      <div class="carousel-container">
        <button class="carousel-arrow left" @click="prevSlide">&lt;</button>
        <div class="carousel-wrapper" ref="carouselWrapper">
          <div
            class="carousel-slide"
            v-for="(servicio, index) in servicios"
            :key="index"
          >
            <div
              class="servicio-card"
              :style="{ transform: `translateX(${currentIndex * -100}%)` }"
            >
              <img :src="servicio.imagen" :alt="servicio.titulo" />
              <h3>{{ servicio.titulo }}</h3>
              <p>{{ servicio.descripcion }}</p>
              <button>Más información</button>
            </div>
          </div>
        </div>
        <button class="carousel-arrow right" @click="nextSlide">&gt;</button>
      </div>
    </section>

    <section class="sobre-nosotros-alt" data-aos="fade-up">
      <h2 class="section-title-sobre-nosotros" data-aos="fade-up">
        Sobre Nosotros
      </h2>
      <div class="sobre-nosotros-container" data-aos="zoom-in">
        <div class="sobre-nosotros-imagen" data-aos="fade-right">
          <img src="@/assets/SobreNosotros.jpg" alt="Gestión Ambiental" />
        </div>
        <div class="sobre-nosotros-contenido" data-aos="fade-left">
          <p class="section-text">
            Waiko es una consultora ambiental especializada en brindar
            soluciones sostenibles a empresas, gobiernos y organizaciones.
            Nuestro compromiso es acompañar a cada cliente en el cumplimiento de
            las normativas vigentes y en la implementación de políticas que
            reduzcan el impacto ambiental de sus actividades.
          </p>
          <router-link to="/quienes-somos" class="conocenos-boton"
            >Conocenos más</router-link
          >
        </div>
      </div>
    </section>

    <section class="mis-vis-obj" data-aos="fade-up">
      <h2 class="section-title-valores" data-aos="fade-down">
        Nuestros Valores
      </h2>
      <div class="container-mvo">
        <div class="card-mvo" data-aos="flip-left">
          <div class="icon-mvo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
              />
            </svg>
          </div>
          <h3 class="mvo-title">Misión</h3>
          <p class="mvo-text">
            Ofrecer asesoramiento y gestión ambiental de calidad excepcional a
            empresas, organizaciones gubernamentales y entidades diversas.
          </p>
        </div>

        <div class="card-mvo" data-aos="flip-up">
          <div class="icon-mvo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 0 0 .356C3.423 16.692 7.36 20 12 20c4.638 0 8.576-3.308 9.963-7.322a1.012 1.012 0 0 0 0-.356C20.577 7.308 16.638 4 12 4c-4.638 0-8.576 3.308-9.963 7.322z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
              />
            </svg>
          </div>
          <h3 class="mvo-title">Visión</h3>
          <p class="mvo-text">
            Crear un mundo en el que la excelencia ambiental y la práctica
            responsable sean parte integral de cada negocio.
          </p>
        </div>

        <div class="card-mvo" data-aos="flip-right">
          <div class="icon-mvo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
              />
            </svg>
          </div>
          <h3 class="mvo-title">Objetivo</h3>
          <p class="mvo-text">
            Impulsar el desarrollo sostenible mediante soluciones prácticas que
            aseguren el cumplimiento normativo y la protección del entorno
            natural.
          </p>
        </div>
      </div>
    </section>

    <section class="nuestro-impacto" data-aos="fade-up">
      <h2 class="section-title-impacto" data-aos="fade-down">
        Nuestro Impacto
      </h2>
      <div class="impacto-container">
        <div class="estadisticas" data-aos="fade-right">
          <div class="estadistica-item">
            <h3><span class="contador" data-target="350">0</span>+</h3>
            <p>Proyectos Completados</p>
          </div>
          <div class="estadistica-item">
            <h3><span class="contador" data-target="2300">0</span>k</h3>
            <p>Toneladas de CO2 Reducidas</p>
          </div>
          <div class="estadistica-item">
            <h3><span class="contador" data-target="600">0</span>+</h3>
            <p>Clientes Satisfechos</p>
          </div>
          <div class="estadistica-item">
            <h3><span class="contador" data-target="13">0</span>+</h3>
            <p>Años de Experiencia</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section" data-aos="fade-up">
      <div class="cta-background">
        <div class="cta-content">
          <h2 class="cta-title">¿Listo para mejorar tu gestión ambiental?</h2>
          <p class="cta-text">
            Contáctanos hoy y descubre cómo podemos ayudarte a crear un futuro
            más sostenible.
          </p>
          <router-link to="/contacto" class="cta-button">
            <span>Contáctanos</span>
            <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
        <div class="cta-icons">
          <i class="fas fa-leaf"></i>
          <i class="fas fa-recycle"></i>
          <i class="fas fa-solar-panel"></i>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

const servicios = [
  {
    titulo: "Servicio Premium de Abono Mensual",
    descripcion:
      "Servicio de asesoramiento ambiental mensual con atención personalizada y seguimiento continuo.",
    imagen: new URL("@/assets/AsesoriaTecnica.jpg", import.meta.url).href,
  },
  {
    titulo: "Inscripcion de Residuos peligrosos",
    descripcion:
      "Registro y gestión de residuos peligrosos según normativas vigentes.",
    imagen: new URL("@/assets/AsesoriaTecnica.jpg", import.meta.url).href,
  },
  {
    titulo: "Gestión Ambiental",
    descripcion:
      "Soluciones integrales para cumplir con normativas y mejorar el desempeño ambiental.",
    imagen: new URL("@/assets/GestionAmbiental.jpg", import.meta.url).href,
  },
  {
    titulo: "Impacto Acústico",
    descripcion:
      "Estudios y asesoramiento para el control del ruido en entornos urbanos e industriales.",
    imagen: new URL("@/assets/ImpactoAcustico.jpg", import.meta.url).href,
  },
  {
    titulo: "Impacto Ambiental",
    descripcion:
      "Evaluación y gestión de impactos ambientales en proyectos y actividades.",
    imagen: new URL("@/assets/ImpactoAcustico.jpg", import.meta.url).href,
  },
];

const currentIndex = ref(0);

function nextSlide() {
  if (currentIndex.value < servicios.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
}

function prevSlide() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = servicios.length - 1;
  }
}

onMounted(() => {
  AOS.init({
    duration: 800,
    once: false,
  });


  // Animación de contadores
  const contadores = document.querySelectorAll(".contador");
  const velocidad = 200;

  const animarContadores = () => {
    contadores.forEach((contador) => {
      const actualizar = () => {
        let objetivo = +contador.getAttribute("data-target");
        let conteo = +contador.innerText;
        let incremento = objetivo / velocidad;
        if (conteo < objetivo) {
          contador.innerText = Math.ceil(conteo + incremento);
          setTimeout(actualizar, 1);
        } else {
          contador.innerText = objetivo;
        }
      };
      actualizar();
    });
  };

  // Iniciar animación cuando la sección sea visible
  const observador = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animarContadores();
          observador.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  const nuestroImpactoElement = document.querySelector(".nuestro-impacto");
  if (nuestroImpactoElement) {
    observador.observe(nuestroImpactoElement);
  }
});
</script>

<style src="../styles/estilos.css" scoped></style>
