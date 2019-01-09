<template>
  <div>
    <s-cascader popover-class-name="xxx" :source.sync="dataSource" :selected.sync="selected" :load-data="loadData"></s-cascader>
  </div>
</template>

<script>
  import Cascader from './components/cascader/cascader.vue'
  import db from '../tests/fixtures/db'

  function ajax (parentId = 0) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = db.filter((item) => item.parent_id === parentId)
        resolve(result)
      }, 0)
    })
  }

  export default {
    name: 'app',
    components: {
      's-cascader': Cascader
    },
    data () {
      return {
        dataSource: null,
        selected: []
      }
    },
    created () {
      ajax(0).then((result) => (this.dataSource = result))
    },
    methods: {
      loadData (node, callback) {
        const {name, id, parentId} = node
        ajax(id).then(result => (callback(result)))
      },
      xxx () {
        const selectedId = this.selected[0].id
        ajax(selectedId).then((result) => {
          let lastLevelSelected = this.dataSource.filter(item => item.id === selectedId)[0]
          this.$set(lastLevelSelected, 'children', result)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .xxx {
    height: 300px;
  }
</style>
