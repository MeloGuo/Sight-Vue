import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Icon from '../../src/components/icon/icon.vue'
import Button from '../../src/components/button/button.vue'
import ButtonGroup from '../../src/components/button/button-group.vue'

chai.use(sinonChai)

Vue.config.productionTip = false
Vue.config.devtools = false

/* eslint-disable no-unused-expressions */
describe('Button', () => {
  it('存在', function () {
    [Icon, Button, ButtonGroup].forEach((component) => {
      expect(component).to.exist
    })
  })

  describe('Icon', function () {
    it('icon 接受 name 属性', function () {
      const wrapper = mount(Button, {
        propsData: {
          icon: 'message'
        }
      })
      const useElement = wrapper.find('use')
      expect(useElement.attributes()['href']).to.eq('#i-message')
    })
  })

  it('设置 iconPosition 为 right', function () {
    const wrapper = mount(Button, {
      attachToDocument: true,
      propsData: {
        icon: 'settings',
        iconPosition: 'right'
      }
    })
    const vm = wrapper.vm
    const icon = vm.$el.querySelector('svg')
    expect(window.getComputedStyle(icon).order).to.eq('2')
  })

  it('点击 button 触发 click 事件', function () {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'message'
      }
    })
    const vm = wrapper.vm
    const callback = sinon.fake()
    vm.$on('click', callback)
    wrapper.trigger('click')
    expect(callback).to.have.been.called
  })

  it('loading 状态下不可点击', function () {
    const wrapper = mount(Button, {
      propsData: {
        loading: true
      }
    })
    const vm = wrapper.vm
    const callback = sinon.fake()
    vm.$on('click', callback)
    wrapper.trigger('click')
    expect(callback).to.not.have.been.called
  })
})
