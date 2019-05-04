<template>
    <transition name="slide">
        <div class="sider" v-if="visible">
            <slot></slot>
            <button @click="visible=false">close</button>
        </div>
    </transition>
</template>
<script>
    export default {
        name: 'GuluSider',
        data () {
            return {
                visible: true
            }
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    .sider {
        position: relative;
        > button {
            position: absolute;
            top: 0;
            right: 0;
        }
    }
    .slide-enter-active, .slide-leave-active {   /*html中的transition和这里的两个css均来自vue文档*/
        transition: all .3s;                   /*transition的name与这里样式的开头保持一致*/
    }
    .slide-enter, .slide-leave-to {    /*在用margin-left之前，还尝试了transform，但问题是，slider消失的过程中，右边的几个格没动，消失完成，才移动，效果不太好*/
        margin-left: -200px;
    }
</style>