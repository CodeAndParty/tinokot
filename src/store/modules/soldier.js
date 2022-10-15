import axios from "axios";

const state = {
  info: null,
  persistenceGrants: null,
};

const getters = {
  info: (state) => state.info,
  persistenceGrantsDates: (state) => {
    return [
      state.persistenceGrants?.firstDate,
      state.persistenceGrants?.secondDate,
      state.persistenceGrants?.thirdDate,
      state.persistenceGrants?.fourthDate,
    ];
  },
};

const actions = {
  async fetchInfo({ commit }, id) {
    const response = await axios.get(
      `${process.env.VUE_APP_API_URL}/soldiers/${id}`
    );
    commit("setInfo", response.data);
  },

  async fetchPersistenceGrants({ commit }, soldierId) {
    const response = await axios.get(
      `${process.env.VUE_APP_API_URL}/persistenceGrants/?soldierId=${soldierId}`
    );
    commit("setPersistenceGrants", response.data[0]);
  },
};

const mutations = {
  setInfo: (state, info) => (state.info = info),
  setPersistenceGrants: (state, persistenceGrants) =>
    (state.persistenceGrants = persistenceGrants),
};

export default {
  state,
  getters,
  mutations,
  actions,
};
