<template>
  <div class="s-sub-nav" :class="classes" v-click-outside="close">
    <span class="s-sub-nav-label" @click="onClickTitle">
      <slot name="title"></slot>
      <span class="s-sub-nav-icon" :class="{ open, vertical }">
        <s-icon name="right"></s-icon>
      </span>
    </span>
    <template v-if="vertical">
      <transition name="slide" @enter="enter" @after-enter="afterEnter" @leave="leave" @after-leave="afterLeave">
        <div v-show="open" class="s-sub-nav-popover" :class="{ vertical }">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-else>
      <div v-show="open" class="s-sub-nav-popover">
        <slot></slot>
      </div>
    </template>
  </div>
</template>

<script>
import clickOutside, { removeListener } from '../click-outside'
import Icon from '../icon/icon.vue'

export default {
  name: 'SightSubNav',
  components: {
    's-icon': Icon
  },
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
      open: false,
      active: false
    }
  },
  computed: {
    classes () {
      return [{ active: this.active }, { vertical: this.vertical }]
    }
  },
  methods: {
    onClickTitle () {
      this.open = !this.open
    },
    close () {
      this.open = false
    },

    /* vertical animation hooks */
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
    /* vertical animation hooks */

    getChildrenNames ($children) {
      return $children.reduce((result, childVm) => {
        childVm.$children.length === 0 ? result.push(childVm.$props.name) : result.push(...this.getChildrenNames(childVm.$children))
        return result
      }, [])
    }
  },
  created () {
    this.eventBus.$on('update:selected', (name) => {
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

  &:not(.vertical) {
    &.active {
      color: $blue;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-bottom: 2px solid $blue;
      }
    }
  }

  &-label {
    display: block;
    padding: 10px 20px;
  }

  &-icon {
    display: none;
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
      font-size: $small-font-size;
    }
  }
}

.s-sub-nav .s-sub-nav {
  &:not(.vertical) {
    &.active {
      color: $blue;
      &::after {
        content: none;
      }
    }

    color: #000;
  }

  .s-sub-nav-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .s-sub-nav-icon {
    display: inline-flex;
    transition: transform 250ms;
    svg {
      fill: $light-color;
    }

    &.vertical {
      transform: rotate(90deg);
      &.open {
        transform: rotate(270deg);
      }
    }

    &.open {
      transform: rotate(180deg);
    }
  }
}

.s-sub-nav .s-sub-nav .s-sub-nav-popover {
  top: 0;
  left: 100%;
}
</style>
