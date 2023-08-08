<template>

  <div id="app">
    <nav-menu></nav-menu>
    <div class="height"></div>
    <transition name="slide-left" mode="out-in">
      <router-view></router-view>
    </transition>
    <nav-bar></nav-bar>

    <!-- <Slide closeOnNavigation = "flase" right> -->
      <!-- <router-link class="menu-item" to="/home">Home</router-link>
      <router-link class="menu-item" to="/about">About</router-link>
      <router-link class="menu-item" to="/learning/php">Learning</router-link>
      <router-link class="menu-item" to="/protfolio">Protfolio</router-link> -->
    <!-- </Slide> -->

  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu/NavMenu'
import NavBar from '@/components/NavMenu/NavBar'

// import '@/assets/css/t.css'

export default {
  name: "App",
  components: {
    NavMenu,
    NavBar
  }
}
</script>

<style lang="scss" scoped>
@import url('@/assets/css/normalize.css');
@import url('@/assets/css/font.css');

// router-view 淡入淡出
.slide-left-enter {
    opacity: 0;
}
.slide-left-enter-active{
  transition: all 0.2s linear;
}
.slide-left-leave-to{
  
  opacity: 0;
}
.slide-left-leave-active {
  transition: all 0.2s linear;
}
#app{
  font-family: 'ZenKurenaido';
}
.height{
  height: 72px;
}
// 美化滾動條
::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 0;
}
::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-thumb {
  cursor: pointer;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.15);
  transition: color 0.2s ease;
}

</style>
