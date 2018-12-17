import Vue from 'vue'
import { expect } from 'chai'
import Popover from '../../src/components/popover/popover.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it('should exist', function () {
    expect(Popover).to.be.exist
  })
})
