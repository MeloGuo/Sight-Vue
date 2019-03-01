---
title: Grid
---
# Grid 栅格

### 24格网格

**预览**

<ClientOnly>
  <grid-demo-1></grid-demo-1>
</ClientOnly>

**代码**

```html
<s-row class="row-demo">
  <s-col span="24">
    <div class="col-demo">24: 100%</div>
  </s-col>
</s-row>

<s-row class="row-demo">
  <s-col span="12">
    <div class="col-demo">12: 50%</div>
  </s-col>
  <s-col span="12">
    <div class="col-demo">12: 50%</div>
  </s-col>
</s-row>

<s-row class="row-demo">
  <s-col span="8">
    <div class="col-demo">8: 33.33%</div>
  </s-col>
  <s-col span="8">
    <div class="col-demo">8: 33.33%</div>
  </s-col>
  <s-col span="8">
    <div class="col-demo">8: 33.33%</div>
  </s-col>
</s-row>

<s-row class="row-demo">
  <s-col span="16">
    <div class="col-demo">16: 66.66%</div>
  </s-col>
  <s-col span="8">
    <div class="col-demo">8: 33.33%</div>
  </s-col>
</s-row>
```

### 设置 gutter

**预览**

<ClientOnly>
  <grid-demo-2></grid-demo-2>
</ClientOnly>

**代码**

```html
<s-row class="row-demo" gutter="10">
  <s-col span="8">
    <div class="col-demo">8: 33.33%</div>
  </s-col>
  <s-col span="8">
    <div class="col-demo">8: 33.33%</div>
  </s-col>
  <s-col span="8">
    <div class="col-demo">8: 33.33%</div>
  </s-col>
</s-row>

<s-row class="row-demo" gutter="10">
  <s-col span="6">
    <div class="col-demo">6: 25%</div>
  </s-col>
  <s-col span="6">
    <div class="col-demo">6: 25%</div>
  </s-col>
  <s-col span="6">
    <div class="col-demo">6: 25%</div>
  </s-col>
  <s-col span="6">
    <div class="col-demo">6: 25%</div>
  </s-col>
</s-row>
```

### 设置空隙

**预览**

<ClientOnly>
  <grid-demo-3></grid-demo-3>
</ClientOnly>

**代码**

```html
<s-row class="row-demo" gutter="10">
  <s-col span="8">
    <div class="col-demo">8: 33.33%</div>
  </s-col>
  <s-col offset="8">
    <div class="col-demo">8: 33.33%</div>
  </s-col>
</s-row>
<s-row class="row-demo" gutter="10">
  <s-col span="6">
    <div class="col-demo">6: 25%</div>
  </s-col>
  <s-col span="6">
    <div class="col-demo">6: 25%</div>
  </s-col>
  <s-col span="6" offset="6">
    <div class="col-demo">6: 25%</div>
  </s-col>
</s-row>
```

## 属性
::: warning
未完成
:::
