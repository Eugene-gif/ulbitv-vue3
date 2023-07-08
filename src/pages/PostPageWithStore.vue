<script>
  import PostForm from "@/components/PostForm.vue";
  import PostList from "@/components/PostList.vue";
  import axios from "axios";
  import Button from "@/components/UI/Button.vue";
  import store from "@/store";
  import {
    mapState,
    mapGetters,
    mapActions,
    mapMutations,
  } from "vuex";
  export default {
    components: {
      PostList,
      PostForm,
      Button,
    },
    data() {
      return {
        dialogVisible: false,
        //   posts: [],
        //   isPostsLoading: false,
        //   selectedSort: "",
        //   sortOptions: [
        //     { value: "title", name: "По названию" },
        //     { value: "body", name: "По содержимому" },
        //   ],
        //   searchQuery: "",
        //   page: 1,
        //   limit: 10,
        //   totalPages: 0,
        //   // modificatorValue: '',
      };
    },
    methods: {
      ...mapMutations({
        setPage: "post/setPage",
        setSearchQuery: "post/setSearchQuery",
        setSelectedSort: "post/setSelectedSort",
      }),
      ...mapActions({
        loadMorePosts: "post/loadMorePosts",
        fetchPosts: "post/fetchPosts",
      }),
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
    },
    mounted() {
      this.fetchPosts();
    },
    computed: {
      // В <PostList/> передаем это computed-свойство, обращаясь просто по названию этого свойства плюс такого подхода по сравнению с watch в том, что мы не изменяем исходный массив постов, а взаимодействуем и изменяем копию
      // sortedPosts() {
      //   return [...this.posts].sort((post1, post2) =>
      //     post1[this.selectedSort]?.localeCompare(
      //       post2[this.selectedSort]
      //     )
      //   );
      // },
      // sortedAndSearchedPosts() {
      //   return this.sortedPosts.filter((post) =>
      //     post.title
      //       .toLowerCase()
      //       .includes(this.searchQuery.toLowerCase())
      //   );
      // },
      // },
      // Это реализация функции наблюдателя, здесь мы работаем и изменяем исходный массив
      // watch: {
      //   selectedSort(newValue) {
      //     this.posts.sort((post1, post2) => {
      //       return post1[newValue]?.localeCompare(post2[newValue]);
      //     });
      //   },
      ...mapState({
        posts: (state) => state.post.posts,
        isPostsLoading: (state) => state.post.isPostsLoading,
        selectedSort: (state) => state.post.selectedSort,
        searchQuery: (state) => state.post.searchQuery,
        page: (state) => state.post.page,
        totalPages: (state) => state.post.totalPages,
        limit: (state) => state.post.limit,
        sortOptions: (state) => state.post.sortOptions,
      }),
      ...mapGetters({
        sortedPosts: "post/sortedPosts",
        sortedAndSearchedPosts: "post/sortedAndSearchedPosts",
      }),
    },
    watch: {
      // page() {
      //   this.fetchPosts();
      // }
    },
  };
</script>

<template>
  <!-- <h1 class="title mb-10">
    {{
      $store.state.isAuth
        ? "Пользователь авторизован"
        : "Пользователь не авторизован"
    }}
  </h1>
  <h1 class="title mb-10">Likes: {{ $store.state.likes }}</h1>
  <h1 class="title mb-10">
    Double likes: {{ $store.getters.doubleLikes }}
  </h1>
  <div class="">
    <Button
      label="+"
      color="green"
      width="40px"
      height="40px"
      @click="$store.commit('incrementLikes')"
    />
    <Button
      label="-"
      color="red"
      width="40px"
      height="40px"
      @click="$store.commit('decrementLikes')"
    />

    <Button
      :label="$store.state.isAuth ? 'Выйти' : 'Авторизоваться'"
      :color="$store.state.isAuth ? 'darkred' : 'darkcyan'"
      height="40px"
      @click="$store.commit('switchAuth')"
    />
  </div> -->

  <h1 class="title mb-20">Страница с постами Store</h1>
  <Input
    class="search mb-20"
    :model-value="searchQuery"
    @update:model-value="setSearchQuery"
    placeholder="Поиск..."
  />
  <div class="buttons">
    <Button
      @click="showDialog"
      class="mb-20"
      label="Создать пост"
    />
    <Select
      :model-value="selectedSort"
      @update:model-value="setSelectedSort"
      :options="sortOptions"
    />
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
  <h2
    v-else
    class="loading"
  >
    Loading...
  </h2>
  <div
    v-intersection="loadMorePosts"
    class="observer"
  />

  <!-- <div class="number-page">
    <div
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      @click="changePage(pageNumber)"
      class="number-page__item"
      :class="{
        'number-page__item--current': page === pageNumber,
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

  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    font-size: 36px;
  }

  .observer {
    height: 30px;
    background-color: #fff;
  }

  .mb-20 {
    margin-bottom: 20px;
  }
</style>
