<template>
  <div class="popover" @click.stop="onClick">
    <div v-if="visible" ref="contentWrapper" class="content-wrapper" @click.stop>
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
      onClick: function () {
        this.visible = !this.visible
        if (this.visible === true) {
          this.$nextTick(() => {
            document.body.appendChild(this.$refs.contentWrapper)
            const { left, top } = this.$refs.triggerWrapper.getBoundingClientRect()
            this.$refs.contentWrapper.style.left = `${left + window.scrollX}px`
            this.$refs.contentWrapper.style.top = `${top + window.scrollY}px`
            const eventHandler = () => {
              console.log('document隐藏')
              this.visible = false
              document.removeEventListener('click', eventHandler)
            }
            document.addEventListener('click', eventHandler)
          })
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
  }

  .content-wrapper {
    position: absolute;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    transform: translateY(-100%);
  }
</style>
