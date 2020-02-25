import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isOpenModal: false,
    currentImageInfo: {}
  },
  mutations: {
    toggleModal(state) {
      state.isOpenModal = !state.isOpenModal;
    },
    updateCurrentImageInfo(state, info) {
      state.currentImageInfo = info;
    }
  },
  getters: {
    isOpenModal: state => state.isOpenModal,
    currentImageInfo: state => state.currentImageInfo
  }
})
