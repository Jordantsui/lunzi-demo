---
title: Toast组件
---
# Toast组件

##介绍
Toast组件是弹出组件，弹出的位置可以是页面顶部、中部以及底部。
Toast组件比较特殊，由于组件是弹出内容，因此不能直接写在html文档中，而应该通过安
装插件的方法引入Toast组件，定义一个方法（Vue.prototype.$toast）弹出组件。
该组件可接受autoClose、closeButton、enableHtml、position等参数，各参数的意义如
下所示：
autoClose：可以是布尔值false或数字，表示是否允许弹出组件自动关闭，以及自动关闭
的时间；
closeButton：是一个对象，用于表示关闭按钮，包含两个属性：text和callback，text属
性表示关闭按钮上的字；callback表示点击按钮之后的回调操作，当前组件中未定义，用
户可根据需要自己添加；
enableHtml：是布尔值，表示弹出组件的文字内容是否允许是HTML格式的；
position：是'top', 'bottom', 'middle'这三个值中的一个，默认是'top'，表示弹出组件
在页面中的位置。

##使用方法
Vue.prototype.$toast 方法的调用程序写在app.js中，。在使用时要先将app.js文件引
入：
```
<script src="../../src/app.js"></script>
```
Toast组件已被重命名为g-toast。

要弹出Toast组件时，使用Vue.prototype.$toast方法即可。
示例：
<ClientOnly>
  <toast-demos></toast-demos>
</ClientOnly>