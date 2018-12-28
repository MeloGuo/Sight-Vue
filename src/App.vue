<template>
  <div>
    <s-nav :selected.sync="selected">
      <s-nav-item name="home">首页</s-nav-item>
      <s-sub-nav>
        <template slot="title">关于</template>
        <s-nav-item name="culture">企业文化</s-nav-item>
        <s-nav-item name="team">开发团队</s-nav-item>
        <s-nav-item name="contact">联系电话</s-nav-item>
      </s-sub-nav>
      <s-nav-item name="hire">招聘</s-nav-item>
    </s-nav>
  </div>
</template>

<script>
import Nav from './components/nav/nav.vue'
import NavItem from './components/nav/nav-item.vue'
import SubNav from './components/nav/sub-nav.vue'

export default {
  name: 'app',
  components: {
    's-nav': Nav,
    's-nav-item': NavItem,
    's-sub-nav': SubNav
  },
  data () {
    return {
      selected: ['home']
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
