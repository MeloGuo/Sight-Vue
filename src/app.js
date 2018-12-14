import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Col from './col'
import Row from './row'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'

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
Vue.component('s-collapse', Collapse)
Vue.component('s-collapse-item', CollapseItem)

const vm = new Vue({
  el: '#app',
  data: {
    selectedTab: '1'
  },
  created () {
  },
  methods: {
    yyy: function () {
      console.log('yyy')
    }
  }
})

console.log(vm)
