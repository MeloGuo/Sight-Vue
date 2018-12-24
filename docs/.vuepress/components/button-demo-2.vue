<template>
  <div class="button-demo-2">
    <s-button-group>
      <s-button icon="left">上一项</s-button>
      <s-button icon="right" icon-position="right">下一项</s-button>
    </s-button-group>
    <s-button-group>
      <s-button icon="like"></s-button>
      <s-button icon="setting"></s-button>
      <s-button icon="download"></s-button>
    </s-button-group>
  </div>
</template>

<script>
  import Button from '../../../src/components/button/button.vue'
  import ButtonGroup from '../../../src/components/button/button-group.vue'

  export default {
    components: {
      's-button': Button,
      's-button-group': ButtonGroup
    }
  }
</script>

<style scoped lang="scss">

</style>
