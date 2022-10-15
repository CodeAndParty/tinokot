import axios from "axios";

const state = {
  attendance: null,
  name: null,
};

const getters = {
  name: (state) => state.name,
  attendance: (state) => state.attendance,
};

const actions = {
  async fetchAttendanceReport({ commit }, unitId) {
    const response = await axios.get(
      `${process.env.VUE_APP_API_URL}/attendanceReport/?unitId=${unitId}`
    );
    commit("setAttendance", response.data[0].attendance);
    commit("setName", response.data[0].unitName);
  },
};

const mutations = {
  setAttendance: (state, attendance) => (state.attendance = attendance),
  setName: (state, name) => (state.name = name),
};

export default {
  state,
  getters,
  mutations,
  actions,
};
