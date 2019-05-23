<template>
    <div>
        <g-layout style="height: 100vh;">
            <g-sider style="border:1px solid red">sider</g-sider>
            <g-layout>
                <g-header style="border:1px solid red">header</g-header>
                <g-content style="border:1px solid red">content</g-content>
                <g-footer style="border:1px solid red">footer</g-footer>
            </g-layout>
        </g-layout>

        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>
<script>
    import Layout from "../../../src/layout"
    import Header from "../../../src/header"
    import Sider from "../../../src/sider"
    import Content from "../../../src/content"
    import Footer from "../../../src/footer"
    export default {
        components:{
            'g-layout':Layout,
            'g-header':Header,
            'g-sider':Sider,
            'g-content':Content,
            'g-footer':Footer
        },
        data () {
            return {
                content: `
    <g-layout style="height: 100vh;">
        <g-sider>sider</g-sider>
        <g-layout>
            <g-header>header</g-header>
            <g-content>content</g-content>
            <g-footer>footer</g-footer>
        </g-layout>
    </g-layout>
      `.replace(/\t+| +/g, '').trim()
            }
            //replace(/\t+| +/g, '').trim() 表示把代码前后所有的回车、空格、tab删掉
        }
    }
</script>