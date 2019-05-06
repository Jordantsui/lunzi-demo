<template>
    <div class="toast" ref="wrapper" :class="toastClasses">
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div><!--代替slot，因为若是slot，无法读取html并挂载到页面上-->
        </div>
        <div class="line" ref="line"></div><!--这根线一开始想用span的before伪元素来做，但不好调位置-->
        <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>
    </div>
</template>
<script>
    export default {
        name: 'GuluToast',
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay: {
                type: Number,
                default: 50        //浅拷贝，不用写成函数返回的形式
            },
            closeButton: {
                type: Object,
                default () {
                    return {
                        text: '关闭', callback: undefined
                    }    //虽然是对象，但是必须要写成函数返回的形式。这是因为 export default 内的内容并不是组件本身，而是构成组件的选项
                         //如果写成对象的形式，用此组件构造了两个实例，更改其中一个实例的 closeButton，另一个会受影响
                         //如果写成函数返回的形式，两个实例，两个对象，不会互相影响
                }
            },
            enableHtml: {
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                default: 'top',
                validator (value) {
                    return ['top', 'bottom', 'middle'].indexOf(value) >= 0
                }
            }
        },
        created () {
        },
        mounted () {
            this.updateStyles()
            this.execAutoClose()
        },
        computed: {
            toastClasses () {
                return {
                    [`position-${this.position}`]: true
                }
            }
        },
        methods: {
            updateStyles () {
                this.$nextTick(() => {
                    this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
                })
            },
            execAutoClose () {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoCloseDelay * 1000)
                }
            },
            close () {
                this.$el.remove()
                this.$emit('close')
                this.$destroy()
            },
            log () {
                console.log('测试')
            },
            onClickClose () {
                this.close()
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback(this)//this === toast实例，可利用这个功能将toast组件中的函数等回传
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    @keyframes fade-in {
        0% {opacity: 0; transform: translateY(100%);}
        100% {opacity: 1;transform: translateY(0%);}
    }
    .toast {
        animation: fade-in 1s;
        font-size: $font-size; min-height: $toast-min-height; line-height: 1.8;     /*line-height有什么用？？？？*/
        position: fixed; display: flex;
        color: white; align-items: center; background: $toast-bg; border-radius: 4px;      /*解决border内的居中问题，比较简单的是用flex，以及align-items、justify-content*/
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50); padding: 0 16px;
        left: 50%;
        .message {
            padding: 8px 0;
        }
        .close {
            padding-left: 16px;
            flex-shrink: 0;
        }
        .line {
            height: 100%;
            border-left: 1px solid #666;
            margin-left: 16px;
        }
        &.position-top{
            top: 0;
            transform: translateX(-50%);
        }
        &.position-bottom{
            bottom: 0;
            transform: translateX(-50%);
        }
        &.position-middle{
            top: 50%;
            transform: translate(-50%, -50%);/*X在前，Y在后*/
        }
    }
</style>