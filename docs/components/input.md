---
title: 输入框
---
# 输入框组件

先引入app.js：
```
<script src="../../src/app.js"></script>
```
然后重命名（例子里重命名为```g-input```）。

该组件模仿了input元素的性质，可接受```disabled```、```readonly```、```value```
、```error```等参数，还可自定义因input组件内容改变而触发的```inputChange```事件
，甚至还可将input组件内的内容显示在页面上。

```disabled```参数：有此参数，表明输入框已禁用，无法点击，无法修改；
```readonly```参数：有此参数，表明输入框只读，可点击，但无法修改；
```value```参数：此参数是输入框的值，开发者可给定```value```，相当于给输入框一个
初始值；
```error```参数：此参数表示输入框后面报错信息的内容。

```inputChange```事件：指输入框内容改变而触发的事件，由开发者自己定义。
另外，该组件还能用```v-model```指令来双向绑定输入框中的内容。


<ClientOnly>
  <input-demos></input-demos>
</ClientOnly>