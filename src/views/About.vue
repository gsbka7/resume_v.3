<template>
  <div class="home">
    <transition appear name="left">
      <div class="left">
        <div class="name">謝誠興</div>
        <img class="avatar" src="@/assets/img/avatar.png" alt="">
        <div class="bd">1991/01/02</div>
      </div>
    </transition>
    <transition appear name="right">
    <div class="rigth">
      <span class="info-title">Phone Number</span>
        <span class="content">0906-271899</span>
        <span class="info-title">Email</span>
        <span class="content">gsbka7@gmail.com</span>
        <span class="info-title">Education</span>
        <span class="content edu">
            <span>2014</span>
            <span>文藻外語大學</span>
            <span>日文系</span>
        </span>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: calc(100vh - 72px);
  width: 100%;
  background-color: rgb(245, 234, 219);
  
  @media (max-width: 840px) {
    flex-direction: column;
    height: 100%;
  }
  @media (max-width: 400px) {
    
  }

  .left{
    display: flex;
    flex-direction: column;
    width: 50%;

    @media (max-width: 840px) {
      padding-top: 50px;
    }

    .name{
      font-size: 55px;
      letter-spacing: 10px;
      text-align: center;
      
      @media (max-width: 400px) {
        font-size: 40px;
      }
    }
    img{
      width: 200px;
      border-radius: 50%;
      padding: 25px 0;
      margin: 0 auto;
    }
    .bd{
    font-size: 20px;
    padding-left:55%;
    letter-spacing: 5px;
    }
}
.left-leave-active, .left-enter-active{
  transition: 1s;
}
.left-enter{
  transform: translateY(-100px);
}
.left-leave{
  transform: translateY(100px);
}
.rigth{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    padding: 50px 0;

    @media (max-width: 400px) {
      width: 95%;
    }

    span.info-title{
      padding-bottom: 50px;

    }
    span.content{
      position: relative;
      top: -30px;
      left: 50px;
      font-size: 30px;
    }
    span.content.edu{
      display: flex;
      flex-wrap: wrap;
      gap: 15px;

      @media (max-width: 400px) {
        flex-direction: column;
      }
  }
}
.right-leave-active, .right-enter-active{
  transition: 1.5s;
}
.right-enter{
  transform: translateY(130px);
  opacity: 0;
}
.right-leave{
  transform: translateY(-130px);
  opacity: 1;
}
}
</style>