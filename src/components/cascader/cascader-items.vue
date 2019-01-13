<template>
  <div class="cascaderItems">
    <div class="left">
      <div class="label" v-for="item in items" @click="onClickLabel(item)">
        <span class="name">{{item.name}}</span>
        <span class="icons">
          <template v-if="item.name === loadingItem.name">
            <s-icon class="icon loading" name="loading"></s-icon>
          </template>
          <template v-else>
            <s-icon v-if="iconVisible(item)" class="icon" name="right"></s-icon>
          </template>
        </span>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <sight-cascader-items :items="rightItems" :selected="selected"
        :level="level + 1" @update:selected="onUpdate" :load-data="loadData"
        :loading-item="loadingItem"></sight-cascader-items>
    </div>
  </div>
</template>

<script>
  import Icon from '../icon/icon.vue'

  export default {
    name: 'SightCascaderItems',
    components: {
      's-icon': Icon
    },
    props: {
      items: {
        type: Array
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
      },
      loadingItem: {
        type: Object,
        default: () => ({})
      }
    },
    computed: {
      rightItems () {
        if (this.selected[this.level]) {
          const selected = this.items.filter(item => item.name === this.selected[this.level].name)
          if (selected && selected[0].children && selected[0].children.length > 0) {
            return selected[0].children
          }
        }
      }
    },
    methods: {
      onClickLabel (item) {
        const copy = JSON.parse(JSON.stringify(this.selected))
        copy[this.level] = item
        copy.splice(this.level + 1) // 删除后面的值
        this.$emit('update:selected', copy)
      },
      onUpdate (newSelected) {
        this.$emit('update:selected', newSelected)
      },
      iconVisible (item) {
        return this.loadData ? !item.isLeaf : item.children
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "var";

  .cascaderItems {
    display: flex;
    white-space: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100px;

    .left {
      height: 100%;
      padding: .3em 0;
      overflow: scroll;
    }
    .right {
      border-left: 1px solid $border-color-light;
    }
    .label {
      padding: .3em 1em;
      display: flex;
      align-items: center;

      .icons {
        margin-left: auto;
        /*transform: scale(0.7);*/

        .loading {
          @include spin();
          transform: scale(0.7);
        }
      }
    }
  }
</style>
