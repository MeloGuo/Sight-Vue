<template>
  <div class="button-demo-1">
    <s-button>默认按钮</s-button>
    <s-button icon="like">图标按钮</s-button>
    <s-button icon="like" icon-position="right">右侧图标按钮</s-button>
    <s-button :loading="true">加载按钮</s-button>
    <s-button disabled>禁用按钮</s-button>
  </div>
</template>

<script>
  import Button from '../../../src/components/button/button.vue'

  export default {
    components: {
      's-button': Button
    }
  }
</script>

<style scoped lang="scss">

</style>
