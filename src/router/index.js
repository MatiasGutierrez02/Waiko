import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Contacto from "../views/ContactoView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/quien-somos",
    name: "quien-somos",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/servicios/:slug",
    name: "ServicioDetalle",
    component: () =>
      import(/* webpackChunkName: "servicios" */ "../views/ServiciosView.vue"),
    props: true,
  },
  {
    path: "/beneficio",
    name: "beneficio",
    component: () =>
      import(/* webpackChunkName: "beneficio" */ "../views/BeneficioView.vue"),
  },
  {
    path: "/contacto",
    name: "contacto",
    component: Contacto,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
