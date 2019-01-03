<template>
  <div class="s-nav-item" :class="classes" @click="onClickItem"
    :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SightNavItem',
  inject: ['eventBus', 'vertical'],
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isSelected: false
    }
  },
  computed: {
    classes () {
      return [{ active: this.isSelected }, { vertical: this.vertical }]
    }
  },
  methods: {
    onClickItem () {
      this.eventBus.$emit('update:selected', this.name)
    },
    listenUpdate () {
      this.eventBus.$on('update', (selected) => {
        this.isSelected = selected === this.name
      })
    }
  },
  created () {
    this.listenUpdate()
  }
}
</script>

<style scoped lang="scss">
@import "var";

.s-nav-item {
  padding: 10px 20px;
  position: relative;

  &:not(.vertical) {
    &.active {
      color: $blue;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        border-bottom: 2px solid $blue;
        width: 100%;
      }
    }
  }

  &.vertical {
    &.active {
      color: $blue;
      background-color: $grey;
    }
  }
}

.s-sub-nav .s-nav-item {
  &:not(.vertical) {
    &.active {
      color: $blue;
      &::after {
        content: none;
      }
    }

    color: #000;
  }
}
</style>
