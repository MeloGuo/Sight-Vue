<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      {{result || '&nbsp;'}}
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <cascader-items class="popover" :class="[popoverClassName]" :items="source" :selected= "selected" @update:selected="onUpdate"></cascader-items>
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
    computed: {
      result () {
        return this.selected.map((item) => item.name).join('/')
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
      border: 1px solid $border-color;
      border-radius: $border-radius;
      height: $input-height;
      display: inline-flex;
      align-items: center;
      padding: 0 1em;
      min-width: 10em;
      width: 100px;
    }

    .popover-wrapper {
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #fff;
      display: flex;
      margin-top: 6px;
      @extend .box-shadow
    }
  }
</style>
