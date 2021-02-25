import dialog2 from './dialog.vue'
import Vue from 'vue'
const creatdialog = (item) => {
  const dialog = Vue.extend(dialog2)
  return new dialog({
    propsData:{
      item,
    }
  }).$mount('#div')
}

export default creatdialog