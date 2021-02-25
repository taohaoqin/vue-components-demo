<template>
    <div>
        <!-- 作用域插槽 -->
        <slot  v-for="item in lists" :item="item" name="item"></slot>
        <div v-for="(i, index, k) in obj" :key="index">{{i}}+{{index}}+{{k}}</div>
        <div>{{name.name}}</div>
        <div>{{t}}0</div>
        <div @click="cheangename">{{names}}1</div>
        <div>{{self.t}}2</div>
        <div>{{that.t}}3</div>
    </div>
</template>
<script>
export default {
    inject: ["self", "name", "that", 't'],
    data() {
        return {
            lists: [
                {id:1,name:'孙悟空'},
                {id:1,name:'唐僧'},
                {id:2,name:'猪八戒'},
                {id:3,name:'沙和尚'}
            ],
            obj: {
                first: 'A',
                last: 'B',
                finaly: 'c'
            },
            names:this.self.t
        }
    },
    components: {
    },
    methods: {
        cheangename(){
            this.names = this.names === '天'? '地': '天'
        }
    }
}
</script>
