<template>
  <div id="app">
    <img
      v-show="showPoster"
      class="global-lcp-poster"
      src="/img/bannerPoster.webp"
      fetchpriority="high"
      decoding="sync"
      loading="eager"
      alt=""
    />
    <AppHeader />

    <main class="content">
      <router-view @video-loaded="hidePoster" />
    </main>

    <WhatsappBtt />
    <AppFooter />

  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import WhatsappBtt from "@/components/WhatsappBtt.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    WhatsappBtt,
    AppFooter,
  },
  data() {
    return {
      showPoster: true, // 🔥 por defecto se ve
    };
  },
  methods: {
    hidePoster() {
      this.showPoster = false;
    },
  },
};
</script>

<style lang="scss">
.global-lcp-poster {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  transition: opacity 0.4s ease;
}
</style>
