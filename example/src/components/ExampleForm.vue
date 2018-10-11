<template>
  <div>
    <h1>Vue SimpleForm Component</h1>
    <SimpleForm
      class="form"
      :operation="formSubmit"
      :valid="valid"
      @completed-operation="submitCallback">

    <!-- FORM TEXT INPUT -->
    <FormInput
      v-model="ticketName"
      :text="ticketName"
      name="ticketName"
      placeholder="Short ticket name (max 100 chars)"
      maxlength="100"
      required />

    <!-- FORM TEXTAREA INPUT -->
    <FormInput
      v-model="description"
      type="textarea"
      name="description"
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
      return !!this.ticketName && !!this.description
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
  button {
    font-size: inherit;
    font-family: inherit;
    border: none;
    outline: none;
    padding: 16px;
    border-radius: 2px;
  }

  button {
    background: #0697c0;
    color: white;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    transition: background .3s;
    user-select: none;
    border: solid 1px #0697c0;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

    &:hover {
      background: lighten(#0697c0, 10%);
    }

    &:active {
      background: darken(#0697c0, 10%);
    }

    &.fab {
      position: fixed;
      z-index: 1;
      bottom: 24px;
      right: 18px;
      font-size: 24px;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 10px rgba(black, .3);

      > i {
        top: 0;
      }
    }

    &.secondary {
      background: white;
      border-color: rgba(#0697c0, .3);
      color: #0697c0;

      &:hover {
        background: lighten(#0697c0, 85%);
      }
    }

    &[disabled='disabled'] {
      background: #bdbdbd;
      cursor: not-allowed;
      color: #eeeeee;
      border-color: #9e9e9e;
    }
  }

  form {
    h2 {
      &::after {
        border-bottom-color: rgba(#0697c0, .15);
      }
    }
  }
</style>
