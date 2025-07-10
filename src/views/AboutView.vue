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

h1 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-top: 20px !important;
  color: #144553;
}

h2 {
  font-size: 1.8rem !important;
  color: #144553;
  line-height: 1.4;
  margin: 5px 30px;
  text-align: center;
  line-height: 1.4;
  padding: 50px;
}

/* Add to the existing <style> section */
@media (max-width: 768px) {
  .about {
    margin-top: 80px;
  }

  h2 {
    font-size: 1.4rem !important;
    padding: 30px 20px;
    margin: 5px 15px;
  }
}
</style>
