<template>
  <div class="collapse-item">
    <div class="title" @click="onClick">
      {{title}}
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SightCollapseItem',
    inject: ['eventBus'],
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        open: false
      }
    },
    mounted () {
      this.eventBus && this.eventBus.$on('update:selected', (vm) => {
        if (vm !== this) {
          this.open = false
        }
      })
    },
    methods: {
      switch () {
        this.open = !this.open
      },
      onClick () {
        this.switch()
        this.eventBus && this.eventBus.$emit('update:selected', this)
      }
    }
  }
</script>

<style scoped lang="scss">
  .collapse-item {
    $grey: #ddd;
    $border-radius: 4px;

    > .title {
      border: 1px solid $grey;
      margin-top: -1px;
      margin-left: -1px;
      margin-right: -1px;
      min-height: 32px;
      display: flex;
      align-items: center;
      padding: 0 8px;
    }

    > .content {
      padding: 8px;
    }

    &:first-child {
      > .title {
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
      }
    }

    &:last-child {
      margin-bottom: -1px;
      > .title:last-child {
        border-bottom-right-radius: $border-radius;
        border-bottom-left-radius: $border-radius;
      }
    }
  }
</style>
