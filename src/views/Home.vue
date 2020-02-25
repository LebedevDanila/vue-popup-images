<template>
  <div class="home">
    <h1>Popup images</h1>
    <Images />
    <Modal v-if="this.$store.getters.isOpenModal" />
  </div>
</template>

<script>
// @ is an alias to /src
import Images from '@/components/Images.vue'
import Modal from '@/components/Modal.vue'

export default {
  name: 'Home',
  components: {
    Images, Modal
  }
}
</script>

<style lang="scss">
.home {
  h1 {
    text-align: center;
    font-size: 36px;
    text-transform: uppercase;
    line-height: 42px;
    margin-bottom: 30px;
    margin-top: 15px;
  }
}
</style>
