<template>
  <div class="toast" ref="wrapper" :class="toastClasses">
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
      },
      position: {
        type: String,
        default: 'top',
        validator (value) {
          return ['top', 'bottom', 'middle'].indexOf(value) > -1
        }
      }
    },
    mounted () {
      this.updateStyles()
      this.execAutoClose()
    },
    computed: {
      toastClasses () {
        return {
          [`position-${this.position}`]: true
        }
      }
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
        this.$emit('close') // 清空外部 currentToast
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
  @keyframes middle-fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100%;
    }
  }

  @keyframes bottom-fade-in {
    0% {
      opcity: 0;
      transform: translateY(0%);
    }
    100% {
      opacity: 100%;
      transform: translateY(100%);
    }
  }

  .toast {
    font-size: $font-size;
    min-height: $toast-min-height;
    line-height: 1.8;
    color: #fff;
    position: fixed;
    left: 50%;
    display: flex;
    align-items: center;
    background-color: $toast-bg;
    border-radius: 4px;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.50);
    padding: 0 16px;

    &.position-top {
      top: 0;
      transform: translateX(-50%);
    }

    &.position-middle {
      top: 50%;
      transform: translate(-50%, -50%);
      animation: middle-fade-in .5s;
    }

    &.position-bottom {
      bottom: 0;
      transform: translateX(-50%);
      animation: bottom-fade-in .5s;
    }

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
