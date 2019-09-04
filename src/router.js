import Vue from 'vue'
import Router from 'vue-router'
import productList from './components/productlist.vue'
import Index from './components/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'index' },
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: '/productlist',
          component: productList
        }
      ]
    }
  ]
})
