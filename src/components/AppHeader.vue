<template>
  <header :class="['header', { 'is-hidden': isHidden }]">
    <div class="container">
      <img
        src="../assets/LogoFinalIcono.png"
        @click="goHome"
        class="imagenLogo"
        alt="Logo"
      />

      <button class="hamburger" @click="toggleMenu">
        <span :class="{ open: isMenuOpen }"></span>
        <span :class="{ open: isMenuOpen }"></span>
        <span :class="{ open: isMenuOpen }"></span>
      </button>

      <nav class="nav-desktop">
        <router-link to="/">Inicio</router-link>
        <a href="#quien-somos" @click.prevent="goNosotros">Quienes Somos</a>
        <a href="#servicios" @click.prevent="goServicios">Servicios</a>
        <a href="#contacto" @click.prevent="goContact">Contacto</a>
      </nav>

      <nav class="nav-mobile" v-if="isMenuOpen">
        <router-link to="/" @click="closeMenu">Inicio</router-link>
        <a href="#quien-somos" @click.prevent="goNosotros">Quienes Somos</a>
        <a href="#servicios" @click.prevent="goServicios">Servicios</a>
        <a href="#contacto" @click.prevent="goContact">Contacto</a>
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
      isHidden: false,
      lastY: 0,
    };
  },
  mounted() {
    this.lastY = window.pageYOffset || 0;
    window.addEventListener("scroll", this.handleScroll, { passive: true });
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      if (this.isMenuOpen) this.isHidden = false;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    handleScroll() {
      const y = window.pageYOffset || 0;
      const delta = y - this.lastY;

      if (Math.abs(delta) < 5) return;
      if (this.isMenuOpen) {
        this.isHidden = false;
        this.lastY = y;
        return;
      }

      if (y < 80) {
        this.isHidden = false;
      } else if (delta > 0) {
        this.isHidden = true;
      } else {
        this.isHidden = false;
      }
      this.lastY = y;
    },

    goHome() {
      this.$router.push("/");
    },

    goNosotros() {
      this.closeMenu();
      this.isHidden = false;
      const scroll = () => {
        const el = document.getElementById("quien-somos");
        if (!el) return;
        const header = document.querySelector("header.header");
        const h = header ? header.offsetHeight : 80;
        const y = el.getBoundingClientRect().top + window.pageYOffset - h - 2;
        window.scrollTo({ top: y, behavior: "smooth" });
      };
      if (this.$route.path === "/") {
        scroll();
      } else {
        this.$router.push("/").then(() => setTimeout(scroll, 250));
      }
    },

    goContact() {
      this.closeMenu();
      this.isHidden = false;
      const scroll = () => {
        const el = document.getElementById("contacto");
        if (!el) return;
        const header = document.querySelector("header.header");
        const h = header ? header.offsetHeight : 80;
        const y = el.getBoundingClientRect().top + window.pageYOffset - h - 2;
        window.scrollTo({ top: y, behavior: "smooth" });
      };
      if (this.$route.path === "/") {
        scroll();
      } else {
        this.$router.push("/").then(() => setTimeout(scroll, 250));
      }
    },

    goServicios() {
      this.closeMenu();
      this.isHidden = false;
      const scroll = () => {
        const el = document.getElementById("servicios");
        if (!el) return;
        const header = document.querySelector("header.header");
        const h = header ? header.offsetHeight : 80;
        const y = el.getBoundingClientRect().top + window.pageYOffset - h - 2;
        window.scrollTo({ top: y, behavior: "smooth" });
      };
      if (this.$route.path === "/") {
        scroll();
      } else {
        this.$router.push("/").then(() => setTimeout(scroll, 250));
      }
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
  transform: translateY(0);
  transition: transform 0.35s ease, box-shadow 0.2s ease,
    background-color 0.2s ease;
  will-change: transform;
}
.header.is-hidden {
  transform: translateY(-110%);
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
  align-items: center;
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
.hamburger span.open:nth-child(1) {
  transform: translateY(7.5px) rotate(45deg);
}
.hamburger span.open:nth-child(2) {
  opacity: 0;
}
.hamburger span.open:nth-child(3) {
  transform: translateY(-7.5px) rotate(-45deg);
}

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
