<script>
  export default {
    props: {
      label: "",
      color: "",
      textColor: "",
      width: "",
      height: "",
    },
  };
</script>

<template>
  <button
    class="btn"
    :style="`
      background-color: ${color};
      color: ${textColor};
      width: ${width};
      height: ${height};

  `"
  >
    {{ label || "Button" }}
  </button>
</template>

<style lang="scss" scoped>
  .btn {
    padding: 8px 10px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    border-radius: 6px;
    color: #fff;
    background-color: darkcyan;
    transition: all 0.1s;

    &:focus {
      outline: 2px solid lightskyblue;
    }

    &:active {
      box-shadow: 0 0 5px inset;
    }
  }
</style>
