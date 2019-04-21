<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}"  @click="$emit('click')">
        <g-icon class="icon" v-if="icon && !loading" :name="icon"/>
        <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
        <!--slot上不能加class-->
    </button>
</template>
<script>
    export default {
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
<style lang="scss">
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex; justify-content: center; align-items: center;
        /*上面这两个用于按钮内部的元素居中，vertical-align 用于按钮与外部的东西对齐*/
        /*加入 display: inline 之后，会出现两个按钮上下不对称的情况，此时加上 vertical-align: middle 可破之*/
        vertical-align: middle;
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
        > .content { order: 2; }     /*  >  这个符号表示递进关系*/
        /*order 是在使用flex布局之后，用以改变元素顺序的，默认是0*/
        > .icon { order: 1; margin-right: .1em; }
        &.icon-right {
            > .content {
                order: 1;
            }

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