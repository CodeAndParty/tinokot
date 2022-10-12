import axios from "axios";

const state = {
  info: null,
};

const getters = {
  soldierInfo: (state) => state.info,
};

const actions = {
  async fetchSoldier({ commit }, id) {
    const response = await axios.get(
      `${process.env.VUE_APP_API_URL}/soldiers/${id}`
    );
    commit("setInfo", response.data);
  },
};

const mutations = {
  setInfo: (state, soldier) => (state.info = soldier),
};

export default {
  state,
  getters,
  mutations,
  actions,
};
