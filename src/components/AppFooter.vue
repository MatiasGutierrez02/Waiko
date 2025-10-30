<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-info">
        <h3>WAIKO</h3>
        <p>Consultoría en Gestión Ambiental</p>
      </div>
      <div class="footer-links">
        <p>Más sobre nosotros</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} WAIKO. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
.footer {
  background-color: #144553;
  color: #ffffff;
  padding: 2rem 1.5rem 1rem;
  font-size: 0.95rem;
font-family: 'Roboto', sans-serif;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  gap: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  padding-bottom: 1rem;
}

.footer-info h3 {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
  color: #aee79d;
}

.footer-info p {
  margin: 0;
  color: #e0e0e0;
}

.footer-links p {
  margin: 0.3rem 0;
  color: #d0d0d0;
}

.footer-bottom {
  text-align: center;
  margin-top: 1rem;
  font-size: 0.85rem;
  color: #cccccc;
}
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    margin: 0 auto;
  }


  .footer-links p {
    font-size: 0.95rem;
  }

  .footer-info h3 {
    font-size: 1.3rem;
  }

  .footer-bottom {
    font-size: 0.8rem;
  }
}

</style>
