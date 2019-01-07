<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="popover" v-if="popoverVisible">
      <cascader-items :items="source"></cascader-items>
    </div>
  </div>
</template>

<script>
  import CascaderItems from './cascader-items.vue'

  export default {
    name: 'SightCascader',
    components: {
      'cascader-items': CascaderItems
    },
    props: {
      source: {
        type: Array
      }
    },
    data () {
      return {
        popoverVisible: false
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "var";

  .cascader {

    .trigger {
      border: 1px solid red;
      height: 32px;
      width: 100px;
    }

    .popover {
      border: 1px solid red;
      height: 200px;
      width: 100px;
      display: flex;
    }
  }
</style>
