<template>
  <div class="toast" ref="wrapper">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <template v-if="closeButton">
      <div class="line" ref="line">
      </div>
      <span class="close" @click="onClickClose">
        {{ closeButton.text }}
      </span>
    </template>
  </div>
</template>

<script>
  // 构造组件的选项
  export default {
    name: 'SightToast',
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      autoCloseDelay: {
        type: Number,
        default: 2000
      },
      closeButton: {
        type: Object,
        default () {
          return {
            text: '关闭',
            callback: undefined
          }
        }
      },
      enableHtml: {
        type: Boolean,
        default: false
      }
    },
    mounted () {
      this.updateStyles()
      this.execAutoClose()
    },
    methods: {
      execAutoClose () {
        if (this.autoClose) {
          setTimeout(() => {
            this.close()
          }, this.autoCloseDelay)
        }
      },
      updateStyles () {
        this.$nextTick(() => {
          this.$refs.line.style.height =
            `${this.$refs.wrapper.getBoundingClientRect().height}px`
        })
      },
      close () {
        this.$el.remove()
        this.$destroy()
      },
      onClickClose () {
        this.close()
        if (this.closeButton && typeof this.closeButton.callback === 'function') {
          this.closeButton.callback(this)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  .toast {
    font-size: $font-size;
    min-height: $toast-min-height;
    line-height: 1.8;
    color: #fff;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    background-color: $toast-bg;
    border-radius: 4px;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.50);
    padding: 0 16px;

    > .message {
      padding: 6px 0;
    }

    > .close {
      padding-left: 16px;
      flex-shrink: 0;
    }

    > .line {
      height: 100%;
      border-left: 1px solid #cccccc;
      margin-left: 16px;
    }
  }
</style>
