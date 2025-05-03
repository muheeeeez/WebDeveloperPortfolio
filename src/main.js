import { createApp } from "vue";
import router from "./router.js";
import App from "./App.vue";
import NavigationBar from "./components/NavigationBar.vue";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './assets/main.css';

// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

const app = createApp(App);
app.use(router);
app.component("NavigationBar", NavigationBar);

app.mount("#app");
