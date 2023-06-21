<script>
  import PostItem from "@/components/PostItem.vue";

  export default {
    components: {
      PostItem,
    },

    props: {
      posts: {
        type: Array,
        required: true,
      },
    },
  };
</script>

<template>
  <div class="post-list">
    <h3>Список элементов:</h3>
    <template v-if="posts.length > 0">
      <TransitionGroup name="list">
        <template
          v-for="post in posts"
          :key="post.id"
        >
          <PostItem
            :post="post"
            @remove="$emit('remove', post)"
          />
        </template>
      </TransitionGroup>
    </template>

    <div
      class="post-list--empty"
      v-else
    >
      Список элементов пуст
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .post-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .post-list--empty {
    color: #ff4747;
    font-size: 28px;
    font-weight: 600;
    letter-spacing: 0.3px;
    line-height: 1.5;
    margin: 30px auto;
  }
  /* _____ Анимации списка _____*/
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(50px);
  }

  .list-move {
    transition: transform 0.5s ease;
  }
  /* _____ /Анимации списка _____*/
</style>
