<template>
  <div class="home">
      <Father></Father>  
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
// import Father from '@/components/Father.vue'

export default {
  name: 'home',
  data(){
    return {
      code: 'ccccc'
    }
  },
  components: {
    // HelloWorld,
    'Father': () => import('@/components/Father.vue'),
  },
  
}
</script>
