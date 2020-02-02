// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// vuex的引入
import store from './store'
// axios的ie兼容问题
import 'babel-polyfill'
// 引用接口
import Api from "./api";
Vue.prototype.$api = Api;
// 安装引用element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// 引用mock服务
import './mock'

// 引用公共组件
let componentFiles = require.context('./components/base', false, /\.vue$/)
componentFiles.keys().map((item, index) => {
  let componentFile = item.replace(/^\.\/(.*)\.\w+$/, '$1');
  let value = componentFiles(item)
  Vue.component(`cui${componentFile}`, value.default)
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
