<!-- src/components/WhatsAppButton.vue -->
<template>
  <a
    href="https://wa.me/5491121656926?text=Hola%21%20me%20gustaria%20obtener%20mas%20informaci%C3%B3n%20sobre%20tus%20servicios%20sobre%20consultoria%20ambiental."
    target="_blank"
    rel="noopener noreferrer"
    class="whatsapp-button"
  >
    <img src="@/assets/whatsapp-icon.svg" alt="WhatsApp" />
  </a>
</template>

<script>
export default {
  name: "WhatsAppButton",
};
</script>

<style scoped>
.whatsapp-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.whatsapp-button img {
  width: 32px;
  height: 32px;
}
</style>
