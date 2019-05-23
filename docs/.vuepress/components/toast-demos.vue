<button @click="showToast1">top</button>
<button @click="showToast2">middle</button>
<button @click="showToast3">bottom</button>


<template>
    <div>
        <button @click="showToast1">top</button>
        <button @click="showToast2">middle</button>
        <button @click="showToast3">bottom</button>

        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>
<script>
    import '../../../src/'
    export default {
        data () {
            return {
                content: `
<button @click="showToast1">top</button>
<button @click="showToast2">middle</button>
<button @click="showToast3">bottom</button>
      `.replace(/\t+| +/g, '').trim()
            }
            //replace(/\t+| +/g, '').trim() 表示把代码前后所有的回车、空格、tab删掉
        }
    }
</script>