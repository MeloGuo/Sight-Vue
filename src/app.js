import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Layout from './layout'
import Content from './content'
import Footer from './footer'
import Sider from './sider'
import Header from './header'

Vue.component('s-button', Button)
Vue.component('s-icon', Icon)
Vue.component('s-button-group', ButtonGroup)
Vue.component('s-input', Input)
Vue.component('s-layout', Layout)
Vue.component('s-content', Content)
Vue.component('s-footer', Footer)
Vue.component('s-sider', Sider)
Vue.component('s-header', Header)

const vm = new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
    message: 'hi'
  },
  methods: {
    handleInput (event) {
      console.log(event)
    }
  }
})
console.log(vm)
