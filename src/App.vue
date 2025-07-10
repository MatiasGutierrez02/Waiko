<template>
  <div id="app">
    <AppHeader />
    <main class="content">
      <router-view />
    </main>
    <WhatsappBtt />
    <AppFooter />
  </div>
</template>

<script>
import WhatsappBtt from "@/components/WhatsappBtt.vue";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "App",
  components: {
    WhatsappBtt,
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #808285;
  background-color: #f8f9fa;
  font-weight: 800;
  line-height: 1.33;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #f8f4ee;
    }
  }
}
</style>
