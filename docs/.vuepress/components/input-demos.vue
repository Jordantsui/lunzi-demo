<template>
    <div>
        <g-input value="张三" disabled></g-input>
        <g-input value="李四" readonly></g-input>
        <g-input value="王五"></g-input>
        <g-input value="王" error="姓名不能少于两个字"></g-input>
        <g-input value="王" @change="inputChange"></g-input>
        <g-input v-model="message"></g-input>
        <p>{{message}}</p>
        <button @click="message+=1">+1</button>

        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>
<script>
    import Input from '../../../src/input'
    export default {
        components: {
            'g-input': Input
        },
        data () {
            return {
                content: `
        <g-input value="张三" disabled></g-input>
        <g-input value="李四" readonly></g-input>
        <g-input value="王五"></g-input>
        <g-input value="王" error="姓名不能少于两个字"></g-input>
        <g-input value="王" @change="inputChange"></g-input>
        <g-input v-model="message"></g-input>
        <p>{{message}}</p>
        <button @click="message+=1">+1</button>
      `.replace(/\t+| +/g, '').trim()
            }
            //replace(/\t+| +/g, '').trim() 表示把代码前后所有的回车、空格、tab删掉
        }
    }
</script>