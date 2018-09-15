<template>
  <div>
    <h1>Vue SimpleForm Component</h1>
    <SimpleForm
    class="form"
    :title="title"
    :operation="formSubmit"
    :valid="valid"
    @completed-operation="submitCallback">

    <!-- FORM TEXT INPUT -->
    <FormInput
      name="ticketName"
      v-model="ticketName"
      placeholder="Short ticket name (max 100 chars)"
      maxlength="100"
      :text="ticketName"
      required />

    <!-- FORM TEXTAREA INPUT -->
    <FormInput
      type="textarea"
      name="description"
      v-model="description"
      placeholder="Describe your problem in details"
      rows="4" />

    <!-- BUTTON ACTIONS -->
    <template slot="actions">
      <button type="submit" :disabled="!valid">
        Send
      </button>
    </template>
  </SimpleForm>
  </div>
</template>

<script>
export default {
  name: 'ExampleForm',
  data () {
    return {
      title: 'Simple Form',
      ticketName: '',
      description: ''
    }
  },
  methods: {
    formSubmit () {
      console.log('Form submitting...')
    },
    submitCallback () {
      console.log('Form submited')
    }
  },
  computed: {
    valid () {
      return !!this.title && !!this.description
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
