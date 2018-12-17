import Vue from 'vue'
import Button from './components/button'
import Icon from './components/icon'
import ButtonGroup from './components/button-group'
import Input from './components/input'
import Col from './components/col'
import Row from './components/row'
import plugin from './components/plugin'
import Tabs from './components/tabs'
import TabsHead from './components/tabs-head'
import TabsBody from './components/tabs-body'
import TabsItem from './components/tabs-item'
import TabsPane from './components/tabs-pane'
import Popover from './components/popover'

Vue.component('s-button', Button)
Vue.component('s-icon', Icon)
Vue.component('s-button-group', ButtonGroup)
Vue.component('s-input', Input)
Vue.component('s-col', Col)
Vue.component('s-row', Row)
Vue.use(plugin)
Vue.component('s-tabs', Tabs)
Vue.component('s-tabs-body', TabsBody)
Vue.component('s-tabs-head', TabsHead)
Vue.component('s-tabs-item', TabsItem)
Vue.component('s-tabs-pane', TabsPane)
Vue.component('s-popover', Popover)

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  el: '#app',
  data: {
    selectedTab: 'woman'
  },
  created () {
  },
  methods: {
    yyy: function () {
      console.log('yyy')
    }
  }
}).$mount(root)
