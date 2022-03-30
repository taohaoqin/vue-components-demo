<template>
  <div class="home">
      <Father></Father>
      <HelloWorld :show.sync="show" /> 
      <inputC v-model="code" />
      <button @click="show = !show">show</button>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
// import Father from '@/components/Father.vue'
import inputC from '@/components/inputC'

export default {
  name: 'home',
  data(){
    return {
      code: 123,
      show: false
    }
  },
  components: {
    inputC,
    HelloWorld,
    'Father': () => import('@/components/Father.vue'),
  }
}
</script>
