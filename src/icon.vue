<template>
    <svg class="g-icon">
        <use :xlink:href="`#i-${name}`"></use>

    </svg>
    <!--注意icon图标用JS引进之后的挂载方式-->
</template>
<script>
    import './svg'   //注意这里，只需要引入，没有在export default里增加内容
    export default {
        props: ['name']
    }
</script>
<style lang="scss" scoped>
    .g-icon {width: 1em; height: 1em; }
</style>