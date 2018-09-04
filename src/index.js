import Vue from 'vue'
import SimpleForm from './SimpleForm.vue'

const Components = {
  SimpleForm
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
