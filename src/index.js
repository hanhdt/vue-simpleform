import Vue from 'vue'

import FormInput from './components/FormInput.vue'
import SimpleForm from './components/SimpleForm.vue'
import Loading from './components/Loading.vue'

const Components = {
  SimpleForm,
  FormInput,
  Loading
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
