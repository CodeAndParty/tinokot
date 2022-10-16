import Vue from "vue";

Vue.use({
  install(Vue) {
    Vue.prototype.$formatDateString = (dateString) => {
      return new Date(dateString).toLocaleDateString("he", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    };
    Vue.prototype.$isDateStringBiggerThanToday = (dateString) => {
      return new Date(dateString) >= new Date();
    };
  },
});
