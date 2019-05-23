---
title: 布局组件
---
# 布局组件

##介绍
该组件包括 layout、sider、header、content、footer等组件，帮助开发者快速完成页面
布局。
layout组件是包裹组件，可包含其他组件，假如其包裹的组件里没有sider组件，则这些组
件成列分布；假如有sider组件，则这些组件成行分布。
sider组件是侧边栏组件，有一个按钮控制侧边栏的显示与否。
header组件是页面主体的头组件。
content组件是页面主体的内容组件。
footer组件是页面主体的尾组件。

##使用方法
首先引入各组件：
先引入app.js：
```
<script src="../../src/app.js"></script>
```
然后给这两个组件重命名（示例中已重命名为“g-layout”等）。

具体使用示例如下：
<ClientOnly>
  <layout-demos></layout-demos>
</ClientOnly>