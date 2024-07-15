<template>
  <div class="dashboard">
    <div>
      <navigation-bar></navigation-bar>
    </div>
    <div id="not-responsive" class="about">
      <div>
        <h1>
          Hi 👋, My name is
          <div class="name" data-text="Abdul-muiz Olaleye">
            Abdul-muiz Olaleye
          </div>
          I build things for web
        </h1>
      </div>
      <div class="myImage"><img src="../img/moi.jpeg" alt="" /></div>
    </div>
    <div id="responsive" class="about">
      <div class="myImage"><img src="../img/moi.jpeg" alt="" /></div>
      <div>
        <h1>
          Hi 👋, My name is
          <div class="name" data-text="Abdul-muiz Olaleye">
            Abdul-muiz Olaleye
          </div>
          I build things for web
        </h1>
      </div>
    </div>
    <div class="tech-stack" id="tech-stack">
      <h1>My Tech Stack</h1>
      <p>Technologies I've been working with recently</p>
      <div class="languages">
        <div class="row">
          <a href="https://www.w3schools.com/html/">
            <img src="../img/logo/html-logo.png" alt="html" class="flex-item" />
          </a>
          <a href="https://www.w3schools.com/css/">
            <img src="../img/logo/css-logo.png" alt="css" class="flex-item" />
          </a>
          <a href="https://www.w3schools.com/js/">
            <img
              src="../img/logo/js-logo.png"
              alt="javascript"
              class="flex-item"
            />
          </a>
          <a href="https://vuejs.org/">
            <img
              src="../img/logo/Vue-logo.png"
              alt="vue.js"
              style="width: 93.59px; height: 105px"
              class="flex-item"
            />
          </a>
          <a href="https://www.java.com/en/">
            <img
              src="../img/logo/Java-logo.png"
              alt="java"
              style="width: 93.59px; height: 150px"
              class="flex-item"
            />
          </a>
          <a href="https://getbootstrap.com/">
            <img
              src="../img/logo/bootstrap-logo.png"
              alt="Bootstrap"
              class="flex-item"
            />
          </a>
        </div>
        <div class="row">
          <a href="https://git-scm.com/">
            <img src="../img/logo/git-logo.png" alt="git" class="flex-item" />
          </a>
          <a href="https://github.com/muheeeeez">
            <img
              src="../img/logo/github-logo.png"
              alt="github"
              class="flex-item"
            />
          </a>
          <a href="https://code.visualstudio.com/">
            <img
              src="../img/logo/vscode-logo.png"
              alt="vscode"
              class="flex-item"
            />
          </a>
          <a href="https://www.mysql.com/">
            <img
              src="../img/logo/mysql-logo.png"
              alt="mysql"
              style="width: 93.59px; height: 105px"
              class="flex-item"
            />
          </a>
          <a href="https://www.postgresql.org/">
            <img
              src="../img/logo/postgres-logo.png"
              alt="postgres"
              style="width: 93.59px; height: 105px"
              class="flex-item"
            />
          </a>
          <a href="https://eclipseide.org/">
            <img
              src="../img/logo/eclipse-logo.png"
              alt="eclipse"
              style="width: 93.59px; height: 105px"
              class="flex-item"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="projects" id="projects">
      <h1>Projects</h1>
      <p>Things I've built so far</p>
    </div>
    <div class="card-container">
      <div
        v-for="project in projectList"
        :key="project.id"
        class="project-list"
      >
        <img :src="project.projectImage" class="card-image" />
        <div class="card-details">
          <h3 class="card-title">{{ project.projectName }}</h3>
          <p class="card-text">{{ project.projectDescription }}</p>
          <div class="card-link">
            <div>
              <a :href="project.projectLink" target="_blank">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.2867 8.7133C10.6041 8.031 9.67846 7.64771 8.71334 7.64771C7.74821 7.64771 6.82259 8.031 6.14 8.7133L3.56584 11.2866C2.88324 11.9692 2.49976 12.895 2.49976 13.8604C2.49976 14.8257 2.88324 15.7515 3.56584 16.4341C4.24844 17.1167 5.17424 17.5002 6.13959 17.5002C7.10493 17.5002 8.03074 17.1167 8.71334 16.4341L10 15.1475"
                    stroke="#FCFCFC"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.71338 11.2867C9.39597 11.969 10.3216 12.3523 11.2867 12.3523C12.2518 12.3523 13.1775 11.969 13.86 11.2867L16.4342 8.71334C17.1168 8.03074 17.5003 7.10493 17.5003 6.13959C17.5003 5.17424 17.1168 4.24844 16.4342 3.56584C15.7516 2.88324 14.8258 2.49976 13.8605 2.49976C12.8951 2.49976 11.9693 2.88324 11.2867 3.56584L10 4.8525"
                    stroke="#FCFCFC"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Live Preview
              </a>
            </div>
            <div>
              <a :href="project.projectCodeLink" target="_blank">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_14_210)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 0C4.475 0 0 4.475 0 10C0 14.425 2.8625 18.1625 6.8375 19.4875C7.3375 19.575 7.525 19.275 7.525 19.0125C7.525 18.775 7.5125 17.9875 7.5125 17.15C5 17.6125 4.35 16.5375 4.15 15.975C4.0375 15.6875 3.55 14.8 3.125 14.5625C2.775 14.375 2.275 13.9125 3.1125 13.9C3.9 13.8875 4.4625 14.625 4.65 14.925C5.55 16.4375 6.9875 16.0125 7.5625 15.75C7.65 15.1 7.9125 14.6625 8.2 14.4125C5.975 14.1625 3.65 13.3 3.65 9.475C3.65 8.3875 4.037
              5 7.4875 4.675 6.7875C4.575 6.5375 4.225 5.5125 4.775 4.1375C4.775 4.1375 5.6125 3.875 7.525 5.1625C8.325 4.9375 9.175 4.825 10.025 4.825C10.875 4.825 11.725 4.9375 12.525 5.1625C14.4375 3.8625 15.275 4.1375 15.275 4.1375C15.825 5.5125 15.475 6.5375 15.375 6.7875C16.0125 7.4875 16.4 8.375 16.4 9.475C16.4 13.3125 14.0625 14.1625 11.8375 14.4125C12.2 14.725 12.5125 15.325 12.5125 16.2625C12.5125 17.6 12.5 18.675 12.5 19.0125C12.5 19.275 12.6875 19.5875 13.1875 19.4875C15.1726 18.8173 16.8976 17.5414 18.1197 15.8395C19.3418 14.1375 19.9994 12.0952 20 10C20 4.475 15.525 0 10 0Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_14_210">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <button class="show">
        <router-link to="/project-list">Show more</router-link>
      </button>
    </div>
    <div class="contact" id="contact">
      <h1 class="contact-name">Contact</h1>
      <div class="contact-image"><img src="../img/logo.png" alt="" /></div>

      <div class="contact-info">
        <p>+1 753 886-1887</p>
        <p>abdulmuiz.olatunbosun@gmail.com</p>
        <button class="download" @click="downloadResume">
          Download Resume
        </button>
        <div class="contact-social-media">
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
      </div>
    </div>
    <div>
      <hr />
    </div>
    <div class="footer">
      <div class="navbar">
        <ul>
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><a href="#tech-stack">Tech Stack</a></li>
          <li><router-link to="/project-list">Projects</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
      <div class="footer-info">
        <p>
          Designed and built by <span>Abdul-muiz Olaleye</span> with
          <span>Love </span>& <span>Coffee</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import BlockchainImage from "../img/blockchain.png";
import TullipsImage from "../img/tullips.png";
import HelpMeOutDashboard from "../img/help3.png";
import HelpMeOutLandingPage from "../img/help2.png";
import HelpMeOut from "../img/help1.png";
import Intelli from "../img/intelli.png";
export default {
  data() {
    return {
      projectList: [
        {
          id: "p1",
          projectImage: BlockchainImage,
          projectName: "Blockchain",
          projectDescription:
            "Explore the transformative power of blockchain technology, unveiling fundamental principles, real-world applications, and investment prospects in an innovative ecosystem.",
          projectLink: "https://artnftblockchain.netlify.app/",
          projectCodeLink: "https://github.com/muheeeeez/Blockchain",
        },
        {
          id: "p2",
          projectImage: TullipsImage,
          projectName: "Tulips",
          projectDescription:
            "The Tullips platform empowers designers and developers with resources for inspiration and creation, bridging the gap between creativity and innovation.",
          projectLink: "https://tullipsweb.netlify.app/",
          projectCodeLink: "https://github.com/muheeeeez/Tulllips-Website",
        },
        {
          id: "p3",
          projectImage: HelpMeOutDashboard,
          projectName: "HelpMeOut",
          projectDescription:
            "HelpMeOut is a user-friendly web application that simplifies screen recording and sharing for educational and collaborative purposes.",
          projectLink: "https://helpmeoutpage.netlify.app/",
          projectCodeLink:
            "https://github.com/muheeeeez/HelpMeOut/tree/main/HelpMeOutWebsite",
        },
        {
          id: "p4",
          projectImage: HelpMeOut,
          projectName: "HelpMeOut",
          projectDescription: "HelpMeOut user's dashboard",
          projectLink: "https://helpmeoutrecordedpage.netlify.app/",
          projectCodeLink:
            "https://github.com/muheeeeez/HelpMeOut/tree/main/HelpMeOutRecordings",
        },
        {
          id: "p5",
          projectImage: HelpMeOutLandingPage,
          projectName: "HelpMeOut",
          projectDescription: "HelpMeOut authentication page",
          projectLink: "https://helpmeoutsignuppage.netlify.app/",
          projectCodeLink:
            "https://github.com/muheeeeez/HelpMeOut/tree/main/HelpMeOutLoginPage",
        },
        {
          id: "p6",
          projectImage: Intelli,
          projectName: "Intelli",
          projectDescription:
            "This Vue.js project implements user authentication functionalities, including sign-in, sign-up, password reset, and email update, utilizing Firebase integration for seamless user management.",
          projectLink: "https://intelii.netlify.app/",
          projectCodeLink: "https://github.com/muheeeeez/IntelliLandingPage",
        },
      ],
    };
  },
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
.dashboard {
  background-color: #000;
}
#responsive {
  display: none;
}
.about {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 150px;
  padding: 180px 0;
}
.about h1 {
  width: 636px;
  height: 297px;
  color: #d9d9d9;
  font-size: 55px;
}
.name {
  font-size: 60px;
  font-weight: bold;
  background: linear-gradient(to right, #e70faa, #00c0fd);
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 0 0 0px;
}
.about img {
  width: 319px;
  height: 369px;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #e70faa, #00c0fd) border-box;
  border-radius: 200px;
  border: 9px solid transparent;
}
.tech-stack,
.projects {
  color: #d9d9d9;
  text-align: center;
}
.tech-stack h1,
.projects h1 {
  font-size: 48px;
}
.tech-stack p,
.projects p {
  font-size: 32px;
}
.languages {
  padding: 100px 0 180px 0;
}
.row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, auto));
  justify-content: center;
  align-items: center;
  gap: 70px;
  margin-top: 50px;
}
.flex-item {
  transition: transform 0.2s ease-in;
}
.flex-item:hover {
  transform: translateY(-15px);
}
.project-list {
  color: #fff;
}
.card-container {
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  color: #cccc;
}
.project-list {
  width: 300px;
  border-radius: 12px;
  border: 1px solid #363636;
  background-color: #282727;
  transition: transform 0.2s ease-in;
  overflow: hidden;
}
.project-list:hover {
  transform: translateY(-10px);
}
.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-title {
  font-size: 24px;
  text-align: center;
  font-weight: 800;
  margin: 10px 0;
}
.card-text {
  font-size: 16px;
  text-align: center;
  padding: 0 15px;
  margin-bottom: 15px;
}
.card-details {
  padding: 10px 0;
}
.card-link {
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  border-top: 1px solid #363636;
}
.card-link a {
  text-decoration: none;
  color: #ccc;
  display: flex;
  align-items: center;
  gap: 5px;
}
.card-link a:hover {
  color: #fff;
}
.contact {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  color: #fff;
  margin-top: 200px;
}
.contact-info {
  display: flex;
  justify-content: space-around;
  gap: 70px;
  font-size: 25px;
}
.contact-social-media img {
  margin: 20px;
}
hr {
  color: #ffff;
  width: 80%;
}
.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #ffff;
  margin: 70px 0px;
  background-color: #000;
  font-size: 22px;
}
.navbar ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
  gap: 65px;
}
.navbar ul li a {
  text-decoration: none;
  color: #ffff;
}
.footer-info span {
  font-size: 22px;
  background: linear-gradient(to right, #e70faa, #00c0fd);
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 0 0 0px;
}
.show {
  background-color: #363636;
  border-radius: 10px;
  border: #d7ffe0;
  width: 394px;
  height: 54px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px auto 0px auto;
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
.download {
  background-color: #363636;
  border-radius: 10px;
  border: #d7ffe0;
  color: #fff;
  width: 214px;
  height: 54px;
  font-size: 12px;
  font-size: 20px;
  cursor: pointer;
}
.download:hover {
  background: transparent;
  border: 1px solid #363636;
}
.download a {
  text-decoration: none;
  color: #fff;
}
.contact-name {
  display: none;
}
@media screen and (min-width: 100px) and (max-width: 1300px) {
  hr {
    width: 100vw;
  }
  .myImage {
  }
  #not-responsive {
    display: none;
  }
  #responsive {
    display: block;
  }
  .about {
    width: 100vw;
    text-align: center;
  }
  .about h1 {
    width: 100vw;
  }
  .contact {
    margin-top: 55px;
    width: 100vw;
    flex-wrap: wrap;
  }
  .contact-name {
    display: block;
  }
  .contact-info {
    width: 100vw;
    flex-wrap: wrap;
    font-size: 20px;
    gap: 25px;
  }
  .contact-image {
    display: none;
  }
  .footer {
    flex-wrap: wrap;
    text-align: center;
  }
  .navbar ul {
    flex-wrap: wrap;
  }
}
</style>
