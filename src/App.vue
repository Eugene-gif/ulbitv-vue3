<script>
  import Navbar from "@/components/UI/Navbar.vue";
  export default {
    components: {
      Navbar,
    },
  };
</script>

<template>
  <Navbar />
  <div class="wrapper">
    <router-view></router-view>
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
    height: 100vh;
  }

  .mb-20 {
    margin-bottom: 20px;
  }

  .mb-15 {
    margin-bottom: 15px;
  }

  .mb-10 {
    margin-bottom: 10px;
  }
</style>
