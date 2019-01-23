<template>
    <div>
        <input type="text" :value="count" @input="input"> 
    </div>
</template>
<script>
export default {
    props: ["count"],
    methods: {
    input(event) {
      let value = event.target.value; 
      this.$emit("getValue", value);
    }
  }
}
</script>