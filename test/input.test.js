const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {

    it('存在.', () => {
        expect(Input).to.exist
    })


    describe('props', () => {
        const Constructor = Vue.extend(Input)
        //构造函数
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        //beforeEach 和 afterEach 均是mocha提供，省去重复代码
        it('接收 value', () => {
            vm = new Constructor({
                propsData: {   //注意，这里必须是 propsData
                    value: '1234'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('1234')
        })

        it('接收 disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })
        it('接收 readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
            //注意此处的 Only 首字母大写
        })

        it('接收 error', () => {
            vm = new Constructor({
                propsData: {
                    error: '你错了'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerText).to.equal('你错了')
        })
    })
    describe('事件', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('支持 change/input/focus/blur 事件', () => {
            ['change', 'input', 'focus', 'blur']
                .forEach((eventName) => {
                    vm = new Constructor({}).$mount()  //注意 Constructor 括号里面是一个对象
                    const callback = sinon.fake();
                    //把 callback 初始化一个回调函数？？？找到了sinon.spy的用法，差不多也是这样
                    vm.$on(eventName, callback)     //vue的操作都得带上$吗？？？？？
                    //触发input的change 事件
                    let event = new Event(eventName);
                    Object.defineProperty(
                        event, 'target', {
                            value: {value: 'hi'}, enumerable: true
                        }
                    )
                    //为了兼容v-model，需要定义event.target.value，但是直接赋值会报错说是只读属性，所以必须采用defineProperty这种方式
                    let inputElement = vm.$el.querySelector('input')
                    inputElement.dispatchEvent(event)     //触发事件
                    expect(callback).to.have.been.calledWith('hi')
                    //如果@change里面传的参数是$event.target.value，则回调被调用时传的第一个参数是'hi'
                    //expect(callback).to.have.been.calledWith(event)
                    //如果@change里面传的参数是$event，则回调被调用时传的第一个参数是event
                    //calledWith 这个API 来自 chai-sinon 库
                    //如果不需要检测传递的参数，则用 called 即可
                })
        })
    })
})