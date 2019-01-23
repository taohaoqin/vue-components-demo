<template>
    <div>
        <son>
            <template slot-scope="list">
                <ul>
                    <li v-for="item in list">{{ item }}</li>
                </ul>
            </template>
        </son>
    </div>
</template>
<script>
import son from '@/components/son.vue'
export default {
    // props:['lists'],
    components: {
        son
    }
}
</script>
