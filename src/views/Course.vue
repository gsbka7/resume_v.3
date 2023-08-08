<template>
  <div class="php">
    <div class="skill">
      <transition appear name="front">
        <div class="front">
          <span class="title">前端</span>
          <div class="logo">
            <div class="item" v-for="(item, index) in frontLogo" :key="index">
              <img :src="item.img" alt="" />
              <span>{{ item.text }}</span>
            </div>
          </div>
          <div class="desc">
            <p>CSS切版設計、JavaScript基礎語法使用、RWD響應式網站設計</p>
            <p>Bootstap語法、欄位使用</p>
            <p>Sass使用撰寫</p>
            <p>API串接</p>
          </div>
        </div>
      </transition>
      <div class="back" ref="backHeight" :class="{ show: backActive }">
        <span class="title">後端</span>
        <div  class="logo">
          <div class="item" v-for="(item, index) in backLogo" :key="index">
            <img :src="item.img" alt="" />
            <span>{{ item.text }}</span>
          </div>
        </div>
        <div class="desc">
          <p>消息列表製作、商品管理、會員註冊、購物車功能，第三方金流串接</p>
        </div>
      </div>
      <div class="other" ref="otherHeight" :class="{ show: otherActive }">
        <span class="title">Other</span>
        <div class="logo">
          <div class="item" v-for="(item, index) in otherLogo" :key="index">
            <img :src="item.img" alt="" />
            <span>{{ item.text }}</span>
          </div>
        </div>
        <div class="desc">
          <p>Photoshop：影像修飾、合成</p>
          <p>Figma：網站設計圖製作、UI/UX優化</p>
          <p>GitMind：網站地圖製作</p>
          <p>Github：專案上傳</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OneItem",
  data() {
    return {
      frontLogo: [
        {
          text: "HTML",
          img: require("@/assets/img/logo-html.png"),
        },
        {
          img: require("@/assets/img/logo-css.png"),
          text: "CSS",
        },
        {
          img: require("@/assets/img/logo-js.png"),
          text: "JS",
        },
        {
          img: require("@/assets/img/logo-rwd.png"),
          text: "RWD",
        },
        {
          img: require("@/assets/img/logo-bootstrap.png"),
          text: "bootstrap",
        },
        {
          img: require("@/assets/img/logo-sass.png"),
          text: "Sass",
        },
      ],
      backLogo: [
        {
          text: "Laravel",
          img: require("@/assets/img/logo-laravel.svg"),
        },
        // {
        //   text: "Xampp",
        //   img: require("@/assets/img/logo-xampp.png"),
        // },
        // {
        //   text: "HeidiSQL",
        //   img: require("@/assets/img/logo-HeidiSQL.png"),
        // },
      ],
      otherLogo: [
        {
          text: "Photoshop",
          img: require("@/assets/img/logo-photoshop.png"),
        },
        {
          text: "Figma",
          img: require("@/assets/img/logo-figma.png"),
        },
        {
          text: "GitMind",
          img: require("@/assets/img/logo-gitmind.png"),
        },
        {
          text: "Github",
          img: require("@/assets/img/logo-github.png"),
        },
      ],
      backActive: false,
      otherActive: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.fade, true);
  },
  methods: {
    fade() {
      let backHeight = this.$refs.backHeight;
      let otherHeight = this.$refs.otherHeight;

      const backDistance = backHeight.getBoundingClientRect().top + backHeight.clientHeight * .5;
      const otherDistance = otherHeight.getBoundingClientRect().top + otherHeight.clientHeight * .5;

      this.backActive = window.innerHeight > backDistance ? true : false;
      this.otherActive = window.innerHeight > otherDistance ? true : false;
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.fade, true);
  },
};
</script>

<style scoped lang="scss">
.php {
  background-color: rgb(245, 234, 219);
}
.front-leave-active,
.front-enter-active {
  position: relative;
  top: 0px;
  transition: 1s;
}
.front-enter {
  opacity: 0;
  top: 50px;
}
.front-leave {
  opacity: 1;
}
.skill {
  padding-bottom: 50px;

  span {
    display: inline-block;
    font-size: 22px;
    font-weight: 600;
    margin: 20px 0;
  }
  .back,
  .other {
    position: relative;
    top: 50px;
    opacity: 0;
  }
  .back.show,
  .other.show {
    position: relative;
    top: 0px;
    transition: 1s;
    opacity: 1;
  }
  .front {
    margin: 140px auto 200px;
    @media (max-width: 340px) {
        margin: 30px auto 100px;
    }
  }
  .back,
  .other{
    margin: 0 auto 260px;
    @media (max-width: 340px) {
        margin: 0px auto 100px;
    }
  }
  .front,
  .back,
  .other {
    max-width: 70%;

    span {
      font-size: 27px;
      font-weight: 600;
      margin:0px 0 50px;
    }
    .logo {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: calc(100% / 6);

        @media (max-width: 830px) {
          width: calc(100% / 3);
        }
        @media (max-width: 554px) {
          width: calc(100% / 2);
        }
        @media (max-width: 340px) {
          width: calc(100%);
        }
        img {
          width: 50px;
        }
        span {
          font-weight: 600;
          padding: 15px 0;
          margin: 0;
        }
      }
    }
    .desc {
      p {
        font-size: 22px;
        letter-spacing: 2px;
        text-align: start;
        margin-left: 50px;
        padding-top: 15px;
        
        @media (max-width: 554px) {
          margin: 0;
        }
      }
    }
  }
}
</style>