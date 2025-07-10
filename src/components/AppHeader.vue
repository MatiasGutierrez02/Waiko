<template>
  <header class="header">
    <div class="container">
      <img src="../assets/LogoFinalBlanco.png" class="imagenLogo" alt="Logo" />

      <!-- Ícono hamburguesa -->
      <button class="hamburger" @click="toggleMenu">
        <span :class="{ open: isMenuOpen }"></span>
        <span :class="{ open: isMenuOpen }"></span>
        <span :class="{ open: isMenuOpen }"></span>
      </button>

      <!-- Menú Desktop -->
      <nav class="nav-desktop">
        <router-link to="/">Inicio</router-link>
        <router-link to="/quien-somos">Quiénes somos</router-link>
        <div class="dropdown-container servicios-dropdown-container">
          <q-btn-dropdown
            flat
            no-caps
            label="Servicios"
            class="servicios-dropdown"
            text-color="white"
            menu-anchor="bottom left"
            menu-self="top left"
            :menu-offset="[0, 10]"
            persistent
          >
            <q-list>
              <q-item clickable v-close-popup to="/servicios/">
                <q-item-section class="q-item"
                  >Evaluación de Impacto Ambiental</q-item-section
                >
              </q-item>

              <q-item clickable v-close-popup to="/servicios/">
                <q-item-section class="q-item">Impacto Acústico</q-item-section>
              </q-item>

              <q-item clickable v-close-popup to="/servicios/">
                <q-item-section class="q-item">Asesoramiento</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
        <router-link to="/contacto">Contacto</router-link>
      </nav>

      <!-- Menú Mobile -->
      <nav class="nav-mobile" v-if="isMenuOpen">
        <router-link to="/" @click="closeMenu">Inicio</router-link>
        <router-link to="/quien-somos" @click="closeMenu"
          >Quiénes somos</router-link
        >
        <router-link to="/servicios" @click="closeMenu">Servicios</router-link>
        <router-link to="/contacto" @click="closeMenu">Contacto</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #144553;
  color: #fff;
  padding: 12px 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.imagenLogo {
  height: 60px;
  transition: transform 0.3s ease;
}

.imagenLogo:hover {
  transform: scale(1.05);
}

.servicios-dropdown-container {
  display: flex;
  align-items: flex-start !important;
}

:deep(.servicios-dropdown) {
  height: 100%;
  display: flex;
  align-items: center;
}

:deep(.servicios-dropdown .q-btn__content) {
  display: flex;
  align-items: center;
}

:deep(.servicios-dropdown .q-btn__wrapper) {
  padding-top: 0;
  padding-bottom: 0;
  min-height: unset;
}

:deep(.servicios-dropdown) {
  margin-top: -6px !important;
}

:deep(.servicios-dropdown .q-menu) {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #144553 !important;
  border-radius: 4px;
  padding: 8px 0;
  min-width: 200px;
}

:deep(.servicios-dropdown .q-item) {
  font-weight: 500;
  padding: 8px 16px;
  background-color: #144553 !important;
}

.q-item {
  background-color: #144553 !important;
}
:deep(.servicios-dropdown .q-item:hover) {
  background-color: rgba(174, 231, 157, 0.1);
}

nav {
  display: flex;
  gap: 30px;
}

.nav-desktop {
  display: flex;
  gap: 30px;
}

.nav-mobile {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; /* 👈 Centra horizontalmente */
  background-color: #144553;
  padding: 10px 0 0;
  gap: 0px;
}

.nav-mobile a {
  padding: 10px 0;
  width: 100%;
  text-align: center;
  border-top: 1px solid #ffffff22;
}

/* Links */
a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  position: relative;
  transition: color 0.3s ease;
}

a::after {
  content: "";
  display: block;
  width: 0%;
  height: 2px;
  background-color: #aee79d;
  transition: width 0.3s;
  position: absolute;
  bottom: -4px;
  left: 0;
}

a:hover {
  color: #aee79d;
}

a:hover::after {
  width: 100%;
}

/* Botón hamburguesa */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.hamburger span {
  height: 3px;
  background-color: #fff;
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* Transición al abrir */
.hamburger span.open:nth-child(1) {
  transform: translateY(7.5px) rotate(45deg);
}

.hamburger span.open:nth-child(2) {
  opacity: 0;
}

.hamburger span.open:nth-child(3) {
  transform: translateY(-7.5px) rotate(-45deg);
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .nav-desktop {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .nav-mobile {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #144553;
    width: 100%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }
}
</style>
