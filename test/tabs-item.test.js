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

describe('TabsItem', () => {
  const Constructor = Vue.extend(TabsItem)
  let vm

  it('存在', () => {
    expect(TabsItem).to.exist
  })

  it('接收 name 属性', function () {
    vm = new Constructor({
      propsData: {
        name: 'xxx'
      }
    }).$mount()

    expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
  })

  it('接收 disabled 属性', function () {
    vm = new Constructor({
      propsData: {
        disabled: true,
        name: 'xxx'
      }
    }).$mount()

    expect(vm.$el.classList.contains('disabled')).to.be.true
    const callback = sinon.fake()
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.not.have.been.called
  })

  afterEach(() => {
    if (vm) {
      vm.$destroy()
    }
  })
})
