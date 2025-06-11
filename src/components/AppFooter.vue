<template>
  <footer class="footer">
    <p>
      Evaluación de Impacto Ambiental - Impacto Acústico - Seguridad e Higiene
      Laboral
    </p>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
.footer {
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #4a7764;
  color: #fff;
  text-align: center;
  padding: 10px;
  font-size: 14px;
  line-height: 3.2;
  white-space: nowrap;
  overflow: hidden;
  margin-top: 50px;
}

.footer p {
  margin: 0;
  padding: 0;
  display: inline-block;
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
