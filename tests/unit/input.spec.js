import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Input from '../../src/components/input/input.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

/* eslint-disable no-unused-expressions */
describe('Input', () => {
  it('存在', function () {
    expect(Input).to.exist
  })

  it('接受 error 属性', function () {
    const wrapper = mount(Input, {
      attachToDocument: true,
      propsData: {
        error: '错误文字'
      }
    })
    const vm = wrapper.vm
    const errorElement = vm.$el.querySelector('span')
    expect(errorElement.classList.contains('error-message')).to.be.true
  })
})
