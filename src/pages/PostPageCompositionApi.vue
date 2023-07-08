<script>
  import PostForm from "@/components/PostForm.vue";
  import PostList from "@/components/PostList.vue";
  import { usePosts } from "@/hooks/usePosts.js";
  import { useSortedPosts } from "@/hooks/useSortedPosts.js";
  import { useSortedAndSearchedPosts } from "@/hooks/useSortedAndSearchedPosts.js";

  export default {
    components: {
      PostList,
      PostForm,
    },
    data() {
      return {
        dialogVisible: false,
        sortOptions: [
          { value: "title", name: "По названию" },
          { value: "body", name: "По содержимому" },
        ],
      };
    },
    setup(props) {
      // В итоге мы получаем 3 хука, в которых данные и логика работы с этими данными находятся рядом. И эти хуки зависят только от входных параметров
      const { posts, isPostsLoading, totalPages } = usePosts(10);
      const { selectedSort, sortedPosts } = useSortedPosts(posts);
      const { searchQuery, sortedAndSearchedPosts } =
        useSortedAndSearchedPosts(sortedPosts);
      return {
        posts,
        isPostsLoading,
        totalPages,
        selectedSort,
        sortedPosts,
        searchQuery,
        sortedAndSearchedPosts,
      };
    },
  };
</script>

<template>
  <h1 class="title mb-20">Страница с постами Composition API</h1>

  <Input
    class="search mb-20"
    v-model="searchQuery"
    placeholder="Поиск..."
  />
  <div class="buttons">
    <Select
      v-model="selectedSort"
      :options="sortOptions"
    >
    </Select>
  </div>
  <Dialog v-model:show="dialogVisible"> </Dialog>

  <PostList
    v-if="!isPostsLoading"
    :posts="sortedAndSearchedPosts"
    class="mb-20"
  />
  <h2
    v-else
    class="loading"
  >
    Loading...
  </h2>
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
