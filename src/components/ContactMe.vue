<template>
      <div>
    <navigation-bar></navigation-bar>
  </div>
    <div class="contact-page">
      <h1>Contact Me</h1>
      <form @submit.prevent="sendEmail">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="subject">Subject</label>
          <input type="text" id="subject" v-model="subject" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        subject: '',
        message: '',
      };
    },
    methods: {
      sendEmail() {
        const mailtoLink = `mailto:abdulmuiz.olatunbosun@gmail.com?subject=${encodeURIComponent(
          this.subject
        )}&body=${encodeURIComponent(
          `Name: ${this.name}\nEmail: ${this.email}\n\nMessage:\n${this.message}`
        )}`;
        window.location.href = mailtoLink;
      },
    },
  };
  </script>
  
  <style scoped>
  .contact-page {
    max-width: 600px;
    margin: 150px auto ;
    padding: 20px;
    color: #fff;
    background-color: #282727;
    border-radius: 10px;
    border: 1px solid #363636;
  }
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #363636;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
  }
  button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #363636;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }
  button:hover {
    background-color: #444;
  }
  </style>
  