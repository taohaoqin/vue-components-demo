import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import digui from './views/digui.vue'
import demo1 from './views/demo1.vue'
import demo2 from './views/demo2.vue'
import demo3 from './views/demo3.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/digui',
      name: 'digui',
      component: digui
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: demo1
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: demo2
    },
    {
      path: '/demo3',
      name: 'demo3',
      component: demo3,
      meta: {
        keepAlive: true // 缓存
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
