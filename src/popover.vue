<template>
  <div class="popover" @click.stop="onClick"> <!-- TODO: 点击范围问题 -->
    <div v-if="show" class="content-wrapper" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SightPopover',
    data () {
      return {
        show: false
      }
    },
    methods: {
      onClick: function () {
        this.show = !this.show
        if (this.show === true) {
          const eventHandler = () => {
            console.log('document隐藏')
            this.show = false
            document.removeEventListener('click', eventHandler)
          }
          document.addEventListener('click', eventHandler)
        } else {
          console.log('vm隐藏')
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;

    .content-wrapper {
      position: absolute;
      bottom: 100%;
      left: 0;
      border: 1px solid red;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    }
  }
</style>
