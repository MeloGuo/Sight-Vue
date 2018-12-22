<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SightTabsBody',
  inject: ['eventBus'],
  created () {

  }
}
</script>

<style scoped>

</style>
