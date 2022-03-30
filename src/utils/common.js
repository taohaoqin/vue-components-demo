import Vue from 'vue'
//Vue.observable 转换成响应式
export const bus = Vue.observable({ data: 1 })

export const num = { number: 1 }