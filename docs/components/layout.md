---
title: Layout
---
# Layout 布局

## 布局一

**预览**

<ClientOnly>
  <layout-demo-1></layout-demo-1>
</ClientOnly>

**代码**

```html
<s-layout style="color: white; margin-bottom:50px;">
  <s-header style="height: 50px; background:lightskyblue;">
    header
  </s-header>
  <s-content style="height: 100px; background:deepskyblue;">
    content
  </s-content>
  <s-footer style="height: 50px; background:lightskyblue;">
    footer
  </s-footer>
</s-layout>
```

## 布局二

**预览**

<ClientOnly>
  <layout-demo-2></layout-demo-2>
</ClientOnly>

**代码**

```html
<s-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <s-header style="height: 50px; background:lightskyblue;">
    header
  </s-header>
  <s-layout>
    <s-sider style="height: 100px; background:#ddd; width:200px; color: black;">
      sider
    </s-sider>
    <s-content style="height: 100px; background:deepskyblue;">
      content
    </s-content>
  </s-layout>
  <s-footer style="height: 50px; background:lightskyblue;">
    footer
  </s-footer>
</s-layout>
```

## 布局三

**预览**

<ClientOnly>
  <layout-demo-3></layout-demo-3>
</ClientOnly>

**代码**

```html
<s-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <s-sider style=" background:#ddd; width:200px; color: black;">
    sider
  </s-sider>
  <s-layout>
    <s-header style="height: 50px; background:lightskyblue;">
      header
    </s-header>
    <s-content style="height: 100px; background:deepskyblue;">
      content
    </s-content>
    <s-footer style="height: 50px; background:lightskyblue;">
      footer
    </s-footer>
  </s-layout>
</s-layout>
```

## 属性
::: warning
未完成
:::
