import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import loading from '@/components/index'
import asyncExampleA from '@/components/asyncExampleA.vue'

Vue.config.productionTip = false
Vue.use(loading)
Vue.filter('filterNum', (val) => { //全局过滤器
  if(val < 100){
    return (val / 100) * 100 + '%'
  }
})

Vue.component('async', asyncExampleA)//全局组件

router.beforeEach((to, from, next) => {
  console.log('beforeEach')
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

