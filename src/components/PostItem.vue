<script>
  import Button from "./UI/Button.vue";

  export default {
    props: {
      post: {
        type: Object,
        required: false,
      },
    },
    components: { Button },
  };
</script>

<template>
  <div class="post">
    <div class="post__wrapper">
      <div class="post__row">
        <strong>Название:</strong>
        <span>{{ post.title || "Title post" }}</span>
      </div>
      <div class="post__row">
        <strong>Описание:</strong>
        <span>{{ post.body || "Body post" }}</span>
      </div>
    </div>

    <div class="post__btns">
      <Button
        label="Удалить"
        color="#FF4747"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .post {
    padding: 15px;
    border: 2px solid teal;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;

    &__row {
      display: flex;
      gap: 15px;
      align-items: center;
    }
  }
</style>
