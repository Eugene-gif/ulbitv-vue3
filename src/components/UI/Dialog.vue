<script>
  import toggleMixin from "@/mixins/toggleMixin.js";

  export default {
    name: "Dialog",
    mixins: [toggleMixin],
    mounted() {
      console.log('Dialog mounted');
    }
  };
</script>

<template>
  <div
    class="dialog"
    v-if="show"
    @click="hideDialog"
  >
    <div
      @click.stop
      class="dialog__content"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .dialog {
    position: fixed;
    display: flex;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba($color: #000000, $alpha: 0.4);

    &__content {
      background-color: #fff;
      padding: 20px;
      margin: auto;
      border-radius: 12px;
      min-width: 280px;
      min-height: 50px;
      max-width: 600px;
    }
  }
</style>
