import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'hi'
    },
    created(){
        //setTimeout(()=>{
        //    let event = new Event('change');
        //    let inputElement = this.$el.querySelector('input')
        //    inputElement.dispatchEvent(event)
        //    console.log('hi')
        //},3000)
    },
    methods: {
        inputChange(e) {
            console.log(e)
        }
    }
})

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect
// 单元测试
{
    const Constructor = Vue.extend(Button)
    //把button组件变成一个构造函数
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    //vm是该构造函数的一个实例
    vm.$mount()
    //实例挂载到页面上
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-setting')
    vm.$el.remove()
    vm.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            loading: true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
    vm.$el.remove()
    vm.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    //vm是组件
    vm.$mount(div)   //这个测试与前两个的区别是，需要渲染到页面上，以使css能起作用，判断order。所以动态创建了一个div，利用这个div替换成button，挂载到页面上
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')      //css所有属性值都是字符串
    vm.$el.remove()       //button元素删掉
    vm.$destroy()       //button对象删掉
}
try {

    // 单元测试
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings'
            }
        })
        vm.$mount()
        let useElement = vm.$el.querySelector('use')
        let href = useElement.getAttribute('xlink:href')
        expect(href).to.eq('#i-settings')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                loading: true
            }
        })
        vm.$mount()
        let useElement = vm.$el.querySelector('use')
        let href = useElement.getAttribute('xlink:href')
        expect(href).to.eq('#i-loading')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings'
            }
        })
        vm.$mount(div)
        let svg = vm.$el.querySelector('svg')
        let {order} = window.getComputedStyle(svg)
        expect(order).to.eq('1')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                iconPosition: 'right'
            }
        })
        vm.$mount(div)
        let svg = vm.$el.querySelector('svg')
        let {order} = window.getComputedStyle(svg)
        expect(order).to.eq('2')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
            }
        })
        vm.$mount()
        let spy = chai.spy(function () {})

        vm.$on('click', spy)
        // 希望这个函数被执行
        let button = vm.$el
        button.click()
        expect(spy).to.have.been.called()
    }
} catch (error) {
    window.errors = [error]
} finally {
    window.errors && window.errors.forEach((error) => {
        console.error(error.message)
    })
}