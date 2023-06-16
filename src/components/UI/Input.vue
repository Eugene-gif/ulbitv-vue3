<script>
export default {
  name: 'Input'
}
</script>

<template>
  <!-- v-model="post.title" -->
  <input
    class="input"
    type="text"
    placeholder="Название поста"
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
