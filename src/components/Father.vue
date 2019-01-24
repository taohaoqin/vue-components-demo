<template>
    <div>
        <son >
            <template slot-scope="scope" slot="item" >
                <ul>
                    <li>{{ scope.item.name }}  </li>
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
