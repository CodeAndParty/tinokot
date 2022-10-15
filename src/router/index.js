import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/soldiers/:id",
    component: () =>
      import(/* webpackChunkName: "solider" */ "../views/SoldierView.vue"),
  },
  {
    path: "/units/:id",
    component: () =>
      import(/* webpackChunkName: "unit" */ "../views/UnitView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
