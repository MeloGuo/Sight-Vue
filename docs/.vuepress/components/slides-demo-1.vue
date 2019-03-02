<template>
  <div class="slides-demo">
    <s-slides class="slides" :selected.sync="selected">
      <s-slides-item name="1">
        <div class="box">1</div>
      </s-slides-item>
      <s-slides-item name="2">
        <div class="box">2</div>
      </s-slides-item>
      <s-slides-item name="3">
        <div class="box">3</div>
      </s-slides-item>
    </s-slides>
  </div>
</template>

<script>
  import Slides from '../../../src/components/slides/slides.vue'
  import SlidesItem from '../../../src/components/slides/slides-item.vue'

  export default {
    components: {
      's-slides': Slides,
      's-slides-item': SlidesItem
    },
    data () {
      return {
        selected: undefined
      }
    }
  }
</script>

<style scoped lang="scss">
  * {
    box-sizing: border-box;
  }

  .slides {
    width: 100%;
  }

  .box {
    width: 100%;
    height: 350px;
    background-color: grey;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
</style>
