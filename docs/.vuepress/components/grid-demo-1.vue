<template>
  <div class="grid-demo">
    <s-row class="row-demo">
      <s-col span="24">
        <div class="col-demo">24: 100%</div>
      </s-col>
    </s-row>

    <s-row class="row-demo">
      <template v-for="n in 2">
        <s-col span="12">
          <div class="col-demo">12: 50%</div>
        </s-col>
      </template>
    </s-row>

    <s-row class="row-demo">
      <template v-for="n in 3">
        <s-col span="8">
          <div class="col-demo">8: 33.33%</div>
        </s-col>
      </template>
    </s-row>

    <s-row class="row-demo">
      <s-col span="16">
        <div class="col-demo">16: 66.66%</div>
      </s-col>
      <s-col span="8">
        <div class="col-demo">8: 33.33%</div>
      </s-col>
    </s-row>
  </div>
</template>

<script>
  import Col from '../../../src/components/grid/col.vue'
  import Row from '../../../src/components/grid/row.vue'

  export default {
    components: {
      's-col': Col,
      's-row': Row
    }
  }
</script>

<style scoped lang="scss">
  * {
    box-sizing: border-box;
  }
  .row-demo {
    background-color: #67B8EE;
    margin-bottom: 10px;

    .col-demo {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      border: 1px solid black;
      color: #fff;
    }
  }
</style>
