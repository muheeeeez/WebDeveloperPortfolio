<template>
  <div class="about-page">
    <!-- Header Section -->
    <section class="section pt-28">
      <div class="container mx-auto">
        <div class="text-center mb-12" data-aos="fade-up">
          <h1 class="gradient-text mb-4">About Me</h1>
          <p class="text-lg max-w-3xl mx-auto">
            Get to know more about my background, education, experience, and what drives me as a developer.
          </p>
          <div class="section-divider mx-auto mt-6"></div>
        </div>
      </div>
    </section>

    <!-- Personal Info Section -->
    <section class="section py-12">
      <div class="container mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="about-image" data-aos="fade-right">
            <img src="../img/moi.jpeg" alt="Abdul-muiz Olaleye" class="rounded-xl shadow-2xl max-w-full mx-auto" />
          </div>
          <div class="about-content" data-aos="fade-left">
            <h2 class="mb-6">Who Am I?</h2>
            <p class="mb-4">
              I'm Abdul-muiz Olaleye, a passionate Full Stack Developer based in Ottawa, Canada. I hold a BSc in Economics from Babcock University and am currently pursuing a Computer Programming Diploma at Algonquin College, while working as a Customer Service Representative at Farm Boy.
            </p>
            <p class="mb-4">
              My journey in programming began with a curiosity about how websites and applications work behind the scenes. This 
              curiosity evolved into a passion for creating functional, efficient, and user-friendly digital solutions that solve real-world problems.
            </p>
            <p class="mb-6">
              I work with a diverse tech stack including Java, which I use extensively in my academic projects, along with modern JavaScript frameworks like Vue.js and various database systems. I consistently explore new programming languages and technologies, as I believe in continuous learning to stay current with industry trends a commitment reflected in my AWS Cloud Practitioner and AWS AI Practitioner certifications.
            </p>
            
            <div class="personal-info grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="info-item">
                <span class="info-label">Name:</span>
                <span class="info-value">Abdul-muiz Olaleye</span>
              </div>
              <div class="info-item">
                <span class="info-label">Email:</span>
                <span class="info-value">abdulmuiz.olatunbosun@gmail.com</span>
              </div>
              <div class="info-item">
                <span class="info-label">Location:</span>
                <span class="info-value">Ottawa, Canada</span>
              </div>
              <div class="info-item">
                <span class="info-label">Degree:</span>
                <span class="info-value">Diploma in Computer Programming, BSc Economics</span>
              </div>
            </div>
            
            <div class="mt-8 flex flex-wrap gap-4">
              <router-link to="/contact" class="btn-primary">
                Get In Touch
              </router-link>
              <button @click="downloadResume" class="btn-secondary">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience & Education Section -->
    <section class="section bg-dark-blue py-16">
      <div class="container mx-auto">
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Education -->
          <div class="timeline-section" data-aos="fade-up">
            <h2 class="mb-8 text-center">Education</h2>
            
            <div class="timeline">
              <div class="timeline-item" v-for="(edu, index) in education" :key="index">
                <div class="timeline-dot"></div>
                <div class="timeline-date">{{ edu.period }}</div>
                <div class="timeline-content card">
                  <h3>{{ edu.degree }}</h3>
                  <h4>{{ edu.institution }}</h4>
                  <p>{{ edu.description }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Experience -->
          <div class="timeline-section" data-aos="fade-up" data-aos-delay="200">
            <h2 class="mb-8 text-center">Experience</h2>
            
            <div class="timeline">
              <div class="timeline-item" v-for="(exp, index) in experiences" :key="index">
                <div class="timeline-dot"></div>
                <div class="timeline-date">{{ exp.period }}</div>
                <div class="timeline-content card">
                  <h3>{{ exp.title }}</h3>
                  <h4>{{ exp.company }}</h4>
                  <p>{{ exp.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications Section -->
    <section class="section py-16">
      <div class="container mx-auto">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="mb-3">Certifications</h2>
          <div class="section-divider mx-auto"></div>
          <p class="max-w-2xl mx-auto mt-4">
            Professional certifications that demonstrate my commitment to continuous learning
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8 mt-8 max-w-3xl mx-auto">
          <div class="certification-item card p-6" v-for="(cert, index) in certifications" :key="index" data-aos="fade-up" :data-aos-delay="index * 100">
            <div class="flex items-center mb-4">
              <div class="certification-icon mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold">{{ cert.name }}</h3>
                <p class="text-sm text-gray-400">{{ cert.issuer }} • {{ cert.year }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interests Section -->
    <section class="section py-16">
      <div class="container mx-auto">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="mb-3">My Interests</h2>
          <div class="section-divider mx-auto"></div>
          <p class="max-w-2xl mx-auto mt-4">
            When I'm not coding, I enjoy these activities that help me maintain a balanced life
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div class="interest-item" data-aos="fade-up" data-aos-delay="100">
            <div class="interest-icon">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3>Reading</h3>
            <p>I enjoy reading books across various genres in my downtime.</p>
          </div>
          
          <div class="interest-item" data-aos="fade-up" data-aos-delay="200">
            <div class="interest-icon">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3>Movies</h3>
            <p>Enjoying action, adventure and sci-fi movies in my spare time.</p>
          </div>
          
          <div class="interest-item" data-aos="fade-up" data-aos-delay="300">
            <div class="interest-icon">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3>Travel</h3>
            <p>Exploring new places and experiencing different cultures.</p>
          </div>
          
          <div class="interest-item" data-aos="fade-up" data-aos-delay="400">
            <div class="interest-icon">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.876 8.164a3 3 0 11-5.752 0M12 5.5V2m0 14v3.5m4.5-10h3.5m-14 0H2.5"/>
              </svg>
            </div>
            <h3>Football</h3>
            <p>Both playing and watching football matches - a passionate fan of the beautiful game!</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="section bg-primary/10 py-16">
      <div class="container mx-auto">
        <div class="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <h2 class="mb-4">Ready to work together?</h2>
          <p class="text-lg mb-8">
            Now that you know a bit about me, I'd love to hear about your project and how I can help.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <router-link to="/project-list" class="btn-secondary">
              View My Work
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
  name: 'AboutPage',
  data() {
    return {
      education: [
        {
          period: '2024 - Present',
          degree: 'Computer Programming Diploma',
          institution: 'Algonquin College, Ottawa',
          description: 'Currently maintaining Dean\'s Honours List with a GPA of 3.94. Coursework includes Object Oriented Programming, Web Development, Database Management Systems, and Operating Systems.'
        },
        {
          period: '2020 - 2023',
          degree: 'Bachelor of Science in Economics',
          institution: 'Babcock University, Ogun State, Nigeria',
          description: 'Graduated with a GPA of 3.97. Relevant coursework included Econometrics, Monetary Economics, Microeconomics, Macroeconomics, and Political Economics.'
        }
      ],
      experiences: [
        {
          period: 'Sep 2024 - Present',
          title: 'Customer Service Representative',
          company: 'Farm Boy, Ottawa',
          description: 'Delivering exceptional customer service in a fast-paced retail environment while developing valuable skills in communication, problem-solving, and time management.'
        },
        {
          period: 'Apr 2024 - Aug 2024',
          title: 'Traffic Safety Representative',
          company: 'TD Place, Ottawa',
          description: 'Monitored and enforced traffic safety regulations, conducted inspections of roadways and signage, and assisted with emergency evacuation procedures.'
        },
        {
          period: 'Sep 2022 - Feb 2023',
          title: 'Peer Tutor and Mentor (Volunteer)',
          company: 'Babcock University Peer Support Program',
          description: 'Organized and conducted study groups and workshops, fostering a collaborative learning environment. Provided academic support to underclassmen in various subjects.'
        }
      ],
      certifications: [
        {
          name: 'AWS Cloud Practitioner',
          issuer: 'Amazon Web Services',
          year: '2024'
        },
        {
          name: 'AWS AI Practitioner',
          issuer: 'Amazon Web Services',
          year: '2025'
        }
      ]
    };
  },
  methods: {
    downloadResume() {
      const pdfUrl = "/src/resume/Abdul-muiz-Olaleye.pdf";
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "Abdul-muiz-Olaleye-Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
};
</script>

<style scoped>
.about-image img {
  @apply transition-all duration-300 hover:shadow-primary/30 hover:shadow-xl;
}

.info-item {
  @apply mb-3;
}

.info-label {
  @apply font-bold text-primary mr-2;
}

.timeline {
  @apply relative border-l-2 border-primary/30 pl-8;
}

.timeline-item {
  @apply relative mb-10;
}

.timeline-dot {
  @apply absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-primary;
}

.timeline-date {
  @apply text-sm font-medium text-primary mb-2;
}

.timeline-content {
  @apply transition-all duration-300 hover:shadow-lg;
}

.timeline-content h3 {
  @apply text-xl font-bold mb-1;
}

.timeline-content h4 {
  @apply text-gray-400 mb-3;
}

.interest-item {
  @apply card text-center p-6;
}

.interest-icon {
  @apply mb-4 p-4 rounded-full bg-primary/20 inline-block text-primary;
}
</style> 