<template>
    <div class="popover" @click="onClick" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" style="display:inline-block;">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "GuluPopover",
        data () {
            return {visible: false}
        },
        methods: {
            positionContent () {
                document.body.appendChild(this.$refs.contentWrapper)
                let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
                this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
                this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
            },
            onClickDocument (e) {//注意，这里必须写成function函数的形式，如果写成箭头函数，则函数内部没有this
                if (this.$refs.popover &&
                    (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
                ) { return }
                if (this.$refs.contentWrapper &&
                    (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))
                ) { return }
                this.close()
            },
            open () {
                this.visible = true
                this.$nextTick(() => {
                    this.positionContent()
                    document.addEventListener('click', this.onClickDocument)
                })
            },
            close () {//将关闭入口收拢
                this.visible = false
                document.removeEventListener('click', this.onClickDocument)
            },
            onClick (event) {
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    if (this.visible === true) {
                        this.close()
                    } else {
                        this.open()
                    }
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $border-color: #333;
    $border-radius: 4px;
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
    }
    .content-wrapper {
        position: absolute;
        /*box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);*/
        border: 1px solid $border-color;
        border-radius: $border-radius;
        filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));   /*解决所加伪元素没有border-shadow的问题*/
        background: white;              /*解决border-shadow问题时，字也会有shadow，所以加background*/
        transform: translateY(-100%);
        margin-top: -10px;
        padding: .5em 1em;
        max-width: 20em;        /*字再多，最大宽度也只有这么多*/
        word-break: break-all;        /*防止一个单词过长，超过max-width（英文环境下慎用）*/
        &::before, &::after {
            content: '';
            display: block;
            border: 10px solid transparent;
            width: 0;
            height: 0;
            position: absolute;
            left: 10px;
        }
        &::before {
            border-top-color: black;
            top: 100%;
        }
        &::after {
            border-top-color: white;
            top: calc(100% - 1px);
        }
    }
</style>