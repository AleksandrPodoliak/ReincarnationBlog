<template>
  <header>
    <div class="header-content">
      <div class="header-content-lotos">
        <img src="@/assets/header-lotos.png" alt="lotos" />
        <div class="header-content-lotos__bigline"></div>
        <a href="tel:+380677651307" target="_self">
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
          жизни. Мудрая душа помнит и знает всё.<br />Выбери пакет сеансов ниже
          - позволь себе отыскать ответы в прошлых жизнях, во Благо своего
          светлого будущего.
        </p>
        <a class="header-content-info__button btn" href="#price"
          >Выбрать сеанс</a
        >
      </div>
      <img
        class="header-content-info__photo"
        src="@/assets/header-image.png"
        alt="photo"
      />
    </div>
  </header>
  <section class="product">
    <h2 class="product-title">О реинкарнациологии</h2>
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
      <a class="methods__button btn" href="#price">Выбрать сеанс</a>
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
    <modal-price
      v-if="isModalPrice"
      @hideModalPrice="hideModalPrice"
      @successModalPrice="successModalPrice"
      :programTitle="programTitle"
      :programPrice="programPrice"
    />
    <modal-thanks
      v-if="isModalThanks"
      @hideModalThanks="hideModalThanks"
      :titleModalThanks="titleModalThanks"
      :textModalThanks="textModalThanks"
    />
    <modal-image
      v-if="isModalImage"
      @hideModalImage="hideModalImage"
      :selectedImage="selectedImage"
    />
    <div class="price">
      <a name="price"></a>
      <h2 class="price-title">Стоимость</h2>
      <div class="price-block">
        <div
          v-for="(program, index) in programs"
          :key="index"
          class="price-block-item"
        >
          <div class="price-block-item-inner">
            <div class="price-block-item-inner__title">{{ program.name }}</div>
            <div class="price-block-item-inner__insession">
              В {{ program.content }} входит:
            </div>
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
            <div
              class="price-block-item-inner__button btn"
              :data-id="program.id"
              @click="showModalPrice"
            >
              Записаться на Сеанс
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about">
      <h2 class="about-title">Обо мне</h2>
      <ul class="about-list">
        Мой опыт – улучшение качества вашей жизни. Немного обо мне:
        <li
          class="about-list__item"
          v-for="(about, index) in aboutList"
          :key="index"
        >
          {{ about }}
        </li>
      </ul>
      <p class="about-text">
        Три года назад реинкарнационика помогла мне отыскать себя, начать ценить
        имеющееся и показала путь, по которому моя душа запланировала двигаться
        в этом воплощении. Сегодня я горжусь, что являюсь целителем душ – я и
        мои клиенты совершенствуемся, меняем свою жизнь к лучшему, выходя на
        новый уровень. Посылаю лучи только чистой энергетики – работаю через
        Творца, Светлых Учителей, Ангелов и Архангелов. Помните, только человек,
        достигший гармонии с собой, способен помочь обрести душевное равновесие
        другим.
      </p>
      <img src="@/assets/about-photo.png" alt="photo" class="about-photo" />
      <h2 class="about-title-inst">Я веду блог в Instagram</h2>
      <a
        target="_blank"
        href="https://www.instagram.com/nikolaeva.yuliia/?r=nametag"
        class="about-button"
        >Instagram</a
      >
    </div>
    <div class="form">
      <h2 class="form-title">Остались ещё вопросы или есть сомнения?</h2>
      <p class="form-addtext">Запишись на бесплатную консультацию</p>
      <iframe name="votar" style="display:none;"></iframe>
      <form class="form-inputs" target="votar">
        <div class="form-inputs-block">
          <span class="form-inputs-block__name">Ваше имя:</span>
          <input
            id="text"
            type="text"
            placeholder="Владислава"
            v-model="userName"
            required
          />
        </div>
        <div class="form-inputs-block">
          <span class="form-inputs-block__name">Ваш номер телефона:</span>
          <input
            id="tel"
            type="tel"
            placeholder="+38 099 999 99 99"
            v-model="userPhone"
            required
          />
        </div>
        <div class="form-inputs-block">
          <span class="form-inputs-block__name">Ваш e-mail:</span>
          <input
            id="email"
            type="text"
            placeholder="vladislava99@gmail.com"
            v-model="userEmail"
          />
        </div>
        <p class="form-inputs-notice">
          Нажимая на кнопку «Записаться» Вы соглашаетесь на обработку
          персональных данных
        </p>
        <input
          type="submit"
          @click="showModalThanks"
          class="form-inputs-button btn"
          value="Записаться"
        />
      </form>
    </div>
  </section>
  <section class="reviews">
    <h2 class="reviews-title">Отзывы</h2>
    <div class="reviews-slider">
      <img
        src="@/assets/arrow-left.png"
        alt="arrow-left"
        class="reviews-slider__arrow-left"
        @click="decrSliderCount"
      />
      <img
        @click="selectImage"
        @mousedown="stopInterval"
        @mouseup="startIntervalonMobile"
        v-for="(n, index) in 7"
        :key="index"
        :src="require(`@/assets/review` + (index + 1) + `.png`)"
        :data-photo="`review` + (index + 1)"
        alt="review"
        class="reviews-slider__img"
      />
      <img
        src="@/assets/arrow-right.png"
        alt="arrow-right"
        class="reviews-slider__arrow-right"
        @click="addSliderCount"
      />
    </div>
    <div class="reviews-points">
      <div
        class="reviews-points__point"
        v-for="(n, index) in 7"
        :key="index"
      ></div>
    </div>
    <p class="reviews-text">Больше отзывов Вы можете найти в моем Instagram</p>
    <a
      target="_blank"
      href="https://www.instagram.com/nikolaeva.yuliia/?r=nametag"
      class="reviews-button"
      >Instagram</a
    >
  </section>
  <section class="contact">
    <h2 class="contact-title">Контакты</h2>
    <div class="contact-block">
      <div
        v-for="(contact, index) in contacts"
        :key="index"
        class="contact-block-item"
      >
        <div class="contact-block-item__inner">
          <p class="contact-block-item__inner-title">
            {{ contact.title }}
          </p>
          <a
            :target="contact.target"
            :href="contact.href"
            class="contact-block-item__inner-text"
          >
            {{ contact.text }}
          </a>
        </div>
      </div>
    </div>
  </section>
  <footer class="footer">
    <img src="@/assets/footer-flower.png" alt="flower" class="footer-flower" />
    <a href="#" class="footer-upper"
      >Наверх
      <svg
        width="6"
        height="18"
        viewBox="0 0 6 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 0L0.113249 5L5.88675 5L3 0ZM2.5 4.5L2.5 18L3.5 18L3.5 4.5L2.5 4.5Z"
          fill="#AE758D"
        />
      </svg>
    </a>
  </footer>
</template>

<script>
import ModalPrice from "./components/ModalPrice.vue";
import ModalThanks from "./components/ModalThanks.vue";
import ModalImage from "./components/ModalImage.vue";
import axios from "axios";

export default {
  name: "App",
  components: { ModalPrice, ModalThanks, ModalImage },
  data() {
    return {
      contacts: [
        {
          title: "Номер телефона",
          text: "+38 (067) 765 13 07",
          target: "_self",
          href: "tel:+380677651307",
        },
        {
          title: "Instagram",
          text: "@nikolaeva.yuliia",
          target: "_blank",
          href: "https://www.instagram.com/nikolaeva.yuliia?r=nametag",
        },
        {
          title: "Telegram",
          text: "@YuliiaNikolaieva",
          target: "_blank",
          href: "https://t.me/YuliiaNikolaieva",
        },
      ],
      aboutList: [
        "окончила Институт реинкарнационики Мариса Дрешманиса;",
        "прошла целительный курс Татьяны Абоалелы;",
        " уже несколько лет делюсь приобретенным опытом, на основе которого запустила собственный марафон;",
        "использую в своей жизни дыхательные и даосские пратики, медитации, аффирмации, интуитивное питание, вакуум живота и не только – то, что способствует оздоровлению тела и контакту с душой.",
      ],
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
          id: "0",
          name: "Первый шаг",
          content: "сеанс",
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
          id: "1",
          name: "Пакет «Осознание»",
          content: "пакет",
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
          id: "2",
          name: "Пакет «Преображение»",
          content: "пакет",
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
          id: "3",
          name: "Пакет «Перерождение»",
          content: "пакет",
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
      sliderCount: 0,
      interval: Function,
      isModalPrice: false,
      isModalThanks: false,
      isModalImage: false,
      programTitle: "",
      programPrice: "",
      titleModalThanks: "",
      textModalThanks: "",
      userName: "",
      userPhone: "",
      userEmail: "",
      selectedImage: "",
      mobileWidth: 420,
    };
  },
  methods: {
    selectImage(event) {
      if (window.innerWidth > this.mobileWidth) {
        clearInterval(this.interval);
        const _this = event.target;
        this.selectedImage = _this.getAttribute("data-photo");
        this.isModalImage = true;
      }
    },
    hideModalImage() {
      this.startInterval();
      this.selectedImage = "";
      this.isModalImage = false;
    },
    successModalPrice(userData) {
      const apiUrl = `https://api.telegram.org/bot${process.env.VUE_APP_TOKEN}/sendMessage`;
      axios.post(apiUrl, {
        chat_id: process.env.VUE_APP_CHAT_ID,
        text: `Заявка на ${this.programTitle} от:\n\n${userData.userName}\n${userData.userPhone}\n${userData.userEmail}`,
      });
      this.isModalPrice = false;
      this.titleModalThanks = "Спасибо! Ваша запись принята!";
      this.textModalThanks =
        "Для уточнения всех деталей с вами свяжутся в ближайшее время";
      this.isModalThanks = true;
    },
    showModalThanks() {
      if (this.userName && this.userPhone) {
        const apiUrl = `https://api.telegram.org/bot${process.env.VUE_APP_TOKEN}/sendMessage`;
        axios.post(apiUrl, {
          chat_id: process.env.VUE_APP_CHAT_ID,
          text: `Заявка на консультацию от:\n\n${this.userName}\n${this.userPhone}\n${this.userEmail}`,
        });

        this.titleModalThanks = "Спасибо! Ваша запись на консультацию принята!";
        this.textModalThanks = "С вами свяжутся в ближайшее время";
        this.isModalThanks = true;
      }
    },
    showModalPrice(event) {
      const _this = event.target;
      const dataId = _this.getAttribute("data-id");
      this.programTitle = this.programs[dataId].name;
      this.programPrice = this.programs[dataId].newPrice;
      this.isModalPrice = true;
    },
    hideModalPrice() {
      this.isModalPrice = false;
    },
    hideModalThanks() {
      this.isModalThanks = false;
    },
    decrSliderCount() {
      clearInterval(this.interval);
      this.sliderCount = this.sliderCount == 0 ? 6 : this.sliderCount - 1;
      this.pics.forEach((el) => {
        el.style.display = "none";
      });
      this.points.forEach((el) => {
        el.style.backgroundColor = "#b9b9b9";
      });
      this.pics[this.sliderCount].style.display = "block";
      this.points[this.sliderCount].style.backgroundColor = "#AE758D";
      this.startInterval();
    },
    addSliderCount() {
      clearInterval(this.interval);
      this.sliderCount = this.sliderCount == 6 ? 0 : this.sliderCount + 1;
      this.pics.forEach((el) => {
        el.style.display = "none";
      });
      this.points.forEach((el) => {
        el.style.backgroundColor = "#b9b9b9";
      });
      this.pics[this.sliderCount].style.display = "block";
      this.points[this.sliderCount].style.backgroundColor = "#AE758D";
      this.startInterval();
    },
    stopInterval() {
      if (window.innerWidth <= this.mobileWidth) clearInterval(this.interval);
    },
    startIntervalonMobile() {
      if (window.innerWidth <= this.mobileWidth) {
        this.startInterval();
      }
    },
    startInterval() {
      this.interval = setInterval(() => {
        this.sliderCount = this.sliderCount == 6 ? 0 : this.sliderCount + 1;
        this.pics.forEach((el) => {
          el.style.display = "none";
        });
        this.points.forEach((el) => {
          el.style.backgroundColor = "#b9b9b9";
        });
        this.pics[this.sliderCount].style.display = "block";
        this.points[this.sliderCount].style.backgroundColor = "#AE758D";
      }, 5000);
    },
  },
  mounted() {
    this.pics = document.querySelectorAll(".reviews-slider__img");
    this.points = document.querySelectorAll(".reviews-points__point");
    this.pics[this.sliderCount].style.display = "block";
    this.points[this.sliderCount].style.backgroundColor = "#AE758D";
    this.startInterval();
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
  overflow: hidden;
  min-width: 1216px;
  width: 100%;
  margin: 0 auto;
}

header {
  width: 100%;
  height: 780px;
  padding: 40px 0 0 0;
  background-image: url("assets/header-back.png");
  background-size: cover;
  background-position: 50% 0%;
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
      width: 510px;
      top: 80px;
      right: -50px;
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
  background-position: 50% 0%;
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
  background-position: 50% 0%;
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
  margin-bottom: 150px;
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
      position: relative;
      padding: 5px;
      width: 289px;
      height: 490px;
      background-color: rgba(255, 241, 247, 0.7);
      z-index: 0;
      box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
      &:hover {
        background-color: #fff1f7;
        transform: scale(1.2);
        z-index: 100;
      }
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
          cursor: pointer;
          user-select: none;
        }
      }
    }
  }
}

.about {
  position: relative;
  width: 1216px;
  margin: 0 auto 150px auto;
  &-title {
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 34px;
    margin-bottom: 50px;
  }
  &-list {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 160%;
    list-style: none;
    &__item {
      position: relative;
      margin: 10px 0 0 100px;
      max-width: 495px;
      &::before {
        position: absolute;
        content: "";
        top: 8px;
        left: -25px;
        width: 10px;
        height: 10px;
        background-color: #ae758d;
      }
    }
  }
  &-text {
    margin: 10px 0 50px 0;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 160%;
    width: 804px;
  }
  &-photo {
    width: 550px;
    position: absolute;
    top: 0;
    right: -80px;
  }
  &-title-inst {
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 160%;
    margin-bottom: 10px;
  }
  &-button {
    text-align: center;
    text-decoration: none;
    position: relative;
    z-index: 100;
    margin: 0 auto;
    display: block;
    width: 280px;
    height: 60px;
    line-height: 54px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    border: 3px solid #ae758d;
  }
}

.form {
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1216px;
  margin: 0 auto;
  &-title {
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 34px;
    margin-bottom: 10px;
  }
  &-addtext {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 27px;
    margin-bottom: 30px;
  }
  &-inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    &-block {
      padding: 2px;
      position: relative;
      width: 392px;
      height: 40px;
      background: rgba(255, 241, 247, 0.7);
      box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
      &:not(:last-child) {
        margin-top: 15px;
      }
      &:last-child {
        margin-top: 54px;
      }
      &__name {
        position: absolute;
        top: 50%;
        margin-top: -6px;
        left: 20px;
        display: block;
        height: 18px;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 18px;
      }
      & input {
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: 1px dashed #ae758d;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 100%;
        &:focus {
          outline: none;
        }
        &::placeholder {
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 100%;
          color: #b9b9b9;
        }
      }
      & input[type="text"] {
        padding-left: 102px;
      }
      & input[type="tel"] {
        padding-left: 174px;
      }
    }
    &-notice {
      margin-top: 10px;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 13px;
      color: #4f4f4f;
    }
    &-button {
      cursor: pointer;
      user-select: none;
      width: 239px;
      height: 40px;
      line-height: 40px;
      margin-top: 46px;
      border: none;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
    }
  }
}

.reviews {
  width: 1216px;
  overflow: hidden;
  margin: 100px auto 150px auto;
  display: flex;
  flex-direction: column;
  &-title {
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 34px;
  }
  &-slider {
    position: relative;
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    &__img {
      display: none;
      height: 330px;
      cursor: pointer;
    }
    &__arrow-left,
    &__arrow-right {
      position: absolute;
      top: 50%;
      margin-top: -12px;
    }
    &__arrow-left {
      left: 0;
    }
    &__arrow-right {
      right: 0;
    }
  }
  &-points {
    margin-bottom: 35px;
    display: flex;
    justify-content: center;
    &__point {
      &:not(:last-child) {
        margin-right: 15px;
      }
      border-radius: 50%;
      width: 10px;
      height: 10px;
      background-color: #b9b9b9;
    }
  }
  &-text {
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 160%;
    margin-bottom: 15px;
  }
  &-button {
    text-align: center;
    text-decoration: none;
    margin: 0 auto;
    display: block;
    width: 280px;
    height: 60px;
    line-height: 54px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    border: 3px solid #ae758d;
  }
}

.contact {
  width: 907px;
  margin: 0 auto 200px auto;
  &-title {
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 34px;
    margin-bottom: 30px;
  }
  &-block {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    &-item {
      padding: 5px;
      width: 289px;
      height: 81px;
      background: rgba(255, 241, 247, 0.7);
      box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
      &__inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        border: 1px dashed #ae758d;
        &-title {
          margin-top: 10px;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 18px;
        }
        &-text {
          text-decoration: none;
          margin-top: 10px;
          font-style: normal;
          font-weight: bold;
          font-size: 20px;
          line-height: 22px;
          color: #ae758d;
        }
      }
    }
  }
}

.footer {
  position: relative;
  width: 1216px;
  margin: 0 auto 50px auto;
  display: flex;
  justify-content: center;
  &-upper {
    display: flex;
    position: absolute;
    top: 50%;
    margin-top: -9px;
    right: 0;
    width: 65px;
    height: 18px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;
    color: #ae758d;
    text-decoration: none;
    & svg {
      margin-left: 11px;
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

@media screen and (max-width: 800px) {
  #app {
    min-width: 768px;
    margin: 0 auto;
  }

  header {
    height: 1150px;
  }
  .header-content {
    padding: 0 20px;
    width: 100%;
    &-lotos {
      left: 20px;
    }
    &-info {
      width: 372px;
      margin: 110px 0 68px 0;
      &__photo {
        width: 420px;
        top: 550px;
        right: 50%;
        margin-right: -210px;
      }
    }
  }
  .product {
    padding: 0 20px;
    width: 100%;
    &-block {
      height: unset;
      &__inner {
        padding: 20px;
        font-size: 14px;
      }
    }
  }

  .methods_n_sessions {
    padding: 0 20px;
    height: unset;
  }

  .methods {
    width: 100%;
  }

  .sessions {
    &-cards {
      width: 100%;
      padding-left: 0;
      &-item {
        width: 229px;
        min-height: 193px;
        height: unset;
        margin-top: 125px;
        &__inner {
          align-items: flex-start;
          padding: 60px 10px 10px 10px;
        }
        &__img {
          width: 136px;
          height: 156px;
          left: 50%;
          margin-left: -68px;
          top: -90px;
        }
      }
    }
  }
  .main {
    height: unset;
  }

  .problems {
    &-point {
      &__text {
        padding: 0;
        width: 239px;
        &.left {
          left: 30px;
        }
        &.right {
          right: 30px;
        }
      }
    }
  }

  .result {
    &-block {
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
  }

  .price {
    &-block {
      padding: 0 50px;
      width: 100%;
      flex-wrap: wrap;
      justify-content: space-around;
      &-item {
        margin-bottom: 30px;
      }
    }
  }

  .about {
    width: 100%;
    padding: 0 20px;
    &-list {
      font-size: 14px;
      max-width: 60%;
      &__item {
        margin: 10px 0 0 25px;
        font-size: 14px;
      }
    }
    &-text {
      position: relative;
      z-index: 100;
      font-size: 14px;
      max-width: 43%;
    }
    &-photo {
      width: 465px;
      top: 50px;
      right: -15px;
    }
    &-title-inst {
      position: relative;
      z-index: 100;
    }
  }

  .form {
    padding: 0 20px;
    width: 100%;
  }
  .reviews {
    padding: 0 20px;
    width: 100%;
  }

  .contact {
    padding: 0 20px;
    width: 100%;
    margin: 0 auto 150px auto;
    &-block {
      &-item {
        width: 229px;
      }
    }
  }

  .footer {
    padding: 0 20px;
    width: 100%;
    margin: 0 auto 60px auto;
    &-upper {
      width: 66px;
      top: 75px;
      margin-top: -9px;
      right: 50%;
      margin-right: -33px;
    }
  }
}

@media screen and (max-width: 420px) {
  #app {
    min-width: 100%;
    margin: 0 auto;
  }

  header {
    height: unset;
  }
  .header-content {
    padding: 0 10px;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    &-lotos {
      position: static;
      & a {
        display: none;
      }
      &__shortline {
        display: none;
      }
      &__bigline {
        display: none;
        & a {
          display: none;
        }
      }
    }
    &-info {
      height: unset;
      position: static;
      width: 95%;
      margin: 73px 0 45px 0;
      &__title {
        font-size: 20px;
        line-height: 22px;
        margin-bottom: 10px;
      }
      &__name {
        text-align: center;
        font-size: 30px;
        line-height: 34px;
        margin-bottom: 20px;
      }
      &__text {
        font-size: 14px;
        line-height: 150%;
        margin-bottom: 30px;
      }
      &__photo {
        display: block;
        width: 100%;
        position: static;
        margin: 0;
      }
      &__button {
        width: 100%;
        height: 50px;
      }
    }
  }
  .product {
    padding: 0 10px;
    width: 100%;
    height: unset;
    margin: 0 auto 100px auto;
    &-title {
      font-size: 26px;
      line-height: 29px;
    }
    &-block {
      height: unset;
      &__inner {
        padding: 15px;
        font-size: 12px;
        line-height: 160%;
      }
    }
  }

  .methods_n_sessions {
    padding: 0 10px;
    height: unset;
    margin-bottom: 30px;
  }

  .methods {
    width: 100%;
    &-title {
      font-size: 26px;
      line-height: 32px;
    }
    &-block {
      &__inner {
        font-size: 12px;
        line-height: 160%;
      }
    }
    &-text {
      font-size: 18px;
      line-height: 20px;
    }
  }

  .sessions {
    &-title {
      margin: 100px 0 15px 0;
      font-size: 26px;
      line-height: 124%;
    }
    &-cards {
      width: 100%;
      padding-left: 0;
      justify-content: center;
      &-item {
        width: 229px;
        min-height: 175px;
        height: unset;
        margin-top: 100px;
        &__inner {
          align-items: flex-start;
          padding: 60px 10px 10px 10px;
          font-size: 14px;
        }
        &__img {
          width: 170px;
          height: 195px;
          left: 50%;
          margin-left: -85px;
          top: -110px;
        }
      }
    }
    &-text {
      font-size: 18px;
      line-height: 26px;
    }
    &-text-footer {
      font-size: 14px;
      line-height: 160%;
      width: 100%;
    }
  }
  .main {
    padding: 0 10px;
    height: unset;
  }

  .problems {
    &-title {
      font-size: 26px;
      line-height: 124%;
    }
    &-plane {
      top: 100px;
      left: 0;
      margin-left: -50px;
    }
    &-line {
      left: 0;
      margin-left: 50px;
      top: 230px;
    }
    &-point {
      width: 100%;
      left: 0;
      margin-left: 42px;
      &.point1 {
        top: 275px;
      }
      &.point2 {
        top: 325px;
      }
      &.point3 {
        top: 375px;
      }
      &.point4 {
        top: 425px;
      }
      &.point5 {
        top: 475px;
      }
      &.point6 {
        top: 525px;
      }
      &.point7 {
        top: 575px;
      }
      &.point8 {
        top: 625px;
      }
      &.point9 {
        top: 675px;
      }
      &.point10 {
        top: 725px;
      }
      &.point11 {
        top: 775px;
      }
      &.point12 {
        top: 825px;
      }
      &__text {
        margin-top: 0;
        max-width: unset;
        width: 80%;
        padding: 0;
        font-size: 12px;
        line-height: 160%;
        &.left {
          left: 30px;
        }
        &.right {
          text-align: left;
          right: unset;
          left: 30px;
        }
      }
    }
  }

  .result {
    margin-bottom: 100px;
    &-title {
      font-size: 26px;
      line-height: 124%;
    }
    &-block {
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
      &-item {
        &:first-child {
          margin-top: 30px;
        }
        margin-top: 15px;
        width: 100%;
        &__inner {
          padding: 15px;
          font-size: 12px;
          line-height: 160%;
        }
      }
    }
  }

  .price {
    padding: 0;
    margin-bottom: 100px;
    &-title {
      font-size: 26px;
      line-height: 29px;
    }
    &-block {
      padding: 0;
      width: 100%;
      flex-wrap: wrap;
      justify-content: center;
      &-item {
        width: 100%;
        margin-bottom: 30px;
        &:hover {
          background-color: rgba(255, 241, 247, 0.7);
          z-index: 0;
          transform: scale(1);
        }
      }
    }
  }

  .about {
    width: 100%;
    padding: 0;
    margin: 0 auto 100px auto;
    &-title {
      font-size: 26px;
      line-height: 29px;
    }
    &-list {
      max-width: 100%;
      text-align: center;
      &__item {
        text-align: left;
        margin: 10px 0 0 25px;
        font-size: 15px;
      }
    }
    &-text {
      text-align: center;
      position: relative;
      z-index: 100;
      font-size: 15px;
      max-width: 100%;
    }
    &-photo {
      position: static;
      width: 100%;
    }
    &-title-inst {
      position: relative;
      z-index: 100;
      font-size: 18px;
      line-height: 160%;
    }
    &-button {
      font-size: 16px;
    }
  }

  .form {
    padding: 0;
    width: 100%;
    &-title {
      text-align: center;
      font-size: 26px;
      line-height: 29px;
    }
    &-addtext {
      text-align: center;
      font-size: 16px;
      line-height: 20px;
    }
    &-inputs {
      &-block {
        width: 100%;
        &__name {
          font-size: 12px;
        }
        & input {
          &::placeholder {
            font-size: 14px;
          }
        }
        & input[type="text"] {
          padding-left: 85px;
        }
        & input[type="tel"] {
          padding-left: 138px;
        }
      }
      &-notice {
        text-align: center;
      }
    }
  }
  .reviews {
    padding: 0 10px;
    margin: 100px auto 100px auto;
    width: 100%;
    &-title {
      font-size: 26px;
      margin-bottom: 20px;
    }
    &-slider {
      width: 100%;
      height: 400px;
      &__arrow-left,
      &__arrow-right {
        position: absolute;
        top: 111.3%;
        margin-top: -12px;
      }
      &__arrow-left {
        left: 10px;
      }
      &__arrow-right {
        right: 10px;
      }
      &__img {
        cursor: unset;
        height: unset;
        width: unset;
        max-width: 100%;
        max-height: 100%;
      }
    }
    &-points {
      margin-top: 40px;
      margin-bottom: 50px;
    }
    &-text {
      font-size: 16px;
    }
  }

  .contact {
    padding: 0 10px;
    width: 100%;
    margin: 0 auto 100px auto;
    &-title {
      font-size: 26px;
    }
    &-block {
      flex-direction: column;
      align-items: center;
      &-item {
        width: 229px;
        margin-bottom: 15px;
      }
    }
  }

  .footer {
    padding: 0 10px;
    width: 100%;
    margin: 0 auto 100px auto;
    &-upper {
      width: 66px;
      top: 75px;
      margin-top: 15px;
      right: 50%;
      margin-right: -33px;
    }
  }
}
</style>
