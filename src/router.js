import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Skills from "./views/Skills.vue";
import Projects from "./views/Projects.vue";
import Contact from "./views/Contact.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/skills",
      name: "Skills",
      component: Skills,
    },
    {
      path: "/project-list",
      name: "Projects",
      component: Projects,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 }
    }
  }
});

export default router;
