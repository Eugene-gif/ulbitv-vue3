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
    // watch: {
    // Глубокое отслеживание объекта
    // post: {
    //   handler(newValue) {
    //     console.log(newValue);
    //   },
    //   deep: true,
    // },
    // },
  };
</script>

<template>
  <form
    class="post-add"
    @submit.prevent
  >
    <h3 class="post-add__title">Создание поста</h3>
    <div class="post-add__fields">
      <Input
        v-focus
        v-model.trim="post.title"
        placeholder="Название поста"
      />
      <Input
        v-model.trim="post.body"
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

    &__btn {
      display: block;
      margin-left: auto;
    }
  }
</style>
