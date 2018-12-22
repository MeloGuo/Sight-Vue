<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'SightCollapse',
  props: {
    accordion: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      eventBus: new Vue()
    }
  },
  provide () {
    return {
      eventBus: this.eventBus
    }
  },
  mounted () {
    this.eventBus.$emit('update:selected', this.selected)
    this.listenAddSelected()
    this.listenRemoveSelected()
  },
  methods: {
    deepCopySelected () {
      return JSON.parse(JSON.stringify(this.selected))
    },
    emitSelected (selectedCopy) {
      this.eventBus.$emit('update:selected', selectedCopy)
      this.$emit('update:selected', selectedCopy)
    },
    listenAddSelected () {
      this.eventBus.$on('update:addSelected', (name) => {
        let selectedCopy = this.deepCopySelected()

        if (this.accordion) {
          selectedCopy = [name]
        } else {
          selectedCopy.push(name)
        }

        this.emitSelected(selectedCopy)
      })
    },
    listenRemoveSelected () {
      this.eventBus.$on('update:removeSelected', (name) => {
        let selectedCopy = this.deepCopySelected()

        const index = selectedCopy.indexOf(name)
        selectedCopy.splice(index, 1)

        this.emitSelected(selectedCopy)
      })
    }
  }
}
</script>

<style scoped lang="scss">
  $grey: #ddd;
  $border-radius: 4px;
  .collapse {
    border: 1px solid $grey;
    border-radius: $border-radius;
  }
</style>
