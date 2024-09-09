
<template>
  <div class="container">
    <header>
      <div class="logo"><img src="../img/logo.png" alt="logo" /></div>
      <ul class="navbar" :class="{ open: isMenu }">
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><a href="/home#tech-stack">Tech Stack</a></li>
        <li><router-link to="/project-list">Projects</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li>
          <button class="show" @click="downloadResume">Download resume</button>
        </li>
      </ul>
      <div class="main">
        <a href="https://github.com/muheeeeez"
          ><img src="../img/github-icon.png" alt=""
        /></a>
        <a href="https://twitter.com/IAmMuizOlaleye"
          ><img src="../img/twitter-icon.png" alt=""
        /></a>
        <a href="https://www.linkedin.com/in/abdul-muiz-olaleye/"
          ><img src="../img/linkedin-icon.png" alt=""
        /></a>
        <div class="bx bx-menu" id="menu-icon" @click="toggleMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffff"
            height="1em"
            viewBox="0 0 448 512"
          >
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
// let menu = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");
// menu.onclick = () => {
//   navbar.classList.toggle("open");
// };
export default {
  data() {
    return {
      isMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenu = !this.isMenu;
    },
    downloadResume() {
      var pdfUrl = "/src/resume/Abdul-muiz-Olaleye.pdf";
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
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  font-family: "Poppins", sans-serif;
}
header {
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  padding: 28px 12%;
  transition: all 0.5s ease;
  background-color: #000;
}
.container {
  height: 45px;
}
.logo {
  display: flex;
  align-items: center;
}
.logo svg {
  margin-right: 3px;
}
.logo span {
  font-family: "Poppins", sans-serif;
  font-size: 23px;
  font-weight: 600;
  color: #000;
  word-wrap: break-word;
}
.navbar {
  display: flex;
}
.navbar a {
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  color: #fff;
  word-wrap: break-word;
  padding: 5px 0;
  margin: 0px 30px;
  transition: all 0.5 ease;
}
.navbar a:hover {
  color: aqua;
}
.navbar a.active {
  color: aqua;
}
.main {
  display: flex;
}
.main a {
  margin-right: 25px;
  margin-left: 10px;
  color: #5b5b5b;
  font-size: 12px;
  font-weight: 400;
  transition: all 0.5s ease;
}
.user {
  display: flex;
  align-items: center;
  color: #5b5b5b;
}
.main button {
  padding: 5px 16px;
  border-radius: 4px;
  background-color: #000;
  color: #5b5b5b;
  font-family: Poppins;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.main a:hover {
  color: aqua;
}
.show {
  background-color: #363636;
  border-radius: 10px;
  border: #d7ffe0;
  color: #fff;
  width: 214px;
  height: 44px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  font-size: 20px;
  cursor: pointer;
}
.show:hover {
  background: transparent;
  border: 1px solid #363636;
  color: aqua;
}
.show a {
  text-decoration: none;
  color: #fff;
}
#menu-icon {
  font-size: 25px;
  margin: 3px;
  cursor: pointer;
  z-index: 10001;
  display: none;
}
@media (max-width: 1280px) {
  header {
    padding: 14px 2%;
    transition: 0.2s;
  }
  .navbar a {
    padding: 5px 0;
    margin: 0px 20px;
  }
}
@media (max-width: 1090px) {
  #menu-icon {
    display: block;
  }
  .navbar {
    position: absolute;
    top: 100%;
    right: -100%;
    width: 270px;
    height: 39vh;
    background-color: #0000;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 2px;
    transition: all 0.5s ease;
  }
  .navbar a {
    display: block;
    margin: 12px 0;
    padding: 0px 25px;
    transition: all 0.5s ease;
    background-color: #0000;
  }
  .navbar.open {
    right: 2%;
    background-color: black;
    height: 52vh;
    color: #fff;
  }
}
</style>