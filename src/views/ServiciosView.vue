<template>
  <div class="servicio-detalle">
    <!-- Hero Section -->
    <div class="hero-section" v-if="serviceData">
      <div class="hero-overlay"></div>
      <img
        :src="serviceData.image"
        :alt="serviceData.title"
        class="hero-image"
      />
      <div class="hero-content">
        <div class="container">
          <h1 class="hero-title">{{ serviceData.title }}</h1>
          <p class="hero-subtitle">{{ serviceData.subtitle }}</p>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="content-section" v-if="serviceData">
      <div class="container">
        <!-- Descripción -->
        <section class="description-section">
          <h2>¿Qué ofrecemos?</h2>
          <p class="description">{{ serviceData.description }}</p>
        </section>

        <!-- Características principales -->
        <section class="features-section">
          <h2>Características principales</h2>
          <div class="features-grid">
            <div
              v-for="feature in serviceData.features"
              :key="feature"
              class="feature-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="feature-icon">✓</div>
              <p>{{ feature }}</p>
            </div>
          </div>
        </section>

        <!-- Call to action -->
        <section class="cta-section" data-aos="zoom-in">
          <div class="cta-card">
            <h2>¿Necesitas este servicio?</h2>
            <p>
              Contactanos para recibir una propuesta personalizada sin costo
            </p>
            <button @click="goToContact" class="cta-button">
              Solicitar {{ serviceData.title }}
            </button>
          </div>
        </section>
      </div>
    </div>

    <div v-else class="error-section">
      <div class="container">
        <h1>Servicio no encontrado</h1>
        <p>El servicio que buscas no existe o ha sido movido.</p>
        <button @click="goHome" class="back-button">Volver al inicio</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import AOS from "aos";
import { serviciosData } from "@/data/serviciosdata.js";

const route = useRoute();
const router = useRouter();

const serviceSlug = computed(() => route.params.slug);
const serviceData = computed(() => {
  console.log("Service slug:", serviceSlug.value);
  console.log("Available services:", Object.keys(serviciosData));
  console.log("Service data:", serviciosData[serviceSlug.value]);
  return serviciosData[serviceSlug.value] || null;
});

const goToContact = () => {
  router.push("/contacto");
};

const goHome = () => {
  router.push("/");
};

onMounted(() => {
  AOS.refresh();
});
</script>

<style scoped>
.servicio-detalle {
  min-height: 100vh;
  margin-top: 80px;
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(38, 77, 44, 0.8),
    rgba(38, 77, 44, 0.6)
  );
  z-index: 1;
}

.hero-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
}

.hero-title {
  font-size: clamp(2.2rem, 5vw + 1rem, 3.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
  line-height: 1.2;
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2.5vw + 0.5rem, 1.5rem);
  font-weight: 400;
  margin-bottom: 0;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
  opacity: 0.95;
}

/* Content Sections */
.content-section {
  background: #f9f9f9;
  padding: 4rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

section {
  margin-bottom: 4rem;
}

section h2 {
  font-size: 2.4rem;
  color: #264d2c;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
  position: relative;
}

section h2::after {
  content: "";
  display: block;
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #264d2c, #aee79d);
  margin: 1rem auto 0;
  border-radius: 2px;
}

.description {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
  border-left: 4px solid #aee79d;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, #aee79d, #264d2c);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.3rem;
  flex-shrink: 0;
}

.feature-card p {
  margin: 0;
  color: #333;
  font-weight: 500;
  line-height: 1.6;
}

/* Benefits Grid */
.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.benefit-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  border-top: 4px solid #264d2c;
}

.benefit-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.benefit-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.benefit-card p {
  margin: 0;
  color: #333;
  font-weight: 500;
  line-height: 1.6;
}

/* Process Timeline */
.process-timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.process-step {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.process-step:hover {
  transform: translateX(10px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.step-number {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #264d2c, #3b6e40);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.8rem;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(38, 77, 44, 0.3);
}

.step-content h3 {
  color: #264d2c;
  margin-bottom: 0.8rem;
  font-size: 1.4rem;
  font-weight: 600;
}

.step-content p {
  color: #666;
  line-height: 1.7;
  margin: 0;
  font-size: 1.05rem;
}

/* CTA Section */
.cta-section {
  text-align: center;
  margin-top: 5rem;
}

.cta-card {
  background: linear-gradient(135deg, #264d2c, #3b6e40);
  color: white;
  padding: 4rem 2rem;
  border-radius: 20px;
  max-width: 700px;
  margin: 0 auto;
  box-shadow: 0 10px 30px rgba(38, 77, 44, 0.3);
}

.cta-card h2 {
  color: white;
  margin-bottom: 1rem;
  font-size: 2.2rem;
}

.cta-card h2::after {
  background: linear-gradient(90deg, #aee79d, white);
}

.cta-card p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  line-height: 1.6;
}

.cta-button {
  background: #aee79d;
  color: #264d2c;
  padding: 1.2rem 2.5rem;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(174, 231, 157, 0.4);
}

.cta-button:hover {
  background: #9dd88a;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(174, 231, 157, 0.6);
}

/* Error Section */
.error-section {
  padding: 8rem 0;
  text-align: center;
  background: #f9f9f9;
}

.error-section h1 {
  color: #264d2c;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.error-section p {
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.back-button {
  background: #264d2c;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-button:hover {
  background: #3b6e40;
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .servicio-detalle {
    margin-top: 70px;
  }

  .hero-section {
    height: 50vh;
    min-height: 350px;
  }

  .process-step {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
    padding: 2rem 1.5rem;
  }

  .step-number {
    margin: 0 auto;
    width: 60px;
    height: 60px;
    font-size: 1.6rem;
  }

  .features-grid,
  .benefits-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .container {
    padding: 0 1.5rem;
  }

  section h2 {
    font-size: clamp(1.8rem, 4vw + 0.5rem, 2.2rem);
    margin-bottom: 1.5rem;
  }

  .description {
    font-size: 1.1rem;
    padding: 0 1rem;
  }

  .feature-card,
  .benefit-card {
    padding: 1.5rem;
  }

  .cta-card {
    padding: 2.5rem 1.5rem;
  }

  .cta-card h2 {
    font-size: 1.8rem;
  }

  .process-timeline {
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .servicio-detalle {
    margin-top: 60px;
  }

  .hero-section {
    height: 45vh;
    min-height: 300px;
  }

  .container {
    padding: 0 1rem;
  }

  .feature-card,
  .process-step,
  .benefit-card {
    padding: 1.2rem;
  }

  .step-number {
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
  }

  .step-content h3 {
    font-size: 1.2rem;
  }

  .step-content p {
    font-size: 0.95rem;
  }

  .cta-card {
    padding: 2rem 1rem;
  }

  .cta-button {
    padding: 1rem 1.8rem;
    font-size: 1rem;
  }

  section {
    margin-bottom: 3rem;
  }

  .content-section {
    padding: 3rem 0;
  }

  .feature-icon,
  .benefit-icon {
    font-size: 2rem;
  }

  .feature-icon {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }
}
</style>
