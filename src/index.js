import Vue from 'vue'

import FormInput from './FormInput.vue'
import SimpleForm from './SimpleForm.vue'
import Loading from './Loading.vue'

const Components = {
  SimpleForm,
  FormInput,
  Loading
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
