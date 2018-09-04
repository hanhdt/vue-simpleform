<template>
  <form @submit.prevent="submit">
    <section class="content">
      <h2>{{ title }}</h2>
      <!-- Main content -->
      <div class="actions">
        <!-- Action buttons -->
        <slot name="actions" />
      </div>

      <div class="error" v-if="error">{{ error }}</div>
    </section>

    <transition name="fade">
      <!-- Expanding over the form -->
      <Loading v-if="busy" class="overlay" />
    </transition>
  </form>
</template>

<script>
export default {
  name: 'SimpleForm',
  props: {
    title: {
      type: String,
      required: true
    },
    operation: {
      type: Function,
      required: true
    },
    valid: {
      type: Boolean,
      required: true
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
          await this.operation()
        } catch (e) {
          this.error = e.message
        }

        this.busy = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .15s linear;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
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
      > * {
        flex: 100% 1 1;
        space-between-x: 16px;
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
