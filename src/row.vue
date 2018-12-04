<template>
  <div class="row" :style="gutterStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SightRow',
    props: {
      gutter: {
        type: [Number, String],
        default: 0
      }
    },
    mounted () {
      this.$children.forEach((child) => {
        child.gutter = this.gutter
      })
    },
    computed: {
      gutterStyle () {
        const margin = -this.gutter / 2 + 'px'
        return {
          marginLeft: margin,
          marginRight: margin
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .row {
    display: flex;
  }
</style>
