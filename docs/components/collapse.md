---
title: Collapse
---
# Collapse

## 标题一

**预览**

<ClientOnly>
  <collapse-demo-1></collapse-demo-1>
</ClientOnly>

**代码**

```html
<s-collapse :selected.sync="selectedTab" accordion>
  <s-collapse-item title="标题1" name="1">内容一</s-collapse-item>
  <s-collapse-item title="标题2" name="2">内容二</s-collapse-item>
  <s-collapse-item title="标题3" name="3">内容三</s-collapse-item>
</s-collapse>
```
