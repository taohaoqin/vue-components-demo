<template>
  <div>
    <List :list="list"></List>
  </div>
</template>
<script>
import List from '@/components/List'
export default {
  components: {
    List
  },
  data(){
    return {
      list: [
        {
          name: '一级菜单1',
          cList: [
            { name: '二级菜单11' },
            {
              name: '二级菜单12',
              cList: [
                {
                  name: '三级菜单121',
                  cList: [
                    { name: '四级菜单1211' }
                  ] 
                }
              ]
            }
          ]
        },
        { name: '一级菜单2' },
        {
          name: '一级菜单3',
          cList: [
            { name: '二级菜单31' },
            { name: '二级菜单32' }
          ]
        }
      ]
    }
  }
}
</script>
