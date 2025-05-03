<template>
  <div class="app-container">
    <NavigationBar />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <footer class="py-8 bg-dark-blue text-center">
      <p class="text-sm">© {{ currentYear }} Abdul-muiz Olaleye. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";

export default {
  name: "App",
  components: { NavigationBar },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
* {
  font-family: "Poppins", sans-serif;
}
body {
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background-color: #000;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>