<template>
  <div class="loading">
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style lang="scss" scoped>
  .loading {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 128px 0;

    & > * {
      flex: auto 0 0;
    }

    div {
      width: 32px;
      height: 32px;
      border: solid 2px transparent;
      border-right: solid 2px #0697c0;
      border-radius: 50%;
      animation: loading .5s infinite linear;
    }

    &.overlay,
    &.page {
      margin: 0;
    }

    &.overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(white, .75);
    }

    &.page {
      position: fixed;
      bottom: 64px;
      width: 32px;
      height: 32px;
      padding: 16px;
      border-radius: 50%;
      background: white;
      box-shadow: 0 4px 15px rgba(black, .1);
      pointer-events: none;
    }
  }

  @keyframes loading {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
