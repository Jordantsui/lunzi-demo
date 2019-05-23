<template>
    <div>
        <g-tabs :selected.sync="selectedTab" @update:selected="yyy">
            <g-tabs-head>
                <template slot="actions">
                    <button>设置</button>
                </template>
                <g-tabs-item name="woman" disabled>
                    <g-icon name="setting"></g-icon>美女
                </g-tabs-item>
                <g-tabs-item name="finance">
                    财经
                </g-tabs-item>
                <g-tabs-item name="sports">
                    体育
                </g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="woman">
                    美女相关资讯
                </g-tabs-pane>
                <g-tabs-pane name="finance">
                    财经相关资讯
                </g-tabs-pane>
                <g-tabs-pane name="sports">
                    体育相关资讯
                </g-tabs-pane>
            </g-tabs-body>
        </g-tabs>

        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>
<script>
    import Tabs from '../../../src/tabs'
    import TabsBody from '../../../src/tabs-body'
    import TabsHead from '../../../src/tabs-head'
    import TabsItem from '../../../src/tabs-item'
    import TabsPane from '../../../src/tabs-pane'
    export default {
        components: {
            'g-tabs': Tabs,
            'g-tabs-body': TabsBody,
            'g-tabs-head': TabsHead,
            'g-tabs-item': TabsItem,
            'g-tabs-pane': TabsPane
        },
        data () {
            return {
                content: `
        <g-tabs :selected.sync="selectedTab" @update:selected="yyy">
            <g-tabs-head>
                <template slot="actions">
                    <button>设置</button>
                </template>
                <g-tabs-item name="woman" disabled>
                    <g-icon name="setting"></g-icon>美女
                </g-tabs-item>
                <g-tabs-item name="finance">
                    财经
                </g-tabs-item>
                <g-tabs-item name="sports">
                    体育
                </g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="woman">
                    美女相关资讯
                </g-tabs-pane>
                <g-tabs-pane name="finance">
                    财经相关资讯
                </g-tabs-pane>
                <g-tabs-pane name="sports">
                    体育相关资讯
                </g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
      `.replace(/\t+| +/g, '').trim()
            }
            //replace(/\t+| +/g, '').trim() 表示把代码前后所有的回车、空格、tab删掉
        }
    }
</script>