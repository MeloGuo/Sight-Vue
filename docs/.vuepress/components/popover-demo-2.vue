<template>
  <div class="popover-demo">
    <s-popover trigger="hover">
      <s-button>上方弹出</s-button>
      <template slot="content">
        弹出内容
      </template>
    </s-popover>
    <s-popover position="bottom" trigger="hover">
      <s-button>下方弹出</s-button>
      <template slot="content">
        弹出内容
      </template>
    </s-popover>
    <s-popover position="left" trigger="hover">
      <s-button>左边弹出</s-button>
      <template slot="content">
        弹出内容
      </template>
    </s-popover>
    <s-popover position="right" trigger="hover">
      <s-button>右边弹出</s-button>
      <template slot="content">
        弹出内容
      </template>
    </s-popover>
  </div>
</template>

<script>
  import Popover from '../../../src/components/popover/popover.vue'
  import Button from '../../../src/components/button/button.vue'

  export default {
    components: {
      's-popover': Popover,
      's-button': Button
    }
  }
</script>

<style scoped lang="scss">

</style>
