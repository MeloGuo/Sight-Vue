import { expect } from 'chai'
import Vue from 'vue'
import Input from '../../src/components/input/input.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

/* eslint-disable no-unused-expressions */
describe('Input', () => {
  it('should exist', function () {
    expect(Input).to.be.exist
  })
})
