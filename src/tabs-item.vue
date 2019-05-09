<template>
    <div class="tabs-item" @click="xxx" :class="classes">
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
            },
            name: {
                type: String | Number,
                required: true
            }
        },
        computed: {
            classes () {
                return {
                    active: this.active
                }
            }
        },
        created () {
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name;
            })
        },
        methods: {
            xxx () {
                this.eventBus.$emit('update:selected', this.name,this)
            }
        }
    }
</script>
<style lang="scss" scoped>
    $blue: blue;
    .tabs-item {
        flex-shrink: 0;
        padding: 0 1em;
        height: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;
        &.active {
            color: $blue;
            font-weight: bold;
        }
    }
</style>