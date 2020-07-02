import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//网络
import './network/request'
//按需导入vant
import './vant'
//注册bus
Vue.prototype.$bus = new Vue()
//使用fastclick:解决移动端300ms的延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)
//图片懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/common/placeholder.png')
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
