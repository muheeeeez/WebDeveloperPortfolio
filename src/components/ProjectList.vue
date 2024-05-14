<template>
  <div>
    <navigation-bar></navigation-bar>
  </div>
  <div class="projects" id="projects">
    <h1>Projects</h1>
    <p>Things I've built so far</p>
  </div>
  <div class="card-container">
    <div v-for="project in projectList" :key="project.id" class="project-list">
      <img :src="project.projectImage" class="card-image" />
      <div class="card-details">
        <h3 class="card-title">{{ project.projectName }}</h3>
        <p class="card-text">{{ project.projectDescription }}</p>
        <div class="card-link">
          <div>
            <a :href="project.projectLink"
              ><svg
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
              Live Preview</a
            >
          </div>
          <div>
            <a :href="project.projectCodeLink"
              ><svg
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
                    d="M10 0C4.475 0 0 4.475 0 10C0 14.425 2.8625 18.1625 6.8375 19.4875C7.3375 19.575 7.525 19.275 7.525 19.0125C7.525 18.775 7.5125 17.9875 7.5125 17.15C5 17.6125 4.35 16.5375 4.15 15.975C4.0375 15.6875 3.55 14.8 3.125 14.5625C2.775 14.375 2.275 13.9125 3.1125 13.9C3.9 13.8875 4.4625 14.625 4.65 14.925C5.55 16.4375 6.9875 16.0125 7.5625 15.75C7.65 15.1 7.9125 14.6625 8.2 14.4125C5.975 14.1625 3.65 13.3 3.65 9.475C3.65 8.3875 4.0375 7.4875 4.675 6.7875C4.575 6.5375 4.225 5.5125 4.775 4.1375C4.775 4.1375 5.6125 3.875 7.525 5.1625C8.325 4.9375 9.175 4.825 10.025 4.825C10.875 4.825 11.725 4.9375 12.525 5.1625C14.4375 3.8625 15.275 4.1375 15.275 4.1375C15.825 5.5125 15.475 6.5375 15.375 6.7875C16.0125 7.4875 16.4 8.375 16.4 9.475C16.4 13.3125 14.0625 14.1625 11.8375 14.4125C12.2 14.725 12.5125 15.325 12.5125 16.2625C12.5125 17.6 12.5 18.675 12.5 19.0125C12.5 19.275 12.6875 19.5875 13.1875 19.4875C15.1726 18.8173 16.8976 17.5414 18.1197 15.8395C19.3418 14.1375 19.9994 12.0952 20 10C20 4.475 15.525 0 10 0Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_14_210">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              View Code</a
            >
          </div>
        </div>
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
import DotNotation from "../img/DotNotation.png";
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
        {
          id: "p7",
          projectImage: DotNotation,
          projectName: "DotNotation",
          projectDescription:
            "A simple website design to practice forms, animations and navigation bars",
          projectLink: "https://dotnotation.netlify.app/",
          projectCodeLink: "https://github.com/muheeeeez/Dotnotation",
        },
      ],
    };
  },
};
</script>

<style scoped>
.projects {
  color: #d9d9d9;
  text-align: center;
  padding-top: 95px;
}
.projects h1 {
  font-size: 48px;
}
.projects p {
  font-size: 32px;
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
  width: 70%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 70px;
  color: #cccc;
}
.project-list {
  margin: 0 auto;
  width: 373px;
  height: 587px;
  border-radius: 12px;
  border: 1px solid #363636;
  background-color: #282727;
  transition: transform 0.2s ease-in;
}
.project-list:hover {
  transform: translateY(-25px);
}
.card-image {
  width: 375px;
  height: 250px;
  border-radius: 12px;
  border: 1px;
}
.card-title {
  font-size: 28px;
  text-align: center;
  font-weight: 800;
}
.card-text {
  font-size: 18px;
  width: 354px;
  text-align: center;
}
.card-details {
  top: 0;
  left: 0;
  /* margin-top: -40px; */
  padding: 0;
  /* border: 1px solid #cccc; */
}
.card-link {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.card-link a {
  text-decoration: none;
  color: #ccc;
}
</style>