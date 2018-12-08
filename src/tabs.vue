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
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'SightTabsHead') {
          vm.$children.forEach((childVm) => {
            if (childVm.$options.name === 'SightTabsItem'
              && childVm.name === this.selected) {
              this.eventBus.$emit('update:selected', this.selected, childVm)
            }
          })
        }
      })
    }
  }
</script>

<style scoped>
  .tabs {

  }
</style>
