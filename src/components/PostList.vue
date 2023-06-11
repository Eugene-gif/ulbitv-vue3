<script>
  import PostItem from '@/components/PostItem.vue';

  export default{
    components: {
    PostItem,
  },

    props: {
      posts: {
        type: Array,
        required: true,
      }
    },
  }
  
</script>

<template>
  <div class="post-list">
    <h3>Список элементов:</h3>
    <template v-for="post in posts" key="id">
      <PostItem :post="post"/>
    </template>
  </div>
</template>

<style lang="scss" scoped>
  .post-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
</style>