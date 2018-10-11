<template>
  <form @submit.prevent="submit" :class="customFormClass">
    <section class="content">
      <h2 v-if="title">{{ title }}</h2>
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
      required: false
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
  form {
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
