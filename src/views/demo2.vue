<template>
  <div >
    <div id="div"></div>
    <Loading :item="mes"></Loading>
    <resourceManage :data="mes"></resourceManage>
    <asyncExample :data="mes"></asyncExample>
    <async :data="mes"></async>
  </div>
</template>
<script>
import dialog from '@/components/dialog.js'
import Vue from 'vue'
const asyncExample = Vue.component('asyncExample', function (resolve) {
  setTimeout(()=>{
    resolve({
      template: '<div>1秒钟后出现{{data}}</div>',
      props: {
        data: {
          default: ""
        }
      }
    })
  }, 1000) 
})
export default {
  data(){
    return {
      mes: "啊啊啊"
    }
  },
  mounted(){
    dialog(this.mes)
  },
  components: {
    //异步组件2种方式
    resourceManage: function(resolve) {
      require(['@/components/resourceManage.vue'],resolve)
    },
    asyncExample
  },
}
</script>
