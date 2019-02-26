<template>
  <div class="s-slides">
    <div class="s-slides-window">
      <div class="s-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="s-slides-dots">
      <span @click="onClickDots(n - 1)" @mouseenter="onEnterDots" @mouseleave="onLeaveDots" v-for="n in childrenLength" :class="{active: selectedIndex === n - 1}">
        {{n}}
      </span>
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
        lastSelectedIndex: undefined
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
      onEnterDots () {
        // this.stopPlay()
      },
      onLeaveDots () {
        // this.playAutomatically()
      },
      select (index) {
        this.lastSelectedIndex = this.selectedIndex
        this.$emit('update:selected', this.names[index])
      },
      playAutomatically () {
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
          child.reverse = this.selectedIndex <= this.lastSelectedIndex
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
    border: 1px solid black;

    &-window {
      overflow: hidden;
    }
    &-wrapper {
      position: relative;
    }

    &-dots {
      > span.active {
        color: red;
      }
    }
  }
</style>
