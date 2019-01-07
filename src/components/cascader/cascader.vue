<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <cascader-items class="popover" :class="[popoverClassName]" :items="source" :selected="selected" @update:selected="onUpdate"></cascader-items>
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
      },
      popoverClassName: {
        type: String,
        default: ''
      },
      selected: {
        type: Array,
        default: () => []
      },
      level: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        popoverVisible: false
      }
    },
    methods: {
      onUpdate (newSelected) {
        this.$emit('update:selected', newSelected)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "var";

  .cascader {
    position: relative;
    .trigger {
      border: 1px solid black;
      height: 32px;
      width: 100px;
    }

    .popover-wrapper {
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #fff;
      display: flex;
      @extend .box-shadow
    }
  }
</style>
