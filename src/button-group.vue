<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
    <!--组件内，slot 不能作为根元素，所以加了div-->
</template>
<script>
    export default {
        mounted () {
            for (let node of this.$el.children) {
                //this.$children  只会输出三个 Vue component，因为这种方法只能找到Vue实例的Vue实例子元素
                //this.$el.children 这种方法输出三个子元素，不一定是实例
                let name = node.nodeName.toLowerCase()
                if (name !== 'button') {
                    console.warn(`g-button-group 的子元素应该全是 g-button，但是你写的是 ${name}`)
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .g-button-group {
        display: inline-flex;
        vertical-align: middle;
        > .g-button {
            border-radius: 0;
            margin-left: -1px;
            /*margin-left: -1px; 这一句是为了使两个g-button之间的border由两个变成一个（因为有一个g-button的border被另一个g-button挡住了）*/
            /*一开始是令一个g-button的border-right为none，但是这样以后可能会出bug*/
            &:not(:first-child) {
                margin-left: -1px;
            }
            &:first-child {
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child {
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
            &:hover {
                position: relative;
                z-index: 1;          /*加了这句之后，当悬浮在一个g-button上时，这个g-button被挡住的border会出现在上层*/
            }
        }
    }
</style>