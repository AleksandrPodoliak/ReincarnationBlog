<template>

    <Header></Header>

</template>

<script>
import Header from "/src/components/Header.vue";

export default {
  name: "App",
  components: { Header },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  width: 1920px;
  margin: 0 auto;
}
</style>
