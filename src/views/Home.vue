<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="min-h-screen pt-24 pb-12 flex flex-col justify-center relative overflow-hidden">
      <div class="absolute inset-0 z-0">
        <ThreeModel />
      </div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="flex flex-col items-center justify-center">
          <div data-aos="fade-up" class="text-center max-w-xl">
            <p class="text-primary font-medium text-lg mb-3">Hello, my name is</p>
            <h1 class="gradient-text text-5xl md:text-6xl font-bold mb-5">Abdul-muiz Olaleye</h1>
            <h2 class="text-3xl md:text-4xl mb-8">Full Stack Developer</h2>
            <p class="text-xl mb-10 max-w-lg mx-auto">
              I'm a Computer Programming graduate from Algonquin College, 
              specializing in building exceptional digital experiences with 
              modern web technologies.
            </p>
            <div class="flex flex-wrap gap-6 justify-center">
              <router-link to="/project-list" class="btn-primary text-lg px-8 py-3">
                View My Work
              </router-link>
              <router-link to="/contact" class="btn-secondary text-lg px-8 py-3">
                Contact Me
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Preview Section -->
    <section class="py-20 bg-dark-blue" id="tech-stack-preview">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="mb-3">My Tech Stack</h2>
          <div class="section-divider mx-auto"></div>
          <p class="max-w-2xl mx-auto mt-4">
            Technologies I've been working with recently
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8" data-aos="fade-up" data-aos-delay="100">
          <div class="flex justify-center" v-for="(tech, index) in techStack" :key="index" data-aos="zoom-in" :data-aos-delay="100 + (index * 50)">
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
          <div class="card overflow-hidden group" v-for="(project, index) in featuredProjects" :key="index" data-aos="fade-up" :data-aos-delay="index * 100">
            <div class="relative overflow-hidden">
              <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div class="p-6">
              <h3 class="mb-2">{{ project.title }}</h3>
              <p class="mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="(tech, techIndex) in project.technologies" :key="techIndex" class="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                  {{ tech }}
                </span>
              </div>
              <div class="flex justify-between">
                <a :href="project.demoLink" target="_blank" class="text-primary hover:underline">Live Demo</a>
                <a :href="project.codeLink" target="_blank" class="text-primary hover:underline">View Code</a>
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
            I'm currently looking for new opportunities to apply my skills and grow as a developer.
            Feel free to reach out if you have a project or position that might be a good fit!
          </p>
          <router-link to="/contact" class="btn-primary">
            Get in Touch
          </router-link>
        </div>
      </div>
      
      <!-- Background decorative elements -->
      <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div class="absolute top-0 left-0 w-24 h-24 bg-primary rounded-full transform translate-x-12 -translate-y-8"></div>
        <div class="absolute bottom-0 right-0 w-48 h-48 bg-secondary rounded-full transform -translate-x-16 translate-y-16"></div>
      </div>
    </section>
  </div>
</template>

<script>
import ThreeModel from '../components/ThreeModel.vue';

export default {
  name: 'HomePage',
  components: {
    ThreeModel
  },
  data() {
    return {
      techStack: [
        { name: 'Vue.js', icon: './src/img/logo/Vue-logo.png' },
        { name: 'JavaScript', icon: './src/img/logo/js-logo.png' },
        { name: 'TypeScript', icon: './src/img/logo/TypeScript.png' },
        { name: 'Node.js', icon: './src/img/logo/nodejs.png' },
        { name: 'HTML5', icon: './src/img/logo/html-logo.png' },
        { name: 'CSS3', icon: './src/img/logo/css-logo.png' },
      ],
      featuredProjects: [
        {
          title: 'Project One',
          description: 'A responsive web application with modern UI/UX principles',
          image: './src/img/project-placeholder.jpg',
          technologies: ['Vue.js', 'TypeScript', 'Tailwind CSS'],
          demoLink: '#',
          codeLink: '#'
        },
        {
          title: 'Project Two',
          description: 'Full stack application with secure authentication and database',
          image: './src/img/project-placeholder.jpg',
          technologies: ['Node.js', 'Express', 'MongoDB', 'Vue.js'],
          demoLink: '#',
          codeLink: '#'
        },
        {
          title: 'Project Three',
          description: 'Interactive 3D visualization using WebGL technologies',
          image: './src/img/project-placeholder.jpg',
          technologies: ['Three.js', 'JavaScript', 'GSAP'],
          demoLink: '#',
          codeLink: '#'
        }
      ]
    };
  }
};
</script>

<style scoped>
.tech-card {
  @apply p-4 bg-dark-blue/50 rounded-lg flex flex-col items-center justify-center transform hover:-translate-y-2 transition-all duration-300 w-full h-32;
}

.tech-icon {
  @apply h-12 w-auto mb-2;
}
</style> 