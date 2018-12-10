import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

const expect = chai.expect

Vue.component('s-tabs', Tabs)
Vue.component('s-tabs-body', TabsBody)
Vue.component('s-tabs-head', TabsHead)
Vue.component('s-tabs-item', TabsItem)
Vue.component('s-tabs-pane', TabsPane)
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
  const Contructor = Vue.extend(Tabs)
  let vm

  it('存在', function () {
    expect(Tabs).to.exist
  })

  it('接收 selected 属性', function (done) {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <s-tabs selected="finance">
        <s-tabs-head>
          <s-tabs-item name="woman">美女</s-tabs-item>
          <s-tabs-item name="finance">财经</s-tabs-item>
        </s-tabs-head>
        <s-tabs-body>
          <s-tabs-pane name="woman">美女相关</s-tabs-pane>
          <s-tabs-pane name="finance">财经相关</s-tabs-pane>
        </s-tabs-body>
      </s-tabs>
    `

    vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let x = vm.$el.querySelector('.tabs-item[data-name="finance"]')
      expect(x.classList.contains('active')).to.be.true
      done()
    })
  })

  it('可以接受 direction prop', function () {
    // TODO: 完成测试
  })

  afterEach(() => {
    if (vm) {
      vm.$destroy()
    }
  })
})
