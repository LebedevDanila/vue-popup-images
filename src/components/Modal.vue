<template>
  <div class="modal">
    <div class="modal__content">
      <div class="modal__close" @click="toggleModal()">&#10005;</div>
      <div class="modal__left">
        <img :src="currentImageInfo.url" alt="" class="modal__image">
        <form class="modal__form">
          <input type="text" class="modal__form-field" placeholder="Ваше имя">
          <input type="text" class="modal__form-field" placeholder="Ваш комментарий">
          <input type="submit" class="modal__form-submit" value="Оставить комментарий">
        </form>
      </div>
      <div class="modal__comments" v-if="currentImageInfo.comments.length">
        <div
        class="modal__comment"
        v-for="(comment, index) in currentImageInfo.comments"
        :key="index"
        >
          <div class="modal__comment-date">{{comment.date | convertDate}}</div>
          <div class="modal__comment-text">{{comment.text}}</div>
        </div>
      </div>
      <div class="modal__comments-no" v-else>Комментариев пока нет!</div>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'

export default {
  name: 'Modal',
  methods: {
    ...mapMutations(['toggleModal'])
  },
  computed: {
    ...mapGetters(['currentImageInfo'])
  },
  filters: {
    convertDate(date) {
      return new Date(date).toLocaleDateString();
    }
  }
}
</script>

<style lang="scss">
.modal {
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background: rgba(44, 62, 80, 0.75);
  &__content {
    width: 680px;
    background: #fff;
    padding: 30px;
    border-radius: 5px;
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &__close {
    position: absolute;
    top: 7px;
    right: 7px;
    font-size: 30px;
    font-weight: bold;
    line-height: .8;
    cursor: pointer;
    transform: scale(.9);
  }
  &__close:hover {
    transition: 0.7s all ease;
    transform: scale(1);
  }
  &__left {
    width: 331px;
  }
  &__image {
    width: 100%;
    height: 220px;
    margin-bottom: 25px;
  }
  &__comments {
    width: 40%;
  }
  &__comment {
    margin-bottom: 20px;
    &-date {
      color: #999999;
      margin-bottom: 5px;
      font-size: 17px;
    }
    &-text {
      font-size: 21px;
      font-weight: bold;
    }
  }
  &__comment:last-child {
    margin-bottom: 0;
  }
  &__comments-no {
    text-align: center;
    font-size: 21px;
    font-weight: bold;
    margin-top: 25px;
  }
  &__form {
    input {
      width: 100%;
      height: 35px;
    }
    &-field {
      border: 1px solid #CCCCCC;
      border-radius: 3px;
      padding-left: 15px;
      margin-bottom: 20px;
      color: #CCCCCC;
      font-size: 15px;
    }
    &-submit {
      background: #4997D0;
      border: none;
      border-radius: 3px;
      color: #fff;
      font-size: 17px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
}
</style>