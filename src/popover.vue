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
        if (this.$refs.contentWrapper &&
          (this.$refs.popover === event.target ||
            this.$refs.popover.contains(event.target)) ||
          this.$refs.contentWrapper.contains(event.target)) { return }
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
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }

  .content-wrapper {
    position: absolute;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    transform: translateY(-100%);
  }
</style>
