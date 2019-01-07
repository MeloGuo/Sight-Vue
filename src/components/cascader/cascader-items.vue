<template>
  <div class="cascaderItems">
    <div class="left">
      <div class="label" v-for="item in items" @click="leftSelected = item">
        {{item.name}}
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <sight-cascader-items :items="rightItems"></sight-cascader-items>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SightCascaderItems',
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
  .cascaderItems {
    display: flex;
    white-space: nowrap;
    align-items: flex-start;
    justify-content: flex-start;

    .left {
      border: 1px solid red;
    }
    .right {
      margin-top: -1px;
    }
  }
</style>
