import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import axios from 'axios'
// style 样式
import 'vant/lib/index.css'

// 导入全局模块
Vue.use(Vant)
Vue.config.productionTip = false

Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
