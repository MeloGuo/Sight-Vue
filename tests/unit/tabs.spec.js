import { expect } from 'chai'
import Vue from 'vue'
import Tabs from '../../src/components/tabs/tabs.vue'
import TabsHead from '../../src/components/tabs/tabs-head.vue'
import TabsBody from '../../src/components/tabs/tabs-body.vue'
import TabsItem from '../../src/components/tabs/tabs-item.vue'
import TabsPane from '../../src/components/tabs/tabs-pane.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

/* eslint-disable no-unused-expressions */
describe('Tabs', () => {
  it('should exist', function () {
    [Tabs, TabsHead, TabsBody, TabsItem, TabsPane].forEach((component) => {
      expect(component).to.be.exist
    })
  })
})
