<template>
    <div class="row" :style="rowStyle" :class="rowClass">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuluRow',
        props: {
            gutter: {
                type: [Number, String]
            },
            align: {
                type: String,
                validator (value) {
                    return ['left', 'right', 'center'].includes(value)
                }
            }
        },
        computed: {
            rowStyle () {
                let {gutter} = this //注意这一句，解构赋值（注意，this指代的是props！！！）
                return {marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px'}
            },
            rowClass () {
                let {align} = this
                return [align && `align-${align}`]
            }
        },
        mounted () {  //mounted？？？
            this.$children.forEach((vm) => {
                vm.gutter = this.gutter
            })
            //将gutter参数传给col组件
        }
    }
</script>
<style scoped lang="scss">
    .row{
        display: flex;
        flex-wrap: wrap;
        &.align-left {
            justify-content: flex-start;
        }
        &.align-right {
            justify-content: flex-end;
        }
        &.align-center {
            justify-content: center;
        }
    }
</style>