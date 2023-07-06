<script></script>

<template>
  <header class="header">
    <div
      class="header__title"
      @click="$router.push('/')"
    >
      Vue 3
    </div>
    <div class="header__list">
      <Button
        label="Посты"
        @click="$router.push('/posts')"
      />
      <Button
        label="Store"
        @click="$router.push('/store')"
      />
      <Button
        label="О приложении"
        @click="$router.push('/about')"
      />
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .header {
    position: fixed;
    width: 100%;
    height: 60px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 10px;
    text-decoration: none;
    background-color: #03A9F4;
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
