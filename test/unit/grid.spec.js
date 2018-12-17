import Vue from 'vue'
import Col from '../../src/components/grid/col.vue'
import Row from '../../src/components/grid/row.vue'
import { expect } from 'chai'

Vue.config.productionTip = false
Vue.config.devtools = false

/* eslint-disable no-unused-expressions */
describe('Grid', () => {
  describe('Row', () => {
    it('should exist', function () {
      expect(Row).to.be.exist
    })
  })

  describe('Col', () => {
    it('should exist', function () {
      expect(Col).to.be.exist
    })
  })
})
