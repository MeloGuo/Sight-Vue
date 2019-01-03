<template>
  <div>
    <s-nav :selected.sync="selected" vertical style="width: 200px;">
      <s-nav-item name="home">首页</s-nav-item>
      <s-sub-nav name="about">
        <template slot="title">关于</template>
        <s-nav-item name="culture">企业文化</s-nav-item>
        <s-nav-item name="team">开发团队</s-nav-item>
        <s-sub-nav name="contact">
          <template slot="title">联系方式</template>
          <s-nav-item name="wechat">微信</s-nav-item>
          <s-nav-item name="qq">QQ</s-nav-item>
        </s-sub-nav>
      </s-sub-nav>
      <s-nav-item name="hire">招聘</s-nav-item>
    </s-nav>
    <s-nav :selected.sync="selected2">
      <s-nav-item name="home">首页</s-nav-item>
      <s-sub-nav name="about">
        <template slot="title">关于</template>
        <s-nav-item name="culture">企业文化</s-nav-item>
        <s-nav-item name="team">开发团队</s-nav-item>
        <s-sub-nav name="contact">
          <template slot="title">联系方式</template>
          <s-nav-item name="wechat">微信</s-nav-item>
          <s-nav-item name="qq">QQ</s-nav-item>
        </s-sub-nav>
      </s-sub-nav>
      <s-nav-item name="hire">招聘</s-nav-item>
    </s-nav>
    <div>
      <p>这里有段话</p>
    </div>
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
      selected: 'home',
      selected2: 'hire'
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
