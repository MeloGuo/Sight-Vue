<template>
  <div class="s-sub-nav" :class="classes" v-click-outside="close">
    <span @click="toggle">
      <slot name="title"></slot>
    </span>
    <div v-show="isShow" class="s-sub-nav-popover">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import clickOutside, { removeListener } from '../click-outside'

export default {
  name: 'SightSubNav',
  inject: ['eventBus'],
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
