<template>
  <div class="s-slides">
    <div class="s-slides-window">
      <div class="s-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="s-slides-dots">
      <span @click="onClickDots(n - 1)" v-for="n in childrenLength" :class="{active: selectedIndex === n - 1}">
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
        childrenLength: 0
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
      clearInterval(this.timer)
    },
    methods: {
      onClickDots (index) {
        this.select(index)
      },
      select (index) {
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
          this.$emit('update:selected', names[index])
        }, this.autoPlayDelay)
      },
      getSelected () {
        const firstName = this.$children[0].name
        return this.selected || firstName
      },
      updateChildren () {
        const selected = this.getSelected()
        this.$children.forEach(child => {
          child.selected = selected
          // let newIndex = this.names.indexOf(selected)
          // let oldIndex = this.names.indexOf(child.name)
          // child.reverse = newIndex <= oldIndex
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
