import { expect } from 'chai'
import Vue from 'vue'
import Collapse from '../../src/components/collapse/collapse.vue'
import CollapseItem from '../../src/components/collapse/collapse-item.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

/* eslint-disable no-unused-expressions */
describe('Collapse', () => {
  it('should exist', function () {
    [Collapse, CollapseItem].forEach((component) => {
      expect(component).to.be.exist
    })
  })
})
