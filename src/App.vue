<template>
  <div>
    <s-pagination :total-page="totalPage" :current-page="currentPage" @click="fuck"></s-pagination>
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
        totalPage: 20,
        currentPage: 20
      }
    },
    methods: {
      fuck (page) {
        this.currentPage = page
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
