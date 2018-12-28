<template>
  <div class="s-nav">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'SightNav',
  props: {
    selected: {
      type: Array,
      default: () => []
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      eventBus: new Vue(),
      mutableSelected: this.selected
    }
  },
  provide () {
    return {
      eventBus: this.eventBus
    }
  },
  computed: {
    items () {
      return this.$children.filter((vm) => vm.$options.name === 'SightNavItem')
    }
  },
  methods: {
    updateChildren () {
      this.eventBus.$emit('update', this.selected)
    },
    listenToChildren () {
      this.eventBus.$on('update:selected', (name) => {
        if (this.multiple) {
          const index = this.mutableSelected.indexOf(name)

          if (index < 0) {
            this.mutableSelected.push(name)
          } else {
            this.mutableSelected.splice(index, 1)
          }
        } else {
          this.mutableSelected = [name]
        }

        this.$emit('update:selected', this.mutableSelected)
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
.s-nav {
  display: flex;
  border: 1px solid red;
}
</style>
