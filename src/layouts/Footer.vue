<script></script>

<template>
  <footer class="footer">
    <div
      class="footer__title"
      @click="$router.push('/')"
    >
      Vue 3
    </div>
    <div class="footer__list">
      <Button
        label="О приложении"
        @click="$router.push('/about')"
      />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 10px 10px;
    text-decoration: none;
    background-color: lightgreen;
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
