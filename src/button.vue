<template>
    <button class="g-button frank2" :class="{[`icon-${iconPosition}`]: true}"  @click="$emit('click')">
        <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
        <div class="g-button-content">
            <slot></slot>
        </div>
        <!--slot上不能加class-->
    </button>
</template>
<script>
    import Icon from './icon'
    export default {
        components: {
            'g-icon': Icon
        },
        //props: ['icon', 'iconPosition']
        //下面这种传参方法，将参数视为一个对象，可设置默认值和校验器
        props: {
            icon: {},
            loading:{
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator (value) {     //参数的校验器，若用户输入的参数不是left或right，则返回false
                    return value === 'left' || value === 'right'
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
/*    $font-size: 14px;
    $button-height: 32px;
    $button-bg: white;
    $button-active-bg: #eee;
    $border-radius: 4px;
    $color: #333;
    $border-color: #999;
    $border-color-hover: #666;*/
    @import "var";       /*将 scss 变量提升到 var.scss*/
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
/*    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);*/
    .g-button { font-size: $font-size; height: $button-height; padding: 0 1em;/*将html变量写法改为scss变量，否则用vuepress时会失效*/
        border-radius: $border-radius; border: 1px solid $border-color;
        background: $button-bg;
        display: inline-flex; justify-content: center; align-items: center;
        /*上面这两个用于按钮内部的元素居中，vertical-align 用于按钮与外部的东西对齐*/
        /*加入 display: inline 之后，会出现两个按钮上下不对称的情况，此时加上 vertical-align: middle 可破之*/
        vertical-align: middle;
        &:hover { border-color: $border-color-hover; }
        &:active { background-color: $button-active-bg; }
        &:focus {
            outline: none;
        }
        > .g-button-content { order: 2; }     /*  >  这个符号表示递进关系*/
        /*order 是在使用flex布局之后，用以改变元素顺序的，默认是0*/
        > .icon { order: 1; margin-right: .1em; }
        &.icon-right {
            > .g-button-content { order: 1; }

            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .1em;
            }
        }
        .loading{
            animation: spin 2s infinite linear;
        }
    }
</style>