<template>
  <button class="s-button" :class="`icon-${iconPosition}`">
    <s-icon class="icon" v-if="icon" :name="icon"></s-icon>
    <s-icon class="loading" name="loading"></s-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  export default {
    props: {
      icon: String,
      iconPosition: {
        type: String,
        default: 'left',
        validator (direction) {
          return ['left', 'right'].includes(direction)
        }
      }
    }
  }
</script>

<style lang="scss">
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .s-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;

    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      background-color: var(--button-active-bg);
    }

    &:focus {
      outline: none;
    }

    &.icon-left {
      > .icon {
        order: 1;
        margin-right: .3em;
      }

      > .content {
        order: 2;
      }
    }

    &.icon-right {
      > .icon {
        order: 2;
        margin-left: .3em;
      }

      > .content {
        order: 1;
      }
    }

    .loading {
      animation: spin 1s infinite linear;
    }
  }
</style>
