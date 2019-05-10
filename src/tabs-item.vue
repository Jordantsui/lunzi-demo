<template>
    <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuluTabsItem',
        inject: ['eventBus'],
        data () {
            return {
                active: false
            }
        },//由于我们查看是否被选中是通过 this.selected ，因此 active 由this.selected控制，只是组件使用，不用与外界通信，放在data里即可
        props: {
            disabled: {
                type: Boolean,
                default: false
            },//在Tabs组件中，disabled 写在index.html里
            name: {
                type: String | Number,
                required: true
            }
        },
        computed: {
            classes () {
                return {
                    active: this.active,
                    disabled: this.disabled
                }
            }
        },
        created () {
            if (this.eventBus) {
                this.eventBus.$on('update:selected', (name) => {
                    this.active = name === this.name;
                })
            }
        },
        methods: {
            onClick () {
                if (this.disabled) { return }    //注意这一句，禁用的灵魂
                this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
                this.$emit('click', this)    //添加'接受 disabled 属性'测试用例时，添加的这一步
            }
        }
    }
</script>
<style lang="scss" scoped>
    $blue: blue;
    $disabled-text-color: grey;
    .tabs-item {
        flex-shrink: 0;
        padding: 0 1em;
        height: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;    /*鼠标悬浮在此元素之上时，变成手*/
        &.active {
            color: $blue;
            font-weight: bold;
        }
        &.disabled {
            color: $disabled-text-color;
            cursor: not-allowed;     /*鼠标悬浮在此元素之上时，变成禁用符号*/
        }
    }
</style>