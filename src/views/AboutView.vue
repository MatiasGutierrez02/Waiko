<template>
  <div class="about">
    <h1>Sobre Nosotros</h1>

    <h2>
      Somos un equipo interdisciplinario de profesionales matriculados y
      habilitados, con trayectoria desde 2012 brindando asesoramiento ambiental
      a empresas de diversos sectores. Nuestra experiencia abarca tanto el
      trabajo de campo como el análisis normativo, con especialistas en gestión
      ambiental, acústica, habilitaciones comerciales e industriales, así como
      en la elaboración de planos y proyectos de arquitectura comercial. Nuestra
      formación técnica y conocimiento actualizado de la normativa vigente nos
      permite ofrecer soluciones integrales, efectivas y ajustadas a las
      necesidades de cada cliente. Todos nuestros servicios se prestan bajo
      estrictos acuerdos de confidencialidad, garantizando la reserva de la
      información documental, legal y de trámites ambientales de las empresas
      que nos confían su gestión.
    </h2>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  components: {},
};
</script>

<style scoped>
.about {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
}

.h1 {
  font-size: 3.5rem;
  text-align: center;
  color: #2c3e50;
  max-width: 800px;
  margin: 0 auto;
  /* text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); */
}

h2 {
  font-size: 1.8rem !important;
  color: #2c3e50;
  line-height: 1.4;
  margin: 5px 30px;
  text-align: center;
  line-height: 1.4;
  padding: 50px
}

</style>
