<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SightLayout',
  mounted () {
    this.$children.forEach((child) => {
      if (child.$options.name === 'SightSider') {
        this.layoutClass['layout-has-sider'] = true
      }
    })
  },
  data () {
    return {
      layoutClass: {
        'layout-has-sider': false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .layout {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    &.layout-has-sider {
      flex-direction: row;
    }
  }
</style>
