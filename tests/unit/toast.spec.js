import chai, { expect } from 'chai'
import { mount } from '@vue/test-utils'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Vue from 'vue'
import Toast from '../../src/components/toast/toast.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

chai.use(sinonChai)

/* eslint-disable no-unused-expressions */
describe('Toast', () => {
  it('存在', function () {
    expect(Toast).to.be.exist
  })

  it('接受 autoClose 为 true', function (done) {
    const wrapper = mount(Toast, {
      attachToDocument: true,
      propsData: {
        autoClose: true
      }
    })
    wrapper.vm.$on('close', () => {
      expect(document.body.contains(wrapper.element)).to.be.false
      done()
    })
  })

  it('接受 autoClose 为 false', function (done) {
    const wrapper = mount(Toast, {
      attachToDocument: true,
      propsData: {
        autoClose: false
      }
    })
    setTimeout(() => {
      expect(document.body.contains(wrapper.element)).to.be.true
      done()
    }, 1600)
  })

  it('接受 autoCloseDelay', function (done) {
    const wrapper = mount(Toast, {
      attachToDocument: true,
      propsData: {
        autoCloseDelay: 1000
      }
    })
    setTimeout(() => {
      expect(document.body.contains(wrapper.element)).to.be.true
    }, 500)
    setTimeout(() => {
      expect(document.body.contains(wrapper.element)).to.be.false
      done()
    }, 1200)
  })

  it('接受 closeButton', function (done) {
    const callback = sinon.fake()
    const wrapper = mount(Toast, {
      propsData: {
        closeButton: {
          text: '按钮',
          callback
        }
      }
    })
    const closeButton = wrapper.find('.close')
    expect(closeButton.text()).to.eq('按钮')
    wrapper.vm.$nextTick(() => {
      closeButton.element.click()
      expect(callback).to.have.been.called
    })

    const wrapper2 = mount(Toast, {
      attachToDocument: true,
      propsData: {
        autoClose: false,
        closeButton: {
          text: '按钮2'
        }
      }
    })
    const closeButton2 = wrapper2.find('.close')
    expect(closeButton2.text()).to.eq('按钮2')
    wrapper2.vm.$nextTick(() => {
      expect(document.body.contains(wrapper2.element)).to.be.true
      closeButton2.element.click()
      wrapper2.vm.$nextTick(() => {
        expect(document.body.contains(wrapper2.element)).to.be.false
        done()
      })
    })
  })

  it('接受 enableHtml', function () {
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
      propsData: {
        enableHtml: true
      }
    })
    vm.$slots.default = ['<strong id="cool">加粗</strong>']
    vm.$mount()
    expect(vm.$el.querySelector('#cool')).to.exist
    const vm2 = new Constructor({
      propsData: {
        enableHtml: false
      }
    })
    vm2.$slots.default = ['<strong id="cool">加粗</strong>']
    vm2.$mount()
    expect(vm2.$el.querySelector('#cool')).to.be.null
    vm.$destroy()
    vm2.$destroy()
  })

  it('接受 position', function () {
    const wrapper = mount(Toast, {
      propsData: {
        position: 'bottom'
      }
    })
    expect(wrapper.element.classList.contains('position-bottom')).to.be.true
  })
})
