<template>
  <div class="s-sub-nav">
    <span @click="onClick">
      <slot name="title"></slot>
    </span>
    <div v-show="isShow" class="s-sub-nav-popover">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SightSubNav',
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    onClick () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style scoped lang="scss">
.s-sub-nav {
  position: relative;
  > span {
    display: inline-block;
    vertical-align: top;
    padding: 10px 20px;
  }
  &-popover {
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid black;
    white-space: nowrap;
  }
}
</style>
