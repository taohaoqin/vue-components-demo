<template>
  <div>
    <!-- $attrs $listeners传值 -->
    <Child></Child>
  </div>
</template>
<script>
import Child from '@/components/Child.vue'
export default {
  components: {
    Child
  }
}
</script>
