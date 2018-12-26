<template>
  <div>
    <s-input placeholder="请输入文本"></s-input>
    <s-input placeholder="请输入密码" type="password"></s-input>
    <s-input value="发生了错误" error="发生了错误"></s-input>
    <s-input value="无法使用" :disabled="true"></s-input>
    <s-input value="无法输入，只能阅读" :readonly="true"></s-input>
  </div>
</template>

<script>
import Input from '../../../src/components/input/input.vue'

export default {
  components: {
    's-input': Input
  },
  data () {
    return {
      value: '1'
    }
  }
}
</script>

<style scoped lang="scss">

</style>
