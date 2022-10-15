import Vue from "vue";
import Vuex from "vuex";

import soldier from "./modules/soldier";
import unit from "./modules/unit";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    soldier,
    unit,
  },
});
