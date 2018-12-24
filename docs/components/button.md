---
title: Button
---
# Button 按钮
**常规的按钮操作**

## 常规用法
**预览**

<ClientOnly>
  <button-demo-1></button-demo-1>
</ClientOnly>

``` html{4}
<s-button>默认按钮</s-button>
<s-button icon="like">图标按钮</s-button>
<s-button icon="like" icon-position="right">右侧图标按钮</s-button>
<s-button :loading="true">加载按钮</s-button>
<s-button disabled>禁用按钮</s-button>
```

## 按钮组
**以按钮组的方式出现，常用于多项类似操作。**

<ClientOnly>
  <button-demo-2></button-demo-2>
</ClientOnly>

``` html{4}
<s-button-group>
  <s-button icon="left">上一项</s-button>
  <s-button icon="right" icon-position="right">下一项</s-button>
</s-button-group>

<s-button-group>
  <s-button icon="like"></s-button>
  <s-button icon="setting"></s-button>
  <s-button icon="download"></s-button>
</s-button-group>
```

## 属性
::: warning
未完成
:::
