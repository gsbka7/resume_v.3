<template>
  <div class="myself">
        <div class="skill">
      <transition appear name="skill">
        <div class="front">
          <span class="title">前端</span>
          <div class="logo">
            <div class="item" v-for="(item, index) in frontLogo" :key="index">
              <img :src="item.img" alt="" />
              <span>{{ item.text }}</span>
              <a v-if="item.url != '404'" class="note" :href="item.url" target="block">→學習筆記</a>
            </div>
          </div>
        </div>
      </transition>
      <div class="back" :class="{ show: backActive }">
        <span class="title">後端</span>
        <div ref="backHeight" class="logo">
          <div class="item" v-for="(item, index) in backLogo" :key="index">
            <img :src="item.img" alt="" />
            <span>{{ item.text }}</span>
            <a class="note" :href="item.url" target="block">→學習筆記</a>
          </div>
        </div>
      </div>
      <div class="db" :class="{ show: dbActive }">
        <span class="title">資料庫</span>
        <div ref="dbHeight" class="logo">
          <div class="item" v-for="(item, index) in dbLogo" :key="index">
            <img :src="item.img" alt="" />
            <span>{{ item.text }}</span>
            <a class="note" :href="item.url" target="block">→學習筆記</a>
          </div>
        </div>
      </div>
      <div class="other" :class="{ show: otherActive }">
        <span class="title">其他</span>
        <div ref="otherHeight" class="logo">
          <div class="item" v-for="(item, index) in otherLogo" :key="index">
            <img :src="item.img" alt="" />
            <span>{{ item.text }}</span>
            <a class="note" :href="item.url" target="block">→學習筆記</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TwoItem",
  data() {
    return {
        frontLogo: [
            {   
                text: 'Vue.js',
                img: require('@/assets/img/logo-vue.png'),
                url: 'https://gsbka7.github.io/learning_note/notes/vue2/01.html',
            },
            {   
                text: 'jQuery',
                img: require('@/assets/img/logo-jquery.png'),
                url: '404'
            },
            {   
                text: 'TypeScript',
                img: require('@/assets/img/logo-typescript.svg'),
                url: 'https://gsbka7.github.io/learning_note/notes/typescript/01.html'
            },
        ],
        backLogo: [
            {   
                text: 'Node.js',
                img: require('@/assets/img/logo-nodejs.png'),
                url: 'https://gsbka7.github.io/learning_note/notes/nodejs/01.html'
            },
            {   
                text: 'PHP',
                img: require('@/assets/img/logo-php.png'),
                url: 'https://gsbka7.github.io/learning_note/notes/php/01.html'
            },
            {   
                text: 'Java',
                img: require('@/assets/img/logo-java.png'),
                url: 'https://gsbka7.github.io/learning_note/notes/java/01.html'
            },
            {   
                text: 'Spring',
                img: require('@/assets/img/logo-spring.png'),
                url: 'https://gsbka7.github.io/learning_note/notes/spring/01.html'
            },
            {   
                text: 'Spring Boot',
                img: require('@/assets/img/logo-springboot.png'),
                url: '404'
            },
            {   
                text: 'MyBatis',
                img: require('@/assets/img/logo-mybatis.png'),
                url: '404'
            },
        ],
        dbLogo: [
            {   
                text: 'MySQL',
                img: require('@/assets/img/logo-mysql.png'),
                url: 'http://localhost:8080/learning_note/notes/mysql/01.html'
            },
            {   
                text: 'MongoDB',
                img: require('@/assets/img/logo-mongodb.png'),
                url: 'http://localhost:8080/learning_note/notes/mongodb/01.html'
            },
            {   
                text: 'Redis',
                img: require('@/assets/img/logo-redis.png'),
                url: 'http://localhost:8080/learning_note/notes/redis/01.html'
            },
        ],
        otherLogo: [
            {   
                text: 'Git',
                img: require('@/assets/img/logo-git.png'),
                url: 'https://gsbka7.github.io/learning_note/notes/git/01.html'
            },
        ],
        backActive: false,
        otherActive: false,
        dbActive: false
    }
  },
  mounted() {
    window.addEventListener("scroll", this.fade, true);
  },
  methods: {
    fade() {
      let backHeight = this.$refs["backHeight"];
      let dbHeight = this.$refs["dbHeight"];
      let otherHeight = this.$refs["otherHeight"];

      const backDistance = backHeight.getBoundingClientRect().top + backHeight.clientHeight * .5;
      const dbHDistance = dbHeight.getBoundingClientRect().top + dbHeight.clientHeight * .5;
      const otherDistance = otherHeight.getBoundingClientRect().top + otherHeight.clientHeight * .5;

      this.backActive = window.innerHeight > backDistance ? true : false;
      this.dbActive = window.innerHeight > dbHDistance ? true : false;
      this.otherActive = window.innerHeight > otherDistance ? true : false;
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.fade, true);
  },
}
</script>

<style scoped lang="scss">
.myself-item{
    background-color: rgb(245,234,219);
}
.skill-leave-active, 
.skill-enter-active{
    position: relative;
    top: 0px;
    transition: 1s;
}
.skill-enter{
    opacity: 0;
    top: 50px;
}
.skill-leave{
    opacity: 1;
}
.myself {
    position: relative;

    @media (max-width: 830px) {
        width: calc(100%);
    }

    .note{
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 3px;
        color: #000;
        text-decoration: none;

    &:after{
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: #000;
        
    }

    &:hover{
        color: rgb(171, 52, 52);
    }
}
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
  .db,
  .other{
    opacity: 0;
    position: relative;
    top: 50px;
  }
  .back.show,
  .db.show,
  .other.show {
    transition: 1s;
    opacity: 1;
    top: 0px;
  }
  .front {
    margin: 140px auto 100px;
  }
  .back,
  .other,
  .db,
  .other {
    margin: 0 auto 100px;
  }

  .front,
  .back,
  .db,
  .other {
    max-width: 70%;

    span {
      font-size: 27px;
      font-weight: 600;
      margin: 50px 0 50px;
    }
    .logo {
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 50px;
        width: calc(100% / 3);

        @media (max-width: 830px) {
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