import { createApp } from "vue";
import router from "./router.js";
import App from "./App.vue";
import NavigationBar from "./components/NavigationBar.vue";
const app = createApp(App);
app.use(router);
app.component("NavigationBar", NavigationBar);

app.mount("#app");
