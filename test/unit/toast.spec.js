import { chai } from 'chai'
import Vue from 'vue'
import Toast from '../../src/components/toast/toast.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  it('should exist', function () {
    expect(Toast).to.be.exist
  })
})
