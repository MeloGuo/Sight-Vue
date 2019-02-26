<template>
  <transition name="slide">
    <div class="s-slides-item" :class="{reverse}" v-if="visible">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'SightSlidesItem',
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        selected: undefined,
        reverse: false
      }
    },
    computed: {
      visible () {
        return this.selected === this.name
      }
    }

  }
</script>

<style scoped lang="scss">
  .s-slides-item {
  }
  .slide-leave-active {
    position: absolute;
    left: 0; top: 0;
    width: 100%;
    height: 100%;
  }
  .slide-enter-active, .slide-leave-active {
    transition: all 1s;
  }
  .slide-enter {
    transform: translateX(100%);
    opacity: 0;
  }
  .slide-enter.reverse {
    transform: translateX(-100%);
  }
  .slide-leave-to {
    transform: translateX(-100%);
    opacity: 0;
  }
  .slide-leave-to.reverse {
    transform: translateX(100%);
  }
</style>
