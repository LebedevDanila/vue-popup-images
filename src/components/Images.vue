<template>
  <div class="images">
    <img
    v-for="(image, index) in images"
    :key="index"
    :src="image.url"
    @click="openImage(image.id)"
    alt="images"
    class="images__item"
    >
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: 'Images',
  data() {
    return {
      images: []
    }
  },
  async mounted() {
    const res = await fetch('https://boiling-refuge-66454.herokuapp.com/images');
    const images = await res.json();

    this.images = images;
  },
  methods: {
    ...mapMutations(['toggleModal', 'updateCurrentImageInfo']),
    async openImage(id) {
      const res = await fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`);
      const info = await res.json();

      this.updateCurrentImageInfo(info);
      this.toggleModal();
    }
  }
}
</script>

<style lang="scss">
.images {
  max-width: 930px;
  padding: 0 30px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  &__item {
    width: 32%;
    margin-bottom: 30px;
    cursor: pointer;
  }
}
</style>