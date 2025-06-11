<template>
  <a
    href="https://wa.me/5491153849262"
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
