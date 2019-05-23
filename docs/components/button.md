---
title: 按钮
---
# 按钮组件

##介绍：
该组件模仿了button元素的性质，有```icon```、```loading```、```icon-position```
等参数，支持```click```事件。另外，除了普通的button组件外，还有button-group按
钮组组件。

##使用方法：
先引入app.js：
```
<script src="../../src/app.js"></script>
```
再给组件重命名（下面例子中命名为```g-button-group```和```g-button```）。
```icon```参数：给该参数赋值```setting```，组件内会有一个“设置”的图标（目前组
件仅支持“设置”图标）；
```loading```参数：参数值为布尔值，默认是false，若赋值为true，则组件内会有一个
“等待”的图标；
```icon-position```参数：参数值为```left```和```right```中的一个，表示“设置”图
标和“等待”图标相对于文字的位置，默认是```left```；
```click```事件：点击组件，触发该事件，可执行某些操作（例子中是令图标改变）；
```button-group```组件：使用时包含```button```即可。

<ClientOnly>
  <button-demos></button-demos>
</ClientOnly>
