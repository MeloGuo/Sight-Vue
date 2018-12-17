import { expect } from 'chai'
import Vue from 'vue'
import Icon from '../../src/components/icon/icon.vue'
import Button from '../../src/components/button/button.vue'
import ButtonGroup from '../../src/components/button/button-group.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

/* eslint-disable no-unused-expressions */
describe('Button', () => {
  it('should exist', function () {
    [Icon, Button, ButtonGroup].forEach((component) => {
      expect(component).to.be.exist
    })
  })
})
