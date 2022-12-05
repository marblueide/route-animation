import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import routes from "~pages";

console.log();

export default createRouter({
  routes,
  history: createWebHistory(
    import.meta.env.MODE == "development" ? "" : "/route-animation"
  ),
});
