<template>
  <div class="col" :class="colClasses" :style="gutterStyle">
    <slot></slot>
  </div>
</template>

<script>
  const validator = function (value) {
    let keys = Object.keys(value)
    return keys.every((key) => ['span', 'offset'].includes(key))
  }

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
      },
      xs: {
        type: Object,
        validator
      }
    },
    data () {
      return {
        gutter: 0
      }
    },
    computed: {
      colClasses () {
        const {span, offset, xs} = this
        let xsClass = []
        if (xs) {
          xsClass = [`col-xs-${xs.span}`, `offset-xs-${xs.offset}`]
        }

        return [
          span && `col-${span}`,
          offset && `offset-${offset}`,
          ...xsClass
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

    @media (max-width: 575px) {
      $prefix: col-xs-;
      @for $n from 1 through 24 {
        &.#{$prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $prefix: offset-xs-; /* TODO:解决 offset-xs-undefined 的问题 */
      @for $n from 0 through 24 {
        &.#{$prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
  }
</style>
