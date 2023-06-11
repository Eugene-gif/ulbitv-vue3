<script>
  export default {
    data() {
      return{
        post: {
          title: '',
          body: '',
        }
      }
    },
    methods: {
      createPost() {
        this.post.id = Date.now();
        this.$emit('create', this.post); // Первым параметром всегда принимается название события, которое мы генерируем, вторые и последующие параметры - это аргументы которые будут попадать в соответствующую функцию
        this.post = {
          title: '',
          body: '',
        }
      }
    }
  }
</script>

<template>
  <form class="post-add" @submit.prevent>
    <h3 class="post-add__title">Создание поста</h3>
    <div class="post-add__fields">
      <input 
        v-model="post.title"
        class="post-add__input" 
        type="text" 
        placeholder="Название поста"
      >
      <input 
        v-model="post.body"
        class="post-add__input" 
        type="text" 
        placeholder="Описание поста"
      >
    </div>
    <button 
      @click="createPost"
      class="post-add__btn"
    >
      Добавить пост
    </button>
  </form>
</template>

<style lang="scss" scoped>
  .post-add {
    margin-bottom: 20px;

    &__title {
      font-size: 24px;
      line-height: 1.5;
    }

    &__fields {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 10px;
    }

    &__input {
      border: 1px solid teal;
      padding: 10px;
      border-radius: 6px;

      &:focus-visible {
        outline-color: lightskyblue;
      }
    }

    &__btn {
      padding: 8px 10px;
      font-size: 16px;
      font-weight: 600;
      border: none;
      cursor: pointer;
      border-radius: 6px;
      color: #fff;
      background-color: darkcyan;
      transition: all 0.3s;
      display: block;
      margin-left: auto;

      &:focus {
        outline: 2px solid lightskyblue;
      }

      &:active {
        background-color: thistle;
      }
    }
  }
</style>