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
        searchQuery: "",
        page: 1,
        limit: 10,
        totalPages: 0,
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
      // changePage(pageNumber) {
      //   this.page = pageNumber;
      //   // this.fetchPosts() // Можно повесить watch на page, тогда не нужно здесь явно указывать вызов функции
      // },
      async fetchPosts() {
        try {
          this.isPostsLoading = true;
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            {
              params: {
                _page: this.page,
                _limit: this.limit,
              },
            }
          );
          this.totalPages = Math.ceil(
            response.headers["x-total-count"] / this.limit
          );
          this.posts = response.data;
        } catch (e) {
          alert(`Ошибка ${e}`);
        } finally {
          this.isPostsLoading = false;
        }
      },
      async loadMorePosts() {
        try {
          this.page += 1;
          // this.isPostsLoading = true;
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            {
              params: {
                _page: this.page,
                _limit: this.limit,
              },
            }
          );
          this.totalPages = Math.ceil(
            response.headers["x-total-count"] / this.limit
          );
          this.posts = [...this.posts, ...response.data];
        } catch (e) {
          alert(`Ошибка ${e}`);
        }
        // finally {
        // this.isPostsLoading = false;
        // }
      },
    },
    mounted() {
      this.fetchPosts();
      console.log(this.$refs.observer);
      const options = {
        root: document.querySelector("#scrollArea"),
        rootMargin: "0px",
        threshold: 1.0,
      };

      const callback = (entries, observer) => {
        if (
          entries[0].isIntersecting &&
          this.page < this.totalPages
        ) {
          this.loadMorePosts();
        }
      };

      const observer = new IntersectionObserver(callback, options);
      observer.observe(this.$refs.observer);
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
      sortedAndSearchedPosts() {
        return this.sortedPosts.filter((post) =>
          post.title
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
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
    watch: {
      // page() {
      //   this.fetchPosts();
      // }
    },
  };
</script>

<template>
  <h1 class="title mb-20">Страница с постами</h1>
  <Input
    class="search mb-20"
    v-model="searchQuery"
    placeholder="Поиск..."
  />
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
    v-if="!isPostsLoading"
    :posts="sortedAndSearchedPosts"
    @remove="removePost"
    class="mb-20"
  />
  <h3
    v-else
    class="mb-20"
  >
    Loading...
  </h3>
  <div
    ref="observer"
    class="observer"
  ></div>
  <!-- <div class="number-page">
      <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        @click="changePage(pageNumber)"
        class="number-page__item"
        :class="{
          'number-page__item--current' : page === pageNumber
        }"
      >
        {{ pageNumber }}
      </div>
    </div> -->
</template>

<style lang="scss">
  .wrapper {
    padding: 10px 15px;
    height: 100vh;
  }

  .search {
    width: 100%;
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

  .number-page {
    display: flex;
    gap: 10px;
    justify-content: center;
    position: sticky;
    bottom: 0;
    padding: 10px;
    background-color: lightgrey;
    &__item {
      background-color: teal;
      color: #fff;
      padding: 10px;
      cursor: pointer;
    }

    &__item--current {
      @extend .number-page__item;
      background-color: #9e9e9e;
      color: #000;
      cursor: default;
    }
  }

  .observer {
    height: 30px;
    background-color: #fff;
  }

  .mb-20 {
    margin-bottom: 20px;
  }
</style>
