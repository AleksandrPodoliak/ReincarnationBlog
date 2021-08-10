<template>
  <div class="header">
    <div class="header-content">
      <div class="header-content-lotos">
        <img src="../assets/header-lotos.png" alt="lotos" />
        <div class="header-content-lotos__bigline"></div>
        <a href="#">
          <img src="../assets/header-viber.png" alt="viber" />
        </a>
        <a href="#">
          <img src="../assets/header-instagram.png" alt="instagram" />
        </a>
        <a href="#">
          <img src="../assets/header-telegram.png" alt="telegram" />
        </a>
        <div class="header-content-lotos__shortline"></div>
      </div>
      <div class="header-content-info"></div>
      <div class="header-content-menu"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 890px;
  padding: 40px 0 0 0;
  background-image: url("../assets/header-back.png");
  background-size: cover;
  &-content {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 1216px;
    &-lotos {
      display: flex;
      flex-direction: column;
      align-items: center;
      &__bigline {
        width: 2px;
        height: 150px;
        background-color: #fff;
        margin-bottom: 10px;
      }
      & a + a {
        margin-top: 10px;
      }
      &__shortline {
        margin-top: 10px;
        width: 2px;
        height: 50px;
        background-color: #fff;
      }
    }
    &-info {
      margin: 110px 0 68px 0;
      width: 546px;
      height: 281px;
    }
    &-menu {
      width: 83px;
    }
  }
}
</style>
