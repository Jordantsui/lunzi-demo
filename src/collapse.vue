<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "GuluCollapse",
        props: {
            single: {//表示允不允许多个item同时打开
                type: Boolean,
                default: false
            },
            selected: {
                type: Array,
            }
        },
        data () {
            return {
                eventBus: new Vue()
            }
        },
        provide () {
            return {
                eventBus: this.eventBus
            }
        },
        mounted () {
            this.eventBus.$emit('update:selected', this.selected)
            this.eventBus.$on('update:addSelected', (name) => {
                let selectedCopy = JSON.parse(JSON.stringify(this.selected))     //深拷贝
                if (this.single) {
                    selectedCopy = [name]
                } else {
                    selectedCopy.push(name)
                }
                this.eventBus.$emit('update:selected', selectedCopy)
                this.$emit('update:selected', selectedCopy)     //index.html上要打印出selectedTab，所以要触发事件，把selectedTab传到外面（eventBus还是在里面）
            })
            this.eventBus.$on('update:removeSelected', (name) => {
                let selectedCopy = JSON.parse(JSON.stringify(this.selected))
                let index = selectedCopy.indexOf(name)
                selectedCopy.splice(index, 1)
                this.eventBus.$emit('update:selected', selectedCopy)
                this.$emit('update:selected', selectedCopy)
            })
        }
    }
</script>

<style scoped lang="scss">
    $grey: #ddd;
    $border-radius: 4px;
    .collapse {
        border: 1px solid $grey;
        border-radius: $border-radius;
    }
</style>