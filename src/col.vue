<template>
    <div class="col" :class="colClass" :style="colStyle"><!--注意，必须得加 px-->
        <!--一行内每个col元素都要加paddingLeft 和 paddingRight，然后给row元素加负的marginLeft 和 marginRight-->
         <slot></slot>
    </div>
</template>
<script>
    let validator = (value) => {
        let keys = Object.keys(value)
        let valid = true
        keys.forEach(key => {
            if (!['span', 'offset'].includes(key)) {
                valid = false
            }
        })
        return valid
    }
    export default {
        name: 'GuluCol',
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            },
            phone: {type: Object, validator,},
            ipad: {type: Object, validator,},
            narrowPc: {type: Object, validator,},
            pc: {type: Object, validator,},
            widePc: {type: Object, validator,}
        },
        data () {
            return {
                gutter: 0
            }
        },//这个gutter由父组件 row 传过来（浏览器要求写在data里）
        methods: {
            createClasses (obj, str = '') {
                if (!obj) {return []}
                let array = []
                if (obj.span) { array.push(`col-${str}${obj.span}`) }
                if (obj.offset) { array.push(`offset-${str}${obj.offset}`) }
                return array
            }
        },
        computed: {
            colClass () {
                let {span, offset, phone, ipad, narrowPc, pc, widePc} = this
                let createClasses = this.createClasses
                return [
/*                    span && `col-${span}`,
                    offset && `offset-${offset}`,
                    // ... (phone && [`col-phone-${phone.span}`]),
/!*                    ... (ipad && [`col-ipad-${ipad.span}`]),
                    ... (narrowPc && [`col-narrow-pc-${narrowPc.span}`]),
                    ... (pc && [`col-pc-${pc.span}`]),
                    ... (widePc && [`col-wide-pc-${widePc.span}`]),*!/
                    ... (phone ? [`col-phone-${phone.span}`]:[]),
                    ... (ipad ? [`col-ipad-${ipad.span}`] : []),
                    ... (narrowPc ? [`col-narrow-pc-${narrowPc.span}`] : []),
                    ... (pc ? [`col-pc-${pc.span}`] : []),
                    ... (widePc ? [`col-wide-pc-${widePc.span}`] : []),*/
                    ...createClasses({span, offset}),
                    ...createClasses(ipad, 'ipad-'),
                    ...createClasses(narrowPc, 'narrow-pc-'),
                    ...createClasses(pc, 'pc-'),
                    ...createClasses(widePc, 'wide-pc-'),
                ]
            },
            colStyle () {
                return {
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: this.gutter / 2 + 'px',
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    .col {
        /*width: 50%;*/

        /*下面是scss for loop（for循环）*/
        $class-prefix: col-;/*前缀*/
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        /*为了在一行内定义可变化的间隙，可添加offset属性，生成24个offset类*/
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
        @media (max-width: 576px) {
            $class-prefix: col-phone-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-phone-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        /*@media (min-width: 577px) and (max-width: 768px) {*/
         @media (min-width: 577px) {
            $class-prefix: col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        /*@media (min-width: 769px) and (max-width: 992px) {*/
        @media (min-width: 769px){ // 770
            $class-prefix: col-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        /*@media (min-width: 993px) and (max-width: 1200px) {*/
        @media (min-width: 993px) {
            $class-prefix: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 1201px) {
            $class-prefix: col-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
    }
</style>