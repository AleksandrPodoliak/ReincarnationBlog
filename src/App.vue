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
      <div class="sessions-text">
        Для ЛЮБОГО, кто хочет и готов!
      </div>
      <div class="sessions-text-footer">
        Если Вы читаете этот сайт, значит, пришло время для кардинальной
        трансформации. Вы нашли эффективный инструмент решения своих вопросов.
        Отбросьте все сомнения и последуйте за своей интуицией!
      </div>
    </div>
  </section>
  <section class="main">
    <div class="problems">
      <h2 class="problems-title">Что можно проработать?</h2>
      <img
        class="problems-plane"
        src="@/assets/problems-plane.png"
        alt="plane"
      />
      <div class="problems-line"></div>
      <div class="problems-point point1">
        <img
          src="@/assets/problems-point.png"
          alt="point"
          class="problems-point__img"
        />
        <p class="problems-point__text right">
          Повторяющиеся сценарии в жизни, как не пройденный урок
        </p>
      </div>
      <div class="problems-point point2">
        <img
          src="@/assets/problems-point.png"
          alt="point"
          class="problems-point__img"
        />
        <p class="problems-point__text left">
          Отношения с партнёром, детьми и другими членами семьи
        </p>
      </div>
      <div class="problems-point point3">
        <img
          src="@/assets/problems-point.png"
          alt="point"
          class="problems-point__img"
        />
        <p class="problems-point__text right">
          Сканирование физического тела, работа с заболеваниями
        </p>
      </div>
      <div class="problems-point point4">
        <img
          src="@/assets/problems-point.png"
          alt="point"
          class="problems-point__img"
        />
        <p class="problems-point__text left">
          Финансовые блоки и отношение к деньгам
        </p>
      </div>
      <div class="problems-point point5">
        <img
          src="@/assets/problems-point.png"
          alt="point"
          class="problems-point__img"
        />
        <p class="problems-point__text right">
          Перепросмотр зачатия и рождения
        </p>
      </div>
      <div class="problems-point point6">
        <img
          src="@/assets/problems-point.png"
          alt="point"
          class="problems-point__img"
        />
        <p class="problems-point__text left">
          Родительско-детские отношения
        </p>
      </div>
      <div class="problems-point point7">
        <img
          src="@/assets/problems-point.png"
          alt="point"
          class="problems-point__img"
        />
        <p class="problems-point__text right">
          Родовые программы и сценарии
        </p>
      </div>
      <div class="problems-point point8">
        <img
          src="@/assets/problems-point.png"
          alt="point"
          class="problems-point__img"
        />
        <p class="problems-point__text left">
          Призвание и предназначение
        </p>
      </div>
      <div class="problems-point point9">
        <img
          src="@/assets/problems-point.png"
          alt="point"
          class="problems-point__img"
        />
        <p class="problems-point__text right">
          Детские и взрослые травмы
        </p>
      </div>
      <div class="problems-point point10">
        <img
          src="@/assets/problems-point.png"
          alt="point"
          class="problems-point__img"
        />
        <p class="problems-point__text left">
          Воплощения в своём роду
        </p>
      </div>
      <div class="problems-point point11">
        <img
          src="@/assets/problems-point.png"
          alt="point"
          class="problems-point__img"
        />
        <p class="problems-point__text right">
          Кармические отношения
        </p>
      </div>
      <div class="problems-point point12">
        <img
          src="@/assets/problems-point.png"
          alt="point"
          class="problems-point__img"
        />
        <p class="problems-point__text left">
          Работа со страхами
        </p>
      </div>
    </div>
    <div class="result">
      <h2 class="result-title">Результаты, которыми вы будете гордиться</h2>
      <div class="result-block">
        <div
          v-for="(text, index) in resultText"
          :key="index"
          class="result-block-item"
        >
          <div class="result-block-item__inner">
            {{ text }}
          </div>
        </div>
      </div>
    </div>
    <div class="price">
      <h2 class="price-title">Стоимость</h2>
      <div class="price-block">
        <div
          v-for="(program, index) in programs"
          :key="index"
          class="price-block-item"
        >
          <div class="price-block-item-inner">
            <div class="price-block-item-inner__title">{{ program.name }}</div>
            <div class="price-block-item-inner__insession">В сеанс входит:</div>
            <div class="price-block-item-inner__descr">
              {{ program.descr[0] }}<br /><br />{{ program.descr[1]
              }}<br /><br />{{ program.descr[2] }}<br /><br />{{
                program.descr[3]
              }}
            </div>
            <div class="price-block-item-inner__oldprice">
              {{ program.oldPrice }}
            </div>
            <div class="price-block-item-inner__newprice">
              {{ program.newPrice }}
            </div>
            <a class="price-block-item-inner__button btn" href="#"
              >Записаться на сеанс</a
            >
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
          text: `Пробовал традиционные сеансы и терапии, но облегчения не испытал`,
          img: require(`@/assets/sessions-1.png`),
        },
        {
          text: `Дорожит своим временем. То, что не решалось годами, можно изменить за 1-8 сеансов`,
          img: require(`@/assets/sessions-2.png`),
        },
        {
          text: `Желает обрести гармонию – идти по тому жизненному пути, который выбрала душа, а не навязало общество`,
          img: require(`@/assets/sessions-3.png`),
        },
        {
          text: `Долгое время не может найти ответы на свои вопросы. Ходит по кругу и не может изменить сценарии своей жизни (идёт по разрушительным родовым сценариям)`,
          img: require(`@/assets/sessions-4.png`),
        },
        {
          text: `Имеет страхи и зависимости. Не знает куда двигаться дальше.  Имеет не экологичные отношения. Не может выйти на новый доход, не реализован. Имеет вопросы по здоровью и т.д.`,
          img: require(`@/assets/sessions-5.png`),
        },
        {
          text: `Хочет не просто получить советы и рекомендации, а установить причинно-следственные связи, чтобы в корне изменить отношение к ситуации`,
          img: require(`@/assets/sessions-6.png`),
        },
      ],
      resultText: [
        "Осознанное реагирование на свою жизнь, ситуации и людей. Сформируете новые нейронные связи",
        "Научитесь менять пространство вокруг себя наилучшим образом, улавливая подсказки Вселенной",
        "Обострение каналов восприятия мира: я знаю, я вижу, я чувствую, я слышу",
        "Получите поддержку своих наставников, рода и Ангелов Хранителей",
      ],
      programs: [
        {
          name: "Первый шаг",
          descr: [
            "1 погружение",
            "Предконсультация (формирование запроса клиента, ответы на вопросы) до 30 мин",
            "Cеанс 2-2.5 часа по вашему запросу",
            "Постконсультация (спустя 2-7 дней после сеанса) до 30 мин",
          ],
          oldPrice: "",
          newPrice: "100$",
        },
        {
          name: "Пакет «Осознание»",
          descr: [
            "4 погружения",
            "Предконсультации (формирование запроса клиента, ответы на вопросы перед каждым сеансом) до 30 мин",
            "Сеанс 2-2.5 часа по вашему запросу",
            "Постконсультация (спустя 2-7 дней после сеанса) до 30 мин",
          ],
          oldPrice: "400$",
          newPrice: "320$",
        },
        {
          name: "Пакет «Преображение»",
          descr: [
            "6 погружений",
            "Предконсультации (формирование запроса клиента, ответы на вопросы перед каждым сеансом) до 30 мин",
            "Сеанс 2-2.5 часа по вашему запросу",
            "Постконсультация (спустя 2-7 дней после сеанса) до 30 мин",
          ],
          oldPrice: "600$",
          newPrice: "450$",
        },
        {
          name: "Пакет «Перерождение»",
          descr: [
            "8 погружений",
            "Предконсультации (формирование запроса клиента, ответы на вопросы перед каждым сеансом) до 30 мин",
            "Сеанс 2-2.5 часа по вашему запросу",
            "Постконсультация (спустя 2-7 дней после сеанса) до 30 мин",
          ],
          oldPrice: "800$",
          newPrice: "560$",
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
    &__button {
      width: 280px;
      height: 50px;
      font-size: 18px;
      line-height: 50px;
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
  margin-bottom: 80px;
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
  &__button {
    width: 280px;
    height: 50px;
    font-size: 18px;
    line-height: 50px;
  }
}

.sessions {
  &-title {
    margin: 125px 0 15px 0;
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 34px;
  }
  &-cards {
    width: 1216px;
    margin: 0 auto 50px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: 70px;
    &-item {
      position: relative;
      padding: 5px;
      margin: 28px 0;
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
  &-text {
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 25px;
    color: #ae758d;
    margin-bottom: 10px;
  }
  &-text-footer {
    text-align: center;
    width: 598px;
    height: 96px;
    margin: 0 auto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 160%;
  }
}

.main {
  background-image: url("assets/main-back.png");
  background-size: cover;
  height: 3348px;
  margin-bottom: 80px;
}

.problems {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  height: 1000px;
  &-title {
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 34px;
  }
  &-plane {
    position: absolute;
    left: 50%;
    margin-left: -102px;
    width: 200px;
    height: 200px;
  }
  &-line {
    position: absolute;
    left: 50%;
    margin-left: -2px;
    top: 200px;
    width: 4px;
    height: 800px;
    background: linear-gradient(
      180deg,
      rgba(174, 117, 141, 0.6) 25.71%,
      rgba(174, 117, 141, 0) 100%
    );
    filter: blur(4px);
  }
  &-point {
    position: absolute;
    left: 50%;
    margin-left: -10px;
    &__img {
      width: 20px;
      height: 20px;
    }
    &__text {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      height: 26px;
      line-height: 26px;
      padding: 0 15px;
      position: absolute;
      top: 0;
      margin-top: -5px;
      width: 434px;
      &.left {
        left: 100%;
        text-align: left;
      }
      &.right {
        right: 100%;
        text-align: right;
      }
    }
    &.point1 {
      top: 245px;
    }
    &.point2 {
      top: 295px;
    }
    &.point3 {
      top: 345px;
    }
    &.point4 {
      top: 395px;
    }
    &.point5 {
      top: 445px;
    }
    &.point6 {
      top: 495px;
    }
    &.point7 {
      top: 545px;
    }
    &.point8 {
      top: 595px;
    }
    &.point9 {
      top: 645px;
    }
    &.point10 {
      top: 695px;
    }
    &.point11 {
      top: 745px;
    }
    &.point12 {
      top: 795px;
    }
  }
}

.result {
  margin-bottom: 150px;
  &-title {
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 34px;
  }
  &-block {
    width: 1216px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &-item {
      margin-top: 30px;
      width: 577px;
      height: 102px;
      padding: 5px;
      background: rgba(255, 241, 247, 0.7);
      box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
      &__inner {
        text-align: center;
        border: 1px dashed #ae758d;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}

.price {
  &-title {
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 34px;
    margin-bottom: 50px;
  }
  &-block {
    width: 1216px;
    margin: 0 auto;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    &-item {
      padding: 5px;
      width: 289px;
      height: 490px;
      background: rgba(255, 241, 247, 0.7);
      box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
      &-inner {
        padding: 20px 20px 25px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        border: 1px dashed #ae758d;
        &__title {
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 20px;
          margin-bottom: 15px;
        }
        &__insession {
          font-style: normal;
          font-weight: bold;
          font-size: 15px;
          line-height: 17px;
          margin-bottom: 10px;
        }
        &__descr {
          text-align: center;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 135%;
          margin-bottom: 20px;
        }
        &__oldprice {
          width: 56px;
          height: 34px;
          text-align: center;
          font-style: normal;
          font-weight: normal;
          font-size: 30px;
          line-height: 34px;
          text-decoration-line: line-through;
          color: #bdbdbd;
        }
        &__newprice {
          text-align: center;
          font-style: normal;
          font-weight: bold;
          font-size: 48px;
          line-height: 54px;
          color: #ae758d;
          margin-bottom: 25px;
        }
        &__button {
          width: 239px;
          height: 40px;
          font-size: 16px;
          line-height: 40px;
        }
      }
    }
  }
}

.btn {
  background: linear-gradient(91.83deg, #ae758d 0%, #353966 100%);
  box-shadow: 0px 7px 25px rgba(0, 0, 0, 0.35);
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
