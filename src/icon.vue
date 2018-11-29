<template>
  <svg class="s-icon">
    <use :xlink:href=`#i-${name}`></use>
  </svg>
</template>

<script>
  export default {
    props: {
      name: String
    }
  }
</script>

<style lang="scss">
  .s-icon {
    width: 1em;
    height: 1em;
  }
</style>
