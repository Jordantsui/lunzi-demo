<template>
    <div class="col" :class="colClass" :style="colStyle"><!--注意，必须得加 px-->
        <!--一行内每个col元素都要加paddingLeft 和 paddingRight，然后给row元素加负的marginLeft 和 marginRight-->
         <slot></slot>
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
        computed: {
            colClass () {
                let {span, offset} = this
                return [
                    span && `col-${span}`,
                    offset && `offset-${offset}`
                ]
            },
            colStyle () {
                return {
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: this.gutter / 2 + 'px',
                }
            }
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