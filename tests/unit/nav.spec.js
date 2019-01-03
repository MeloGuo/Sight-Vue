import chai, { expect } from 'chai'
import Vue from 'vue'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount } from '@vue/test-utils'
import Nav from '../../src/components/nav/nav.vue'
import NavItem from '../../src/components/nav/nav-item.vue'
import SubNav from '../../src/components/nav/sub-nav.vue'

chai.use(sinonChai)

/* eslint-disable no-unused-expressions */
describe('Navigation', () => {
  it('存在', function () {
    [Nav, NavItem, SubNav].forEach((item) => {
      expect(item).to.exist
    })
  })

  Vue.component('s-nav-item', NavItem)
  Vue.component('s-sub-nav', SubNav)
  const callback = sinon.fake()
  const wrapper = mount(Nav, {
    propsData: {
      selected: 'home'
    },
    slots: {
      default: `
          <s-nav-item name="home">首页</s-nav-item>
            <s-sub-nav name="about">
              <template slot="title">关于</template>
              <s-nav-item name="culture">企业文化</s-nav-item>
              <s-nav-item name="team">开发团队</s-nav-item>
              <s-sub-nav name="contact">
                <template slot="title">联系方式</template>
                <s-nav-item name="wechat">微信</s-nav-item>
                <s-nav-item name="qq">QQ</s-nav-item>
                <s-sub-nav name="phone">
                  <template slot="title">手机</template>
                  <s-nav-item name="cm">移动</s-nav-item>
                  <s-nav-item name="cn">联通</s-nav-item>
                  <s-nav-item name="ct">电信</s-nav-item>
                </s-sub-nav>
              </s-sub-nav>
            </s-sub-nav>
          <s-nav-item name="hire">招聘</s-nav-item>
        `
    },
    listeners: {
      'update:selected': callback
    }
  })

  it('接受 selected 属性', (done) => {
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('[data-name="home"].active').exists()).to.be.true
      done()
    })
  })

  it('触发 update:selected 事件', function (done) {
    wrapper.vm.$nextTick(() => {
      wrapper.find('[data-name="hire"]').trigger('click')
      wrapper.vm.$nextTick(() => {
        expect(callback).to.have.been.calledWith('hire')
        wrapper.vm.$forceUpdate()
        done()
      })
    })
  })

  it('点击展开隐藏菜单', function () {

  })

  it('销毁实例', function () {
    wrapper.vm.$destroy()
  })
})
