<script>
  import PostForm from "@/components/PostForm.vue";
  import PostList from "@/components/PostList.vue";
  import axios from "axios";
  export default {
    components: {
      PostList,
      PostForm,
    },
    data() {
      return {
        posts: [],
        dialogVisible: false,
        isPostsLoading: false,
        selectedSort: "",
        sortOptions: [
          { value: "title", name: "По названию" },
          { value: "body", name: "По содержимому" },
        ],
        // modificatorValue: '',
      };
    },
    methods: {
      createPost(post) {
        // post - это параметр передаваемый из PostForm.vue через $emit('create', this.post)
        this.posts.push(post);
        this.dialogVisible = false;
      },
      removePost(post) {
        this.posts = this.posts.filter((p) => p.id !== post.id);
      },
      showDialog() {
        this.dialogVisible = true;
      },
      async fetchPosts() {
        try {
          this.isPostsLoading = true;
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts?_limit=10"
          );
          this.posts = response.data;
        } catch (e) {
          alert(`Ошибка ${e}`);
        } finally {
          this.isPostsLoading = false;
        }
      },
    },
    mounted() {
      this.fetchPosts();
    },
    computed: {
      // В <PostList/> передаем это computed-свойство, обращаясь просто по названию этого свойства плюс такого подхода по сравнению с watch в том, что мы не изменяем исходный массив постов, а взаимодействуем и изменяем копию
      sortedPosts() {
        return [...this.posts].sort((post1, post2) =>
          post1[this.selectedSort]?.localeCompare(
            post2[this.selectedSort]
          )
        );
      },
    },
    // Это реализация функции наблюдателя, здесь мы работаем и изменяем исходный массив
    // watch: {
    //   selectedSort(newValue) {
    //     this.posts.sort((post1, post2) => {
    //       return post1[newValue]?.localeCompare(post2[newValue]);
    //     });
    //   },
    // },
  };
</script>

<template>
  <div class="wrapper">
    <h1 class="title mb-20">Страница с постами</h1>
    <div class="buttons">
      <Button
        @click="showDialog"
        class="mb-20"
        label="Создать пост"
      />
      <Select
        v-model="selectedSort"
        :options="sortOptions"
      >
      </Select>
    </div>

    <Dialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />
    </Dialog>

    <PostList
      :posts="sortedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <h3 v-else>Loading...</h3>
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

  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
  }

  .title {
    font-size: 42px;
    font-weight: 600;
    line-height: 1.5;
  }
  .mb-20 {
    margin-bottom: 20px;
  }
</style>
