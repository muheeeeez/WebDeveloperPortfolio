import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./components/DashboardOverview.vue";
import AboutMe from "./components/AboutMe.vue";
import ProjectList from "./components/ProjectList.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: Dashboard,
    },
    {
      path: "/about",
      component: AboutMe,
    },
    {
      path: "/project-list",
      component: ProjectList,
    },
  ],
});
export default router;
