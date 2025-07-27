import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/quien-somos",
    name: "quien-somos",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/servicios",
    name: "servicios",
    component: () =>
      import(/* webpackChunkName: "servicios" */ "../views/ServiciosView.vue"),
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
    component: () =>
      import(/* webpackChunkName: "contacto" */ "../views/ContactoView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
