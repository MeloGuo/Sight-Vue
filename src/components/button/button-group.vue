<template>
  <div class="s-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SightButtonGroup',
  mounted () {
    for (const node of this.$el.children) {
      const name = node.nodeName.toLowerCase()
      if (name !== 'button') {
        console.warn(`s-button-group 的子元素应该均为 s-button，但是你写的是 ${name}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  $border-radius: 4px;

  .s-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .s-button {
      border-radius: 0;
      &:not(:first-child) {
        margin-left: -1px;
      }
      &:first-child {
        border-top-left-radius: $border-radius;
        border-bottom-left-radius: $border-radius;
        /*<!--margin-right: -1px;-->*/
      }
      &:last-child {
        border-top-right-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
        /*<!--margin-left: -1px;-->*/
      }
      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>
