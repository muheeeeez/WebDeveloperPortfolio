import { createStore } from "vuex";
import getters from "./getters.js";
import mutation from "./mutator.js";
import actions from "./actions.js";

const store = createStore({
  namespaced: true,
  state() {
    return {
      projects: [
        {
          id: "p1",
          projectName: "Blockchain",
          projectDescription: "Blockchain design projects",
          projectLink: "www.google.com",
          projectCodeLink: "github.com",
        },
        {
          id: "p2",
          projectName: "Blockchain",
          projectDescription: "Blockchain design projects",
          projectLink: "www.google.com",
          projectCodeLink: "github.com",
        },
        {
          id: "p3",
          projectName: "Blockchain",
          projectDescription: "Blockchain design projects",
          projectLink: "www.google.com",
          projectCodeLink: "github.com",
        },
      ],
    };
  },
  mutation: mutation,
  actions: actions,
  getters: getters,
});
export default store;
