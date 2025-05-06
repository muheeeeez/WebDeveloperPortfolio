<template>
  <div class="home">
    <!-- Hero Section -->
    <section
      class="min-h-screen py-12 flex items-center relative overflow-hidden hero-section"
    >
      <!-- Background decorative elements -->
      <div
        class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
      >
        <div
          class="absolute top-0 left-0 w-32 h-32 bg-primary rounded-full blur-3xl transform translate-x-12 -translate-y-8"
        ></div>
        <div
          class="absolute bottom-0 right-0 w-64 h-64 bg-secondary rounded-full blur-3xl transform -translate-x-16 translate-y-16"
        ></div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <!-- Left Column: Text Content -->
          <div data-aos="fade-right" data-aos-duration="1000" class="text-left">
            <div class="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
              <p class="text-primary font-medium">Hello, my name is</p>
            </div>
            <h1 class="gradient-text text-5xl md:text-6xl font-bold mb-5">
              Abdul-muiz Olaleye
            </h1>
            <h2 class="text-3xl md:text-4xl mb-6 text-gray-200">
              Full Stack Developer
            </h2>
            <p class="text-lg mb-10 max-w-lg text-gray-300 leading-relaxed">
              I'm a Computer Programming graduate from Algonquin College,
              specializing in building exceptional digital experiences with
              modern web technologies.
            </p>
            <div class="flex flex-wrap gap-6">
              <router-link
                to="/project-list"
                class="btn-primary text-lg px-8 py-3"
              >
                View My Work
              </router-link>
              <router-link
                to="/contact"
                class="btn-secondary text-lg px-8 py-3"
              >
                Contact Me
              </router-link>
            </div>
          </div>

          <!-- Right Column: 3D Model -->
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div
              class="model-container h-[600px] w-full rounded-2xl overflow-hidden shadow-xl border border-primary/20 backdrop-blur-sm relative bg-card-bg/30"
            >
              <div
                class="model-overlay absolute inset-0 z-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none"
              ></div>
              <ThreeModel />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Preview Section -->
    <section class="py-20 bg-card-bg" id="tech-stack-preview">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="mb-3">My Tech Stack</h2>
          <div class="section-divider mx-auto"></div>
          <p class="max-w-2xl mx-auto mt-4">
            Technologies I've been working with recently
          </p>
        </div>

        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div
            class="flex justify-center"
            v-for="(tech, index) in techStack"
            :key="index"
            data-aos="zoom-in"
            :data-aos-delay="100 + index * 50"
          >
            <div class="tech-card">
              <img :src="tech.icon" :alt="tech.name" class="tech-icon" />
              <p class="text-center mt-2">{{ tech.name }}</p>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <router-link to="/skills" class="btn-secondary">
            View All Skills
          </router-link>
        </div>
      </div>
    </section>

    <!-- Projects Preview Section -->
    <section class="py-20" id="projects-preview">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="mb-3">Featured Projects</h2>
          <div class="section-divider mx-auto"></div>
          <p class="max-w-2xl mx-auto mt-4">
            Some of my recent work that showcases my skills and experience
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div
            class="card overflow-hidden group"
            v-for="(project, index) in featuredProjects"
            :key="index"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="relative overflow-hidden">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div class="p-6">
              <h3 class="mb-2">{{ project.title }}</h3>
              <p class="mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="(tech, techIndex) in project.technologies"
                  :key="techIndex"
                  class="text-xs bg-primary/20 text-primary px-2 py-1 rounded"
                >
                  {{ tech }}
                </span>
              </div>
              <div class="flex justify-between">
                <a
                  :href="project.demoLink"
                  target="_blank"
                  class="text-primary hover:underline"
                  >Live Demo</a
                >
                <a
                  :href="project.codeLink"
                  target="_blank"
                  class="text-primary hover:underline"
                  >View Code</a
                >
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <router-link to="/project-list" class="btn-primary">
            View All Projects
          </router-link>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="py-20 bg-primary/10 relative overflow-hidden">
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <h2 class="mb-4">Interested in working together?</h2>
          <p class="text-lg mb-8">
            I'm currently looking for new opportunities to apply my skills and
            grow as a developer. Feel free to reach out if you have a project or
            position that might be a good fit!
          </p>
          <router-link to="/contact" class="btn-primary">
            Get in Touch
          </router-link>
        </div>
      </div>

      <!-- Background decorative elements -->
      <div
        class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
      >
        <div
          class="absolute top-0 left-0 w-24 h-24 bg-primary rounded-full transform translate-x-12 -translate-y-8"
        ></div>
        <div
          class="absolute bottom-0 right-0 w-48 h-48 bg-secondary rounded-full transform -translate-x-16 translate-y-16"
        ></div>
      </div>
    </section>
  </div>
</template>

<script>
import ThreeModel from "../components/ThreeModel.vue";

// Import tech stack icons
import vueLogo from "../img/logo/Vue-logo.png";
import jsLogo from "../img/logo/js-logo.png";
import typescriptLogo from "../img/logo/TypeScript.png";
import nodejsLogo from "../img/logo/nodejs.png";
import htmlLogo from "../img/logo/html-logo.png";
import cssLogo from "../img/logo/css-logo.png";

// Import project placeholder image - using demo.jpg instead since project-placeholder.jpg doesn't exist

import helpMeOut from "../img/help3.png";
import quizMaker from "../img/quiz.png";
import smartBrains from "../img/smartbrains.png";

export default {
  name: "HomePage",
  components: {
    ThreeModel,
  },
  data() {
    return {
      techStack: [
        { name: "Vue.js", icon: vueLogo },
        { name: "JavaScript", icon: jsLogo },
        { name: "TypeScript", icon: typescriptLogo },
        { name: "Node.js", icon: nodejsLogo },
        { name: "HTML5", icon: htmlLogo },
        { name: "CSS3", icon: cssLogo },
      ],
      featuredProjects: [
        {
          title: "HelpMeOut",
          description:
            "HelpMeOut is a web application that allows users to create and share instructional screen recordings to help friends and family navigate websites",
          image: helpMeOut,
          technologies: [
            "Vue.js",
            "TypeScript",
            "Tailwind CSS",
            "Firebase",
            "API",
          ],
          demoLink: "https://help-meout.netlify.app/",
          codeLink: "https://github.com/muheeeeez/HelpMeOut-v2",
        },
        {
          title: "QuizMakerAI",
          description:
            "A comprehensive quiz creation and management platform that enables users to build, share, and take quizzes.",
          image: quizMaker,
          technologies: ["Vue.js", "Firebase", "Axios"],
          demoLink: "https://quizmai.com/",
          codeLink: "https://github.com/QuizMakerAI/QuizMakerFrontend",
        },
        {
          title: "SmartBrain",
          description:
            "SmartBrain is a web application that detects faces in images using AI algorithms",
          image: smartBrains,
          technologies: ["Vue.js", "Tailwind CSS", "Firebase", "Axios"],
          demoLink: "https://smart-brain-dev.netlify.app/",
          codeLink: "https://github.com/muheeeeez/Smartbrain-Frontend",
        },
      ],
    };
  },
};
</script>

<style scoped>
.tech-card {
  @apply p-4 bg-card-bg/50 rounded-lg flex flex-col items-center justify-center transform hover:-translate-y-2 transition-all duration-300 w-full h-32;
}

.tech-icon {
  @apply h-12 w-auto mb-2;
}

.hero-section {
  background-color: #050507;
  background-image: radial-gradient(
      circle at 50% 50%,
      rgba(74, 90, 249, 0.05) 0%,
      transparent 40%
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(231, 15, 170, 0.03) 0%,
      transparent 30%
    );
}

.model-container {
  position: relative;
  background: linear-gradient(
    145deg,
    rgba(32, 32, 40, 0.6),
    rgba(10, 10, 15, 0.8)
  );
  transition: all 0.5s ease;
  box-shadow: 0 10px 30px -5px rgba(74, 90, 249, 0.1),
    0 5px 15px -5px rgba(231, 15, 170, 0.05);
}

.model-container:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px -5px rgba(74, 90, 249, 0.2),
    0 10px 20px -5px rgba(231, 15, 170, 0.15);
}

.gradient-text {
  background: linear-gradient(to right, #e70faa, #4a5af9);
  -webkit-background-clip: text;
  color: transparent;
  display: inline-block;
}

@media (max-width: 768px) {
  .model-container {
    height: 400px;
    margin-top: 2rem;
  }
}
</style> 