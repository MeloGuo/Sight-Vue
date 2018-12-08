<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SightTabsHead',
    inject: ['eventBus'],
    created () {
      this.eventBus.$on('update:selected', (item, selected) => {
        console.log(item, selected)
      })
    }
  }
</script>

<style scoped lang="scss">
  $tab-height: 40px;
  $blue: blue;
  .tabs-head {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    border: 1px solid red;
    position: relative;

    > .line {
      width: 50px;
      position: absolute;
      bottom: 0;
      border-bottom: 4px solid $blue;
    }

    > .actions-wrapper {
      margin-left: auto;
      display: flex;
      align-items: center;
    }
  }
</style>
