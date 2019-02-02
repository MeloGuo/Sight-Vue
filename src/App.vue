<template>
  <div>
    {{currentPage}}
    <s-pagination :total-page="totalPage" :current-page.sync="currentPage" :hide-if-one-page="false" :pager-count="10"></s-pagination>
  </div>
</template>

<script>
  import Pagination from './components/pagination/pagination.vue'

  export default {
    name: 'app',
    components: {
      's-pagination': Pagination
    },
    data () {
      return {
        totalPage: 100,
        currentPage: 1
      }
    }
  }
</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }
</style>
