---
title: Collapse - 手风琴组件
---
# 手风琴组件

##介绍
手风琴组件包含两个组件：collapse和collapse-item。
collapse组件可包含collapse-item组件，collapse组件是指整个手风琴组件，
collapse-item组件是指手风琴组件的一个元素item，包括title和content。点击title，显示
content，很像手风琴，故该组件命名为手风琴组件。
collapse组件可接受selected和single参数，selected参数表示哪个item被选中，默认为
['1','2']；single参数是否允许多个item同时处于选中状态，默认为false，允许多个
item同时被选中。
collapse-item组件可接受title和name参数，title是指每个元素title的内容，name是指
该item的编号。
注意，每个元素content的内容通过插槽来实现。

##使用方法
先引入app.js：
```
<script src="../../../src/app.js"></script>
```
直接使用g-collapse和g-collapse-item组件（重命名之后）即可。

组件使用实例：
<ClientOnly>
  <collapse-demos></collapse-demos>
</ClientOnly>