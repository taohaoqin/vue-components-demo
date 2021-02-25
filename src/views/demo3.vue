<template>
  <div>
    <button v-on:click="show = !show">
      切换
    </button>
    <transition name="fade">
      <p v-if="show">哈喽</p>
    </transition>
  </div>
</template>
<script>
export default {
  data(){
    return {
      show: true
    }
  }
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

