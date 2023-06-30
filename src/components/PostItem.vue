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
      <div class="post__row id">
        <strong>ID:</strong>
        <span>{{ post.id || "ID post" }}</span>
      </div>
    </div>

    <div class="post__btns">
      <Button
        class="post__btn"
        @click="$router.push(`/posts/${post.id}`)"
        label="Открыть пост"
        color="teal"
      />

      <Button
        class="post__btn"
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
      flex-direction: column;
      min-width: 140px;
      gap: 10px;
    }

    @media (max-width: 760px) {

      flex-direction: column;

&__wrapper {
  width: 100%;
}

      &__row {
        flex-direction: column;
        align-items: flex-start;
        gap: 0;
        margin-bottom: 10px;
      }

      &__row:nth-last-of-type(1) {
        margin-bottom: 0;
      }

      &__btns {
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
      }

      &__btn {
        width: 49%;
      }
    }
  }
</style>
