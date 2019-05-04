<template>
    <div class="wrapper" :class="{error}">
        <!--意思是如果有 error 这个参数，就有error这个类；上面这个是简写-->
        <input :value="value" type="text" :disabled="disabled" :readonly="readonly"
               @change="$emit('change', $event.target.value)"
               @input="$emit('input', $event.target.value)"
               @focus="$emit('focus', $event.target.value)"
               @blur="$emit('blur', $event.target.value)"
        >
        <!--$event 是该次事件的详细信息，传给了新触发的事件，必须放在第一个参数的位置-->
        <!--:value 和 @input 构成了 v-model 双向绑定，注意，参数一定要是$event.target.value-->
        <!--change这些事件都是input组件的事件，要让他们发挥作用，需要将其转化为input元素的事件-->
        <!--input事件需要按回车才会被看作一次input事件；change事件需要把鼠标移出输入框才会被看作一次change事件-->

        <template v-if="error">
            <icon name="error" class="icon-error"></icon>
            <!--name用来选取icon-->
            <span class="errorMessage">{{error}}</span>
        </template>
        <!--需要有个东西承担 v-if 功能，但又不想多写个div标签，可这样写，icon和span是input的兄弟元素-->
    </div>
</template>
<script>
    import Icon from './icon'
    export default {
        components: {Icon},
        name: 'GuluInput',
        props: {
            value: {//value指输入框的内容
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {//error指报错信息
                type: String
            }
        }
    }
</script>
<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $font-size: 12px;
    $box-shadow-color: rgba(0, 0, 0, 0.5);
    $red: #F1453D;
    .wrapper { font-size: $font-size; display: inline-flex;
        align-items: center;
        > :not(:last-child) {margin-right: .5em; }
        > input { height: 32px; border: 1px solid $border-color; border-radius: 4px; padding: 0 8px; font-size: inherit;
            &:hover { border-color: $border-color-hover; }
            &:focus { box-shadow: inset 0 1px 3px $box-shadow-color; outline: none; }
            &[disabled], &[readonly] {border-color: #bbb;color: #bbb;cursor: not-allowed; }
            /*cursor: not-allowed;表示不能改*/
            /*disabled 不能 focus，readonly 能 focus*/
        }
        &.error {
            > input { border-color: $red; }
        }
        .icon-error { fill: $red; }
        .errorMessage { color: $red; }
    }
</style>