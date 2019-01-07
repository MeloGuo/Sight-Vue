<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <div v-for="item in source">
        <cascader-x :source-item="item"></cascader-x>
      </div>
    </div>
  </div>
</template>

<script>
  import CascaderItem from './cascader-item.vue'

  export default {
    name: 'SightCascader',
    components: {
      'cascader-x': CascaderItem
    },
    props: {
      source: {
        type: Array
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "var";

  .cascader {

  }
</style>
