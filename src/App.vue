<template>
  <Header></Header>
  <About></About>
</template>

<script>
import Header from "/src/components/Header.vue";
import About from "/src/components/About.vue";

export default {
  name: "App",
  components: { Header, About },
};
</script>

<style lang="scss">
@font-face {
  font-family: Garamond;
  src: url("assets/fonts/Garamond.TTF");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Garamond;
  color: #111;
}
#app {
  width: 1920px;
  margin: 0 auto;
}
</style>
