<template>
  <div class="cascaderItems">
    <div class="left">
      <div class="label" v-for="item in items" @click="leftSelected = item">
        {{item.name}}
        <s-icon class="icon" name="right"></s-icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <sight-cascader-items :items="rightItems"></sight-cascader-items>
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
      }
    },
    data () {
      return {
        leftSelected: null
      }
    },
    computed: {
      rightItems () {
        if (this.leftSelected && this.leftSelected.children) {
          return this.leftSelected.children
        } else {
          return null
        }
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
