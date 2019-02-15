import Vue from 'vue'
import App from './App'
import router from './router'

// 引用css样式全局控制
import './assets/css/global.css'

// 引入element-ui
import ElementUI from 'element-ui'

// 引用图标库css样式文件
import './assets/fonts/iconfont.css'

// 引入axios
import axios from 'axios'
// 给axios做配置 （访问跟地址 vue之$http成员）
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 给axios配置"拦截器"，在其中绑定token
axios.interceptors.request.use(
  function(config) {
    var token = window.sessionStorage.getItem('token')
    config.headers.Authorization = token
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)
Vue.prototype.$http = axios

// 给vue注册全部的element-ui的标签组件 和 事件方法组件
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
