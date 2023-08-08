<template>
    <Slide right closeOnNavigation="true">
        <router-link class="menu-item-ham" to="/home">Home</router-link>
        <router-link class="menu-item-ham" to="/about">About</router-link>
        <router-link class="menu-item-ham" to="/learning/course">Learning</router-link>
        <router-link class="menu-item-ham" to="/protfolio">Protfolio</router-link>
    </Slide>
</template>

<script>
import { Slide } from 'vue-burger-menu'
export default {
    name: 'NavBar',
    components: {
    Slide
  }

}
</script>

<style lang="scss">
.bm-burger-button {
    z-index: 100;
    display: none;
    position: fixed;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 22px;
    cursor: pointer;

    @media (max-width: 650px) {
      display: block;
    }
  }
  .bm-burger-bars {
    background-color: rgb(22, 36, 74, .8) !important;
  }
  .line-style {
    position: absolute;
    height: 15%;
    left: 0;
    right: 0;
    border-radius: 20px;
  }
  .cross-style {
    position: absolute;
    top: 12px;
    right: 2px;
    cursor: pointer;
  }
  .bm-cross {
    background: #447495  !important;
  }
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }
  .bm-menu {
    height: 100%; /* 100% Full-height */
    width: 0; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1000; /* Stay on top */
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.6) !important; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
  }
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
  .bm-item-list {
    color: #b8b7ad !important;
    margin-left: 10%;
    font-size: 35px !important; 
  }
  .menu-item-ham {
    display: flex;
    text-decoration: none;
    padding: 0.7em;
  }
  .menu-item-ham {
    margin-left: 10px;
    color: rgba(22, 36, 74, 0.8) !important;
        &:hover{
    font-weight: 600 !important;
    }
  }
</style>