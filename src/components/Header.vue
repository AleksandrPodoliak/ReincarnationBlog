<template>
  <header>
    <div class="header-content">
      <div class="header-content-lotos">
        <img src="../assets/header-lotos.png" alt="lotos" />
        <div class="header-content-lotos__bigline"></div>
        <a href="tel:+380677651307">
          <img src="../assets/header-viber.png" alt="viber" />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/nikolaeva.yuliia?r=nametag"
        >
          <img src="../assets/header-instagram.png" alt="instagram" />
        </a>
        <a target="_blank" href="https://t.me/YuliiaNikolaieva">
          <img src="../assets/header-telegram.png" alt="telegram" />
        </a>
        <div class="header-content-lotos__shortline"></div>
      </div>
      <div class="header-content-info">
        <h1 class="header-content-info__title">Реинкарнациолог</h1>
        <h2 class="header-content-info__name">Юлия Николаева</h2>
        <p class="header-content-info__text">
          Со мной ты обретёшь ответы, путешествуя по волнам воспоминаний прошлых
          воплощений. Твоя мудрая и многогранная душа помнит всё!
        </p>
        <a class="header-content-info__button" href="#">Выбрать сеанс</a>
      </div>
      <div class="header-content-menu">
        <div class="header-content-menu__line"></div>
        <div class="header-content-menu__line"></div>
        <div class="header-content-menu__line"></div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
header {
  width: 100%;
  height: 890px;
  padding: 40px 0 0 0;
  background-image: url("../assets/header-back.png");
  background-size: cover;
}
.header-content {
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
    display: flex;
    flex-direction: column;
    align-items: center;
    &__title {
      display: block;
      font-style: normal;
      font-weight: normal;
      font-size: 30px;
      line-height: 34px;
      margin-bottom: 20px;
    }
    &__name {
      display: block;
      font-style: normal;
      font-weight: 700;
      font-size: 42px;
      line-height: 47px;
      margin-bottom: 30px;
    }
    &__text {
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 140.5%;
      text-align: center;
      margin-bottom: 30px;
    }
    &__button {
      width: 280px;
      height: 50px;
      background: linear-gradient(91.83deg, #ae758d 0%, #353966 100%);
      box-shadow: 0px 7px 25px rgba(0, 0, 0, 0.35);
      font-size: 18px;
      line-height: 50px;
      text-align: center;
      color: #fff;
      text-decoration: none;
      &:hover {
        background: linear-gradient(91.83deg, #353966 0%, #ae758d 100%);
      }
      &:active {
        background: linear-gradient(91.83deg, #232751 0%, #684051 100%);
      }
    }
  }
  &-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 83px;
    &__line {
      margin-bottom: 7px;
      width: 55px;
      height: 5px;
      background-color: #fff;
      &:nth-child(2) {
        margin-right: 13px;
      }
    }
  }
}
</style>
