<template>
  <div class="projects-page">
    <!-- Header Section -->
    <section class="section pt-28">
      <div class="container mx-auto">
        <div class="text-center mb-12" data-aos="fade-up">
          <h1 class="gradient-text mb-4">My Projects</h1>
          <p class="text-lg max-w-3xl mx-auto">
            A collection of my recent work that demonstrates my skills,
            experience, and the technologies I work with.
          </p>
          <div class="section-divider mx-auto mt-6"></div>
        </div>
      </div>
    </section>

    <!-- Project Filters -->
    <section class="section py-8">
      <div class="container mx-auto">
        <div
          class="flex flex-wrap justify-center gap-4 mb-8"
          data-aos="fade-up"
        >
          <button
            @click="currentFilter = 'all'"
            class="filter-btn"
            :class="{ active: currentFilter === 'all' }"
          >
            All Projects
          </button>
          <button
            v-for="(category, index) in categories"
            :key="index"
            @click="currentFilter = category"
            class="filter-btn"
            :class="{ active: currentFilter === category }"
          >
            {{ category }}
          </button>
        </div>

        <!-- Project Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(project, index) in filteredProjects"
            :key="index"
            class="project-card"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="project-image">
              <img :src="project.image" :alt="project.title" />
              <div class="project-overlay">
                <div class="project-links">
                  <a
                    :href="project.demoLink"
                    target="_blank"
                    class="project-link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    <span>Live Demo</span>
                  </a>
                  <a
                    :href="project.codeLink"
                    target="_blank"
                    class="project-link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="project-info">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="project-tech">
                <span
                  v-for="(tech, techIndex) in project.technologies"
                  :key="techIndex"
                  >{{ tech }}</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- No Projects Message -->
        <div
          v-if="filteredProjects.length === 0"
          class="text-center py-12"
          data-aos="fade-up"
        >
          <p class="text-lg">Project Coming Soon</p>
          <button @click="currentFilter = 'all'" class="btn-primary mt-4">
            View All Projects
          </button>
        </div>
      </div>
    </section>

    <!-- GitHub Activity -->
    <section class="section py-16">
      <div class="container mx-auto">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="mb-3">GitHub Activity</h2>
          <div class="section-divider mx-auto"></div>
          <p class="max-w-2xl mx-auto mt-4">
            Check out my coding activity and contributions on GitHub
          </p>
        </div>

        <div class="github-activity card p-8" data-aos="fade-up">
          <div
            class="flex flex-col md:flex-row items-center justify-between mb-8"
          >
            <div class="mb-6 md:mb-0">
              <h3 class="text-2xl font-bold gradient-text mb-4">
                GitHub Insights
              </h3>
              <p class="text-lg mb-6">
                My open source journey and coding activities
              </p>
              <a
                href="https://github.com/muheeeeez"
                target="_blank"
                class="btn-primary flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
                Visit My GitHub Profile
              </a>
            </div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            <div class="github-stat">
              <h3>29+</h3>
              <p>Repositories</p>
            </div>
            <div class="github-stat">
              <h3>230+</h3>
              <p>Contributions</p>
            </div>
            <div class="github-stat">
              <h3>6+</h3>
              <p>Popular Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="section bg-primary/10 py-16">
      <div class="container mx-auto">
        <div class="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <h2 class="mb-4">Have a project in mind?</h2>
          <p class="text-lg mb-8">
            I'm always interested in hearing about new projects and
            opportunities. Let's work together to bring your ideas to life.
          </p>
          <router-link to="/contact" class="btn-primary">
            Get In Touch
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import helpMeOut from "../img/help3.png";
import quizMaker from "../img/quiz.png";
import smartBrains from "../img/smartbrains.png";
import weatherApp from "../img/weatherapp.png";
import deGentlesoul from "../img/degen.png";
import dotNotation from "../img/DotNotation.png";
import tullips from "../img/tullips.png";
import artNFT from "../img/blockchain.png";
import blogPlatform from "../img/blogplatform.png";
export default {
  name: "ProjectsPage",
  data() {
    return {
      currentFilter: "all",
      categories: ["Chrome Extension", "Web Development", "Web Design", "Mobile Development", "School Projects"],
      projects: [
        {
          title: "HelpMeOut",
          description:
            "HelpMeOut is a web application that allows users to create and share instructional screen recordings to help friends and family navigate websites",
          image: helpMeOut,
          technologies: ["Vue.js", "Node.js", "Firebase", "Axios"],
          category: "Web Development",
          demoLink: "https://help-meout.netlify.app/",
          codeLink: "https://github.com/muheeeeez/HelpMeOut-v2",
        },
        {
          title: "HelpMeOut Mobile App ",
          description: "A mobile app for the HelpMeOut web application",
          image: helpMeOut,
          technologies: ["Flutter", "Dart", "Firebase", "Rest API"],
          category: "Mobile Development",
          demoLink: "https://tinyurl.com/2absdxcl",
          codeLink: "https://github.com/muheeeeez/HelpMeOutFlutter.git",
        },
        {
          title: "QuizMakerAI",
          description:
            "A comprehensive quiz creation and management platform that enables users to build, share, and take quizzes.",
          image: quizMaker,
          technologies: ["Vue.js", "Firebase", "Axios"],
          category: "Web Development",
          demoLink: "https://quizmai.com/",
          codeLink: "https://github.com/QuizMakerAI/QuizMakerFrontend",
        },
        {
          title: "SmartBrain",
          description:
            "SmartBrain is a web application that detects faces in images using AI algorithms",
          image: smartBrains,
          technologies: ["Vue.js", "Tailwind CSS", "Firebase", "Axios"],
          category: "Web Development",
          demoLink: "https://smart-brain-dev.netlify.app/",
          codeLink: "https://github.com/muheeeeez/Smartbrain-Frontend",
        },
        {
          title: "DE Gentlesoul Global",
          description:
            "DE Gentlesoul Global is a comprehensive travel and education agency website that helps clients with visa processing, study abroad admissions, accommodation bookings, and flight arrangements",
          image: deGentlesoul,
          technologies: ["Vue.js", "Google Analytics", "Calendly Integration"],
          category: "Web Development",
          demoLink: "https://degentlesoulresources.info/",
          codeLink: "https://github.com/muheeeeez/Gentlesoul_Global",
        },
        {
          title: "Weather App",
          description:
            "A real-time Weather Chrome Extension that provides instant forecasts and alerts directly from your browser toolbar",
          image: weatherApp,
          technologies: [
            "Vue.js",
            "Tailwind CSS",
            "Chrome Extension API",
            "OpenWeather API",
          ],
          category: "Chrome Extension",
          demoLink:
            "https://chromewebstore.google.com/detail/weather-app/gmhpmnpccmpioibfpgjjcnmcgdbdkkmi",
          codeLink: "https://github.com/muheeeeez/WeatherAppChromeExtention",
        },
        {
          title: "DotNotation",
          description:
            "DotNotation is an educational platform website designed to provide students access to various programming language courses",
          image: dotNotation,
          technologies: ["HTML5", "CSS3", "Font Awesome"],
          category: "Web Design",
          demoLink: "https://dotnotation.netlify.app/",
          codeLink: "https://github.com/muheeeeez/Dotnotation-Website",
        },
        {
          title: "Tullips",
          description:
            "A modern, interactive Website showcasing web design skills ",
          image: tullips,
          technologies: ["Vuej.s"],
          category: "Web Design",
          demoLink: "https://tullipsweb.netlify.app/",
          codeLink: "https://github.com/muheeeeez/Tulllips-Website",
        },
        {
          title: "Art.NFT ",
          description: "A blockchain-themed web application",
          image: artNFT,
          technologies: ["Vue.js", "Font Awesome"],
          category: "Web Design",
          demoLink: "https://artnftblockchain.netlify.app/",
          codeLink: "https://github.com/muheeeeez/Blockchain",
        },
        {
          title: "Blog Platform",
          description: "A blog platform that allows users to create and share blog posts",
          image: blogPlatform,
          technologies: ["HTML5", "CSS3", "PHP", "MySQL", "JavaScript", "Font Awesome"],
          category: "School Projects",
          demoLink: "https://blogplatform.kesug.com/",
          codeLink: "https://github.com/BlogSystemProject/BlogSystem",
        },
        // {
        //   title: "Cloud Projects Coming Soon",
        //   description:
        //     "I'm currently working on AWS-based cloud projects that incorporate my AWS Cloud Practitioner and AI Practitioner knowledge.",
        //   image: "./src/img/project-placeholder.jpg",
        //   technologies: ["AWS", "Cloud Architecture", "Serverless"],
        //   category: "School Projects",
        //   demoLink: "#",
        //   codeLink: "#",
        // },
      ],
    };
  },
  computed: {
    filteredProjects() {
      if (this.currentFilter === "all") {
        return this.projects;
      } else {
        return this.projects.filter(
          (project) => project.category === this.currentFilter
        );
      }
    },
  },
};
</script>

<style scoped>
.filter-btn {
  @apply px-4 py-2 rounded-md transition-all duration-200 bg-card-bg hover:bg-primary/20;
}

.filter-btn.active {
  @apply bg-primary text-white;
}

.project-card {
  @apply bg-card-bg rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2;
}

.project-image {
  @apply relative overflow-hidden h-52;
}

.project-image img {
  @apply w-full h-full object-cover transition-transform duration-500 transform scale-100;
}

.project-card:hover .project-image img {
  @apply scale-110;
}

.project-overlay {
  @apply absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 transition-opacity duration-300;
}

.project-card:hover .project-overlay {
  @apply opacity-100;
}

.project-links {
  @apply flex flex-col space-y-4;
}

.project-link {
  @apply flex items-center bg-white text-primary px-4 py-2 rounded-full shadow-lg transition-all duration-200 hover:bg-primary hover:text-white;
}

.project-link svg {
  @apply mr-2;
}

.project-info {
  @apply p-6;
}

.project-info h3 {
  @apply text-xl font-bold mb-2;
}

.project-tech {
  @apply flex flex-wrap gap-2 mt-4;
}

.project-tech span {
  @apply text-xs bg-primary/20 text-primary px-2 py-1 rounded;
}

.github-stat {
  @apply text-center p-4 bg-card-bg/50 rounded-lg;
}

.github-stat h3 {
  @apply text-3xl font-bold text-primary mb-2;
}
</style> 