<template>
  <div class="cascader" v-click-outside="close">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      {{result || '&nbsp;'}}
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <cascader-items class="popover" :class="[popoverClassName]" :items="source"
        :selected= "selected" @update:selected="onUpdate" :load-data="loadData"
        :loading-item="loadingItems"></cascader-items>
    </div>
  </div>
</template>

<script>
  import CascaderItems from './cascader-items.vue'
  import ClickOutside from '../click-outside'

  export default {
    name: 'SightCascader',
    components: {
      'cascader-items': CascaderItems
    },
    directives: {
      ClickOutside
    },
    props: {
      source: {
        type: Array
      },
      popoverClassName: {
        type: String,
        default: ''
      },
      selected: {
        type: Array,
        default: () => []
      },
      level: {
        type: Number,
        default: 0
      },
      loadData: {
        type: Function
      }
    },
    data () {
      return {
        popoverVisible: false,
        loadingItems: {}
      }
    },
    computed: {
      result () {
        return this.selected.map((item) => item.name).join('/')
      }
    },
    methods: {
      close () {
        this.popoverVisible = false
      },
      onUpdate (newSelected) {
        this.$emit('update:selected', newSelected)

        const lastItem = newSelected[newSelected.length - 1]

        const simplest = (children, id) => {
          return children.filter(child => child.id === id)[0]
        }

        const complex = (children, id) => {
          const noChildren = []
          const hasChildren = []
          children.forEach((child) => {
            if (child.children) {
              hasChildren.push(child)
            } else {
              noChildren.push(child)
            }
          })

          let found = simplest(noChildren, id)
          if (found) {
            return found
          } else {
            found = simplest(hasChildren, id)
            if (found) {
              return found
            } else {
              for (let i = 0; i < hasChildren.length; i++) {
                found = complex(hasChildren[i].children, id)
                if (found) {
                  return found
                }
              }
              return undefined
            }
          }
        }

        const updateSource = (result) => {
          this.loadingItems = {}
          const copy = JSON.parse(JSON.stringify(this.source))
          const toUpdate = complex(copy, lastItem.id)
          toUpdate.children = result
          this.$emit('update:source', copy)
        }

        if (!lastItem.isLeaf && this.loadData) {
          this.loadData(lastItem, updateSource)
          this.loadingItems = lastItem
        }
      },

    }
  }
</script>

<style scoped lang="scss">
  @import "var";

  .cascader {
    position: relative;
    .trigger {
      border: 1px solid $border-color;
      border-radius: $border-radius;
      height: $input-height;
      display: inline-flex;
      align-items: center;
      padding: 0 1em;
      min-width: 10em;
      width: 100px;
    }

    .popover-wrapper {
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #fff;
      display: flex;
      margin-top: 6px;
      @extend .box-shadow
    }
  }
</style>
