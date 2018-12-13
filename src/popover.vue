<template>
  <div class="popover" ref="popover">
    <div v-if="visible" ref="contentWrapper" class="content-wrapper" :class="{[`position-${position}`]: true}">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'SightPopover',
    props: {
      position: {
        type: String,
        default: 'top',
        validator (value) {
          return ['top', 'bottom', 'left', 'right'].indexOf(value) > -1
        }
      },
      trigger: {
        type: String,
        default: 'click',
        validator (value) {
          return ['click', 'hover'].indexOf(value) > -1
        }
      }
    },
    mounted () {
      if (this.trigger === 'click') {
        this.$refs.popover.addEventListener('click', this.onClick)
      } else {
        this.$refs.popover.addEventListener('mouseenter', this.open)
        this.$refs.popover.addEventListener('mouseleave', this.close)
      }
    },
    destroyed () {
      this.$refs.popover.removeEventListener('click', this.onClick)
      this.$refs.popover.removeEventListener('mouseenter', this.open)
      this.$refs.popover.removeEventListener('mouseleave', this.close)
    },
    data () {
      return {
        visible: false
      }
    },
    computed: {
      openEvent () {
        if (this.trigger === 'click') {
          return 'click'
        } else {
          return 'mouseenter'
        }
      },
      closeEvent () {
        if (this.trigger === 'click') {
          return 'click'
        } else {
          return 'mouseleave'
        }
      }
    },
    methods: {
      positionContent () {
        const { contentWrapper, triggerWrapper } = this.$refs
        document.body.appendChild(contentWrapper)
        const { width, height, left, top } = triggerWrapper.getBoundingClientRect()
        const { height: height2, width: width2 } = contentWrapper.getBoundingClientRect()

        const position = {
          top: {
            top: top + window.scrollY,
            left: left + window.scrollX
          },
          bottom: {
            top: top + height + window.scrollY,
            left: left + window.scrollX
          },
          left: {
            top: top + window.scrollY - (height2 - height) / 2,
            left: left + window.scrollX
          },
          right: {
            top: top + window.scrollY - (height2 - height) / 2,
            left: left + window.scrollX - (width2 - width)
          }
        }

        contentWrapper.style.top = position[this.position].top + 'px'
        contentWrapper.style.left = position[this.position].left + 'px'
      },
      onClickDocument (event) {
        if (this.$refs.popover &&
          (this.$refs.popover === event.target || this.$refs.popover.contains(event.target))
        ) { return }
        if (this.$refs.contentWrapper &&
          (this.$refs.contentWrapper === event.target || this.$refs.contentWrapper.contains(event.target))
        ) { return }
        this.close()
      },
      open () {
        this.visible = true
        this.$nextTick(() => {
          this.positionContent()
          document.addEventListener('click', this.onClickDocument)
        })
      },
      close () {
        this.visible = false
        document.removeEventListener('click', this.onClickDocument)
      },
      onClick (event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if (this.visible === true) {
            this.close()
          } else {
            this.open()
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  $border-color: #333;
  $border-radius: 4px;
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }

  .content-wrapper {
    position: absolute;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    background-color: white;
    padding: 0.5em 1em;
    max-width: 20em;
    word-break: break-all;

    &::before, &::after {
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
    }

    &.position-top {
      margin-top: -10px;
      transform: translateY(-100%);
      filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));

      &::before, &::after {
        left: 10px;
      }

      &::before {
        border-top-color: black;
        top: 100%;
      }

      &::after {
        border-top-color: white;
        top: calc(100% - 1px);
      }
    }

    &.position-bottom {
      margin-top: 10px;
      filter: drop-shadow(0 -1px 1px rgba(0, 0, 0, 0.5));

      &::before, &::after {
        left: 10px;
      }

      &::before {
        border-bottom-color: black;
        bottom: 100%;
      }

      &::after {
        border-bottom-color: white;
        bottom: calc(100% - 1px);
      }
    }

    &.position-left {
      transform: translateX(-100%);
      margin-left: -10px;
      filter: drop-shadow(1px 0 1px rgba(0, 0, 0, 0.5));

      &::before, &::after {
        transform: translateY(-50%);
        top: 50%;
      }

      &::before {
        border-left-color: black;
        left: 100%;
      }

      &::after {
        border-left-color: white;
        left: calc(100% - 1px);
      }
    }

    &.position-right {
      transform: translateX(100%);
      margin-left: 10px;
      filter: drop-shadow(-1px 0 1px rgb(0, 0, 0, 0.5));

      &::before, &::after {
        transform: translateY(-50%);
        top: 50%;
      }

      &::before {
        border-right-color: black;
        right: 100%;
      }

      &::after {
        border-right-color: white;
        right: calc(100% - 1px);
      }
    }
  }

  span {
    display: inline-block;
  }
</style>
