import Toast from './toast'

export default {
    install (Vue, options) {
        Vue.prototype.$toast = function (message, toastOptions) {
            //我们如果不用vue的方法，做这一步很简单，用createElement创建一个div，再将此div插进页面中即可
            //但是我们要用vue，所以就有了下面的方法：
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor({
                propsData: toastOptions
            })
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}