<template>
  <div class="dialog">{{item}}</div>
</template>
<script>
export default {
  props: {
    item: {
      default: ""
    }
  }
}
</script>
<style>
.dialog{
  margin: auto;
}
</style>
