<template>
  <div class="sight-pagination">
    <span class="sight-pagination-nav prev" :class="{disabled: currentPage === 1}">
      <s-icon name="left"></s-icon>
    </span>
    <template v-for="page in pages">
      <template v-if="page === currentPage">
        <span class="sight-pagination-item current">{{page}}</span>
      </template>
      <template v-else-if="page === '...'">
        <span class="sight-pagination-item separator">...</span>
      </template>
      <template v-else>
        <span class="sight-pagination-item other">{{page}}</span>
      </template>
    </template>
    <span class="sight-pagination-nav next" :class="{disabled: currentPage === totalPage}">
      <s-icon name="right"></s-icon>
    </span>
  </div>
</template>

<script>
  import SightIcon from '../icon/icon.vue'

  export default {
    name: 'SightPagination',
    components: {
      's-icon': SightIcon
    },
    props: {
      totalPage: {
        type: Number,
        required: true
      },
      currentPage: {
        type: Number,
        required: true
      },
      hideIfOnePage: {
        type: Boolean,
        default: true
      }
    },
    data () {
      const pages = unique([
        1, this.totalPage, this.currentPage, this.currentPage + 1,
        this.currentPage + 2, this.currentPage - 1, this.currentPage - 2
      ].filter((n) => n >= 1 && n <= this.totalPage)
        .sort((a, b) => a - b)).reduce((prev, current, index, array) => {
        prev.push(current)
        array[index + 1] !== undefined && array[index + 1] - current > 1 && prev.push('...')
        return prev
      }, [])

      return {
        pages
      }
    },
    methods: {
      callback () {
        console.log(this)
      }
    }
  }

  function unique (array) {
    const object = {}
    const result = []
    for (let i = 0; i < array.length; i++) {
      if (!object[array[i]]) {
        object[array[i]] = true
        result.push(array[i])
      }
    }
    return result
  }
</script>

<style scoped lang="scss">
  @import "var";

  .sight-pagination {
    $width: 20px;
    $height: 20px;
    $font-size: 12px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    &-item {
      border: 1px solid $grey;
      border-radius: $border-radius;
      padding: 0 4px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: $font-size;
      min-width: $width;
      height: $height;
      margin: 0 4px;
      cursor: pointer;

      &.separator {
        border: none;
      }
      &.current, &:hover {
        border-color: $blue;
      }
      &.current {
        cursor: default;
      }
    }

    &-nav {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background-color: $grey;
      width: $width;
      height: $height;
      border-radius: $border-radius;
      font-size: $font-size;

      &.disabled {
        svg {
          fill: darken($grey, 25%);
        }
      }
    }
  }
</style>
