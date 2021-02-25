<template>
  <div class="about">
    <div>{{num | filterNum}}</div>
    <button @click="changenum">+1</button>
    <button @click="handerChange">按钮</button>
    <div v-for="(i, k) in list" :key="k">{{i}}</div>
    <div>vuex:{{userinfo}}</div>
    <button @click="changeVal">改变</button>
    <!-- <component :is="resourceManage"></component> -->
  </div>
</template>
<script>

import { mapGetters } from 'vuex'

export default {
  data (){
    return {
      num: 98,
      list: [1,2,3,4,5,6,7,8,9],
      obj: {
        name: 'aaa',
        age: 18,
        gander: '1'
      }
    }
  },
  
  computed:{
    ...mapGetters([
      'userinfo'
    ]),
  },
  watch: {
    list: {
      handler(newVal){
        console.log(newVal)
      },
      // immediate: true
    },
    obj: {
      handler(newVal){
        console.log(newVal)
      },
      deep: true,
      // immediate: true
    }
  },
  // filters: { //过滤器
  //   filterNum(val){
  //     if(val < 100){
  //       return (val / 100) * 100 + '%'
  //     }
  //   }
  // },
  methods: {
    changenum(){
      this.list[0] ++
      this.list.splice()
      // this.$set(this.list,0, 10 )
      // console.log(this.list)
    },
    handerChange(){
      this.obj.name = this.obj.name === 'aaa'? 'bbb':'aaa'
    },
    changeVal(){ 
      this.$store.dispatch('SET_USER_INFO', '金佳楠')
      console.log(this.$store.getters.userinfo)
    }
  }
}
</script>
