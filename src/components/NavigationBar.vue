<template>
  <nav class="navbar">
    <div class="logo"><img src="../img/logo.png" alt="logo" /></div>
    <div>
      <div class="menu-bar">
        <img src="../img/menu.png" alt="" />
      </div>
      <ul class="nav-links">
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/home#tech-stack">Tech Stacks</router-link></li>
        <li><router-link to="/project-list">Projects</router-link></li>
        <li><router-link to="/home#contact">Contact</router-link></li>
        <button class="show" @click="downloadResume">Download Resume</button>
      </ul>
    </div>
    <div class="social-icons">
      <a href="https://github.com/muheeeeez"
        ><img src="../img/github-icon.png" alt=""
      /></a>
      <a href="https://twitter.com/IAmMuizOlaleye"
        ><img src="../img/twitter-icon.png" alt=""
      /></a>
      <a href="https://www.linkedin.com/in/abdul-muiz-olaleye/"
        ><img src="../img/linkedin-icon.png" alt=""
      /></a>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    downloadResume() {
      var pdfUrl = "/src/resume/Abdul-muiz Olaleye.pdf";
      var link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "Abdul-muiz Olaleye resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
};
</script>

<style scoped>
* {
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar {
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 150px;
  margin-top: 0;
}
.logo {
  font-size: 2.5rem;
}
.nav-links {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 150px;
  list-style: none;
}
.nav-links a {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
}
.social-icons {
  display: flex;
  align-items: center;
  gap: 50px;
}
.show {
  background-color: #363636;
  border-radius: 10px;
  border: #d7ffe0;
  color: #fff;
  width: 214px;
  height: 54px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  cursor: pointer;
}
.show:hover {
  background: transparent;
  border: 1px solid #363636;
}
.show a {
  text-decoration: none;
  color: #fff;
}
/* .menu-bar {
  display: none;
} */
@media screen and (max-width: 768px) {
  .navbar {
    padding: 10px 50px;
  }
  /* .menu-bar {
    display: inline-block;
  } */
  .nav-links {
    flex-direction: column;
    gap: 20px;
    position: absolute;
    left: 80%;
  }
  .social-icons {
    margin-top: 300px;
    flex-direction: column;
    position: absolute;
    left: 80%;
    gap: 20px;
    padding: 0 50px;
  }
  .show {
    width: 150px;
    height: 40px;
  }
}

/* @media screen and (max-width: 480px) {
  .navbar {
    padding: 5px 20px;
  }
  .nav-links {
    gap: 10px;
  }
  .social-icons {
    gap: 10px;
  }
  .show {
    width: 100px;
    height: 30px;
  }
} */
</style>