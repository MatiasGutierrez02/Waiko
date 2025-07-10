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

    <!-- <section class="servicios-destacados" data-aos="fade-up">
      <h2 class="section-title-servicios" data-aos="fade-down">
        Servicios Destacados
      </h2>
      <div class="servicios-container">
        <div class="servicio-card" data-aos="zoom-in">
          <img src="@/assets/GestionAmbiental.jpg" alt="Gestión Ambiental" />
          <h3>Gestión Ambiental</h3>
          <p>
            Soluciones integrales para cumplir con normativas y mejorar el
            desempeño ambiental.
          </p>
          <button>Más información</button>
        </div>

        <div class="servicio-card" data-aos="zoom-in" data-aos-delay="100">
          <img src="@/assets/ImpactoAcustico.jpg" alt="Impacto Acústico" />
          <h3>Impacto Acústico</h3>
          <p>
            Estudios y asesoramiento para el control del ruido en entornos
            urbanos e industriales.
          </p>
          <button>Más información</button>
        </div>

        <div class="servicio-card" data-aos="zoom-in" data-aos-delay="200">
          <img
            src="@/assets/HabilitacionesComerciales.jpg"
            alt="Habilitaciones Comerciales"
          />
          <h3>Habilitaciones Comerciales</h3>
          <p>
            Asistencia completa para tramitar habilitaciones bajo normas
            ambientales.
          </p>
          <button>Más información</button>
        </div>
        <div class="servicio-card" data-aos="zoom-in" data-aos-delay="300">
          <img src="@/assets/AsesoriaTecnica.jpg" alt="Asesoría Técnica" />
          <h3>Asesoría Técnica</h3>
          <p>
            Consultoría técnica en políticas sostenibles, residuos y planes de
            mitigación.
          </p>
          <button>Más información</button>
        </div>
      </div>
    </section> -->

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
            <h3><span class="contador" data-target="500">0</span>+</h3>
            <p>Proyectos Completados</p>
          </div>
          <div class="estadistica-item">
            <h3><span class="contador" data-target="1000">0</span>k</h3>
            <p>Toneladas de CO2 Reducidas</p>
          </div>
          <div class="estadistica-item">
            <h3><span class="contador" data-target="200">0</span>+</h3>
            <p>Clientes Satisfechos</p>
          </div>
          <div class="estadistica-item">
            <h3><span class="contador" data-target="20">0</span>+</h3>
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

  // {
  //   titulo: "Habilitaciones Comerciales",
  //   descripcion:
  //     "Asistencia completa para tramitar habilitaciones bajo normas ambientales.",
  //   imagen: new URL("@/assets/HabilitacionesComerciales.jpg", import.meta.url)
  //     .href,
  // },
  // {
  //   titulo: "Asesoría Técnica",
  //   descripcion:
  //     "Consultoría técnica en políticas sostenibles, residuos y planes de mitigación.",
  //   imagen: new URL("@/assets/AsesoriaTecnica.jpg", import.meta.url).href,
  // },
];

const currentIndex = ref(0);
const carouselWrapper = ref(null);

const nextSlide = () => {
  if (currentIndex.value < servicios.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
};

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = servicios.length - 1;
  }
};

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

  observador.observe(document.querySelector(".nuestro-impacto"));
});
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
  width: 100%;
  height: 70vh;
  min-height: 260px;
  background: url("@/assets/ImagenFondoFinal.png") no-repeat center center/cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-overlay {
  text-align: center;
  color: white;
  text-shadow: 0 0 12px rgba(0, 0, 0, 0.6);
}

.banner-title {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.banner-subtitle {
  font-size: 1.5rem;
  font-weight: 400;
}

.sobre-nosotros-alt {
  width: 100%;
  padding: 4rem 1.5rem;
  background-color: #ffffff;
  display: block;
  text-align: center;
}

.sobre-nosotros-container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  background: #f4f7f5;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.sobre-nosotros-imagen {
  flex: 1 1 40%;
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e6f2ea;
  overflow: hidden;
}

.sobre-nosotros-imagen img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.sobre-nosotros-contenido {
  flex: 1 1 60%;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.section-title {
  font-size: 2rem;
  color: #144553;
  margin-bottom: 1rem;
  font-weight: 700;
}

.section-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
}

.mis-vis-obj {
  width: 100%;
  background-color: #144553;
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container-mvo {
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
}

.input-group {
  margin-bottom: 1.5rem;
}

.input-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #144553;
  font-weight: 600;
}

.input-group input[type="range"] {
  width: 100%;
  margin-bottom: 0.5rem;
}

.input-group span {
  display: block;
  text-align: right;
  color: #666;
}

.card-mvo {
  background-color: #f4f7f5;
  color: #144553;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  flex: 1 1 320px;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: default;
}

.card-mvo:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.22);
}

.icon-mvo {
  color: #144553;
  margin-bottom: 1rem;
}

.size-icon {
  width: 48px;
  height: 48px;
}

.mvo-title {
  font-weight: 700;
  font-size: 1.6rem;
  margin-bottom: 0.6rem;
}

.mvo-text {
  font-size: 1.1rem;
  line-height: 1.7;
}

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
  color: #144553;
  margin-bottom: 2.5rem;
  text-align: center;
}

.servicios-container {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  width: 100%;
}

.servicio-card {
  background-color: #f4f7f5;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.servicio-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);
}

.servicio-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.servicio-card h3 {
  font-size: 1.4rem;
  color: #144553;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.servicio-card p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
}

.servicio-card button {
  background-color: #144553;
  color: white;
  padding: 0.5rem 1.2rem;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.servicio-card button:hover {
  background-color: #3b6e40;
}

.carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-wrapper {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-slide {
  flex: 0 0 100%;
}

.servicio-card {
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
  transition: transform 0.5s ease;
}

.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(20, 69, 83, 0.7);
  color: white;
  border: none;
  padding: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10;
}

.carousel-arrow.left {
  left: 1rem;
}

.carousel-arrow.right {
  right: 1rem;
}

.servicios-destacados {
  width: 100%;
  overflow: hidden;
}
.conocenos-boton {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.6rem 1.4rem;
  background-color: #144553;
  color: white;
  text-decoration: none;
  font-weight: 500;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.conocenos-boton:hover {
  background-color: #3b6e40;
}
.section-title-valores {
  color: #aee79d;
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  font-family: "Roboto", sans-serif;
  width: 100%;
  max-width: 1100px;
}

.section-title-sobre-nosotros {
  font-size: 2rem;
  color: #144553;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.5rem;
  font-family: "Roboto", sans-serif;
  width: 100%;
}

.cta-section {
  padding: 4rem 1.5rem;
  margin-top: 3rem;
  position: relative;
  overflow: hidden;
}

.cta-background {
  background: linear-gradient(135deg, #144553, #3b6e40);
  border-radius: 20px;
  padding: 3rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.cta-content {
  max-width: 600px;
}
.cta-title {
  color: #ffffff;
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.cta-text {
  color: #e0f0e3;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  padding: 0.8rem 2rem;
  background-color: #aee79d;
  color: #144553;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: #ffffff;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.cta-button span {
  margin-right: 10px;
}

.cta-icons {
  display: flex;
  gap: 2rem;
}

.cta-icons i {
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
}

.cta-icons i:hover {
  color: #ffffff;
  transform: scale(1.1);
}

.nuestro-impacto {
  background-color: #f4f7f5;
  padding: 4rem 0;
}

.section-title-impacto {
  font-size: 2.2rem;
  font-weight: 700;
  color: #144553;
  margin-bottom: 2.5rem;
  text-align: center;
}

.impacto-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
}

.estadisticas {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.estadistica-item {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.estadistica-item:hover {
  transform: translateY(-5px);
}

.estadistica-item h3 {
  font-size: 2.5rem;
  color: #3b6e40;
  margin-bottom: 0.5rem;
}

.estadistica-item p {
  font-size: 1rem;
  color: #144553;
}

.mapa-impacto {
  flex: 1;
  min-width: 300px;
}

.mapa-impacto h3 {
  font-size: 1.5rem;
  color: #144553;
  margin-bottom: 1rem;
  text-align: center;
}

#mapa {
  height: 300px;
  background-color: #e6f2ea;
  border-radius: 10px;
}

@media (max-width: 1200px) {
  .container-mvo {
    gap: 1.5rem;
  }

  .card-mvo {
    padding: 1.5rem 1rem;
  }

  .servicios-container {
    gap: 1.5rem;
  }
}

@media (max-width: 1024px) {
  .banner {
    height: 60vh;
  }

  .sobre-nosotros-container {
    flex-direction: column;
  }

  .sobre-nosotros-imagen {
    flex: 1 1 auto;
    min-height: 250px;
    max-height: 300px;
  }

  .sobre-nosotros-imagen img {
    height: 100%;
    width: 100%;
  }

  .sobre-nosotros-contenido {
    flex: 1 1 auto;
    padding: 2rem;
  }

  .section-text {
    font-size: 1rem;
    line-height: 1.7;
  }

  .container-mvo {
    flex-direction: column;
    align-items: center;
  }

  .card-mvo {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .banner {
    height: 50vh;
  }

  .banner-title {
    font-size: 2.5rem;
  }

  .banner-subtitle {
    font-size: 1.3rem;
  }

  .sobre-nosotros-imagen {
    min-height: 200px;
    max-height: 250px;
  }

  .calculadora-form,
  .calculadora-resultados {
    flex-basis: 100%;
  }
  .section-text {
    font-size: 1rem;
  }

  .sobre-nosotros-alt,
  .mis-vis-obj,
  .servicios {
    padding: 3rem 1rem;
  }

  .section-title-servicios,
  .section-title-valores,
  .section-title-sobre-nosotros {
    font-size: 2rem;
  }

  .servicios-container {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .servicio-card img {
    height: 160px;
  }

  .impacto-container {
    flex-direction: column;
  }

  .estadisticas {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .banner {
    height: 40vh;
  }

  .banner-title {
    font-size: 2rem;
  }

  .banner-subtitle {
    font-size: 1.1rem;
  }

  .sobre-nosotros-container {
    padding: 0.5rem;
  }

  .sobre-nosotros-imagen {
    min-height: 180px;
    max-height: 220px;
  }

  .sobre-nosotros-contenido {
    padding: 1.25rem 0.75rem;
  }
  .section-text {
    font-size: 0.9rem;
  }

  .section-title-servicios,
  .section-title-valores,
  .section-title-sobre-nosotros {
    font-size: 1.8rem;
  }

  .mvo-title {
    font-size: 1.4rem;
  }

  .mvo-text {
    font-size: 1rem;
  }

  .servicio-card h3 {
    font-size: 1.2rem;
  }

  .servicio-card p {
    font-size: 0.9rem;
  }
}

/* Add this new media query for very small screens */
@media (max-width: 360px) {
  .banner {
    height: 35vh;
  }

  .banner-title {
    font-size: 1.8rem;
  }

  .banner-subtitle {
    font-size: 1rem;
  }

  .section-title-servicios,
  .section-title-valores,
  .section-title-sobre-nosotros {
    font-size: 1.6rem;
  }

  .sobre-nosotros-container {
    padding: 0.25rem;
  }
  .sobre-nosotros-contenido {
    padding: 1rem 0.75rem;
  }

  .sobre-nosotros-imagen {
    min-height: 150px;
    max-height: 200px;
  }

  .section-text {
    font-size: 0.85rem;
    line-height: 1.4;
  }
}
</style>
