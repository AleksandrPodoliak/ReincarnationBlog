<template>
  <div class="modal-price">
    <div class="modal-price-block"></div>
  </div>
</template>

<script>

export default {
  name: "ModalPrice",
  methods: {
    hideModal() {
      this.$emit('hideModalPrice');
    },
  },
};
</script>

<style lang="scss">
.modal-price {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10000;
  inset: 0;
  background-color: rgba(17, 17, 17, 0.438);
  overflow: hidden;
  &-block {
    width: 568px;
    height: 475px;
    background-image: url('../assets/modal-price-back.png');
  }
}
</style>
