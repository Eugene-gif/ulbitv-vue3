<script>
  export default {
    props: {
      post: {
        type: Object,
        required: false,
      },
    },
  };
</script>

<template>
  <div class="post">
    <div class="post__wrapper">
      <div class="post__row">
        <strong>Название:</strong>
        <span>{{ post.title || "Template title post" }}</span>
      </div>
      <div class="post__row">
        <strong>Описание:</strong>
        <span>{{ post.body || "Template body post" }}</span>
      </div>
      <div class="post__row">
        <strong>ID:</strong>
        <span>{{ post.id || "ID post" }}</span>
      </div>
    </div>

    <div class="post__btns">
      <Button
        class="post__btn--open"
        @click="$router.push(`/posts/${post.id}`)"
        label="Открыть пост"
        color="teal"
      />

      <Button
        @click="$emit('remove', post)"
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
    background-color: lightgrey;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;

    &__row {
      display: flex;
      gap: 15px;
      align-items: center;
      hyphens: auto;
      strong,
      span {
        word-wrap: break-word;
      }
    }

    &__btns {
      display: flex;
      gap: 10px;
      flex-direction: column;
      min-width: 150px;
    }
  }
</style>
