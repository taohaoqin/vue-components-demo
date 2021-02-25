<template>
  <div>
    <div>全局加载组件loading... {{item}}</div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      default: "1"
    }
  }
}
</script>
