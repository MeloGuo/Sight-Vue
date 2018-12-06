<template>
  <div class="col" :class="colClasses" :style="gutterStyle">
    <slot></slot>
  </div>
</template>

<script>
  /**
   * 判断传入响应式属性key的值
   * @param value
   * @returns {boolean}
   */
  const validator = function (value) {
    let keys = Object.keys(value)
    return keys.every((key) => ['span', 'offset'].indexOf(key) > -1)
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
      },
      sm: {
        type: Object,
        validator
      },
      md: {
        type: Object,
        validator
      },
      lg: {
        type: Object,
        validator
      },
      xl: {
        type: Object,
        validator
      },
      xxl: {
        type: Object,
        validator
      }
    },
    data () {
      return {
        gutter: 0 // 从父组件 Row 接收 gutter 值
      }
    },
    methods: {
      createClasses (obj, str = '') {
        if (!obj) {
          return []
        }

        const result = []
        if (obj.span) {
          result.push(`col-${str}${obj.span}`)
        }
        if (obj.offset) {
          result.push(`offset-${str}${obj.offset}`)
        }
        return result
      }
    },
    computed: {
      colClasses () {
        const {span, offset, xs, sm, md, lg, xl, xxl} = this
        const createClasses = this.createClasses
        return [
          ...createClasses({span, offset}),
          ...createClasses(xs, 'xs-'),
          ...createClasses(sm, 'sm-'),
          ...createClasses(md, 'md-'),
          ...createClasses(lg, 'lg-'),
          ...createClasses(xl, 'xl-'),
          ...createClasses(xxl, 'xxl-')
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
    ///////////////
    /* 默认 span */
    width: 100%;

    $prefix: col-;
    @for $n from 1 through 24 {
      &.#{$prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $prefix: offset-;
    @for $n from 0 through 24 {
      &.#{$prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
    /* 默认 span */
    //////////////

    ///////////////
    /* xs span */
    $prefix: col-xs-;
    @for $n from 1 through 24 {
      &.#{$prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $prefix: offset-xs-;
    @for $n from 0 through 24 {
      &.#{$prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
    /* xs span */
    /////////////


    @media (min-width: 576px) {
      $prefix: col-sm-;
      @for $n from 1 through 24 {
        &.#{$prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $prefix: offset-sm-; /* TODO:解决 offset-xs-undefined 的问题 */
      @for $n from 0 through 24 {
        &.#{$prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }

    @media (min-width: 768px) {
      $prefix: col-md-;
      @for $n from 1 through 24 {
        &.#{$prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $prefix: offset-md-;
      @for $n from 0 through 24 {
        &.#{$prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }

    @media (min-width: 992px) {
      $prefix: col-lg-;
      @for $n from 1 through 24 {
        &.#{$prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      $prefix: offset-lg-;
      @for $n from 0 through 24 {
        &.#{$prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }

    @media (min-width: 1200px) {
      @for $n from 1 through 24 {
        &.col-xl-#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      @for $n from 0 through 24 {
        &.offset-xl-#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }

    @media (min-width: 1600px) {
      @for $n from 1 through 24 {
        &.col-xxl-#{$n} {
          width: ($n / 24) * 100%;
        }
      }

      @for $n from 0 through 24 {
        &.offset-xxl-#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
  }
</style>
