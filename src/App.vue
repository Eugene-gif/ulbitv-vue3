<script>
  import Header from "@/layouts/Header.vue";
  import Footer from "@/layouts/Footer.vue";
  export default {
    components: {
      Header,
      Footer,
    },
  };
</script>

<template>
  <Header />
  <div class="content">
    <router-view></router-view>
  </div>
  <Footer />
</template>

<style lang="scss">
  body {
    background-color: lightgrey;
  }

  #app {
    display: grid;
    grid-template-rows: 1fr min-content;
    height: 100vh;
    overflow-x: hidden;
    @media (orientation: landscape) {
      .header {
        height: 48px;
      }

      .footer {
        height: 48px;
      }
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .content {
    padding: 10px 15px;
    margin-top: 60px;
  }

  .title {
    font-size: clamp(2rem, 1.6538rem + 1.5385vw, 3.5rem);
    line-height: 1.3;
    font-weight: 800;
    text-align: center;
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
