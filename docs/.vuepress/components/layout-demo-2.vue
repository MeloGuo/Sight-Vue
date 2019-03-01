<template>
  <div class="layout-demo">
    <s-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <s-header style="height: 50px; background:lightskyblue;">
        header
      </s-header>
      <s-layout>
        <s-sider style="height: 100px; background:#ddd; width:200px; color: black;">
          sider
        </s-sider>
        <s-content style="height: 100px; background:deepskyblue;">
          content
        </s-content>
      </s-layout>
      <s-footer style="height: 50px; background:lightskyblue;">
        footer
      </s-footer>
    </s-layout>
  </div>
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
