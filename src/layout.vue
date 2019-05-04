<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuluLayout',
        data () {
            return {
                layoutClass: {
                    hasSider: false
                }
            }
        },
        mounted () {
            this.$children.forEach((vm) => {
                if (vm.$options.name === 'GuluSider') {
                    this.layoutClass.hasSider = true    //注意这里改变类的方式，是vue的思想
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    .layout {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        &.hasSider {
            flex-direction: row;
        }
    }
</style>