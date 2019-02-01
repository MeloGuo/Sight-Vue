<template>
  <div class="sight-pagination" v-if="visible">
    <span v-if="currentPage !== 1" class="sight-pagination-nav prev"
          @click="onClickPage(currentPage - 1)">
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
        <span class="sight-pagination-item other" @click="onClickPage(page)">{{page}}</span>
      </template>
    </template>
    <span v-if="currentPage !== totalPage" class="sight-pagination-nav next"
          @click="onClickPage(currentPage + 1)">
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
    computed: {
      pages () {
        const unique = (array) => {
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

        const makeNArray = (endNumber, startNumber = 0) => {
          const result = new Array(endNumber - startNumber)
          for (let i = startNumber; i < endNumber; i++) {
            result[i] = i + 1
          }
          return result.filter(value => !!value)
        }

        const makePage = () => {
          if (this.totalPage > 9) {
            if (this.currentPage < 7) {
              return [
                ...makeNArray(7),
                '...',
                this.totalPage
              ]
            } else if (this.currentPage > this.totalPage - 5) {
              return [
                1,
                '...',
                ...makeNArray(this.totalPage, this.totalPage - 7)
              ]
            } else {
              return [
                1, this.totalPage, this.currentPage, this.currentPage + 1,
                this.currentPage + 2, this.currentPage - 1, this.currentPage - 2
              ]
            }
          } else {
            return makeNArray(this.totalPage)
          }
        }

        const pages = makePage()

        return unique(pages.filter((n) => n >= 1 && n <= this.totalPage)
          .sort((a, b) => a - b))
          .reduce((prev, current, index, array) => {
            prev.push(current)
            array[index + 1] !== undefined && array[index + 1] - current > 1 && prev.push('...')
            return prev
          }, [])
      },
      visible () {
        return !(this.hideIfOnePage && this.totalPage === 1)
      }
    },
    methods: {
      onClickPage (page) {
        this.$emit('update:currentPage', page)
      }
    }
  }


</script>

<style scoped lang="scss">
  @import "var";

  .sight-pagination {
    $width: 20px;
    $height: 20px;
    $font-size: 12px;

    user-select: none;
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
          cursor: default;
          fill: darken($grey, 25%);
        }
      }
    }
  }
</style>
