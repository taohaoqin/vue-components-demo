<template>
  <div>
    
    <button @click="increase">+1</button>
    <inputCount :count="count" @getValue="getValue"></inputCount>
  </div>
</template>
<script>
import inputCount from "@/components/inputCount.vue";
export default {
  components: {
    inputCount
    },
  data() {
    return {
    count: 1
      }
    },
  methods: {
    increase() {
      this.count++;
      },
    getValue(value) {
       this.count = value;
      }
    }
  }
</script>