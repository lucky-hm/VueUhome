import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  user: {
    account: 'test'
  },
  routerAnimate: {
    enter: 'slideInRight',
    leave: 'slideOutLeft'
  },
  slideShow: false,
  headerShow: true,
  footerNavShow: true
}

const mutations = {
  routerGo (state) {
    state.routerAnimate = {
      enter: 'slideInRight',
      leave: 'slideOutLeft'
    }
  },
  routerBack (state) {
    state.routerAnimate = {
      enter: 'slideInLeft',
      leave: 'slideOutRight'
    }
  },
  changeHeaderStatus (state, status) {
    state.headerShow = status
  },
  changeFooterStatus (state, status) {
    state.footerNavShow = status
  },
  changeSlideStatus (state, status) {
    state.slideShow = status
  }
}
const actions = {
  changeDevice: ({ commit }, nowDevice) => {
    commit('changeDevice', nowDevice)
  },
  changeHeaderStatus: ({ commit }, status) => {
    commit('changeHeaderStatus', status)
  },
  changeFooterStatus: ({ commit }, status) => {
    commit('changeFooterStatus', status)
  },
  changeSlideStatus: ({ commit }, status) => {
    commit('changeSlideStatus', status)
  }
}
const getters = {
  routerAnimate: state => state.routerAnimate,
  headerShow: state => state.headerShow,
  footerNavShow: state => state.footerNavShow,
  user: state => state.user,
  slideShow: state => state.slideShow
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
