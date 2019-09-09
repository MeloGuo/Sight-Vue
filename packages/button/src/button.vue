<template>
  <button
    class="s-button"
    @click="handleClick"
    :class="[
      `s-icon--${this.iconPosition}`,
      {
        'is-disabled': this.disabled
      }
    ]"
  >
    <i class="s-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'SightButton',
  props: {
    icon: {
      type: String,
      default: ''
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator (direction) {
        return ['left', 'right'].indexOf(direction) > -1
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (event) {
      if (!this.loading && !this.disabled) {
        this.$emit('click', event)
      }
    }
  }
}
</script>
