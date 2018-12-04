<template>
  <div class="col" :class="[span && `col-${span}`, offset && `offset-${offset}`]">
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
    }
  }
</script>

<style scoped lang="scss">
  .col {
    height: 100px;
    background-color: grey;
    width: 100%;
    border: 1px solid red;

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
