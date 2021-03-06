import Toast from './toast'

let currentToast

export default {
    install (Vue, options) {  //这一行来自vue文档
        Vue.prototype.$toast = function (message, toastOptions) {
            //我们如果不用vue的方法，做这一步很简单，用createElement创建一个div，再将此div插进页面中即可
            //但是我们要用vue，所以就有了下面的方法：
            if (currentToast) {
                currentToast.close()     //close之后，currentToast并没有变成undefined/null，因此，再次进入install函数时，即使已经关闭，也会再次close
                                         //因此，虽然功能没有问题，但代码仍有bug，所以加了onClose函数
                //具体过程是，close()引发close事件（组件中），currentToast监视close事件，一旦有此事件，调动onClose函数，令currentToast为null
            }
            currentToast = createToast({
                Vue,
                message,
                propsData: toastOptions,
                onClose: () => {
                    currentToast = null
                }
            })
        }
    }
}










/* helpers */
function createToast ({Vue, message, propsData, onClose}) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({propsData})
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('close', onClose)
    document.body.appendChild(toast.$el)
    return toast
}