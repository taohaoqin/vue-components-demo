<template>
  <div>
    <!-- $attrs $listeners传值 -->
    <Child></Child>
    <div>common: {{bus}}</div>
    <div>{{num}}</div>
  </div>
</template>
<script>
import { bus, num } from '@/utils/common'
import Child from '@/components/Child.vue'
export default {
  components: {
    Child
  },
  watch: {
    bus(newValue){
      console.log('add', newValue)
    }
  },
  computed: {
    bus(){
      return bus.data
    },
    num(){
      return num.number
    }
  },
  created(){
    console.log(num)
    console.log(bus)
  }
}
</script>
