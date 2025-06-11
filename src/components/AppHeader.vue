<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="logo">
        <img src="../assets/5(3).png" class="imagenLogo" alt="Logo" to="/" />
      </router-link>
      <nav>
        <router-link to="/">Inicio</router-link>
        <router-link to="/quien-somos">Quiénes somos</router-link>
        <div class="dropdown-container">
          <q-btn-dropdown
            flat
            no-caps
            label="Servicios"
            class="servicios-dropdown"
            text-color="white"
          >
            <q-list>
              <q-item clickable v-close-popup to="/servicios/">
                <q-item-section>Evaluación de Impacto Ambiental</q-item-section>
              </q-item>

              <q-item clickable v-close-popup to="/servicios/">
                <q-item-section>Impacto Acústico</q-item-section>
              </q-item>

              <q-item clickable v-close-popup to="/servicios/">
                <q-item-section>Asesoramiento</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
        <router-link to="/contacto">Contacto</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #4a7764;
  color: #fff;
  padding: 10px;
  z-index: 10;
}

.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
}
nav {
  display: flex;
  justify-content: space-around !important;
}

.dropdown-container {
  display: inline-block;
  padding: 0px 50px 0px 0px;
}

.servicios-dropdown {
  font-weight: bold;
  color: #4a7764;
  padding: 0;
  margin: 0;
  height: auto;
  min-height: auto;
}

/* Style the dropdown menu items */
:deep(.q-list) {
  background-color: #4a7764;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
:deep(.q-item) {
  color: #4a7764 !important;
}
:deep(.q-item:hover) {
  background-color: #4a7764 !important;
}
:deep(.q-btn) {
  text-transform: none;
  padding: 0;
  min-height: auto;
}

:deep(.q-btn:hover) {
  color: #2c3e50;
}

a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  padding: 0px 50px 0px 0px;
}

a:hover {
  color: #2c3e50;
}
.imagenLogo {
  height: 80px;
}
</style>
