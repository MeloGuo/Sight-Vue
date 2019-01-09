<template>
  <div class="cascaderItems">
    <div class="left">
      <div class="label" v-for="item in items" @click="onClickLabel(item)">
        {{item.name}}
        <s-icon v-if="item.children" class="icon" name="right"></s-icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <sight-cascader-items :items="rightItems" :selected="selected"
        :level="level + 1" @update:selected="onUpdate"></sight-cascader-items>
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

        if (!item.children) {
          // 关闭弹窗
        }
      },
      onUpdate (newSelected) {
        this.$emit('update:selected', newSelected)
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
      .icon {
        margin-left: 1em;
        transform: scale(0.7);
      }
    }
  }
</style>
