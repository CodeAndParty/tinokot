import axios from "axios";

const api = process.env.VUE_APP_API_URL;

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
    const response = await axios.get(`${api}/soldiers/${id}`);
    commit("setInfo", response.data);
  },

  async fetchPersistenceGrants({ commit }, soldierId) {
    const response = await axios.get(
      `${api}/persistenceGrants/?soldierId=${soldierId}`
    );
    commit("setPersistenceGrants", response.data[0]);
  },

  async fetchProficiencyBonus({ commit }, soldierId) {
    const response = await axios.get(
      `${api}/proficiencyBonus/?soldierId=${soldierId}`
    );
    commit("setProficiencyBonus", response.data[0]);
  },

  async fetchCourses({ commit }, soldierId) {
    const response = await axios.get(`${api}/courses/?soldierId=${soldierId}`);

    commit("setCourses", response.data);
  },

  async createCourse({ getters, commit }, { ...course }) {
    course.soldierId = getters.info.id;
    const response = await axios.post(`${api}/courses/`, course);
    commit("setCourses", [...getters.courses, response.data]);
  },

  async updateCourse({ getters, commit }, course) {
    const response = await axios.put(`${api}/courses/${course.id}`, course);
    commit("setCourses", [
      ...getters.courses.filter((course) => course.id !== response.data.id),
      response.data,
    ]);
  },

  async deleteCourse({ getters, commit }, id) {
    await axios.delete(`${api}/courses/${id}`);
    commit(
      "setCourses",
      getters.courses.filter((course) => course.id !== id)
    );
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
