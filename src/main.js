import { createApp } from "vue";
import App from "./App.vue";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import router from "./router";
import 'quasar/src/css/index.sass';
import '@quasar/extras/material-icons/material-icons.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App);

app.use(Quasar, quasarUserOptions);
app.use(router);

app.mount('#app');

AOS.init({
  duration: 800,     // Duración de animaciones
  once: false,        // Solo se animan una vez al hacer scroll
});
