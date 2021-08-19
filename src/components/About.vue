/* eslint-disable no-irregular-whitespace */
<template>
  <section class="about">
    <h2 class="about__title">Обо мне</h2>
    <div class="about__text">
      <p class="about__text-box">
        Выпускница Института реинкарнационики Мариса Дрешманиса.<br />
        С реинкарнационикой уже 3 года.<br />Практикующий мастер по методу
        реинкарнационики.<br />Закончила целительский курс Татьяны Абоалелы.<br />Автор
        марафона полезных привычек.<br />В своей жизни использую дыхательные
        практики, йогу, даосские практики, медитации, аффирмации, вакуум живота,
        интуитивное питание по принципу детокс.<br />Счастливая жена и мама.<br />Сама
        будучи клиенткой погружений изменила свою жизнь. Влюбилась в метод и
        решила ему обучиться. Узнав своё предназначение в мире душ - помогать
        людям на ментальном и физическом уровне, выводя на новый осознанный
        уровень жизни.<br /><br />Сняла блоки и отыскала целительские
        способности в пробабушке. Работаю через Творца, светлых учителей,
        Ангелов и Арханголов в едином Божественном потоке.
      </p>
    </div>
    <h2 class="about__inst-title">Я веду блог в Instagram</h2>
    <a
      class="about__button"
      target="_blank"
      href="https://www.instagram.com/nikolaeva.yuliia?r=nametag"
      >Instagram</a
    >
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss">
.about {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1216px;
  margin: 0 auto;
  &__title {
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 34px;
    margin-bottom: 30px;
  }
  &__text {
    width: 100%;
    margin-bottom: 25px;
    &-box {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 160%;
      width: 700px;
    }
  }
  &__image {
    position: absolute;
    left: 530px;
    bottom: -80px;
  }
  &__inst-title {
    position: relative;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 160%;
    margin-bottom: 20px;
  }
  &__button {
    position: relative;
    border: 3px solid #353966;
    display: block;
    width: 280px;
    height: 60px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 54px;
    text-align: center;
    text-decoration: none;
    margin-bottom: 150px;
    &:hover {
      background: linear-gradient(91.83deg, #353966 0%, #ae758d 100%);
      box-shadow: 0px 7px 25px rgba(0, 0, 0, 0.35);
      border: none;
      line-height: 60px;
    }
    &:active {
      background: linear-gradient(91.83deg, #232751 0%, #684051 100%);
      box-shadow: 0px 7px 25px rgba(0, 0, 0, 0.35);
      border: none;
      line-height: 60px;
    }
  }
}
</style>
