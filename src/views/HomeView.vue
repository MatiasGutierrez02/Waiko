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
            <!-- <img
            src="../assets/LogoFinalBlanco.png"
            alt="Logo WAIKO"
            class="banner-logo-fixed"
            /> -->
            <div class="banner-right">
            <h1 class="banner-main-title">
                Tu aliado estratégico en gestión ambiental
            </h1>
            <h2 class="banner-subtitle">
                Con más de 10 años de experiencia ayudando a empresas a ser mejor
            </h2>
            <button class="banner-button">Contacta nuestro servicio aquí</button>
            </div>
        </div>
    </div>

    <section class="sobre-nosotros-alt">
      <h2 class="section-title-sobre-nosotros">
        Sobre Nosotros
      </h2>
      <div class="sobre-nosotros-container">
        <div class="sobre-nosotros-imagen">
          <img src="../assets/SobreNosotros.jpg" alt="Gestión Ambiental" />
        </div>
        <div class="sobre-nosotros-contenido">
          <p class="section-text">
            Waiko es una consultora ambiental especializada en brindar
            soluciones sostenibles a empresas, gobiernos y organizaciones.
            Nuestro compromiso es acompañar a cada cliente en el cumplimiento de
            las normativas vigentes y en la implementación de políticas que
            reduzcan el impacto ambiental de sus actividades. <br /><br />
            Con un enfoque profesional y actualizado, garantizamos un servicio
            de calidad, estratégico y alineado con los desafíos actuales del
            medio ambiente.
          </p>
          <router-link to="/quienes-somos" class="conocenos-boton"
            >Conocenos más</router-link
          >
        </div>
      </div>
    </section>
    <section class="mis-vis-obj">
      <h2 class="section-title-valores">
        Nuestros Valores
      </h2>
      <div class="container-mvo">
        <div class="card-mvo">
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
            Nuestra misión es ofrecer asesoramiento y gestión ambiental de
            calidad excepcional a empresas, organizaciones gubernamentales y
            entidades diversas.
          </p>
        </div>
        <div class="card-mvo">
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
            Nuestra visión es crear un mundo en el que la excelencia ambiental y
            la práctica responsable sean parte integral de cada negocio.
          </p>
        </div>
        <div class="card-mvo">
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
    <CarruselServicios/>

    
  </div>
</template>
<script setup>
import { onMounted } from 'vue' 
import CarruselServicios from '@/components/CarruselServicios.vue'



onMounted(() => { 
    })
</script>
<style scoped>
/* General Layout */
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  padding-bottom: 3rem;
}

/* Banner Section */
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
  top: 0;
  left: 0;
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

.banner-logo-fixed {
  position: absolute;
  top: 10rem;
  left: 9rem;
  width: 150px;
  height: auto;
  z-index: 2;
}

.banner-main-title {
  font-size: 7.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: right;
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

.banner-button:hover {
  background-color: #3b6e40;
}

/* Sobre Nosotros */
.sobre-nosotros-alt {
  width: 100%;
  padding: 4rem 1.5rem;
  background-color: #ffffff;
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
  flex: 1 1 135px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e6f2ea;
}

.sobre-nosotros-imagen img {
  width: 100%;
  height: auto;
}

.sobre-nosotros-contenido {
  flex: 2 1 400px;
  padding: 2.5rem;
}

.section-title,
.section-title-sobre-nosotros {
  font-size: 2rem;
  color: #264d2c;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.5rem;
  font-family: "Roboto", sans-serif;
  width: 100%;
}

.section-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
}

/* Misión, Visión, Objetivos */
.mis-vis-obj {
  width: 100%;
  background-color: #264d2c;
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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

.container-mvo {
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
}

.card-mvo {
  background-color: #f4f7f5;
  color: #264d2c;
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
  color: #264d2c;
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

/* Servicios */
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
  height: 180px;
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

.conocenos-boton {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.6rem 1.4rem;
  background-color: #264d2c;
  color: white;
  text-decoration: none;
  font-weight: 500;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.conocenos-boton:hover {
  background-color: #3b6e40;
}
</style>
