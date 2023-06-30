<script>
  export default {
    data() {
      return {
        width: 0,
        height: 0,
      };
    },
    methods: {
      getSize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
      },
    },
    mounted() {
      this.getSize()
    },
  };
</script>

<template>
  <h4>Информация о приложении</h4>
  <div>Высота экрана: {{ height }}</div>
  <div>Ширина экрана: {{ width }}</div>
</template>

<style lang="scss" scoped></style>
