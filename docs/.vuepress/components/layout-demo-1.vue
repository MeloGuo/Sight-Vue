<template>
  <div class="layout-demo">
    <s-layout style="color: white; margin-bottom:50px;">
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
  </div>
</template>

<script>
  import Layout from '../../../src/components/layout/layout.vue'
  import Header from '../../../src/components/layout/header.vue'
  import Content from '../../../src/components/layout/content.vue'
  import Footer from '../../../src/components/layout/footer.vue'

  export default {
    components: {
      's-layout': Layout,
      's-header': Header,
      's-content': Content,
      's-footer': Footer
    }
  }
</script>

<style scoped lang="scss">

</style>
