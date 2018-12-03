import Vue from 'vue'
import Input from '../src/input'

const expect = chai.expect

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input组件', () => {
  const Constructor = Vue.extend(Input)

  it('存在', () => {
    expect(Input).to.exist
  })

  describe('props', () => {
    let vm

    it('接收 value', () => {
      vm = new Constructor({
        propsData: {
          value: '1234'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('1234')
      vm.$destroy()
    })

    it('接收 disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.be.true
      vm.$destroy()
    })

    it('接收 disabled', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.be.true
      vm.$destroy()
    })

    it('接收 error', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      vm = new Constructor({
        propsData: {
          error: 'error'
        }
      }).$mount(div)
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
      const errorMessage = vm.$el.querySelector('.error-message')
      expect(errorMessage.innerText).to.equal('error')
    })

    afterEach(() => {
      vm.$destroy()
    })
  })

  describe('事件', () => {
    let vm

    it('支持 change/input/focus/blur 事件', () => {
      ['change', 'input', 'focus', 'blur']
        .forEach((eventName) => {
          vm = new Constructor({}).$mount()
          const callback = sinon.fake()
          vm.$on(eventName, callback)
          // 触发 input 的 change 事件
          let event = new Event(eventName)
          Object.defineProperty(event, 'target', {
            value: { value: 'hi' },
            enumerable: true
          })
          let inputElement = vm.$el.querySelector('input')
          inputElement.dispatchEvent(event)
          expect(callback).to.have.been.calledWith('hi')
        })
    })

    afterEach(() => {
      vm.$destroy()
    })
  })
})
