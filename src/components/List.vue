<template>
  <ul>
    <li v-for="(item,index) in list " :key="index">
      <p @click="changeStatus(index)">{{item.name}}</p>
      <list-child v-if="scopesDefault[index]" :list="item.cList"></list-child>
    </li>
  </ul>  
</template>
<script>
export default {
	name:'ListChild',
  props:{
    list: Array
  },
  data() {
    return {
      scopesDefault: [],
      scopes: []
    }
  },
  methods: {
    changeStatus(index) {
      if (this.scopesDefault[index] == true) {
        this.$set(this.scopesDefault, index, false)
      } else {
        this.$set(this.scopesDefault, index, this.scopes[index])
      }
    },
    scope() {
      this.list.forEach((item, index) => {
        this.scopesDefault[index] = false
        if ('cList' in item) {
          this.scopes[index] = true
        } else {
          this.scopes[index] = false
        }
      })
    }
  },
  created() {
    this.scope()
  }
}
</script>
<style>
ul{
  list-style: none;
  padding-left: 40px!important;
}
li{
  cursor: pointer;
}
</style>
