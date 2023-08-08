<template>
  <div class="protfolio">
    <transition appear name="right">
      <div class="content">
        <span class="note">*點選圖片進入GitHub頁面，最下方進入部署網址</span>
        <div class="item" v-for="(item, index) in protfolio" :key="index">
          <div class="mask">
            <a :href="item.url" target="blank_"
              ><img :src="item.img" alt=""
            /></a>
          </div>
          <div class="title">{{ item.title }}</div>
          <div class="tech">
            <p>{{ item.tech[0].t1 }}</p>
            <p>{{ item.tech[0].t2 }}</p>
            <p v-if="item.tech[0].t3 != ''">{{ item.tech[0].t3 }}</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Protfolio",
  data() {
    return {
      // protfolio: [
      //   {
      //     title: "BMI計算機",
      //     tech: [
      //       {
      //         t1: "JavaScript",
      //         t2: "　",
      //         t3: "　",
      //       },
      //     ],
      //     img: require("@/assets/img/protfolio-bmi_.png"),
      //     url: "https://github.com/gsbka7/bmi",
      //   },
      //   {
      //     title: "色弱測驗",
      //     tech: [
      //       {
      //         t1: "JavaScript",
      //         t2: "　",
      //         t3: "　",
      //       },
      //     ],
      //     img: require("@/assets/img/protfolio-color-blindness-test.png"),
      //     url: "https://github.com/gsbka7/color-blindness-test",
      //   },
      //   {
      //     title: "台灣即時天氣",
      //     tech: [
      //       {
      //         t1: "JavaScript",
      //         t2: "第三方API串接",
      //         t3: "　",
      //       },
      //     ],
      //     img: require("@/assets/img/protfolio-weather-card_.png"),
      //     url: "https://github.com/gsbka7/weather-card",
      //   },
      //   {
      //     title: " 靜態網站切版設計",
      //     tech: [
      //       {
      //         t1: "JavaScript",
      //         t2: "SCSS",
      //         t3: "RWD",
      //       },
      //     ],
      //     img: require("@/assets/img/protfolio-kasutera.ver_2.png"),
      //     url: "https://github.com/gsbka7/kasutera.ver_2",
      //   },
      //   {
      //     title: "購物網站前後台管理",
      //     tech: [
      //       {
      //         t1: "Laravel",
      //         t2: "BootStrap",
      //         t3: "第三方金流串接",
      //       },
      //     ],
      //     img: require("@/assets/img/shippingcart.png"),
      //     url: "https://github.com/gsbka7/laravel-shoppingcart",
      //   },
      //   {
      //     title: "靜態網站切版設計",
      //     tech: [
      //       {
      //         t1: "Vue CLI",
      //         t2: "Vue Router",
      //         t3: "Vuex",
      //       },
      //     ],
      //     img: require("@/assets/img/mori-vue.png"),
      //     url: "https://github.com/gsbka7/mori_vue",
      //   },
      //   {
      //     title: "後台管理系統",
      //     tech: [
      //       {
      //         t1: "Vue CLI",
      //         t2: "Node.js",
      //         t3: "MongoDB",
      //       },
      //     ],
      //     img: require("@/assets/img/protfolio-backstage.png"),
      //     url: "https://github.com/gsbka7/backstage_vue_nodejs",
      //   },
      //   {
      //     title: "文具購物網站",
      //     tech: [
      //       {
      //         t1: "Vue CLI",
      //         t2: "Spring Boot",
      //         t3: "Nginx",
      //       },
      //     ],
      //     img: require("@/assets/img/store-spring-boot.png"),
      //     url: "https://github.com/gsbka7/store-frontend",
      //   }
      // ],
      protfolio: [
        {
          title: "文具購物網站",
          tech: [
            {
              t1: "Vue CLI",
              t2: "Spring Boot",
              t3: "Nginx",
            },
          ],
          img: require("@/assets/img/store-spring-boot.png"),
          url: "https://github.com/gsbka7/store-frontend",
        },
        {
          title: "後台管理系統",
          tech: [
            {
              t1: "Vue CLI",
              t2: "Node.js",
              t3: "MongoDB",
            },
          ],
          img: require("@/assets/img/protfolio-backstage.png"),
          url: "https://github.com/gsbka7/backstage_vue_nodejs",
        },
        {
          title: "靜態網站切版設計",
          tech: [
            {
              t1: "Vue CLI",
              t2: "Vue Router",
              t3: "Vuex",
            },
          ],
          img: require("@/assets/img/mori-vue.png"),
          url: "https://github.com/gsbka7/mori_vue",
        },
        {
          title: "購物網站前後台管理",
          tech: [
            {
              t1: "Laravel",
              t2: "BootStrap",
              t3: "第三方金流串接",
            },
          ],
          img: require("@/assets/img/shippingcart.png"),
          url: "https://github.com/gsbka7/laravel-shoppingcart",
        },
        {
          title: " 靜態網站切版設計",
          tech: [
            {
              t1: "JavaScript",
              t2: "SCSS",
              t3: "RWD",
            },
          ],
          img: require("@/assets/img/protfolio-kasutera.ver_2.png"),
          url: "https://github.com/gsbka7/kasutera.ver_2",
        },
        {
          title: "台灣即時天氣",
          tech: [
            {
              t1: "JavaScript",
              t2: "第三方API串接",
              t3: "　",
            },
          ],
          img: require("@/assets/img/protfolio-weather-card_.png"),
          url: "https://github.com/gsbka7/weather-card",
        },
        {
          title: "色弱測驗",
          tech: [
            {
              t1: "JavaScript",
              t2: "　",
              t3: "　",
            },
          ],
          img: require("@/assets/img/protfolio-color-blindness-test.png"),
          url: "https://github.com/gsbka7/color-blindness-test",
        },{
          title: "BMI計算機",
          tech: [
            {
              t1: "JavaScript",
              t2: "　",
              t3: "　",
            },
          ],
          img: require("@/assets/img/protfolio-bmi_.png"),
          url: "https://github.com/gsbka7/bmi",
        }
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.right-leave-active,
.right-enter-active {
  transition: 1.5s;
}
.right-enter {
  transform: translateY(70px);
  opacity: 0;
}
.right-leave {
  transform: translateY(-70px);
  opacity: 1;
}
.protfolio {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(245, 234, 219);

  .content {
    position: relative;
    display: flex;
    min-width: 90%;
    width: 90%;
    flex-wrap: wrap;
    margin: 100px 0;

    .note {
      position: absolute;
      top: -30px;
      color: #ff0000;
      font-weight: 600;
      letter-spacing: 2px;

      @media (max-width: 700px) {
        top: -55px;
      }
    }

    .item {
      position: relative;
      display: flex;
      flex-direction: column;
      width: calc(100% / 3);
      align-items: center;
      justify-content: center;
      margin: 70px 0 100px;

      @media (max-width: 1560px) {
        width: calc(100% / 2);
      }
      @media (max-width: 1000px) {
        width: 100%;
      }

      @media (max-width: 700px) {
          margin: 70px 0 0;
      }

      .mask {
        height: 350px;
        overflow: hidden;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;

        @media (max-width: 700px) {
          img {
            width: 300px;
            height: 300px;
          }
        }

        img {
          width: 350px;
          height: 350px;
          border-radius: 20px;
          transform: scale(1.3);
          transition: 0.3s ease-in-out;
          border-radius: 20px;
          filter: blur(0.5px);

          &:hover {
            transform: scale(1);
            filter: blur(0);
            transition: 0.3s ease-in-out;
          }
        }
      }

      .title {
        position: relative;
        font-size: 40px;
        font-weight: 600;
        top: -380px;
        left: -100px;
        color: rgb(90, 88, 88);
        letter-spacing: 2px;
        font-weight: 600;

        @media (max-width: 700px) {
            font-size: 35px;
            top: -400px;
            left: 0px;
            color: rgb(90, 88, 88);
        }
      }
      .tech {

        position: relative;
        font-size: 30px;
        top: -70px;
        left: 150px;
        font-weight: bold;
        color: rgb(95, 94, 94);

        p {
          margin: 0 0 10px 0;
        }

        @media (max-width: 700px) {
            font-size: 25px;
            top: -30px;
            left: 0px;
            color: rgb(71, 71, 71);
        }
      }
    }
  }
}
</style>