import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  rtl: true,
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#282949",
        secondary: "#5271ff",
        accent: "#595a7f",
        info: "#ffffff",
        warning: "#ffffff",
        error: "#ffaa9d",
        success: "#92eed5",
      },
    },
  },
});
