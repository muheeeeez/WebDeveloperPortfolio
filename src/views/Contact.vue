<template>
  <div class="contact-page">
    <!-- Header Section -->
    <section class="section pt-28">
      <div class="container mx-auto">
        <div class="text-center mb-12" data-aos="fade-up">
          <h1 class="gradient-text mb-4">Get In Touch</h1>
          <p class="text-lg max-w-3xl mx-auto">
            Feel free to reach out if you're looking for a developer, have a
            question, or just want to connect. I'm currently open to new
            opportunities!
          </p>
          <div class="section-divider mx-auto mt-6"></div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section py-12">
      <div class="container mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-start">
          <!-- Contact Info -->
          <div class="contact-info" data-aos="fade-right">
            <h2 class="mb-6">Contact Information</h2>
            <p class="mb-8">
              I'm based in Ottawa, Canada and available for remote work or local
              opportunities. Here's how you can reach me:
            </p>

            <div class="space-y-6">
              <div class="contact-item">
                <div class="contact-icon">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div class="contact-details">
                  <h3>Email</h3>
                  <a
                    href="mailto:abdulmuiz.olatunbosun@gmail.com"
                    class="text-primary hover:underline"
                    >abdulmuiz.olatunbosun@gmail.com</a
                  >
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
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
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div class="contact-details">
                  <h3>LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/abdul-muiz-olaleye/"
                    target="_blank"
                    class="text-primary hover:underline"
                    >abdul-muiz-olaleye</a
                  >
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
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
                </div>
                <div class="contact-details">
                  <h3>GitHub</h3>
                  <a
                    href="https://github.com/muheeeeez"
                    target="_blank"
                    class="text-primary hover:underline"
                    >muheeeeez</a
                  >
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div class="contact-details">
                  <h3>Phone</h3>
                  <a
                    href="tel:+17538861887"
                    class="text-primary hover:underline"
                    >+1 (753) 886-1887</a
                  >
                </div>
              </div>
            </div>

            <div class="mt-10">
              <h3 class="mb-4">Follow Me</h3>
              <div class="flex space-x-4">
                <a
                  href="https://github.com/muheeeeez"
                  target="_blank"
                  class="social-icon"
                >
                  <img :src="githubIcon" alt="GitHub" />
                </a>
                <a
                  href="https://www.linkedin.com/in/abdul-muiz-olaleye/"
                  target="_blank"
                  class="social-icon"
                >
                  <img :src="linkedinIcon" alt="LinkedIn" />
                </a>
                <a
                  href="https://twitter.com/IAmMuizOlaleye"
                  target="_blank"
                  class="social-icon"
                >
                  <img :src="twitterIcon" alt="Twitter" />
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form card" data-aos="fade-left">
            <h2 class="mb-6">Send a Message</h2>
            <form @submit.prevent="sendEmail">
              <div class="form-group">
                <label for="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                  class="form-input"
                  :class="{ 'error-input': formErrors.name }"
                />
                <p v-if="formErrors.name" class="error-text">
                  {{ formErrors.name }}
                </p>
              </div>

              <div class="form-group">
                <label for="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="form-input"
                  :class="{ 'error-input': formErrors.email }"
                />
                <p v-if="formErrors.email" class="error-text">
                  {{ formErrors.email }}
                </p>
              </div>

              <div class="form-group">
                <label for="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  v-model="form.subject"
                  required
                  class="form-input"
                  :class="{ 'error-input': formErrors.subject }"
                />
                <p v-if="formErrors.subject" class="error-text">
                  {{ formErrors.subject }}
                </p>
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  required
                  class="form-input"
                  :class="{ 'error-input': formErrors.message }"
                ></textarea>
                <p v-if="formErrors.message" class="error-text">
                  {{ formErrors.message }}
                </p>
              </div>

              <button
                type="submit"
                class="btn-primary w-full mt-4"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting">Sending...</span>
                <span v-else>Send Message</span>
              </button>

              <div v-if="formSuccess" class="success-message mt-4">
                Thank you! Your message has been sent successfully. I'll get
                back to you soon.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="section py-16 bg-card-bg">
      <div class="container mx-auto">
        <div class="text-center mb-12" data-aos="fade-up">
          <h2 class="mb-3">My Location</h2>
          <div class="section-divider mx-auto"></div>
          <p class="max-w-2xl mx-auto mt-4">
            I'm based in Ottawa, Ontario, Canada
          </p>
        </div>

        <div class="rounded-xl overflow-hidden shadow-lg" data-aos="zoom-in">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179484.57865841767!2d-76.0101794289874!3d45.25028836017593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x8a6a51e131dd15ed!2sOttawa%2C%20ON!5e0!3m2!1sen!2sca!4v1651442185529!5m2!1sen!2sca"
            width="100%"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
// Import social media icons
import githubIcon from "../img/github-icon.png";
import linkedinIcon from "../img/linkedin-icon.png";
import twitterIcon from "../img/twitter-icon.png";

export default {
  name: "ContactPage",
  data() {
    return {
      // Make imported images available to template
      githubIcon,
      linkedinIcon,
      twitterIcon,
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      formErrors: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      isSubmitting: false,
      formSuccess: false,
    };
  },
  methods: {
    validateForm() {
      let isValid = true;
      // Reset errors
      this.formErrors = {
        name: "",
        email: "",
        subject: "",
        message: "",
      };

      // Validate name
      if (!this.form.name.trim()) {
        this.formErrors.name = "Name is required";
        isValid = false;
      }

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.form.email.trim()) {
        this.formErrors.email = "Email is required";
        isValid = false;
      } else if (!emailRegex.test(this.form.email)) {
        this.formErrors.email = "Please enter a valid email address";
        isValid = false;
      }

      // Validate subject
      if (!this.form.subject.trim()) {
        this.formErrors.subject = "Subject is required";
        isValid = false;
      }

      // Validate message
      if (!this.form.message.trim()) {
        this.formErrors.message = "Message is required";
        isValid = false;
      } else if (this.form.message.trim().length < 10) {
        this.formErrors.message = "Message must be at least 10 characters";
        isValid = false;
      }

      return isValid;
    },
    async sendEmail() {
      if (!this.validateForm()) {
        return;
      }

      this.isSubmitting = true;

      try {
        // Replace these with your actual EmailJS service, template, and user IDs
        await emailjs.send(
          "service_q14qnda",
          "template_2nqxijv",
          {
            from_name: this.form.name,
            reply_to: this.form.email,
            subject: this.form.subject,
            message: this.form.message,
          },
          "kv8RGc7ksLmxDkk1g"
        );

        // Reset form on success
        this.form = {
          name: "",
          email: "",
          subject: "",
          message: "",
        };

        this.formSuccess = true;

        // Hide success message after 5 seconds
        setTimeout(() => {
          this.formSuccess = false;
        }, 5000);
      } catch (error) {
        console.error("Email send error:", error);
        alert(
          "There was an error sending your message. Please try again later."
        );
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
</script>

<style scoped>
.contact-item {
  @apply flex items-start space-x-4;
}

.contact-icon {
  @apply p-3 rounded-full bg-primary/20 text-primary;
}

.contact-details h3 {
  @apply text-lg font-medium mb-1;
}

.social-icon {
  @apply p-3 rounded-full bg-card-bg hover:bg-primary/20 transition-colors duration-300;
}

.social-icon img {
  @apply h-6 w-6;
}

.form-group {
  @apply mb-6;
}

.form-group label {
  @apply block mb-2 text-sm font-medium;
}

.form-input {
  @apply block w-full rounded-md bg-dark/30 border border-gray-600 p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300;
}

.error-input {
  @apply border-red-500 focus:ring-red-500;
}

.error-text {
  @apply text-red-500 text-sm mt-1;
}

.success-message {
  @apply text-green-400 p-3 rounded-md bg-green-400/20 text-center;
}
</style>