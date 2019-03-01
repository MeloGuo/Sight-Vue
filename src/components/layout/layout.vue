<template>
  <div class="sight-layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SightLayout',
  mounted () {
    this.$children.forEach((child) => {
      if (child.$options.name === 'SightSider') {
        this.layoutClass['sight-layout-has-sider'] = true
      }
    })
  },
  data () {
    return {
      layoutClass: {
        'sight-layout-has-sider': false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .sight-layout {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    &.sight-layout-has-sider {
      flex-direction: row;
    }
  }
</style>
