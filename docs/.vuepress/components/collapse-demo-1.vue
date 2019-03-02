<template>
  <div class="collapse-demo">
    <s-collapse :selected.sync="selectedTab" accordion>
      <s-collapse-item title="标题1" name="1">内容一</s-collapse-item>
      <s-collapse-item title="标题2" name="2">内容二</s-collapse-item>
      <s-collapse-item title="标题3" name="3">内容三</s-collapse-item>
    </s-collapse>
  </div>
</template>

<script>
  import Collapse from '../../../src/components/collapse/collapse.vue'
  import CollapseItem from '../../../src/components/collapse/collapse-item.vue'

  export default {
    components: {
      's-collapse': Collapse,
      's-collapse-item': CollapseItem
    },
    data () {
      return {
        selectedTab: ['1']
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
