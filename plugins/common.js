// 创建 plugins/common.js 并定义全局变量,接下来就可以用this.$get,this.$post访问了
import Vue from 'vue'
import {post, get, doDelete, deleteOne, put} from '@/libs/request'
let commonConfig = {
  install (Vue) {
    // 定义全局变量
    Vue.prototype.$post = post
    Vue.prototype.$get = get
    Vue.prototype.$delete = doDelete
    Vue.prototype.$deleteOne = deleteOne
    Vue.prototype.$put = put
    Vue.prototype.$Bus = new Vue()
  }
}
Vue.use(commonConfig)