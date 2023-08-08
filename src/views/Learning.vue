<template>
    <div class="menu">
        <router-link class="php_" :class="{'active':styleChange}" to="/learning/course">PHP全端工程師班</router-link>
        <router-link class="myself_" to="/learning/self" @click.native="ChangeClick()">自主學習</router-link>
        <transition appear name="right">
      <div>
        <router-view></router-view>
      </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "Learning",
    data(){
      return {
        styleChange: true
      }
    },
    methods:{
      ChangeClick(){
        if(this.$route.path != "/learning/course"){
          this.styleChange = false;
        }else{
          this.sytleChange = true;
        }
      },
    },
}
</script>

<style scoped lang="scss">
.menu{
  background-color: rgb(245, 234, 219);
  text-align: center;
  padding-top: 50px;

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

}
.php_, .myself_{
  text-decoration: none;
  font-size: 25px;
  border: 1px solid transparent;
  background-color: rgb(241, 167, 140);
  border-radius: 10px 10px 10px 10px;
  color: rgb(248, 207, 207);
  margin-right: 100px;
  padding: 2px 10px;
  box-shadow: 5px 5px 5px black;
  opacity: .7;
  transition: .5s;

  @media (max-width: 830px) {
    margin-right: 20px;
    left: 20px;
  }
  @media (max-width: 600px) {
    margin-right: 20px;
  }

  @media (max-width: 450px) {
    width: 170px;
    margin-bottom: 20px;
    font-size: 20px;
  }
    &:hover{
      opacity: 1;
    }
    &.router-link-active {
    color: rgb(0, 0, 0);
    opacity :1;
  }
}
.php_.active{
  color: rgb(0, 0, 0);
  opacity :1;
}

.right-leave-active, .right-enter-active{
  transition: 1s;
}
.right-enter{
  transform: translateY(20px);
  opacity: 0;
}
.right-leave{
  transform: translateY(-20px);
  opacity: 1;
}
</style>