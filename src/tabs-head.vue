<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'GuluTabsHead',
        inject: ['eventBus'],
        created () {
            this.$emit('update:selected', 'tabs-head 抛出的数据')
        }
    }
</script>
<style scoped lang="scss">
    $tab-height: 40px;
    .tabs-head {
        display: flex;       /*加了这一行变成横排*/
        height: $tab-height;
        justify-content: flex-start;
        border: 1px solid red;
        > .actions-wrapper {
            margin-left: auto;      /*把设置按钮移到右边*/
        }
    }
</style>