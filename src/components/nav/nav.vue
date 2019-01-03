<template>
  <div class="s-nav" :class="{ vertical }">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'SightNav',
  props: {
    selected: {
      type: String,
      required: true
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      eventBus: new Vue()
    }
  },
  provide () {
    return {
      eventBus: this.eventBus,
      vertical: this.vertical
    }
  },
  methods: {
    updateChildren () {
      this.eventBus.$emit('update', this.selected)
    },
    listenToChildren () {
      this.eventBus.$on('update:selected', (name) => {
        this.$emit('update:selected', name)
      })
    }
  },
  created () {
    this.listenToChildren()
  },
  mounted () {
    this.updateChildren()
  },
  updated () {
    this.updateChildren()
  }
}
</script>

<style scoped lang="scss">
@import "var";

.s-nav {
  display: flex;
  border-bottom: 1px solid $grey;
  color: $color;
  cursor: default;
  user-select: none;

  &.vertical {
    flex-direction: column;
    border: 1px solid $grey;
  }
}
</style>
