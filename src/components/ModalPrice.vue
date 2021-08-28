<template>
  <div class="modal-price">
    <div class="modal-price-block">
      <img
        class="modal-price-block__close"
        src="../assets/close-modal.png"
        alt="close-modal"
        @click="hideModal"
      />
      <h2 class="modal-price-block__title">Запись на сеанс</h2>
      <p class="modal-price-block__program">{{ programTitle }}</p>
      <p class="modal-price-block__price">{{ programPrice }}</p>
      <div class="form">
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
          <input
            @click="successModal"
            class="form-inputs-button btn"
            type="submit"
            value="Записаться на сеанс"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "ModalPrice",
  data() {
    return {
      userName: "",
      userPhone: "",
      userEmail: "",
    };
  },
  props: {
    programTitle: String,
    programPrice: String,
  },
  methods: {
    hideModal() {
      this.$emit("hideModalPrice");
    },
    successModal() {
      if (this.userName && this.userPhone) {
        this.$emit("successModalPrice", {
          userName: this.userName,
          userPhone: this.userPhone,
          userEmail: this.userEmail,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-price {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10000;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.9);
  overflow: hidden;
  &-block {
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    position: relative;
    width: 568px;
    height: 475px;
    background-image: url("../assets/modal-price-back.png");
    &__title {
      text-align: center;
      margin: 50px 0 15px 0;
      font-style: normal;
      font-weight: bold;
      font-size: 30px;
      line-height: 34px;
    }
    &__program {
      text-align: center;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 20px;
    }
    &__price {
      margin: 15px 0;
      text-align: center;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 40px;
    }
    &__close {
      position: absolute;
      margin: 20px;
      right: 0;
      cursor: pointer;
    }
  }
}

.form {
  width: 100%;
  &-inputs-button {
    margin-top: 32px !important;
  }
}

@media screen and (max-width: 340px) {
  .modal-price {
    &-block {
      width: 90%;
      &__close {
        margin: 10px;
        width: 35px;
      }
    }
  }

  .form {
    width: 95%;
      &-inputs-button {
        width: 90%;
    margin-top: 32px !important;
  }
  }
}
</style>
