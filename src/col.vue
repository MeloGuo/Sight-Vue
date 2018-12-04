<template>
  <div class="col" :class="colClasses" :style="gutterStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SightCol',
    props: {
      span: {
        type: [Number, String],
        validator (value) {
          value = parseInt(value)
          return value > 0 && value <= 24
        }
      },
      offset: {
        type: [Number, String],
        validator (value) {
          value = parseInt(value)
          return value > 0 && value <= 24
        }
      }
    },
    data () {
      return {
        gutter: 0
      }
    },
    computed: {
      colClasses () {
        const { span, offset } = this
        return [
          span && `col-${span}`,
          offset && `offset-${offset}`
        ]
      },
      gutterStyle () {
        const padding = this.gutter / 2 + 'px'
        return {
          paddingLeft: padding,
          paddingRight: padding
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .col {
    height: 100px;
    width: 100%;

    $prefix: col-;
    @for $n from 1 through 24 {
      &.#{$prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
</style>
