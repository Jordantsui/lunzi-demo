---
title: Popover - 弹出层
---
# 弹出层

##介绍
popover组件指用鼠标点击按钮或进入按钮所触发的弹出层。
popover组件可接受position和trigger参数，position参数定义了弹出层的位置，值可以是
'top', 'bottom', 'left', 'right'中的一个，默认是'top'；trigger参数定义了触发弹
出层的方式，可以是'click', 'hover'中的一个，默认是'click'点击。

##使用方法
先引入app.js：
```
<script src="../../src/app.js"></script>
```
直接使用g-popover组件（重命名之后）即可。

组件使用实例：
<ClientOnly>
  <popover-demos></popover-demos>
</ClientOnly>
template标签中的内容是弹出层的内容。
弹出层里可添加关闭按钮及链接。