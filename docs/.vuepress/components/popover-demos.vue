<template>
    <div>
        <div style="overflow: hidden; padding-top: 150px; padding-bottom: 40px;" @click="yyy">
            <g-popover position="bottom">
                <template slot="content" slot-scope="{close}">
                    <div>文字</div>
                    <div>popover <a href="http://qq.com">看新网</a> 内容</div>
                    <g-button @click="close">关闭</g-button>
                </template>
                <g-button>点我</g-button>
            </g-popover>
            <g-popover position="top">
                <template slot="content">
                    <div>popover内容
                        <g-button>关闭</g-button>
                    </div>
                </template>
                <g-button>点我</g-button>
            </g-popover>
            <g-popover position="left">
                <template slot="content">
                    <div>popover内容</div>
                </template>
                <g-button>点我</g-button>
            </g-popover>
            <g-popover position="right">
                <template slot="content">
                    <div>popover内容</div>
                </template>
                <g-button>点我</g-button>
            </g-popover>
        </div>

        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>
<script>
    import Button from '../../../src/button'
    import Popover from '../../../src/popover'
    export default {
        components: {
            'g-button': Button,
            'g-popover': Popover
        },
        data () {
            return {
                content: `
    <div style="overflow: hidden; padding-top: 150px; padding-bottom: 40px;" @click="yyy">
        <g-popover position="bottom">
            <template slot="content" slot-scope="{close}">
                <div>文字</div>
                <div>popover <a href="http://qq.com">看新网</a> 内容</div>
                <g-button @click="close">关闭</g-button>
            </template>
            <g-button>点我</g-button>
        </g-popover>
        <g-popover position="top">
            <template slot="content">
                <div>popover内容
                    <g-button>关闭</g-button>
                </div>
            </template>
            <g-button>点我</g-button>
        </g-popover>
        <g-popover position="left">
            <template slot="content">
                <div>popover内容</div>
            </template>
            <g-button>点我</g-button>
        </g-popover>
        <g-popover position="right">
            <template slot="content">
                <div>popover内容</div>
            </template>
            <g-button>点我</g-button>
        </g-popover>
    </div>
      `.replace(/\t+| +/g, '').trim()
            }
            //replace(/\t+| +/g, '').trim() 表示把代码前后所有的回车、空格、tab删掉
        }
    }
</script>