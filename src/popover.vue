<template>
  <div class="popover" @click="onClick" ref="popover">
    <div v-if="visible" ref="contentWrapper" class="content-wrapper">
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
    data () {
      return {
        visible: false
      }
    },
    methods: {
      positionContent () {
        document.body.appendChild(this.$refs.contentWrapper)
        const { left, top } = this.$refs.triggerWrapper.getBoundingClientRect()
        this.$refs.contentWrapper.style.left = `${left + window.scrollX}px`
        this.$refs.contentWrapper.style.top = `${top + window.scrollY}px`
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
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
    background-color: white;
    transform: translateY(-100%);
    margin-top: -10px;
    padding: 0.5em 1em;
    max-width: 20em;
    word-break: break-all;
    &::before, &::after {
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0px;
      height: 0px;
      position: absolute;
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

  span {
    display: inline-block;
  }
</style>
