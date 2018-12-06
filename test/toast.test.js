import Vue from 'vue'
import Toast from '../src/toast'

const expect = chai.expect

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', function () {
  const Constructor = Vue.extend(Toast)

  it('存在', () => {
    expect(Toast).to.exist
  })

  describe('props', function () {
    let vm
    let div

    it('接收 autoClose 为 true', (done) => {
      div = document.createElement('div')
      document.body.appendChild(div)
      vm = new Constructor({
        propsData: {
          autoClose: true
        }
      }).$mount(div)
      vm.$on('close', () => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      })
    })

    it('接收 autoClose 为 false', (done) => {
      div = document.createElement('div')
      document.body.appendChild(div)
      vm = new Constructor({
        propsData: {
          autoClose: false
        }
      }).$mount(div)
      setTimeout(() => {
        expect(document.body.contains(vm.$el)).to.eq(true)
        done()
      }, 1600)
    })

    it('接收 autoCloseDelay', (done) => {
      div = document.createElement('div')
      document.body.appendChild(div)
      vm = new Constructor({
        propsData: {
          autoCloseDelay: 1000
        }
      }).$mount(div)
      setTimeout(() => {
        expect(document.body.contains(vm.$el)).to.eq(true)
      }, 500)
      setTimeout(() => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      }, 1500)
    })

    it('接收 closeButton', () => {
      const callback = sinon.fake()
      vm = new Constructor({
        propsData: {
          closeButton: {
            text: '牛逼',
            callback
          }
        }
      }).$mount()
      const closeButton = vm.$el.querySelector('.close')
      expect(closeButton.textContent.trim()).to.eq('牛逼')
      closeButton.click()
      expect(callback).to.have.been.called
    })

    it('接收 enableHtml', () => {
      vm = new Constructor({
        propsData: {
          enableHtml: true
        }
      })
      vm.$slots.default = ['<strong id="cool">牛逼</strong>']
      vm.$mount()
      expect(vm.$el.querySelector('#cool')).to.exist
    })

    it('接收 position', () => {
      vm = new Constructor({
        propsData: {
          position: 'bottom'
        }
      }).$mount()
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
    })

    afterEach(() => {
      div.remove()
      vm.$destroy()
    })
  })
})
