<template>
  <div>
    <s-nav :selected.sync="selected">
      <s-nav-item name="home">首页</s-nav-item>
      <s-nav-item name="about">关于</s-nav-item>
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
