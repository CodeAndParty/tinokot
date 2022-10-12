import axios from "axios";

const state = {
  info: null,
};

const getters = {
  info: (state) => state.info,
};

const actions = {
  async fetchInfo({ commit }, id) {
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
