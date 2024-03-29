import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userinfo: ''
  },
  getters: {
    userinfo: state => state.userinfo
  },
  mutations: {
    SET_USER_INFO: (state, userinfo)=> {
      state.userinfo = userinfo
    }
  },
  actions: {
    SET_USER_INFO: ({commit}) => {
      return new Promise(resolve => {
        commit('SET_USER_INFO', '金佳楠')
        setTimeout(() => {
          resolve()
        }, 2000)
      })
    }
  }
})
