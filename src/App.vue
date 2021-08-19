<template>
  <header>
    <div class="header-content">
      <div class="header-content-lotos">
        <img src="@/assets/header-lotos.png" alt="lotos" />
        <div class="header-content-lotos__bigline"></div>
        <a href="tel:+380677651307">
          <img src="@/assets/header-viber.png" alt="viber" />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/nikolaeva.yuliia?r=nametag"
        >
          <img src="@/assets/header-instagram.png" alt="instagram" />
        </a>
        <a target="_blank" href="https://t.me/YuliiaNikolaieva">
          <img src="@/assets/header-telegram.png" alt="telegram" />
        </a>
        <div class="header-content-lotos__shortline"></div>
      </div>
      <div class="header-content-info">
        <h1 class="header-content-info__title">Реинкарнациолог</h1>
        <h2 class="header-content-info__name">Юлия Николаева</h2>
        <p class="header-content-info__text">
          Со мной ты начнешь менять жизнь уже после первого сеанса. Я работаю в
          самом экологичном, быстром, действенном методе для трансформации твоей
          жизни. Мудрая душа помнит и знает всё<br />Выбери пакет сеансов ниже -
          позволь себе отыскать ответы в прошлых жизнях, во Благо своего
          светлого будущего.
        </p>
        <a class="header-content-info__button btn" href="#">Выбрать сеанс</a>
      </div>
      <img
        class="header-content-info__photo"
        src="@/assets/header-image.png"
        alt="photo"
      />
    </div>
  </header>
  <section class="product">
    <h2 class="product-title">О реинкарнационике</h2>
    <div class="product-block">
      <div class="product-block__inner">
        Простой и быстрый способ активации памяти вашей Души, памяти Прошлых
        Жизней и Жизни Между Жизнями<br />Это метод работы с памятью и
        подсознанием, который помогает найти корень сложной ситуации или
        проблемы, проработать его, снять разрушительное влияние прошлого на Вас
        в настоящем и будущем.<br />
        Метод совершенно безопасен и 100% экологичен.<br />На протяжении 2-2.5
        часа Вы находитесь в медитативном состоянии, в сопровождении ваших
        Духовных Наставников, Светлых Учителей (которых Вы пока можете и не
        знать).<br />В личной работе, идя за моим голосом, Вы направляетесь в
        Своё собственное путешествие в Едином Божественном потоке – к себе
        самому, вглубь себя, к Вашему бессознательному, где открыт доступ к
        глубинной памяти Вашей Души, ко всем накопленным знаниям, талантам и
        ресурсам.
      </div>
    </div>
  </section>
  <section class="methods_n_sessions">
    <div class="methods">
      <h2 class="methods-title">Методика, которая обязательно поможет</h2>
      <div class="methods-block">
        <div class="methods-block__inner">
          Результат зависит от нашей совместной работы - 50/50%. Я не могу
          ручаться за ваше желание познавать себя и искренность намерения к
          трансформациям. Я уверена в действенности этого метода, ведь
          опробовала его на себе и других клиентах. Возьмите ответственность за
          свою жизнь, и метод сработает на 100%!
        </div>
      </div>
      <div class="methods-text">
        Я готова повести Вас, лишь договоритесь с собой
      </div>
      <a class="methods__button btn" href="#">Выбрать сеанс</a>
    </div>
    <div class="sessions">
      <h2 class="sessions-title">Мои сеансы для тех, кто:</h2>
      <div class="sessions-cards">
        <div
          v-for="(sessionsCard, index) in sessionsCards"
          :key="index"
          class="sessions-cards-item"
        >
          <div class="sessions-cards-item__inner">
            {{ sessionsCard.text }}
            <img
              class="sessions-cards-item__img"
              :src="sessionsCard.img"
              alt="session"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      sessionsCards: [
        {
          text:
            "Пробовал традиционные сеансы и терапии, но облегчения не испытал",
          img: "@/assets/sessions-1.png",
        },
      ],
    };
  },
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

header {
  width: 100%;
  height: 780px;
  padding: 40px 0 0 0;
  background-image: url("assets/header-back.png");
  background-size: cover;
}
.header-content {
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 1216px;
  &-lotos {
    position: absolute;
    left: 0;
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
    position: relative;
    z-index: 100;
    margin: 160px 0 68px 0;
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
    &__photo {
      position: absolute;
      top: 75px;
      right: -250px;
    }
  }
}
.product {
  position: relative;
  z-index: 100;
  width: 1216px;
  height: 338px;
  margin: 0 auto 150px auto;
  display: flex;
  flex-direction: column;
  &-title {
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 34px;
    margin-bottom: 30px;
  }
  &-block {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 274px;
    background: rgba(255, 241, 247, 0.7);
    &__inner {
      display: flex;
      align-items: center;
      padding: 20px 75px;
      border: 1px dashed #ae758d;
      width: 100%;
      height: 100%;
      text-align: center;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 160%;
    }
  }
}

.methods_n_sessions {
  background-image: url("assets/methods-back.png");
  background-size: cover;
  height: 1303px;
}

.methods {
  width: 844px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  &-title {
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 34px;
    margin-bottom: 30px;
  }
  &-block {
    padding: 5px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: rgba(255, 241, 247, 0.7);
    &__inner {
      display: flex;
      align-items: center;
      padding: 20px 15px;
      border: 1px dashed #ae758d;
      width: 100%;
      height: 100%;
      text-align: center;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 160%;
    }
  }
  &-text {
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 25px;
    color: #ae758d;
    margin-bottom: 35px;
  }
}

.sessions {
  &-title {
    margin: 150px 0 15px 0;
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 34px;
  }
  &-cards {
    width: 1216px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    &-item {
      position: relative;
      padding: 5px;
      margin: 30px 120px 30px 80px;
      width: 470px;
      height: 150px;
      background: rgba(255, 241, 247, 0.7);
      box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
      &__inner {
        padding: 18px 25px 18px 102px;
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        border: 1px dashed #ae758d;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 160%;
        text-align: center;
      }
      &__img {
        position: absolute;
        width: 196px;
        height: 240px;
        display: block;
        left: -98px;
        top: -41px;
      }
    }
  }
}

.btn {
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
</style>
