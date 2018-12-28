---
title: Toast
---
# Toast
基础的 Toast 操作

## 常规用法
**预览**

<ClientOnly>
  <toast-demo-1></toast-demo-1>
</ClientOnly>

``` html{4}
<s-button @click="$toast('这是上方提示框')">上方弹出</s-button>
<s-button @click="$toast('这是中间提示框', {position: 'middle'})">中间弹出</s-button>
<s-button @click="$toast('这是下方提示框', {position: 'bottom'})">下方弹出</s-button>
```

## 是否自动关闭

## 自定义 closeButton

## 属性
::: warning
未完成
:::
