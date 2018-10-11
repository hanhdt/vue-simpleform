<template>
  <div class="row">
    <component
      :is="element"
      class="input"
      :class="inputClass"
      :name="name"
      :type="type"
      :value.prop="text"
      @input="update"
      :placeholder="placeholder"
      v-bind="$attrs">
    </component>
  </div>
</template>

<script>
export default {
  name: 'FormInput',
  model: {
    prop: 'text',
    event: 'update'
  },
  props: {
    name: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    },
    text: {
      required: true
    },
    placeholder: {
      type: String
    },
    inputClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    element () {
      return this.type === 'textarea' ? this.type : 'input'
    }
  },
  methods: {
    update (event) {
      this.$emit('update', event.currentTarget.value)
    }
  }
}
</script>

<style lang="scss" scoped>
  input,
  textarea {
    font-size: inherit;
    font-family: inherit;
    border: none;
    outline: none;
    padding: 16px;
    border-radius: 2px;
  }

  input,
  textarea {
    background: white;
    display: block;
    width: 100%;
    box-sizing: border-box;
    border: solid 1px #ecf0f1;
    text-align: left;

    &:focus {
      border-color: #2ecc71;
    }
  }

  textarea {
    max-width: 100%;
  }
</style>
