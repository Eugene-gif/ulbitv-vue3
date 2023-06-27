<script></script>

<template>
  <nav class="navbar">
    <div
      class="navbar__title"
      @click="$router.push('/')"
    >
      Vue 3
    </div>
    <div class="navbar__list">
      <Button
        label="Посты"
        @click="$router.push('/posts')"
      />
      <Button
        label="О приложении"
        @click="$router.push('/about')"
      />
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  .navbar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 10px 10px;
    text-decoration: none;
    background-color: rosybrown;
    gap: 15px;
    box-shadow: 0 0 5px black;

    &__title {
      font-size: 28px;
      font-weight: 600;
      cursor: pointer;
      &:hover {
        box-shadow: 0 0 5px white;
        border-radius: 5px;
      }
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 10px;
      font-size: 20px;
      font-weight: 600;
      margin-left: auto;
    }
  }
</style>
