import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

const expect = chai.expect

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  const RowConstructor = Vue.extend(Row)
  let vm

  it('存在', () => {
    expect(Row).to.exist
  })

  it('接收 gutter 属性', (done) => {
    Vue.component('s-row', Row)
    Vue.component('s-col', Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <s-row gutter="20">
        <s-col span="12"></s-col>
        <s-col span="12"></s-col>
      </s-row>
    `

    vm = new Vue({
      el: div
    })
    setTimeout(() => {
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')
      const cols = vm.$el.querySelectorAll('.col')
      expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
      expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
      expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
      expect(getComputedStyle(cols[1]).paddingRight).to.eq('10px')
      done()
      vm.$el.remove()
      vm.$destroy()
    }, 0)
  })

  it('接收 align 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    vm = new RowConstructor({
      propsData: {
        justify: 'end'
      }
    }).$mount(div)
    const element = vm.$el
    expect(getComputedStyle(element).justifyContent).to.eq('flex-end')
    div.remove()
    vm.$destroy()
  })
})
