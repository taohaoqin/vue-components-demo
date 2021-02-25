<template>
    <div>
        <son >
            <template slot-scope="scope" slot="item" >
                <ul>
                    <li>{{ scope.item}}  </li>
                </ul>
            </template>
            <!-- 显示插槽数据。写了，插槽就总得在浏览器上显示点东西，东西就是html该有的模样，没写，插槽就是空壳子，啥都没有。 
            我们说有html模板的情况，就是父组件会往子组件插模板的情况，那到底插一套什么样的样式呢，这由父组件的html+css共同决定，
            但是这套样式里面的内容呢？正因为作用域插槽绑定了一套数据，父组件可以拿来用。于是，情况就变成了这样：样式父组件说了算，
            但内容可以显示子组件插槽绑定的。我们再来对比，作用域插槽跟单个插槽和具名插槽的区别，因为单个插槽和具名插槽不绑定数据，
            所以父组件提供的模板一般要既包括样式又包括内容；而作用域插槽，父组件只需要提供一套样式（在确实用作用域插槽绑定的数据的前提下）-->
        </son>
        <div>{{t}}4</div>
        <div @click="handleclick">点击</div>
        <div @click="changeName">名字切换</div>
    </div>
</template>
<script>
import son from '@/components/son.vue'
export default {
    props: ['code'],
    provide(){ //provide传值不是响应式的 所以要传一个引用数据类型
       return {
           t: this.t,
           self: {t: this.t},
           name: this.person,
           that: this
       }
    },
    data() {
        return {
            t: '天',
            person: {
                name: '张三'
            }
        }
    },
    // props:['lists'],
    components: {
        son
    },
    methods: {
        handleclick(){
            this.t = this.t === '天'? '地': '天'
        },
        changeName(){
            this.person.name = this.person.name === '李四' ? '张三' : '李四'
        }
    },
    created(){
        console.log(this.$data, 'data')
    }
}
</script>
