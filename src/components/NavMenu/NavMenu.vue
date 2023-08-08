<template>
  <div class="NavMenu">
    <router-link class="menu-item" to="/home">Home</router-link>
    <router-link class="menu-item" to="/about">About</router-link>
    <router-link class="menu-item" to="/learning/course">Learning</router-link>
    <router-link class="menu-item" to="/protfolio">Protfolio</router-link>
    <!-- <a class="v1" target="block" href="https://gsbka7.github.io/resume/">→前往v1版本</a> -->
    <a class="gh" href="https://github.com/gsbka7/resume_v.2" target="block">→GitHub</a>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  data() {
    return {
      href: 
        {
          home: '/home',
          about: '/about',
          learningPhp: '/learning/course',
          protfolio: '/protfolio'
        }
    }
  }
};
</script>

<style scoped lang="scss">
.NavMenu {
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 72px;
  line-height: 72px;
  background-color: rgb(180, 128, 128);
  text-align: right;
  box-shadow: 0 5px 5px black;
  padding-left: calc(100vw - 100%);
}
.menu-item {
  position: relative;
  color: rgb(0, 0, 0);
  text-decoration: 10%;
  font-size: 20px;
  letter-spacing: 1.5px;
  font-weight: 600;
  margin-right: 50px;
  margin-top: 72px;

  &:after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0%;
    border-bottom: 2px solid rgba(0, 0, 0, .5);
    transition: 0.4s;
  }
  &:hover:after {
    width: 100%;
  }
  @media (max-width: 650px) {
    display: none;
  }
}
.v1, .gh{
  position: absolute;
  left: 10px;
  font-size: 12px;
  font-weight: 600;
  line-height: 0;

  &:link {
    color: rgb(0, 0, 0);
  }
  &:visited {
    color: rgb(0, 0, 0);
  }
}

.v1{
    top: 63px;
    
}

.gh{
    // top: 37px;
    top: 63px;
}
</style>