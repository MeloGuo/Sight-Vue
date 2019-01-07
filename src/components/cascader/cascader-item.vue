<template>
  <div class="x">
    {{sourceItem.name}}
    <sight-cascader-item
      v-if="sourceItem.children"
      v-for="item in sourceItem.children"
      :sourceItem="item"
    >
    </sight-cascader-item>
  </div>
</template>

<script>
  export default {
    name: 'SightCascaderItem',
    props: {
      sourceItem: {
        type: Object
      }
    }
  }
</script>

<style scoped lang="scss">
  .x {
    border: 1px solid red;
    margin: 10px;
  }
</style>
