import "./styles/quasar.sass";
import "@quasar/extras/material-icons/material-icons.css";
import {
  QBtn,
  QBtnDropdown,
  QList,
  QItem,
  QItemSection,
  QExpansionItem,
  QToolbar,
  QToolbarTitle,
  QCard,
  QCardSection,
  QCardActions,
} from "quasar";

// To be used on app.use(Quasar, { ... })
export default {
  config: {
    brand: {
      primary: "#4a7764",
      secondary: "#75634f",
      accent: "#f0a04b",
      dark: "#183a37", // Verde muy oscuro (oscuro)
      light: "#f5f7f6", // Blanco hueso (claro)

      // Colores de estado
      positive: "#4d8b31", // Verde éxito
      negative: "#c44536", // Rojo terracota
      info: "#3d7b80", // Azul verdoso
      warning: "#e6b655", // Ámbar

      // Colores adicionales personalizados
      "primary-light": "#6a9784", // Versión más clara del primario
      "primary-dark": "#2a5744", // Versión más oscura del primario
    },
  },
  components: {
    QBtn,
    QBtnDropdown,
    QList,
    QItem,
    QItemSection,
    QExpansionItem,
    QToolbar,
    QToolbarTitle,
    QCard,
    QCardSection,
    QCardActions,
  },
};
