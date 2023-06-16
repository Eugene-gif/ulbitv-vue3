<script>
  import PostForm from "@/components/PostForm.vue";
  import PostList from "@/components/PostList.vue";
  // import PostItem from '@/components/PostItem.vue';

  export default {
    components: {
      PostList,
      PostForm,
    },
    data() {
      return {
        posts: [
          { id: 1, title: "JavaScript 1", body: "Описание поста 1" },
          { id: 2, title: "JavaScript 2", body: "Описание поста 2" },
          { id: 3, title: "JavaScript 3", body: "Описание поста 3" },
          { id: 4, title: "JavaScript 4", body: "Описание поста 4" },
        ],
      };
    },
    methods: {
      createPost(post) {
        // post - это параметр передаваемый из PostForm.vue через $emit('create', this.post)
        this.posts.push(post);
      },
      removePost(post) {
        this.posts = this.posts.filter((p) => p.id !== post.id);
      },
    },
  };
</script>

<template>
  <div class="wrapper">
    <PostForm @create="createPost" />
    <PostList
      :posts="posts"
      @remove="removePost"
    />
  </div>
</template>

<style lang="scss">
  body {
    background-color: lightgrey;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .wrapper {
    padding: 10px 15px;
  }
</style>
