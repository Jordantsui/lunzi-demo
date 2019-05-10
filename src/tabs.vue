<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script>
    import Vue from 'vue'
    export default {
        name: 'GuluTabs',
        props: {
            selected: {
                type: String,
                required: true
            },
            direction: {    //没用到
                type: String,
                default: 'horizontal',
                validator (value) {
                    return ['horizontal', 'vertical'].indexOf(value) >= 0
                }
            }
        },
        data () {
            return {
                eventBus: new Vue()
            }
        },
        provide () {
            return {
                eventBus: this.eventBus
            }
        },
        mounted () {
            // this.$emit('update:selected', '这是 this $emit 出来的数据')
            //this.eventBus.$emit('update:selected', this.selected)
            if (this.$children.length === 0) {
                console && console.warn &&     //有的浏览器没有 console.warn
                console.warn('tabs的子组件应该是tabs-head和tabs-nav，但你没有写子组件')
                //如果要报错，则是 throw new Error('tabs的子组件应该是tabs-head和tabs-nav，但你没有写子组件')
                //但是由于在这里报错是异步，chai监听不到，所以没用报错
            }
            this.$children.forEach((vm) => {
                if (vm.$options.name === 'GuluTabsHead') {
                    vm.$children.forEach((childVm) => {
                        if (childVm.$options.name === 'GuluTabsItem'
                            && childVm.name === this.selected) {
                            this.eventBus.$emit('update:selected', this.selected, childVm)
                            //如果要实现点击tabs-item时，蓝线随之而动，那么需要在触发事件时，除了要传递this.selected，还要将对应的元素childVm传过去
                        }
                    })
                }
            })
        }
    }
</script>
<style>
    .tabs {
    }
</style>