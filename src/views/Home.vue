<template>
  <div class="container">
    <div class="wrapper">
      <div class="dynamic-txts">
        <li><span>Hello.</span></li>
        <li><span>Welcome.</span></li>
        <li><span>Resume.</span></li>
      </div>
    </div>
    <a href="https://gsbka7.github.io/learning_note/" target="block" class="note">→學習筆記</a>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped lang="scss">
.container {
  position: relative;
  width: 100%;
  height: calc(100vh - 72px);
  background-color: rgb(245, 234, 219);

  .wrapper {
  display: inline-flex;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  .dynamic-txts {
    margin-left: 15px;
    line-height: 120px;
    height: 120px;
    overflow: hidden;

    li {
      height: 200px;
      color: rgb(126, 79, 79);
      list-style: none;
      font-weight: 500;
      font-size: 100px;
      position: relative;
      animation: slide 12s steps(4) infinite;
      top: 0;
      @keyframes slide {
        100% {
          top: -800px;
        }
      }
      @media (max-width: 500px) {
        font-size: 70px;
      }
    }
    span {
      position: relative;
      &:after {
        content: "";
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(245, 234, 219);
        border-left: 2px solid rgb(184, 178, 169);
        animation: typing 3s steps(10) infinite;
      }
    }
    @keyframes typing {
      40%,
      60% {
        left: 100%;
        margin: 0 -35px 0 35px;
      }
      100% {
        left: 0;
      }
    }
  }
}
  .note{
    position: absolute;
    top: 53%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 22px;
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

</style>