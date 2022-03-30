<template>
  <div>
    <input type="text" :value="value" @change="$emit('change', $event.target.value)">
    <div>{{bus}}</div>
    <div>{{number.number}}</div>
    <button @click="add">+1</button>
  </div>
</template>
<script>
import { bus, num } from '@/utils/common'
export default {
  name: 'inputC',
  // model: { // 组件中使用v-model
  //   prop: 'value',
  //   event: 'change'
  // },
  props: {
    value: [String, Number]
  },
  data(){
    return {
      number: num // data里面的属性 初始化的时候会转换成响应式
    }
  },
  computed: {
    bus(){
      return bus.data
    }
  },
  methods: {
    add(){
      bus.data++
      num.number++
    }
  }
}
</script>