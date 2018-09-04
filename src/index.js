import Vue from 'vue'
import SmartForm from './SmartForm.vue'

const Components = {
  SmartForm
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
