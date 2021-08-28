<template>
  <div class="modal-thanks">
    <div class="modal-thanks-block">
      <h2 class="modal-thanks-block__title">{{ titleModalThanks }}</h2>
      <p class="modal-thanks-block__text">{{ textModalThanks }}</p>
      <div @click="hideModal" class="modal-thanks-block__button btn">
        Вернуться на главную
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalThanks",
  props: {
    titleModalThanks: String,
    textModalThanks: String,
  },
  methods: {
    hideModal() {
      this.$emit("hideModalThanks");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-thanks {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10000;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.9);
  overflow: hidden;
  &-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 68px;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    position: relative;
    width: 568px;
    height: 300px;
    background-image: url("../assets/modal-price-back.png");
    &__title {
      text-align: center;
      margin-bottom: 15px;
      font-style: normal;
      font-weight: bold;
      font-size: 30px;
      line-height: 34px;
    }
    &__text {
      text-align: center;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 22px;
    }
    &__button {
      cursor: pointer;
      user-select: none;
      width: 239px;
      height: 40px;
      line-height: 40px;
      margin-top: 40px;
      border: none;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
    }
  }
}

@media screen and (max-width: 340px) {
  .modal-thanks {
    &-block {
      width: 90%;
      padding: 5%;
      &__title {
        font-size: 20px;
        line-height: 22px;
      }
      &__text {
        font-size: 16px;
        line-height: 18px;
      }
      &__button {
        width: 95%;
      }
    }
  }
}
</style>
