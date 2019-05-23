---
title: 网格组件
---
# 网格组件

##介绍
该组件包括两个组件：row和col，分别控制横向和和纵向布局。row组件可接收gutter、
align等参数；col组件可接受span、offset、phone、ipad、narrowPc、pc、widePc等参数。
另外，该组件还支持响应式布局。
各参数的意义如下所示：
gutter：该参数可以是数字，也可以是字符串。表示该行每个col元素的左右两端都加上宽
度为gutter / 2 +'px' 的间隔；
align：该参数可以是'left', 'right', 'center'这三个字符串中的一个，该参数控制该
行的col元素的排列方式，'left'表示col元素都向左靠齐，'right'表示col元素都向右靠
齐，'center'表示col元素都挤在中间；
span：将一行的宽度等分为24份（不包括该行左右两端的间隔），span参数表示该col元素
占行宽度的span/24。
offset：在gutter表示两个col元素之间间隔基础上，offset表示在该col元素的左端加上宽
度为行宽度 offset/24 的间隔。
应注意到：一行内所有col元素的span+offset之和为24。
phone：该参数是一个对象，对象中可能有span、offset这两个属性，表示当屏幕宽度小于
 576px 时（一般智能手机的屏幕宽度），该col元素的宽度及左边的附加间隔（属性作用类
 似于上面的span及offset参数）。
ipad：结构同 phone，表示当屏幕宽度为 577~768px 时，该col元素的宽度及左边的附加间
隔。
narrowPc：结构同 phone，表示当屏幕宽度为 769~992px 时，该col元素的宽度及左边的附
加间隔。
pc：结构同 phone，表示当屏幕宽度为 993~1200px 时，该col元素的宽度及左边的附加间
隔。
widePc：结构同 phone，表示当屏幕宽度大于 1201px 时，该col元素的宽度及左边的附加
间隔。
应注意到，不论屏幕宽度是多少，一行内所有col元素的span+offset之和为24。

##使用方法
先引入app.js：
```
<script src="../../src/app.js"></script>
```
然后给这两个组件重命名。

##使用示例
<ClientOnly>
  <grid-demos></grid-demos>
</ClientOnly>