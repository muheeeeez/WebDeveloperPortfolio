<template>
  <div class="dashboard">
    <div>
      <navigation-bar></navigation-bar>
    </div>
    <div class="about">
      <div>
        <h1>
          Hi 👋, My name is
          <div class="name" data-text="Abdul-muiz Olaleye">
            Abdul-muiz Olaleye
          </div>
          I build things for web
        </h1>
      </div>
      <div><img src="../img/moi.jpg" alt="" /></div>
    </div>
    <div class="tech-stack">
      <h1>My Tech Stack</h1>
      <p>Technologies I've been working with recently</p>
      <div class="languages">
        <div class="row">
          <img src="../img/logo/html-logo.png" alt="html" class="flex-item" />
          <img src="../img/logo/css-logo.png" alt="css" class="flex-item" />
          <img
            src="../img/logo/js-logo.png"
            alt="javascript"
            class="flex-item"
          />
          <img
            src="../img/logo/Vue-logo.png"
            alt="vue.js"
            style="width: 93.59px; height: 105px"
            class="flex-item"
          />
          <img
            src="../img/logo/Java-logo.png"
            alt="java"
            style="width: 93.59px; height: 150px"
            class="flex-item"
          />
          <img
            src="../img/logo/bootstrap-logo.png"
            alt="Bootstrap"
            class="flex-item"
          />
          <img
            src="../img/logo/tailwind-logo.png"
            alt="tailwind"
            class="flex-item"
          />
        </div>
        <div class="row">
          <img src="../img/logo/sass-logo.png" alt="sass" class="flex-item" />
          <img src="../img/logo/git-logo.png" alt="git" class="flex-item" />
          <img
            src="../img/logo/github-logo.png"
            alt="github"
            class="flex-item"
          />
          <img
            src="../img/logo/vscode-logo.png"
            alt="vscode"
            class="flex-item"
          />

          <img
            src="../img/logo/mysql-logo.png"
            alt="mysql"
            style="width: 93.59px; height: 105px"
            class="flex-item"
          />
          <img
            src="../img/logo/postgres-logo.png"
            alt="postgres"
            style="width: 93.59px; height: 105px"
            class="flex-item"
          />
          <img
            src="../img/logo/eclipse-logo.png"
            alt="eclipse"
            style="width: 93.59px; height: 105px"
            class="flex-item"
          />
        </div>
      </div>
    </div>
    <div class="projects">
      <h1>Projects</h1>
      <p>Things I've built so far</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.dashboard {
  background-color: #000;
}
.about {
  display: flex;
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
  width: 349px;
  height: 349px;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #e70faa, #00c0fd) border-box; /* Use #E70FAA and #00C0FD for the linear gradient */
  border-radius: 230px;
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
</style>