<template>
    <div>
        <slot  v-for="item in lists" :item="item" name="item"></slot>
    </div>
</template>
<script>
export default {
    data() {
        return {
            lists: [
            {id:1,name:'孙悟空'},
            {id:2,name:'猪八戒'},
            {id:3,name:'沙和尚'}
            ]
        }
        
    },
    components: {
    }
}
</script>
