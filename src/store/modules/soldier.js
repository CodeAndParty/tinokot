import axios from "axios";

const state = {
  info: null,
  persistenceGrants: null,
  proficiencyBonus: null,
  courses: null,
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
  proficiencyBonus: (state) => state.proficiencyBonus,
  courses: (state) => state.courses,
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

  async fetchProficiencyBonus({ commit }, soldierId) {
    const response = await axios.get(
      `${process.env.VUE_APP_API_URL}/proficiencyBonus/?soldierId=${soldierId}`
    );
    commit("setProficiencyBonus", response.data[0]);
  },

  async fetchCourses({ commit }, soldierId) {
    const response = await axios.get(
      `${process.env.VUE_APP_API_URL}/courses/?soldierId=${soldierId}`
    );
    commit("setCourses", response.data[0].courses);
  },
};

const mutations = {
  setInfo: (state, info) => (state.info = info),
  setPersistenceGrants: (state, persistenceGrants) =>
    (state.persistenceGrants = persistenceGrants),
  setProficiencyBonus: (state, proficiencyBonus) =>
    (state.proficiencyBonus = proficiencyBonus),
  setCourses: (state, courses) => (state.courses = courses),
};

export default {
  state,
  getters,
  mutations,
  actions,
};
