<template>
  <form @submit.prevent="submit" :class="customFormClass">
    <section class="content">
      <h2>{{ title }}</h2>
      <!-- Main content -->
      <slot />

      <div class="actions">
        <!-- Action buttons -->
        <slot name="actions" />
      </div>

      <div class="error" v-if="error">{{ error }}</div>
    </section>

    <!-- Expanding over the form -->
    <Loading v-if="busy"/>
  </form>
</template>

<script>
import Loading from './Loading.vue'

export default {
  name: 'SimpleForm',
  props: {
    title: {
      type: String,
      required: false,
      default () {
        return 'Form title'
      }
    },
    operation: {
      type: Function,
      required: false,
      default () {
        return () => console.log('SimpleForm component submited!')
      }
    },
    valid: {
      type: Boolean,
      required: false,
      default () {
        return true
      }
    },
    customFormClass: {
      type: String,
      required: false,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      error: null,
      busy: false
    }
  },
  methods: {
    async submit () {
      if (this.valid && !this.busy) {
        this.error = null
        this.busy = true

        try {
          // Perform the operation
          await this.operation()

          // Announce completed operation
          this.$emit('completed-operation', this.operation)
        } catch (e) {
          this.error = e.message
        }

        this.busy = false
      }
    }
  },
  components: {
    Loading
  }
}
</script>

<style lang="scss" scoped>
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
    padding: 64px 32px;
    background: rgba(#0697c0, .05);
    position: relative;

    > section {
      margin: auto;
    }

    .row,
    .actions,
    .error {
      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }

    .actions {
      flex-direction: row;
      display: flex;

      & > * {
        flex: auto 0 0;
      }
      > * {
        flex: 100% 1 1;
        margin-right: 16px;

        &:last-child {
          margin-right: 0;
        }
      }
    }

    h2 {
      margin: 0 0 16px;

      &::after {
        width: 100%;
        border-bottom-color: rgba(#0697c0, .15);
      }
    }

    .error {
      background: #ffcdd2;
      color: #f44336;
      padding: 16px 32px;
      border-radius: 3px;
    }
  }
</style>
