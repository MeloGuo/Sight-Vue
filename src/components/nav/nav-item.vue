<template>
  <div class="s-nav-item" :class="classes" @click="onClickItem">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SightNavItem',
  inject: ['eventBus'],
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
      this.eventBus.$emit('update:selected', this.name)
    }
  },
  created () {
    this.eventBus.$on('update', (selected) => {
      if (selected.indexOf(this.name) > -1) {
        this.isSelected = true
      } else {
        this.isSelected = false
      }
    })
  }
}
</script>

<style scoped lang="scss">
.s-nav-item {
  padding: 10px 20px;

  &.active {
    background-color: red;
  }
}
</style>
