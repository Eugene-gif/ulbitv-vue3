<script>
  export default {
    data() {
      return {
        post: {
          title: "",
          body: "",
        },
      };
    },
    methods: {
      createPost() {
        this.post.id = Date.now();
        this.$emit("create", this.post); // Первым параметром всегда принимается название события, которое мы генерируем, вторые и последующие параметры - это аргументы которые будут попадать в соответствующую функцию
        this.post = {
          title: "",
          body: "",
        };
      },
    },
  };
</script>

<template>
  <form
    class="post-add"
    @submit.prevent
  >
    <h3 class="post-add__title">Создание поста</h3>
    <div class="post-add__fields">
      <input
        v-model="post.title"
        class="post-add__input"
        type="text"
        placeholder="Название поста"
      />
      <Input />
      <input
        v-model="post.body"
        class="post-add__input"
        type="text"
        placeholder="Описание поста"
      />
    </div>
    <Button
      @click="createPost"
      class="post-add__btn"
      label="Добавить пост"
    />
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

    // &__input {
    //   border: 1px solid teal;
    //   padding: 10px;
    //   border-radius: 6px;

    //   &:focus {
    //     outline: 2px solid lightskyblue;
    //   }
    // }

    &__btn {
      display: block;
      margin-left: auto;
    }
  }
</style>
