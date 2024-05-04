import { createApp } from "vue";
import App from "./App.vue";
import NavigationBar from "./components/NavigationBar.vue";

const app = createApp(App);
app.component("NavigationBar", NavigationBar);
app.mount("#app");
