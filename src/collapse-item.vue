<template>
  <div class="collapse-item">
    <div class="title" @click="switchContent">
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
    methods: {
      switchContent () {
        this.open = !this.open
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
