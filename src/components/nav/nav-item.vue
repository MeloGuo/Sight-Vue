<template>
  <div class="s-nav-item" :class="classes" @click="onClickItem">
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
      return [{ active: this.isSelected }]
    }
  },
  methods: {
    onClickItem () {
      this.eventBus.$emit('add:selected', this.name)
    },
    emitUpdate () {
      this.eventBus.$on('update', (selected) => {
        this.isSelected = selected.indexOf(this.name) > -1
      })
    }
  },
  created () {
    this.emitUpdate()
  }
}
</script>

<style scoped lang="scss">
@import "var";

.s-nav-item {
  padding: 10px 20px;
  position: relative;
  &.active {
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

.s-sub-nav .s-nav-item {
  &.active {
    background-color: $grey;
    &::after {
      display: none;
    }
  }
}
</style>
