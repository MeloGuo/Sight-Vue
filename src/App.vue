<template>
  <div>
    <div class="swiper">
      <s-slides class="wrapper" :selected.sync="selected">
        <s-slides-item name="cool">
          <div class="box">1</div>
        </s-slides-item>
        <s-slides-item name="lol">
          <div class="box">2</div>
        </s-slides-item>
        <s-slides-item name="haha">
          <div class="box">3</div>
        </s-slides-item>
      </s-slides>
    </div>

    <div>
      <p>之外的文字</p>
    </div>
  </div>
</template>

<script>
  import Slides from './components/slides/slides.vue'
  import SlidesItem from './components/slides/slides-item.vue'

  export default {
    name: 'app',
    components: {
      's-slides': Slides,
      's-slides-item': SlidesItem
    },
    data () {
      return {
        selected: undefined
      }
    },
    mounted () {
      // let n = 1
      // setInterval(() => {
      //   if (n === 4) {
      //     n = 1
      //   }
      //   this.selected = n.toString()
      //   n++
      // }, 3000)
    }
  }
</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .swiper {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .box {
    width: 100%;
    height: 350px;
    box-sizing: border-box;
    background-color: grey;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }

  .wrapper {
    width: 100%;
    margin: 0 15%;
  }
</style>
