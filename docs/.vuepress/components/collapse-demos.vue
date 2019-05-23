<template>
    <div>
        <g-collapse :selected.sync="selectedTab" single>
            <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
            <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
            <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
        </g-collapse>
        {{selectedTab}}

        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>
<script>
    import Collapse from '../../../src/collapse'
    import CollapseItem from '../../../src/collapse-item'
    export default {
        components: {
            'g-collapse': Collapse,
            'g-collapse-item': CollapseItem
        },
        data () {
            return {
                content: `
    <g-collapse :selected.sync="selectedTab" single>
        <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
        <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
        <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
    </g-collapse>
    {{selectedTab}}
      `.replace(/\t+| +/g, '').trim()
            }
            //replace(/\t+| +/g, '').trim() 表示把代码前后所有的回车、空格、tab删掉
        }
    }
</script>