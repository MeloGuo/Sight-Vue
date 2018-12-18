<template>
  <svg class="s-icon">
    <use :xlink:href=`#i-${name}`></use>
  </svg>
</template>

<script>
  import './svg.js'

  export default {
    name: 'SightIcon',
    props: {
      name: String
    }
  }
</script>

<style lang="scss" scoped>
  .s-icon {
    width: 1em;
    height: 1em;
  }
</style>
