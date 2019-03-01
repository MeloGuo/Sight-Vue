<template>
  <div class="sight-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SightContent'
}
</script>

<style lang="scss" scoped>
  .sight-content {
    flex-grow: 1;
  }
</style>
