<template>
  <div class="s-sub-nav" :class="classes" v-click-outside="close">
    <span @click="toggle">
      <slot name="title"></slot>
    </span>
    <template v-if="vertical">
      <transition name="slide" @enter="enter" @after-enter="afterEnter" @leave="leave" @after-leave="afterLeave">
        <div v-show="isShow" class="s-sub-nav-popover" :class="{ vertical }">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-else>
      <div v-show="isShow" class="s-sub-nav-popover">
        <slot></slot>
      </div>
    </template>
  </div>
</template>

<script>
import clickOutside, { removeListener } from '../click-outside'

export default {
  name: 'SightSubNav',
  inject: ['eventBus', 'vertical'],
  directives: { clickOutside },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isShow: false,
      active: false
    }
  },
  computed: {
    classes () {
      return {
        active: this.active
      }
    }
  },
  methods: {
    open () {
      this.isShow = true
    },
    close () {
      this.isShow = false
    },
    toggle () {
      if (this.isShow) {
        this.close()
      } else {
        this.open()
      }
    },
    enter (el, done) {
      const { height } = getComputedStyle(el)
      el.style.height = 0
      el.getBoundingClientRect()
      el.style.height = height
      el.addEventListener('transitionend', () => {
        done()
      })
    },
    afterEnter (el) {
      el.style.height = 'auto'
    },
    leave (el, done) {
      const { height } = getComputedStyle(el)
      el.style.height = height
      el.getBoundingClientRect()
      el.style.height = 0
      el.addEventListener('transitionend', () => {
        done()
      })
    },
    afterLeave (el) {
      el.style.height = 'auto'
    },
    getChildrenNames ($children) {
      return $children.reduce((result, childVm) => {
        childVm.$children.length === 0 ? result.push(childVm.$props.name) : result.push(...this.getChildrenNames(childVm.$children))
        return result
      }, [])
    }
  },
  created () {
    this.eventBus.$on('add:selected', (name) => {
      const childrenNames = this.getChildrenNames(this.$children)
      this.active = childrenNames.indexOf(name) > -1
    })
  },
  destroyed () {
    removeListener()
  }
}
</script>

<style scoped lang="scss">
@import "var";

.s-sub-nav {
  position: relative;
  background-color: white;

  &.active {
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-bottom: 2px solid $blue;
    }
  }

  > span {
    display: block;
    padding: 10px 20px;
  }

  &-popover {
    background-color: white;
    position: absolute;
    top: 100%;
    left: 0;
    white-space: nowrap;
    margin-top: 1px;
    box-shadow: 0 0 3px fade_out(black, 0.8);
    border-radius: $border-radius;
    &.vertical {
      position: static;
      border: none;
      border-radius: 0;
      box-shadow: none;
      transition: height 300ms;
      overflow: hidden;
    }
  }
}

.s-sub-nav .s-sub-nav .s-sub-nav-popover {
  top: 0;
  left: 100%;
  margin-left: 8px;
}

.s-sub-nav .s-sub-nav {
  &.active {
    &::after {
      display: none;
    }
    background-color: $grey;
  }
}
</style>
