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
      <template
        v-for="post in posts"
        :key="post.id"
      >
        <PostItem
          :post="post"
          @remove="$emit('remove', post)"
        />
      </template>
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
    color: #FF4747;
    font-size: 28px;
    font-weight: 600;
    letter-spacing: 0.3px;
    line-height: 1.5;
    margin: 30px auto;
  }
</style>
