import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('s-button', Button)
Vue.component('s-icon', Icon)
Vue.component('s-button-group', ButtonGroup)

const vm = new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false
  }
})

// 单元测试
import { expect } from 'chai'
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting'
    }
  })
  vm.$mount()
  const useElement = vm.$el.querySelector('use')
  const href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-setting')
  vm.$el.remove()
  vm.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting',
      loading: true
    }
  })
  vm.$mount()
  const useElement = vm.$el.querySelector('use')
  const href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting',
      loading: true,
      iconPosition: 'left'
    }
  })
  vm.$mount(div)
  const svgElement = vm.$el.querySelector('svg')
  const { order } = window.getComputedStyle(svgElement)
  expect(order).to.eq('1')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting',
      loading: true,
      iconPosition: 'right'
    }
  })
  vm.$mount(div)
  const svgElement = vm.$el.querySelector('svg')
  const { order } = window.getComputedStyle(svgElement)
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting'
    }
  })
  vm.$mount()
  vm.$on('click', function () {
    console.log(1)
  })
  const button = vm.$el
  button.click()
}
