import Vue from 'vue'
import Popover from '../src/popover'

const expect = chai.expect

Vue.config.productionTip = false
Vue.config.devtools = false

Vue.component('s-popover', Popover)

describe('Popover', () => {
  const Constructor = Vue.extend(Popover)
  let vm

  it('存在', () => {
    expect(Popover).to.exist
  })

  it('可以设置 position', function (done) {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <s-popover position="bottom" ref="a">
        <template slot="content">
          <div>弹出内容</div>
        </template>
        <button>点我</button>
      </s-popover>
    `

    vm = new Vue({
      el: div
    })

    vm.$nextTick(() => {
      vm.$el.querySelector('button').click()
      vm.$nextTick(() => {
        const { contentWrapper } = vm.$refs.a.$refs
        expect(contentWrapper.classList.contains('position-bottom')).to.be.true
        done()
      })
    })
  })

  it('可以设置 trigger', function (done) {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
        <s-popover ref="a" trigger="hover">
          <template slot="content">
            <div>弹出内容</div>
          </template>
          <button>点我</button>
        </s-popover>
      `

    vm = new Vue({
      el: div
    })

    const popover = vm.$el.querySelector('.popover')
    const event = new Event('mouseenter')
    popover.dispatchEvent(event)
    vm.$nextTick(() => {
      const { contentWrapper } = vm.$refs.a.$refs
      expect(contentWrapper.innerText.trim()).to.be.eq('弹出内容')
      done()
    })
  })

  afterEach(() => {
    if (vm) {
      vm.$destroy()
    }
  })
})
