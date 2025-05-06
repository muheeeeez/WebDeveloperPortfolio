<template>
  <nav class="fixed w-full top-0 z-50 bg-dark/90 backdrop-blur-md shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="flex items-center">
            <img :src="logoImage" alt="Logo" class="h-10 w-auto" />
            <span class="ml-2 text-xl font-bold gradient-text">Abdul-muiz</span>
          </router-link>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-center space-x-8">
            <router-link to="/home" class="nav-link" active-class="text-primary"
              >Home</router-link
            >
            <router-link
              to="/about"
              class="nav-link"
              active-class="text-primary"
              >About</router-link
            >
            <router-link
              to="/skills"
              class="nav-link"
              active-class="text-primary"
              >Skills</router-link
            >
            <router-link
              to="/project-list"
              class="nav-link"
              active-class="text-primary"
              >Projects</router-link
            >
            <router-link
              to="/contact"
              class="nav-link"
              active-class="text-primary"
              >Contact</router-link
            >
            <button @click="downloadResume" class="btn-primary">Resume</button>
          </div>
        </div>

        <!-- Social Icons (Desktop) -->
        <div class="hidden md:flex items-center space-x-4">
          <a
            href="https://github.com/muheeeeez"
            target="_blank"
            class="text-gray-300 hover:text-primary transition"
          >
            <img :src="githubIcon" alt="GitHub" class="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com/IAmMuizOlaleye"
            target="_blank"
            class="text-gray-300 hover:text-primary transition"
          >
            <img :src="twitterIcon" alt="Twitter" class="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/abdul-muiz-olaleye/"
            target="_blank"
            class="text-gray-300 hover:text-primary transition"
          >
            <img :src="linkedinIcon" alt="LinkedIn" class="h-6 w-6" />
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMenu" class="text-gray-300 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              v-if="!isMenuOpen"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              v-else
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div class="md:hidden" v-if="isMenuOpen">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark-blue">
        <router-link
          to="/home"
          class="mobile-nav-link"
          active-class="bg-primary text-white"
          >Home</router-link
        >
        <router-link
          to="/about"
          class="mobile-nav-link"
          active-class="bg-primary text-white"
          >About</router-link
        >
        <router-link
          to="/skills"
          class="mobile-nav-link"
          active-class="bg-primary text-white"
          >Skills</router-link
        >
        <router-link
          to="/project-list"
          class="mobile-nav-link"
          active-class="bg-primary text-white"
          >Projects</router-link
        >
        <router-link
          to="/contact"
          class="mobile-nav-link"
          active-class="bg-primary text-white"
          >Contact</router-link
        >
        <button
          @click="downloadResume"
          class="w-full text-left px-3 py-2 text-base font-medium text-white bg-primary rounded-md"
        >
          Resume
        </button>

        <div class="flex justify-start space-x-4 pt-3 pl-2">
          <a
            href="https://github.com/muheeeeez"
            target="_blank"
            class="text-gray-300 hover:text-white"
          >
            <img :src="githubIcon" alt="GitHub" class="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com/IAmMuizOlaleye"
            target="_blank"
            class="text-gray-300 hover:text-white"
          >
            <img :src="twitterIcon" alt="Twitter" class="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/abdul-muiz-olaleye/"
            target="_blank"
            class="text-gray-300 hover:text-white"
          >
            <img :src="linkedinIcon" alt="LinkedIn" class="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// Import images
import logoImage from "../img/logo.png";
import githubIcon from "../img/github-icon.png";
import twitterIcon from "../img/twitter-icon.png";
import linkedinIcon from "../img/linkedin-icon.png";

export default {
  data() {
    return {
      // Make imported images available to template
      logoImage,
      githubIcon,
      twitterIcon,
      linkedinIcon,
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    downloadResume() {
      const pdfUrl = "./src/resume/Abdul-muiz-Olaleye.pdf";
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "Abdul-muiz-Olaleye-Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
  watch: {
    $route() {
      // Close menu on route change
      this.isMenuOpen = false;
    },
  },
};
</script>

<style scoped>
.nav-link {
  @apply text-gray-300 hover:text-primary font-medium transition-colors duration-200;
}

.mobile-nav-link {
  @apply block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-dark-blue hover:text-white transition-colors duration-200;
}
</style>