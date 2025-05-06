<template>
  <div class="skills-page">
    <!-- Header Section -->
    <section class="section pt-28">
      <div class="container mx-auto">
        <div class="text-center mb-12" data-aos="fade-up">
          <h1 class="gradient-text mb-4">Technical Skills</h1>
          <p class="text-lg max-w-3xl mx-auto">
            My technical skills and expertise that I've developed through
            education, personal projects, and continuous learning as a Computer
            Programming graduate from Algonquin College.
          </p>
          <div class="section-divider mx-auto mt-6"></div>
        </div>
      </div>
    </section>

    <!-- Main Skills Section -->
    <section class="section py-12">
      <div class="container mx-auto">
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Frontend Skills -->
          <div class="skills-category" data-aos="fade-right">
            <h2 class="mb-6">
              <span class="text-primary">&lt;</span>
              Frontend Development
              <span class="text-primary">/&gt;</span>
            </h2>
            <p class="mb-8">
              Building responsive and interactive user interfaces with modern
              frameworks and tools.
            </p>

            <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div
                v-for="(skill, index) in frontendSkills"
                :key="index"
                class="skill-item"
              >
                <div class="skill-logo">
                  <img :src="skill.icon" :alt="skill.name" />
                </div>
                <h3>{{ skill.name }}</h3>
                <div class="skill-level">
                  <div
                    class="skill-bar"
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Backend Skills -->
          <div class="skills-category" data-aos="fade-left">
            <h2 class="mb-6">
              <span class="text-primary">{</span>
              Backend Development
              <span class="text-primary">}</span>
            </h2>
            <p class="mb-8">
              Building server-side applications, APIs, and database management
              systems.
            </p>

            <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div
                v-for="(skill, index) in backendSkills"
                :key="index"
                class="skill-item"
              >
                <div class="skill-logo">
                  <img :src="skill.icon" :alt="skill.name" />
                </div>
                <h3>{{ skill.name }}</h3>
                <div class="skill-level">
                  <div
                    class="skill-bar"
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Skills Sections -->
    <section class="section bg-card-bg py-16">
      <div class="container mx-auto">
        <div class="grid md:grid-cols-3 gap-12">
          <!-- Database Skills -->
          <div class="skills-category" data-aos="fade-up">
            <h2 class="mb-6">
              <span class="text-secondary">[ ]</span>
              Databases
            </h2>
            <p class="mb-8">Experience with relational and NoSQL databases.</p>

            <div class="space-y-6">
              <div
                v-for="(skill, index) in databaseSkills"
                :key="index"
                class="skill-item"
              >
                <div class="skill-logo">
                  <img :src="skill.icon" :alt="skill.name" />
                </div>
                <h3>{{ skill.name }}</h3>
                <div class="skill-level">
                  <div
                    class="skill-bar"
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- DevOps & Tools -->
          <div class="skills-category" data-aos="fade-up" data-aos-delay="100">
            <h2 class="mb-6">
              <span class="text-secondary">$ </span>
              DevOps & Tools
            </h2>
            <p class="mb-8">
              Knowledge of development tools, version control, and deployment.
            </p>

            <div class="space-y-6">
              <div
                v-for="(skill, index) in devopsSkills"
                :key="index"
                class="skill-item"
              >
                <div class="skill-logo">
                  <img :src="skill.icon" :alt="skill.name" />
                </div>
                <h3>{{ skill.name }}</h3>
                <div class="skill-level">
                  <div
                    class="skill-bar"
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Soft Skills -->
          <div class="skills-category" data-aos="fade-up" data-aos-delay="200">
            <h2 class="mb-6">
              <span class="text-secondary">✨ </span>
              Soft Skills
            </h2>
            <p class="mb-8">
              Essential professional skills for effective collaboration and
              problem-solving.
            </p>

            <div class="space-y-6">
              <div
                v-for="(skill, index) in softSkills"
                :key="index"
                class="skill-item"
              >
                <h3>{{ skill.name }}</h3>
                <div class="skill-level">
                  <div
                    class="skill-bar"
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications and Learning -->
    <section class="section py-16">
      <div class="container mx-auto">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="mb-3">Continuous Learning</h2>
          <div class="section-divider mx-auto"></div>
          <p class="max-w-2xl mx-auto mt-4">
            I'm constantly expanding my knowledge through courses,
            certifications, and self-study
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Current Learning -->
          <div class="card" data-aos="fade-up">
            <h3 class="mb-4">Currently Learning</h3>
            <ul class="space-y-4">
              <li
                v-for="(item, index) in currentlyLearning"
                :key="index"
                class="flex items-start"
              >
                <span class="text-primary mr-2">▶</span>
                <div>
                  <h4 class="text-lg font-medium">{{ item.name }}</h4>
                  <p>{{ item.description }}</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Certifications -->
          <div class="card" data-aos="fade-up" data-aos-delay="100">
            <h3 class="mb-4">Certifications</h3>
            <ul class="space-y-4">
              <li
                v-for="(cert, index) in certifications"
                :key="index"
                class="flex items-start"
              >
                <span class="text-primary mr-2">🏆</span>
                <div>
                  <h4 class="text-lg font-medium">{{ cert.name }}</h4>
                  <p>{{ cert.issuer }} | {{ cert.date }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="section bg-primary/10 py-16">
      <div class="container mx-auto">
        <div class="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <h2 class="mb-4">Let's build something amazing together</h2>
          <p class="text-lg mb-8">
            Interested in my skills? I'm open to job opportunities and
            collaboration on interesting projects.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <router-link to="/project-list" class="btn-secondary">
              View Projects
            </router-link>
            <router-link to="/contact" class="btn-primary">
              Contact Me
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// Import logo images
import htmlLogo from "../img/logo/html-logo.png";
import cssLogo from "../img/logo/css-logo.png";
import jsLogo from "../img/logo/js-logo.png";
import typescriptLogo from "../img/logo/TypeScript.png";
import vueLogo from "../img/logo/Vue-logo.png";
import nuxtLogo from "../img/logo/Nuxt JS.png";
import tailwindLogo from "../img/logo/tailwind-logo.png";
import flutterLogo from "../img/logo/Flutter.png";
import ionicLogo from "../img/logo/Ionic.png";
import nodejsLogo from "../img/logo/nodejs.png";
import javaLogo from "../img/logo/Java-logo.png";
import phpLogo from "../img/logo/PHP.png";
import firebaseLogo from "../img/logo/firebase.png";
import mysqlLogo from "../img/logo/mysql-logo.png";
import postgresLogo from "../img/logo/postgres-logo.png";
import mongodbLogo from "../img/logo/mongodb.png";
import ssmsLogo from "../img/logo/ssms.png";
import gitLogo from "../img/logo/git-logo.png";
import githubLogo from "../img/logo/github-logo.png";
import vscodeLogo from "../img/logo/vscode-logo.png";
import eclipseLogo from "../img/logo/eclipse-logo.png";

export default {
  name: "SkillsPage",
  data() {
    return {
      frontendSkills: [
        { name: "HTML5", icon: htmlLogo, level: 95 },
        { name: "CSS3", icon: cssLogo, level: 90 },
        { name: "JavaScript", icon: jsLogo, level: 85 },
        { name: "TypeScript", icon: typescriptLogo, level: 75 },
        { name: "Vue.js", icon: vueLogo, level: 80 },
        { name: "Nuxt.js", icon: nuxtLogo, level: 70 },
        { name: "Tailwind CSS", icon: tailwindLogo, level: 85 },
        { name: "Flutter", icon: flutterLogo, level: 60 },
        { name: "Ionic", icon: ionicLogo, level: 65 },
      ],
      backendSkills: [
        { name: "Node.js", icon: nodejsLogo, level: 80 },
        { name: "Java", icon: javaLogo, level: 75 },
        { name: "PHP", icon: phpLogo, level: 70 },
        { name: "Express", icon: nodejsLogo, level: 75 },
        { name: "RESTful APIs", icon: nodejsLogo, level: 80 },
        { name: "Firebase", icon: firebaseLogo, level: 75 },
      ],
      databaseSkills: [
        { name: "MySQL", icon: mysqlLogo, level: 85 },
        { name: "PostgreSQL", icon: postgresLogo, level: 75 },
        { name: "MongoDB", icon: mongodbLogo, level: 80 },
        { name: "SQL Server", icon: ssmsLogo, level: 70 },
      ],
      devopsSkills: [
        { name: "Git", icon: gitLogo, level: 90 },
        { name: "GitHub", icon: githubLogo, level: 85 },
        { name: "VS Code", icon: vscodeLogo, level: 95 },
        { name: "Eclipse", icon: eclipseLogo, level: 70 },
      ],
      softSkills: [
        { name: "Problem Solving", level: 90 },
        { name: "Team Collaboration", level: 85 },
        { name: "Communication", level: 80 },
        { name: "Time Management", level: 85 },
        { name: "Adaptability", level: 90 },
      ],
      currentlyLearning: [
        {
          name: "Cloud Computing (AWS)",
          description:
            "Learning AWS services and cloud architecture for scalable applications.",
        },
        {
          name: "Three.js & WebGL",
          description:
            "Exploring 3D graphics programming for web applications.",
        },
        {
          name: "AI/ML Integration",
          description:
            "Learning how to integrate AI services into web applications.",
        },
      ],
      certifications: [
        {
          name: "AWS AI Practitioner",
          issuer: "Amazon Web Services",
          date: "2025",
        },
        {
          name: "AWS Cloud Practitioner",
          issuer: "Amazon Web Services",
          date: "2024",
        },

        {
          name: "Computer Programming Diploma",
          issuer: "Algonquin College",
          date: "2024 - Present",
        },
        {
          name: "BSc Economics",
          issuer: "Babcock University",
          date: "2020 - 2023",
        },
      ],
    };
  },
};
</script>

<style scoped>
.skill-item {
  @apply rounded-md p-4 bg-card-bg/50 transition-all duration-300 hover:bg-card-bg;
}

.skill-logo {
  @apply mb-4 flex justify-center;
}

.skill-logo img {
  @apply h-12 w-auto;
}

.skill-level {
  @apply w-full h-2 bg-gray-700 rounded-full mt-2 overflow-hidden;
}

.skill-bar {
  @apply h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000;
}

h3 {
  @apply text-lg font-medium;
}
</style> 