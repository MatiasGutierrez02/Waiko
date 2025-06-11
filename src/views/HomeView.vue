<template>
  <div class="home hero-section">
    <div class="hero-section">
      <section>
        <h1 class="banner" v-scroll-reveal="{ delay: 200 }">
          WAIKO Gestión Ambiental Integral
        </h1>
        <h2 class="banner" v-scroll-reveal="{ delay: 400 }">
          Transformando Desafíos Ambientales en Soluciones Reales
        </h2>
        <q-btn
          v-scroll-reveal="{ delay: 600 }"
          name="servicios"
          label="Conoce nuetros Servicios"
          to="/servicios"
          :size="'lg'"
          class="boton-destacado q-px-xl q-py-md"
          color="primary"
        ></q-btn>
      </section>
    </div>
  </div>
  <div class="info-section">
    <section>
      <h2>
        <router-link to="/quien-somos" class="link">Sobre Nosotros</router-link>
      </h2>
      <h3>
        Con más de 12 años de experiencia, acompañamos a nuestros clientes en la
        gestión ambiental diaria y en el control de obras financiadas por
        organismos internacionales.
      </h3>
    </section>
  </div>
  <section class="beneficios-section">
    <h2 class="beneficios-title">Beneficios de elegirnos:</h2>
    <h3 class="beneficios-subtitle">
      Al confiar en nuestros servicios, usted asegura:
    </h3>
    <div class="gridContainer">
      <div
        class="beneficio-card"
        v-scroll-reveal="{
          delay: 200,
          origin: 'bottom',
          distance: '50px',
        }"
      >
        <div class="beneficio-icon">
          <q-icon name="lock" size="3rem" color="primary" />
        </div>
        <h3 class="beneficio-title">Confidencialidad Garantizada</h3>
        <p class="beneficio-text">
          Protegemos su información y situación legal con la máxima discreción y
          profesionalismo.
        </p>
      </div>
      <!-- Beneficio 2 -->
      <div
        class="beneficio-card"
        v-scroll-reveal="{ delay: 300, origin: 'bottom', distance: '50px' }"
      >
        <div class="beneficio-icon">
          <q-icon name="gavel" size="3rem" color="primary" />
        </div>
        <h3 class="beneficio-title">Conocimiento Normativo Actualizado</h3>
        <p class="beneficio-text">
          Le brindamos la tranquilidad de saber que sus proyectos cumplen con la
          legislación vigente, gracias a nuestra constante actualización.
        </p>
      </div>

      <!-- Beneficio 3 -->
      <div
        class="beneficio-card"
        v-scroll-reveal="{ delay: 400, origin: 'bottom', distance: '50px' }"
      >
        <div class="beneficio-icon">
          <q-icon name="payments" size="3rem" color="primary" />
        </div>
        <h3 class="beneficio-title">Planes de Abono Mensual</h3>
        <p class="beneficio-text">
          Ofrecemos flexibilidad financiera con opciones que se adaptan a sus
          necesidades, facilitando una gestión continua y eficiente.
        </p>
      </div>

      <!-- Beneficio 4 -->
      <div
        class="beneficio-card"
        v-scroll-reveal="{ delay: 500, origin: 'bottom', distance: '50px' }"
      >
        <div class="beneficio-icon">
          <q-icon name="support_agent" size="3rem" color="primary" />
        </div>
        <h3 class="beneficio-title">Atención Personalizada</h3>
        <p class="beneficio-text">
          Cada cliente recibe un servicio adaptado a sus necesidades
          específicas, con un asesor dedicado a su proyecto.
        </p>
      </div>
    </div>
  </section>
  <!-- Sección de Servicios Destacados Mejorada -->
  <section class="servicios-section">
    <h3>Servicios Destacados</h3>
    <div class="gridContainer">
      <div class="servicios-grid">
        <!-- Card 1: Gestión de Residuos -->
        <q-card class="servicio-card" v-scroll-reveal="{ delay: 200 }">
          <div class="servicio-icon-container">
            <q-icon name="delete" size="4rem" color="accent" />
          </div>
          <q-card-section>
            <div class="text-h6">Gestión de Residuos</div>
          </q-card-section>
          <q-card-section class="servicio-descripcion">
            <p>
              Soluciones integrales para la gestión adecuada de residuos
              industriales y peligrosos, cumpliendo con la normativa vigente.
            </p>
          </q-card-section>
          <q-card-actions align="right" class="servicio-actions">
            <q-btn flat color="accent" label="Ver más" to="/servicios" />
          </q-card-actions>
        </q-card>

        <!-- Card 2: Estudios de Impacto Ambiental -->
        <q-card class="servicio-card" v-scroll-reveal="{ delay: 300 }">
          <div class="servicio-icon-container">
            <q-icon name="eco" size="4rem" color="accent" />
          </div>
          <q-card-section>
            <div class="text-h6">Estudios de Impacto Ambiental</div>
          </q-card-section>
          <q-card-section class="servicio-descripcion">
            <p>
              Evaluaciones completas para identificar, predecir y mitigar los
              posibles impactos ambientales de sus proyectos.
            </p>
          </q-card-section>
          <q-card-actions align="right" class="servicio-actions">
            <q-btn flat color="accent" label="Ver más" to="/servicios" />
          </q-card-actions>
        </q-card>

        <!-- Card 3: Consultoría Ambiental -->
        <q-card class="servicio-card" v-scroll-reveal="{ delay: 400 }">
          <div class="servicio-icon-container">
            <q-icon name="assignment" size="4rem" color="accent" />
          </div>
          <q-card-section>
            <div class="text-h6">Consultoría Ambiental</div>
          </q-card-section>
          <q-card-section class="servicio-descripcion">
            <p>
              Asesoramiento especializado para el cumplimiento de normativas
              ambientales y la implementación de prácticas sostenibles.
            </p>
          </q-card-section>
          <q-card-actions align="right" class="servicio-actions">
            <q-btn flat color="accent" label="Ver más" to="/servicios" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="cta-overlay">
      <h2 class="cta-title">¿Listo para comenzar?</h2>
      <p class="cta-text final">
        Nuestro equipo de expertos está preparado para ayudarte con tus desafíos
        ambientales
      </p>
      <q-btn
        v-scroll-reveal="{ delay: 600 }"
        name="asesoramiento"
        label="Solicitar Asesoramiento"
        :size="'lg'"
        class="boton-destacado q-px-xl q-py-md"
        color="primary"
      ></q-btn>
    </div>
  </section>
</template>

<script>
import { QBtn } from "quasar";

export default {
  name: "HomePage",
  components: {
    QBtn,
  },
};
</script>

<style scoped>
.home {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  /* margin-top: 100px; */
}
.hero-section {
  height: 120vh;
  background: linear-gradient(rgba(44, 62, 80, 0.7), rgba(44, 62, 80, 0.7)),
    url("../assets/BackgroundHome.jpg") no-repeat center center/cover;
  margin-bottom: auto;
  max-height: 60vh;
  min-height: 60vh !important;
  justify-content: center;
  position: relative;
}
.info-section {
  padding: 3rem 1rem;
  background-color: #f8f9fa;
}
h1.banner {
  font-size: 4rem !important;
  color: #fff !important;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.4) !important;
  margin-bottom: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.5px;
}
h2.banner {
  font-size: 2.2rem !important;
  color: #f5f7f6 !important;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3) !important;
  margin-bottom: 2.5rem;
  font-weight: 600;
}

h1 {
  font-size: 2.5rem !important;
  color: #333333 !important;
}
h2 {
  font-size: 1.8rem !important;
  color: #333333 !important;
}

.banner {
  line-height: 1.4;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

/* Sección de información mejorada */
.info-section {
  padding: 5rem 2rem;
  background-color: #f5f7f6;
  position: relative;
}

.info-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(to right, #4a7764, #f0a04b);
}

.info-section section {
  max-width: 900px;
  margin: 0 auto;
}
.link {
  text-decoration: none;
  color: #4a7764;
  transition: all 0.3s ease;
  position: relative;
  padding-bottom: 3px;
}
.link:hover {
  color: #f0a04b;
}

/* Grid container mejorado */
.gridContainer {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Sección de beneficios mejorada */
.beneficios-section {
  padding: 0rem 2rem;
  background: linear-gradient(to bottom, #f5f7f6, #fff);
  text-align: center;
  position: relative;
}

.beneficio-card {
  background-color: #fff;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%; /* Asegura que todas las tarjetas tengan la misma altura */
}

.beneficio-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.beneficio-icon {
  background-color: rgba(74, 119, 100, 0.1);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.beneficio-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

.beneficio-text {
  text-align: center;
  flex-grow: 1; /* Permite que el texto ocupe el espacio disponible */
  margin: 0;
  color: #666;
  line-height: 1.6;
}

/* Sección de servicios mejorada */
.servicios-section {
  background: linear-gradient(135deg, #4a7764, #183a37);
  padding: 6rem 2rem;
  margin-top: 3rem;
  position: relative;
  color: #fff;
  text-align: center;
}

servicios-section::before {
  content: "";
  position: absolute;
  top: -3px;
  left: 0;
  width: 100%;
  height: 6px;
  background: linear-gradient(to right, #f0a04b, #75634f);
}

.servicios-section h3 {
  color: #fff !important;
  font-size: 2.2rem !important;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
}

.servicios-section h3::after {
  content: '';
  position: absolute;
  width: 60px;
  height: 3px;
  background-color: #f0a04b;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
}

.servicios-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  width: 100%;
}

.servicio-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  overflow: hidden;
  border: none;
}

.servicio-card:hover {
  transform: translateY(-15px) scale(1.02);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
}

.servicio-icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0 1rem;
  background-color: rgba(240, 160, 75, 0.1);
  transition: all 0.3s ease;
}

.servicio-card:hover .servicio-icon-container {
  background-color: rgba(240, 160, 75, 0.2);
}

.servicio-card .text-h6 {
  color: #183a37;
  font-weight: 600;
  font-size: 1.5rem !important;
}

.servicio-descripcion {
  flex-grow: 1;
  padding: 0.5rem 1.5rem 1rem;
}

.servicio-descripcion p {
  color: #666;
  line-height: 1.7;
  font-size: 1.05rem;
}

.servicio-actions {
  margin-top: auto;
  padding: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}
.boton-destacado {
  margin: 40px;
}

/* CTA section mejorada */
.cta-section {
  padding: 6rem 2rem;
  background: linear-gradient(rgba(24, 58, 55, 0.9), rgba(24, 58, 55, 0.9)),
    url("../assets/BackgroundHome.jpg") no-repeat center center/cover;
  text-align: center;
  position: relative;
}

.cta-overlay {
  max-width: 900px;
  margin: 0 auto;
}

.cta-title {
  color: #fff !important;
  font-size: 2.8rem !important;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.cta-text {
  color: #f5f7f6;
  font-size: 1.4rem !important;
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

/* Botón destacado mejorado */
.boton-destacado {
  margin: 2rem 0;
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 50px;
  box-shadow: 0 10px 20px rgba(240, 160, 75, 0.3);
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.boton-destacado:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(240, 160, 75, 0.4);
  background-color: #f0a04b !important;
  border-color: #fff;
}

/* Media queries para responsividad */
@media (max-width: 768px) {
  h1.banner {
    font-size: 3rem !important;
  }

  h2.banner {
    font-size: 1.8rem !;
  }
}
</style>
