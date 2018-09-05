<template>
  <form @submit.prevent="submit">
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

    <transition name="fade">
      <!-- Expanding over the form -->
      <Loading v-if="busy" class="overlay" />
    </transition>
  </form>
</template>

<script>
import Loading from './Loading.vue';

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
  },
  components: {
    Loading
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

  .overlay {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: absolute;
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
