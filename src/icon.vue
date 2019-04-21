<template>
    <svg class="g-icon">
        <use :xlink:href="`#i-${name}`"></use>

    </svg>
    <!--注意icon图标用JS引进之后的挂载方式-->
</template>
<script>
    export default {
        props: ['name']
    }
</script>
<style lang="scss">
    .g-icon {width: 1em; height: 1em; }
</style>