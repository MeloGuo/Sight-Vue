<template>
  <s-tabs :selected="selected">
    <s-tabs-head>
      <s-tabs-item name="1">1</s-tabs-item>
      <s-tabs-item name="2">2</s-tabs-item>
    </s-tabs-head>
    <s-tabs-body>
      <s-tabs-pane name="1">content 1</s-tabs-pane>
      <s-tabs-pane name="2">content 2</s-tabs-pane>
    </s-tabs-body>
  </s-tabs>
</template>

<script>
  import Tabs from '../../../src/components/tabs/tabs.vue'
  import TabsHead from '../../../src/components/tabs/tabs-head.vue'
  import TabsPane from '../../../src/components/tabs/tabs-pane.vue'
  import TabsItem from '../../../src/components/tabs/tabs-item.vue'
  import TabsBody from '../../../src/components/tabs/tabs-body.vue'

  export default {
    components: {
      's-tabs': Tabs,
      's-tabs-head': TabsHead,
      's-tabs-pane': TabsPane,
      's-tabs-item': TabsItem,
      's-tabs-body': TabsBody
    },
    data () {
      return {
        selected: '1'
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
