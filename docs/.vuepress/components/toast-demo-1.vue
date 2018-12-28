<template>
  <div>
    <s-button @click="$toast('这是上方提示框')">上方弹出</s-button>
    <s-button @click="$toast('这是中间提示框', {position: 'middle'})">中间弹出</s-button>
    <s-button @click="$toast('这是下方提示框', {position: 'bottom'})">下方弹出</s-button>
  </div>
</template>

<script>
import Plugin from '../../../src/components/toast/plugin'
import Button from '../../../src/components/button/button.vue'
import Vue from 'vue'

Vue.use(Plugin)

export default {
  components: {
    's-button': Button
  }
}
</script>

<style scoped lang="scss">

</style>
