<template>
  <div class="s-slides" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd">
    <div class="s-slides-window">
      <div class="s-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="s-slides-dots">
      <span @click="onClickDots(selectedIndex - 1)"><</span>
      <span @click="onClickDots(n - 1)" v-for="n in childrenLength" :class="{active: selectedIndex === n - 1}">
        {{n}}
      </span>
      <span @click="onClickDots(selectedIndex + 1)">></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SightSlides',
    props: {
      selected: {
        type: String
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      autoPlayDelay: {
        type: Number,
        default: 3000
      }
    },
    data () {
      return {
        timer: null,
        childrenLength: 0,
        lastSelectedIndex: undefined,
        startTouch: null
      }
    },
    computed: {
      selectedValue () {
        const firstName = this.$children[0].name
        return this.selected || firstName
      },
      selectedIndex () {
        return this.names.indexOf(this.selectedValue)
      },
      names () {
        return this.$children.map(child => child.name)
      }
    },
    mounted () {
      this.updateChildren()
      this.playAutomatically()
      this.childrenLength = this.$children.length
    },
    updated () {
      this.updateChildren()
    },
    beforeDestroy () {
      this.stopPlay()
    },
    methods: {
      onClickDots (index) {
        this.stopPlay()
        this.select(index)
        this.playAutomatically()
      },
      onMouseEnter () {
        this.stopPlay()
      },
      onMouseLeave () {
        this.playAutomatically()
      },
      onTouchStart (event) {
        this.stopPlay()
        if (event.touches.length > 1) {return}
        this.startTouch = event.touches[0]
      },
      onTouchMove (event) {
        // console.log('touch to move', event.touches[0])
      },
      onTouchEnd (event) {
        const { startTouch } = this
        const endTouch = event.changedTouches[0]
        const {clientX: x1, clientY: y1} = startTouch
        const {clientX: x2, clientY: y2} = endTouch

        if (endTouch.clientX > startTouch.clientX) {
          console.log('right')
        } else {
          console.log('left')
        }

        const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1), 2)
        console.log('distance', distance)
        const deltaY = Math.abs(y2 - y1)
        const rate = distance / deltaY
        console.log('rate', rate)

        this.playAutomatically()
      },
      select (index) {
        console.log('当前页面', index)
        if (index > this.names.length - 1) {
          index = 0
        } else if (index < 0) {
          index = this.names.length - 1
        }
        this.lastSelectedIndex = this.selectedIndex
        this.$emit('update:selected', this.names[index])
      },
      playAutomatically () {
        if (this.timer) {
          return
        }

        const { names } = this
        const lastIndex = names.length - 1

        this.timer = setInterval(() => {
          let index = names.indexOf(this.selectedValue)
          if (index === lastIndex) {
            index = 0
          } else {
            index++
          }
          this.select(index)
        }, this.autoPlayDelay)
      },
      stopPlay () {
        clearInterval(this.timer)
        this.timer = null
      },
      getSelected () {
        const firstName = this.$children[0].name
        return this.selected || firstName
      },
      updateChildren () {
        const selected = this.getSelected()
        this.$children.forEach(child => {
          // FIXME: 优化代码
          child.reverse = ((this.selectedIndex <= this.lastSelectedIndex && (this.lastSelectedIndex !== this.names.length - 1 || this.selectedIndex !== 0)) || (this.lastSelectedIndex === 0 && this.selectedIndex === this.names.length - 1))
          this.$nextTick(() => {
            child.selected = selected
          })
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .s-slides {
    display: inline-block;

    &-window {
      overflow: hidden;
    }

    &-wrapper {
      position: relative;
    }

    &-dots {
      padding: 8px 0;
      display: flex;
      justify-content: center;
      align-items: center;

      > span {
        display: inline-flex;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #ddd;
        align-items: center;
        justify-content: center;
        margin: 0 8px;
        font-size: 12px;

        &:hover {
          cursor: pointer;
        }

        &.active {
          background-color: black;
          color: #fff;
          &:hover {
            cursor: default;
          }
        }

      }
    }
  }
</style>
