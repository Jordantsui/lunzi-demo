<template>
    <div>
        <g-button :loading="loading1" @click="loading1 = !loading1">
            按钮
        </g-button>
        <g-button icon="setting" :loading="loading2"
                  @click="loading2 = !loading2">
            按钮
        </g-button>
        <g-button icon="setting" icon-position="right" :loading="loading3"
                  @click="loading3 = !loading3">
            按钮
        </g-button>
        <g-button-group>
            <g-button icon="left">上一页</g-button>
            <g-button>更多</g-button>
            <g-button icon="right" icon-position="right">下一页</g-button>
        </g-button-group>

        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>
<script>
    import Button from '../../../src/button'
    import ButtonGroup from '../../../src/button-group'
    export default {
        components: {
            'g-button': Button,
            'g-button-group': ButtonGroup
        },
        data () {
            return {
                content: `
        <g-button :loading="loading1" @click="loading1 = !loading1">
            按钮
        </g-button>
        <g-button icon="setting" :loading="loading2"
                  @click="loading2 = !loading2">
            按钮
        </g-button>
        <g-button icon="setting" icon-position="right" :loading="loading3"
                  @click="loading3 = !loading3">
            按钮
        </g-button>
        <g-button-group>
            <g-button icon="left">上一页</g-button>
            <g-button>更多</g-button>
            <g-button icon="right" icon-position="right">下一页</g-button>
        </g-button-group>
      `.replace(/\t+| +/g, '').trim()
            }
            //replace(/\t+| +/g, '').trim() 表示把代码前后所有的回车、空格、tab删掉
        }
    }
</script>