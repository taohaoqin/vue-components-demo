<template>
  <div>
  <p>foo:{{foo}}</p>
  <p>attrs:{{$attrs}} 111</p>
  <childDomChild 
    v-bind="$attrs" 
    v-on="$listeners">
  </childDomChild>
  </div>
</template>
<script>
import childDomChild from './childDomChild';
export default {
 name:'child-dom',
 props:["foo"],
 inheritAttrs:false,// 可以关闭自动挂载到组件根元素上的没有在props声明的属性
 components:{
   childDomChild
 },
 mounted(){
   console.log(this.$attrs)
 }
}
</script>