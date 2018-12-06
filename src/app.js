import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Col from './col'
import Row from './row'
import plugin from './plugin'

Vue.component('s-button', Button)
Vue.component('s-icon', Icon)
Vue.component('s-button-group', ButtonGroup)
Vue.component('s-input', Input)
Vue.component('s-col', Col)
Vue.component('s-row', Row)
Vue.use(plugin)

const vm = new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
    message: 'hi'
  },
  created () {
    this.handleToast()
  },
  methods: {
    handleToast () {
      this.$toast('天气不错天气不错天气不错天气不错' +
        '天气不错天气不错天气不错天气不错天气不错天气不错天气不错天气不错' +
        '天气不错天气不错天气不错天气不错天气不错天气不错' +
        '', {
        autoClose: false,
        position: 'middle'
      })
    }
  }
})
console.log(vm)
