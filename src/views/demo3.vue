<script>
export default {
  data(){
    return {
      show: true
    }
  },
  created(){ //keep-alive缓存组件的生命周期情况
    console.log('created', 2222)
  },
  beforeMount(){
    console.log('beforeMount', 333)
  },
  mounted(){
    console.log('mounted', 6666)
  },
  beforeUpdate(){
    console.log('beforeUpdate')
  },
  updated(){
    console.log('updated')
  },
  beforeDestroy(){ // 不会进入该生命周期
    console.log('beforeDestroy')
  },
  destroyed(){ // 也不会进入该生命周期
    console.log('destroyed')
  },
  activated(){
    console.log('activated', 7777)
  },
  deactivated(){ // 离开当前路由时
    console.log('deactivated')
  },
  beforeRouteEnter(to, from, next){
    console.log('beforeRouteEnter',  1111)
    next(() => {
      console.log('next', 5555)
    })
  },
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate', 66666)
    next(vm => {
      console.log(vm, 77777)
    })
  },
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave', 88888)
    next()
  },
  methods: {
    changeShow(){
      this.show = !this.show
    },
    // renderContent(){ //render中transition标签的用法
    //   if(this.show){
    //     return (
    //       <p>hello</p>
    //     )
    //   } else {
    //     return ''
    //   }
    // }
  },  
  render(h){
    console.log('渲染', 4444)
    return (
      <div>
        <button on-click={() => this.changeShow()}>切换</button>
        {/* h('transition', {
          attrs: {name: 'fade'}
        }, [this.renderContent()]) */}
        {/*<transition name='fade'>
          {this.renderContent()}
        </transition>*/}
        {h('transition', {
          attrs: {name: 'fade'}
        }, [h('p', {
          directives: [{
            name: 'show',
            value: this.show
          }]
        }, 'hello')])}
      </div>
    )
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

