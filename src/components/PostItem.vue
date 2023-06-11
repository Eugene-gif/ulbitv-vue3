<script>
  export default {
    props: {
      post: {
        type: Object,
        required: false,
      }
    }
  }
</script>

<template>
  <div class="post">
    <div class="post__row">
      <strong>Название:</strong>
      <span>{{ post.title || 'Title post' }}</span>
    </div>
    <div class="post__row">
      <strong>Описание:</strong> 
      <span>{{ post.body || 'Body post' }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .post {
    padding: 15px;
    border: 2px solid teal;
    border-radius: 8px;

    &__row {
      display: flex;
      gap: 15px;
      align-items: center;
    }
  }
</style>