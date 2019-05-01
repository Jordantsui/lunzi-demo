<template>
    <div class="col" :class="[span && `col-${span}`, offset && `offset-${offset}`]"
         :style="{paddingLeft: gutter/2+'px', paddingRight: gutter/2+'px'}"><!--注意，必须得加 px-->
        <!--一行内每个col元素都要加paddingLeft 和 paddingRight，然后给row元素加负的marginLeft 和 marginRight-->
        <div style="border: 1px solid green; height: 100px;">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'GuluCol',
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            },
        },
        data () {
            return {
                gutter: 0
            }
        },//这个gutter由父组件 row 传过来（浏览器要求写在data里）
        created () {
            console.log('col created')
        },
        mounted () {
            console.log('col mounted')
        }
    }
</script>
<style scoped lang="scss">
    .col {
        width: 50%;

        /*下面是scss for loop（for循环）*/
        $class-prefix: col-;/*前缀*/
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        /*为了在一行内定义可变化的间隙，可添加offset属性，生成24个offset类*/
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
</style>