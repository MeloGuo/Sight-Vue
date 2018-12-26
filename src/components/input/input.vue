<template>
  <div class="wrapper" :class="{ error }">
    <input :type="type" :placeholder="placeholder" :value="value"
           :disabled="disabled" :readonly="readonly" :class="{ error }"
           @input="$emit('input', $event.target.value)"
           @change="$emit('change', $event.target.value)"
           @blur="$emit('blur', $event.target.value)"
           @focus="$emit('focus', $event.target.value)"
    >
    <template v-if="error">
      <Icon name="error" class="icon-error"></Icon>
      <span class="error-message">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import Icon from '../icon/icon.vue'

export default {
  components: { Icon },
  name: 'SightInput',
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    },
    placeholder: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>

<style lang="scss" scoped>
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 14px;
  $box-shadow-color: rgba(0, 0, 0, 0.5);
  $red: #f1453d;
  .wrapper {
    display: inline-flex;
    align-items: center;
    font-size: $font-size;

    > input {
      height: 32px;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding: 0 8px;
      font-size: inherit;
      &:hover {
        border-color: $border-color-hover;
      }
      &:focus {
        box-shadow: inset 0 1px 3px $box-shadow-color;
        outline: none;
      }
      &[disabled], &[readonly] {
        border-color: #bbb;
        color: #aaa;
        cursor: not-allowed;
      }
      &.error {
        color: red;
      }
    }
    &.error {
      > input {
        border-color: $red;
      }
    }
    .icon-error {
      fill: $red;
      margin: 0 .5em;
    }
    .error-message {
      color: red;
    }
  }
</style>
