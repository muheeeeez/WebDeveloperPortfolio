<template>
  <div class="about-page">
    <!-- Header Section -->
    <section class="section pt-28">
      <div class="container mx-auto">
        <div class="text-center mb-12" data-aos="fade-up">
          <h1 class="gradient-text mb-4">About Me</h1>
          <p class="text-lg max-w-3xl mx-auto">
            Get to know more about my background, education, experience, and
            what drives me as a developer.
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
            <img
              :src="profileImage"
              alt="Abdul-muiz Olaleye"
              class="rounded-xl shadow-2xl max-w-full mx-auto"
            />
          </div>
          <div class="about-content" data-aos="fade-left">
            <h2 class="mb-6">Who Am I?</h2>
            <p class="mb-4">
              I'm Abdul-muiz Olaleye, a passionate Full Stack Developer based in
              Ottawa, Canada. I hold a BSc in Economics from Babcock University
              and am currently pursuing a Computer Programming Diploma at
              Algonquin College, while working as a Supervisor at Farm Boy.
            </p>
            <p class="mb-4">
              My journey in programming began with a curiosity about how
              websites and applications work behind the scenes. This curiosity
              evolved into a passion for creating functional, efficient, and
              user friendly digital solutions that solve real world problems.
            </p>
            <p class="mb-6">
              I work with a diverse tech stack including Java, which I use
              extensively in my academic projects, along with modern JavaScript
              frameworks like Vue.js and various database systems. I
              consistently explore new programming languages and technologies,
              as I believe in continuous learning to stay current with industry
              trends a commitment reflected in my AWS Cloud Practitioner and AWS
              AI Practitioner certifications.
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
                <span class="info-value"
                  >Diploma in Computer Programming, BSc Economics</span
                >
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
    <section class="section bg-card-bg py-16">
      <div class="container mx-auto">
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Education -->
          <div class="timeline-section" data-aos="fade-up">
            <h2 class="mb-8 text-center">Education</h2>

            <div class="timeline">
              <div
                class="timeline-item"
                v-for="(edu, index) in education"
                :key="index"
              >
                <div class="timeline-dot"></div>
                <div class="timeline-date">{{ edu.period }}</div>
                <div
                  class="timeline-content bg-card-bg rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
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
              <div
                class="timeline-item"
                v-for="(exp, index) in experiences"
                :key="index"
              >
                <div class="timeline-dot"></div>
                <div class="timeline-date">{{ exp.period }}</div>
                <div
                  class="timeline-content bg-card-bg rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
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
            Professional certifications that demonstrate my commitment to
            continuous learning
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 mt-8 max-w-3xl mx-auto">
          <div
            class="certification-item bg-card-bg rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            v-for="(cert, index) in certifications"
            :key="index"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="flex items-center mb-4">
              <div class="certification-icon mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold">{{ cert.name }}</h3>
                <p class="text-sm text-gray-400">
                  {{ cert.issuer }} • {{ cert.year }}
                </p>
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
            When I'm not coding, I enjoy these activities that help me maintain
            a balanced life
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div class="interest-item" data-aos="fade-up" data-aos-delay="100">
            <div class="interest-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3>Reading</h3>
            <p>I enjoy reading books across various genres in my downtime.</p>
          </div>

          <div class="interest-item" data-aos="fade-up" data-aos-delay="200">
            <div class="interest-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3>Movies</h3>
            <p>
              Enjoying action, adventure and sci-fi movies in my spare time.
            </p>
          </div>

          <div class="interest-item" data-aos="fade-up" data-aos-delay="300">
            <div class="interest-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <h3>Travel</h3>
            <p>Exploring new places and experiencing different cultures.</p>
          </div>

          <div class="interest-item" data-aos="fade-up" data-aos-delay="400">
            <div class="interest-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12.876 8.164a3 3 0 11-5.752 0M12 5.5V2m0 14v3.5m4.5-10h3.5m-14 0H2.5"
                />
              </svg>
            </div>
            <h3>Football</h3>
            <p>
              Both playing and watching football matches - a passionate fan of
              the beautiful game!
            </p>
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
            Now that you know a bit about me, I'd love to hear about your
            project and how I can help.
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
// Import profile image
import profileImage from "../img/moi.jpeg";

export default {
  name: "AboutPage",
  data() {
    return {
      // Make imported image available to template
      profileImage,
      education: [
        {
          period: "2024 - Present",
          degree: "Computer Programming Diploma",
          institution: "Algonquin College, Ottawa",
          description:
            "Currently maintaining Dean's Honours List with a GPA of 3.94. Coursework includes Object Oriented Programming, Web Development, Database Management Systems, and Operating Systems.",
        },
        {
          period: "2020 - 2023",
          degree: "Bachelor of Science in Economics",
          institution: "Babcock University, Ogun State, Nigeria",
          description:
            "Graduated with a GPA of 3.97. Relevant coursework included Econometrics, Monetary Economics, Microeconomics, Macroeconomics, and Political Economics.",
        },
      ],
      experiences: [
        {
          period: "May 2025 - Present",
          title: "Supervisor",
          company: "Farm Boy, Ottawa",
          description:
            "Promoted to supervise a team of associates, overseeing operations, coordinating work schedules, and ensuring exceptional customer service standards are maintained while helping to train and develop new team members.",
        },
        {
          period: "Sep 2024 - May 2025",
          title: "Customer Service Representative",
          company: "Farm Boy, Ottawa",
          description:
            "Delivered exceptional customer service in a fast-paced retail environment while developing valuable skills in communication, problem-solving, and time management that led to promotion to a supervisory role.",
        },
        {
          period: "Apr 2024 - Aug 2024",
          title: "Traffic Safety Representative",
          company: "TD Place, Ottawa",
          description:
            "Monitored and enforced traffic safety regulations, conducted inspections of roadways and signage, and assisted with emergency evacuation procedures.",
        },
        {
          period: "Sep 2022 - Feb 2023",
          title: "Peer Tutor and Mentor (Volunteer)",
          company: "Babcock University Peer Support Program",
          description:
            "Organized and conducted study groups and workshops, fostering a collaborative learning environment. Provided academic support to underclassmen in various subjects.",
        },
      ],
      certifications: [
        {
          name: "AWS Cloud Practitioner",
          issuer: "Amazon Web Services",
          year: "2024",
        },
        {
          name: "AWS AI Practitioner",
          issuer: "Amazon Web Services",
          year: "2025",
        },
      ],
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
    },
  },
};
</script>

<style scoped>
.interest-item {
  background-color: #fdf0f5;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  text-align: center;
}

.interest-item:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.about-image img {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.about-image img:hover {
  box-shadow: 0 20px 25px -5px rgba(169, 64, 100, 0.3),
    0 10px 10px -5px rgba(169, 64, 100, 0.3);
}

.info-item {
  margin-bottom: 0.75rem;
}

.info-label {
  font-weight: 700;
  color: #a94064;
  margin-right: 0.5rem;
}

.timeline {
  position: relative;
  border-left-width: 2px;
  border-color: rgba(169, 64, 100, 0.3);
  padding-left: 2rem;
}

.timeline-item {
  position: relative;
  margin-bottom: 2.5rem;
}

.timeline-dot {
  position: absolute;
  left: -41px;
  top: 0;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 9999px;
  background-color: #a94064;
}

.timeline-date {
  font-size: 0.875rem;
  font-weight: 500;
  color: #a94064;
  margin-bottom: 0.5rem;
}

.timeline-content {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.timeline-content:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.timeline-content h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.timeline-content h4 {
  color: #a0aec0;
  margin-bottom: 0.75rem;
}

.interest-icon {
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 9999px;
  background-color: rgba(169, 64, 100, 0.2);
  display: inline-block;
  color: #a94064;
}
</style> 