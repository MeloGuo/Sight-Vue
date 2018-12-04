<template>
  <div class="row" :class="rowClasses" :style="gutterStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SightRow',
    props: {
      gutter: {
        type: [Number, String]
      },
      justify: {
        type: String,
        default: 'start',
        validator (value) {
          return [
            'start',
            'end',
            'center',
            'space-around',
            'space-between'
          ].includes(value)
        }
      },
      align: {
        type: String,
        default: 'top',
        validator (value) {
          return [
            'top',
            'middle',
            'bottom'
          ].includes(value)
        }
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
      },
      rowClasses () {
        const { justify, align } = this
        return [
          `row-${justify}`,
          `row-${align}`
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .row {
    display: flex;
    flex-wrap: wrap;

    &.row-start {
      justify-content: start;
    }
    &.row-end {
      justify-content: flex-end;
    }
    &.row-center {
      justify-content: center;
    }
    &.row-space-around {
      justify-content: space-around;
    }
    &.row-space-between {
      justify-content: space-between;
    }
    &.row-top {
      align-items: flex-start;
    }
    &.row-center {
      align-items: center;
    }
    &.row-bottom {
      align-items: flex-end;
    }
  }
</style>
