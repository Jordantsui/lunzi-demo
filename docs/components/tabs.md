---
title: Tabs - 标签
---
# 标签

##介绍
Tabs组件包括 tabs、tabs-head、tabs-body、tabs-item、tabs-pane等组件。（在引入各
组件时已重命名为g-tabs、g-tabs-head、g-tabs-body、g-tabs-item、g-tabs-pane）
其中，tabs组件包含着其他组件；tabs-head包含tabs-item，表示组件的title；tabs-item
表示每个title；tabs-body包含tabs-pane，表示组件的内容；tabs-pane表示每个title所
对应的内容。通过点击tabs-item改变title，进而改变tabs-pane显示的内容。
tabs组件可接受selected和direction参数，selected表示被选中的title名字（selected
参数等于被点击的title名字，无须用户指定）；direction可以是'horizontal', 
'vertical'中的一个，表示title的排列顺序。
tabs-item组件可接受disabled和name参数，disabled参数表示此item禁用，name参数用于
item与pane的绑定。
tabs-pane组件可接受name参数。
另外，tabs-item组件内可添加图标（图标组件是g-icon）。
tabs组件在被点击、selected更新时，会触发“yyy”事件，该事件由用户根据需求自行添
加。
在tabs-head的右侧有一个按钮，未赋予任何功能，由用户根据需求自行添加功能。

##使用方法
先引入app.js：
```
<script src="../../src/app.js"></script>
```
直接使用 g-tabs、g-tabs-head、g-tabs-body、g-tabs-item、g-tabs-pane 即可。

组件使用实例：
<ClientOnly>
  <tabs-demos></tabs-demos>
</ClientOnly>