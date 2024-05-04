<template>
  <nav class="navbar">
    <div class="logo"><img src="../img/logo.png" alt="logo" /></div>
    <div>
      <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Tech Stack</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div class="social-icons">
      <img src="../img/github-icon.png" alt="github-icon" />
      <img src="../img/twitter-icon.png" alt="twitter-icon" />
      <img src="../img/linkedin-icon.png" alt="linkedin-icon" />
    </div>
  </nav>
</template>

<script>
export default {};
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
</style>