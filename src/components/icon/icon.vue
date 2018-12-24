<template>
  <svg class="s-icon">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
import './svg.js'

export default {
  name: 'SightIcon',
  props: {
    name: String
  },
  computed: {
    iconName () {
      return `#i-${this.name}`
    }
  }
}
</script>

<style lang="scss" scoped>
  .s-icon {
    width: 1em;
    height: 1em;
  }
</style>
