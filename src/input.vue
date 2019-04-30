<template>
    <div class="wrapper" :class="{error}">
        <!--意思是如果有 error 这个参数，就有error这个类；上面这个是简写-->
        <input :value="value" type="text" :disabled="disabled" :readonly="readonly">
        <template v-if="error">
            <icon name="error" class="icon-error"></icon>
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
            value: {
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
            error: {
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