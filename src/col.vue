<template>
  <div class="col" :class="[`col-${span}`]">
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
      }
    }
  }
</script>

<style scoped lang="scss">
  .col {
    height: 100px;
    background-color: grey;
    width: 50%;
    border: 1px solid red;

    $prefix: col-;
    @for $n from 1 through 24 {
      &.#{$prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
  }
</style>
