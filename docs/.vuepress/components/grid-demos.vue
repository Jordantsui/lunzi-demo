<template>
    <div>
        <g-row gutter="20">
            <g-col span="2"
                   :phone="{span:24}"
                   :ipad="{span:8}"
                   :narrow-pc="{span:4}"
                   :pc="{span:2}"
                   :wide-pc="{span:1}"
            style="border:1px solid red">
                1
            </g-col>
            <g-col span="22"
                   :phone="{span:24}"
                   :ipad="{span:16}"
                   :narrow-pc="{span:20}"
                   :pc="{span:22}"
                   :wide-pc="{span:23}"
                   style="border:1px solid red">11
            </g-col>
        </g-row>
        <g-row gutter="20">
            <g-col span="4" style="border:1px solid red">4</g-col>
            <g-col span="8" offset="2" style="border:1px solid red">8</g-col>
            <g-col span="8" offset="2" style="border:1px solid red">8</g-col>
        </g-row>

        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>
<script>
    import Row from '../../../src/row'
    import Col from '../../../src/col'
    export default {
        components: {
            'g-row': Row,
            'g-col': Col
        },
        data () {
            return {
                content: `
        <g-row gutter="20">
            <g-col span="2" :phone="{span:24}" :ipad="{span:8}" :narrow-pc="{span:4}" :pc="{span:2}" :wide-pc="{span:1}">
                1
            </g-col>
            <g-col span="22" :phone="{span:24}" :ipad="{span:16}" :narrow-pc="{span:20}" :pc="{span:22}" :wide-pc="{span:23}">
                11
            </g-col>
        </g-row>
        <g-row gutter="20">
            <g-col span="4">4</g-col>
            <g-col span="8" offset="2">8</g-col>
            <g-col span="8" offset="2">8</g-col>
        </g-row>
      `.replace(/\t+| +/g, '').trim()
            }
            //replace(/\t+| +/g, '').trim() 表示把代码前后所有的回车、空格、tab删掉
        }
    }
</script>