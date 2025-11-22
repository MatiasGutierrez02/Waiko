import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
  },
  {
    path: "/quien-somos",
    name: "quien-somos",
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/servicios/:slug",
    name: "ServicioDetalle",
    component: () => import(/* webpackChunkName: "servicios" */ "../views/ServiciosView.vue"),
    props: true,
  },
  {
    path: "/beneficio",
    name: "beneficio",
    component: () => import(/* webpackChunkName: "beneficio" */ "../views/BeneficioView.vue"),
  },
  {
    path: "/contacto",
    name: "contacto",
    component: () => import(/* webpackChunkName: "contacto" */ "../views/ContactoView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(_, __, savedPosition) {
    return savedPosition ? savedPosition : { top: 0 };
  },
});

export default router;
