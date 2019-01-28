<template>
  <div class="sight-pagination">
    <span v-for="page in pages" class="sight-pagination-item"
      :class="{active: page === currentPage, separator: page === '...'}">{{page}}</span>
  </div>
</template>

<script>
  export default {
    name: 'SightPagination',
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
      ].sort((a, b) => a - b)).reduce((prev, current, index, array) => {
        prev.push(current)
        array[index + 1] !== undefined && array[index + 1] - current > 1 && prev.push('...')
        return prev
      }, [])

      return {
        pages
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
    &-item {
      border: 1px solid $grey;
      border-radius: $border-radius;
      padding: 0 4px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      min-width: 20px;
      height: 20px;
      margin: 0 4px;
      cursor: pointer;

      &.separator {
        border: none;
      }
      &.active, &:hover {
        border-color: $blue;
      }
      &.active {
        cursor: default;
      }
    }
  }
</style>
