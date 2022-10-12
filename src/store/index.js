import Vue from "vue";
import Vuex from "vuex";

import soldier from "./modules/soldier";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    soldier,
  },
});
