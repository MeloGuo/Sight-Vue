<template>
  <s-layout style="color: white; overflow:hidden; margin-bottom:50px;">
    <s-sider style=" background:#ddd; width:200px; color: black;">
      sider
    </s-sider>
    <s-layout>
      <s-header style="height: 50px; background:lightskyblue;">
        header
      </s-header>
      <s-content style="height: 100px; background:deepskyblue;">
        content
      </s-content>
      <s-footer style="height: 50px; background:lightskyblue;">
        footer
      </s-footer>
    </s-layout>
  </s-layout>
</template>

<script>
  import Layout from '../../../src/components/layout/layout.vue'
  import Header from '../../../src/components/layout/header.vue'
  import Content from '../../../src/components/layout/content.vue'
  import Footer from '../../../src/components/layout/footer.vue'
  import Sider from '../../../src/components/layout/sider.vue'

  export default {
    components: {
      's-layout': Layout,
      's-header': Header,
      's-content': Content,
      's-footer': Footer,
      's-sider': Sider
    }
  }
</script>

<style scoped lang="scss">

</style>
