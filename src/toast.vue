<template>
    <div class="wrapper" :class="toastClasses">
        <div class="toast" ref="toast">
            <div class="message">
                <slot v-if="!enableHtml"></slot>
                <div v-else v-html="$slots.default[0]"></div>  <!--代替slot，因为若是slot，无法读取html并挂载到页面上-->
            </div>
            <div class="line" ref="line"></div>    <!--这根线一开始想用span的before伪元素来做，但不好调位置-->
            <span class="close" v-if="closeButton" @click="onClickClose">
                {{closeButton.text}}
            </span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'GuluToast',
        props: {
            autoClose: {
                type: [Boolean, Number],
                default: 5,
                validator (value) {
                    return value === false || typeof value === 'number';
                }        //浅拷贝，不用写成函数返回的形式
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
        mounted () {
            //console.log(this.$el.outerHTML)
            this.updateStyles()
            this.execAutoClose()
        },
        computed: {
            toastClasses () {
                return {
                    [`position-${this.position}`]: true     //注意中括号
                }
            }
        },
        methods: {
            updateStyles () {
                this.$nextTick(() => {
                    //console.log(this.$refs.line)
                    this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
                })
            },
            execAutoClose () {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoClose * 1000)
                }
            },
            close () {
                this.$el.remove()
                this.$emit('close')
                this.$destroy()
            },
            log () {
                console.log('测试')
            },//没啥用
            onClickClose () {
                this.close()
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback(this)//this === toast实例，可利用这个功能将toast组件中的函数等回传（这里没用到）
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    @keyframes slide-up {   /*注意，这个对应的是bottom*/
        0% {transform: translateY(100%);}
        100% {transform: translateY(0%);}
    }
    @keyframes slide-down {
        0% {opacity: 0; transform: translateY(-100%);}
        100% {opacity: 1;transform: translateY(0%);}
    }
    @keyframes fade-in {
        0% {opacity: 0; }
        100% {opacity: 1;}
    }
    .wrapper {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        $animation-duration: 300ms;
        &.position-top {
            top: 0;
            .toast {
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                animation: slide-down $animation-duration;
            }
        }
        &.position-bottom {
            bottom: 0;
            .toast {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                animation: slide-up $animation-duration;
            }
        }
        &.position-middle {
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
            .toast {
                animation: fade-in $animation-duration;
            }
        }
    }
    .toast {
        font-size: $font-size; min-height: $toast-min-height; line-height: 1.8;     /*line-height 规定了相邻两行字基线的距离*/
        display: flex;
        color: white; align-items: center; background: $toast-bg; border-radius: 4px;
        /*解决border内的居中问题，比较简单的是用flex，以及align-items、justify-content*/
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50); padding: 0 16px;
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
    }
</style>