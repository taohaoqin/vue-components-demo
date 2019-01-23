<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
       <HelloWorld msg="Welcome to Your Vue.js App"/>   
     <!-- <Father></Father>  -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import Father from '@/components/Father.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    // Father
  }
}
</script>
