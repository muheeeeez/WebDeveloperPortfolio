<template>
  <div class="skills-page">
    <!-- Header Section -->
    <section class="section pt-28">
      <div class="container mx-auto">
        <div class="text-center mb-12" data-aos="fade-up">
          <h1 class="gradient-text mb-4">Technical Skills</h1>
          <p class="text-lg max-w-3xl mx-auto">
            My technical skills and expertise that I've developed through education, personal projects, 
            and continuous learning as a Computer Programming graduate from Algonquin College.
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
            <p class="mb-8">Building responsive and interactive user interfaces with modern frameworks and tools.</p>
            
            <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div v-for="(skill, index) in frontendSkills" :key="index" class="skill-item">
                <div class="skill-logo">
                  <img :src="skill.icon" :alt="skill.name" />
                </div>
                <h3>{{ skill.name }}</h3>
                <div class="skill-level">
                  <div class="skill-bar" :style="{ width: skill.level + '%' }"></div>
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
            <p class="mb-8">Building server-side applications, APIs, and database management systems.</p>
            
            <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div v-for="(skill, index) in backendSkills" :key="index" class="skill-item">
                <div class="skill-logo">
                  <img :src="skill.icon" :alt="skill.name" />
                </div>
                <h3>{{ skill.name }}</h3>
                <div class="skill-level">
                  <div class="skill-bar" :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Skills Sections -->
    <section class="section bg-dark-blue py-16">
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
              <div v-for="(skill, index) in databaseSkills" :key="index" class="skill-item">
                <div class="skill-logo">
                  <img :src="skill.icon" :alt="skill.name" />
                </div>
                <h3>{{ skill.name }}</h3>
                <div class="skill-level">
                  <div class="skill-bar" :style="{ width: skill.level + '%' }"></div>
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
            <p class="mb-8">Knowledge of development tools, version control, and deployment.</p>
            
            <div class="space-y-6">
              <div v-for="(skill, index) in devopsSkills" :key="index" class="skill-item">
                <div class="skill-logo">
                  <img :src="skill.icon" :alt="skill.name" />
                </div>
                <h3>{{ skill.name }}</h3>
                <div class="skill-level">
                  <div class="skill-bar" :style="{ width: skill.level + '%' }"></div>
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
            <p class="mb-8">Essential professional skills for effective collaboration and problem-solving.</p>
            
            <div class="space-y-6">
              <div v-for="(skill, index) in softSkills" :key="index" class="skill-item">
                <h3>{{ skill.name }}</h3>
                <div class="skill-level">
                  <div class="skill-bar" :style="{ width: skill.level + '%' }"></div>
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
            I'm constantly expanding my knowledge through courses, certifications, and self-study
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Current Learning -->
          <div class="card" data-aos="fade-up">
            <h3 class="mb-4">Currently Learning</h3>
            <ul class="space-y-4">
              <li v-for="(item, index) in currentlyLearning" :key="index" class="flex items-start">
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
              <li v-for="(cert, index) in certifications" :key="index" class="flex items-start">
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
export default {
  name: 'SkillsPage',
  data() {
    return {
      frontendSkills: [
        { name: 'HTML5', icon: './src/img/logo/html-logo.png', level: 95 },
        { name: 'CSS3', icon: './src/img/logo/css-logo.png', level: 90 },
        { name: 'JavaScript', icon: './src/img/logo/js-logo.png', level: 85 },
        { name: 'TypeScript', icon: './src/img/logo/TypeScript.png', level: 75 },
        { name: 'Vue.js', icon: './src/img/logo/Vue-logo.png', level: 80 },
        { name: 'Nuxt.js', icon: './src/img/logo/Nuxt JS.png', level: 70 },
        { name: 'Tailwind CSS', icon: './src/img/logo/tailwind-logo.png', level: 85 },
        { name: 'Flutter', icon: './src/img/logo/Flutter.png', level: 60 },
        { name: 'Ionic', icon: './src/img/logo/Ionic.png', level: 65 }
      ],
      backendSkills: [
        { name: 'Node.js', icon: './src/img/logo/nodejs.png', level: 80 },
        { name: 'Java', icon: './src/img/logo/Java-logo.png', level: 75 },
        { name: 'PHP', icon: './src/img/logo/PHP.png', level: 70 },
        { name: 'Express', icon: './src/img/logo/express.png', level: 75 },
        { name: 'RESTful APIs', icon: './src/img/logo/api.png', level: 80 },
        { name: 'Firebase', icon: './src/img/logo/firebase.png', level: 75 }
      ],
      databaseSkills: [
        { name: 'MySQL', icon: './src/img/logo/mysql-logo.png', level: 85 },
        { name: 'PostgreSQL', icon: './src/img/logo/postgres-logo.png', level: 75 },
        { name: 'MongoDB', icon: './src/img/logo/mongodb.png', level: 80 },
        { name: 'SQL Server', icon: './src/img/logo/ssms.png', level: 70 }
      ],
      devopsSkills: [
        { name: 'Git', icon: './src/img/logo/git-logo.png', level: 90 },
        { name: 'GitHub', icon: './src/img/logo/github-logo.png', level: 85 },
        { name: 'VS Code', icon: './src/img/logo/vscode-logo.png', level: 95 },
        { name: 'Eclipse', icon: './src/img/logo/eclipse-logo.png', level: 70 }
      ],
      softSkills: [
        { name: 'Problem Solving', level: 90 },
        { name: 'Team Collaboration', level: 85 },
        { name: 'Communication', level: 80 },
        { name: 'Time Management', level: 85 },
        { name: 'Adaptability', level: 90 }
      ],
      currentlyLearning: [
        { 
          name: 'Cloud Computing (AWS)', 
          description: 'Learning AWS services and cloud architecture for scalable applications.' 
        },
        { 
          name: 'Three.js & WebGL', 
          description: 'Exploring 3D graphics programming for web applications.' 
        },
        { 
          name: 'AI/ML Integration', 
          description: 'Learning how to integrate AI services into web applications.' 
        }
      ],
      certifications: [
        { 
          name: 'AWS Cloud Practitioner', 
          issuer: 'Amazon Web Services', 
          date: '2024' 
        },
        { 
          name: 'AWS AI Practitioner', 
          issuer: 'Amazon Web Services', 
          date: '2025' 
        },
        { 
          name: 'Computer Programming Diploma', 
          issuer: 'Algonquin College', 
          date: '2024 - Present' 
        },
        { 
          name: 'BSc Economics', 
          issuer: 'Babcock University', 
          date: '2020 - 2023' 
        }
      ]
    };
  }
};
</script>

<style scoped>
.skill-item {
  @apply rounded-md p-4 bg-dark-blue/50 transition-all duration-300 hover:bg-dark-blue;
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