<template>
 <div>
   <child-dom
    :foo="foo"
    :coo="coo"
     @upRocket="reciveRocket"
   >
   </child-dom>
 </div>
</template>
<script>
 import childDom from "@/components/ChildDom.vue";
 export default {
   name:'demoNo',
   data() {
    return {
      foo:"Hello, world",
      coo:"Hello, 孙子"
    }
  },
 components:{childDom},
 methods:{
   reciveRocket(){
      console.log("reciveRocket success")
   }
 }
}
</script>