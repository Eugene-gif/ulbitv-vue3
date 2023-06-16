<script>
  export default {
    name: "Input",
    props: {
      modelValue: [String, Number],
      // modelValue можно заменить на своё кастомное значение, но тогда придется в родительском компоненте использовать не просто v-model="post.title", а например v-model:value="post.title"
    },
    methods: {
      updateInput(event) {
        this.$emit("update:modelValue", event.target.value);
      },
    },
  };
</script>

<template>
  <input
    :value="modelValue"
    @input="updateInput"
    class="input"
    type="text"
  />
</template>

<style lang="scss" scoped>
  .input {
    border: 1px solid teal;
    padding: 10px;
    border-radius: 6px;

    &:focus {
      outline: 2px solid lightskyblue;
    }
  }
</style>
