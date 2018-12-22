<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'SightTabs',
  props: {
    selected: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      eventBus: new Vue()
    }
  },
  provide () {
    return {
      eventBus: this.eventBus
    }
  },
  mounted () {
    if (this.$children.length === 0) {
      throw new Error('tabs 的子组件应该是 tabs-head 和 tabs-body, 但你没有写子组件')
    }
    this.$children.forEach((vm) => {
      if (vm.$options.name === 'SightTabsHead') {
        vm.$children.forEach((childVm) => {
          if (childVm.$options.name === 'SightTabsItem' &&
              childVm.name === this.selected) {
            this.eventBus.$emit('update:selected', this.selected, childVm)
          }
        })
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .tabs {

  }
</style>
