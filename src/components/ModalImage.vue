<template>
  <div class="modal-image">
    <div class="modal-image-block">
      <img
        class="modal-image-block__image"
        :src="require(`@/assets/` + selectedImage + `.png`)"
        alt="selectedImage"
      />
      <img
        class="modal-image-block__close"
        src="../assets/close-modal.png"
        alt="close-modal"
        @click="hideModal"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalImage",
  props: {
    selectedImage: String,
  },
  methods: {
    hideModal() {
      this.$emit("hideModalImage");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-image {
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
    padding: 15px;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    position: relative;
    height: 90%;
    max-width: 85%;
    background-color: #fff;
    &__image {
      max-height: 100%;
      width: 100%;
    }
    &__close {
      position: absolute;
      right: -60px;
      top: 0;
      cursor: pointer;
    }
  }
}
</style>
