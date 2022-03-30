<template>
  <div v-if="show">
    <button @click="close">关闭</button>
    <button @click="increase">+1</button>
    <inputCount v-model="count"></inputCount>
    <div style="width:100px; height: 100px; background: red"></div>
  </div>
</template>
<script>
import inputCount from "@/components/inputCount.vue";
export default {
  props: {
    show: Boolean
  },
  components: {
    inputCount
  },
  data() {
    return {
      count: 1
    }
  },
  methods: {
    close(){
      this.$emit('update:show', false) 
      // .sync的原理:.sync就是一个语法糖 进行了写法上的简化 在父组件上:show.sync="show"相当于@update:show="(val) => show = val" :show="show"
    },
    increase() {
      this.count++;
      },
    // getValue(value) {
    //    this.count = value;
    //   }
    }
  }
</script>