<template>
  <div class="s-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .s-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .s-button {
      border-radius: 0;
      &:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
        margin-right: -1px;
      }
      &:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
        margin-left: -1px;
      }
      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>
