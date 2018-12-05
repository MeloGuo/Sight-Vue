import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

const expect = chai.expect

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
  const Constructor = Vue.extend(Col)
  let vm

  it('存在', () => {
    expect(Col).to.exist
  })

  it('接收 span 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    vm = new Constructor({
      propsData: {
        span: 1
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('col-1')).to.eq(true)
    div.remove()
    vm.$destroy()
  })

  it('接收 offset 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    vm = new Constructor({
      propsData: {
        offset: 1
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('offset-1')).to.eq(true)
    div.remove()
    vm.$destroy()
  })

  it('接收 xs 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    vm = new Constructor({
      propsData: {
        xs: { span: 1, offset: 2 }
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('col-xs-1')).to.eq(true)
    expect(element.classList.contains('offset-xs-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  })

  it('接收 sm 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    vm = new Constructor({
      propsData: {
        sm: { span: 1, offset: 2 }
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('col-sm-1')).to.eq(true)
    expect(element.classList.contains('offset-sm-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  })

  it('接收 md 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    vm = new Constructor({
      propsData: {
        md: { span: 1, offset: 2 }
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('col-md-1')).to.eq(true)
    expect(element.classList.contains('offset-md-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  })

  it('接收 lg 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    vm = new Constructor({
      propsData: {
        lg: { span: 1, offset: 2 }
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('col-lg-1')).to.eq(true)
    expect(element.classList.contains('offset-lg-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  })

  it('接收 xl 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    vm = new Constructor({
      propsData: {
        xl: { span: 1, offset: 2 }
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('col-xl-1')).to.eq(true)
    expect(element.classList.contains('offset-xl-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  })

  it('接收 xxl 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    vm = new Constructor({
      propsData: {
        xxl: { span: 1, offset: 2 }
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('col-xxl-1')).to.eq(true)
    expect(element.classList.contains('offset-xxl-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
})
