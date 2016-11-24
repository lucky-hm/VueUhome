import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  routerAnimate: {
    enter: 'animated slideInRight',
    leave: 'animated slideOutLeft'
  },
  headerShow: true,
  footerNavShow: true
}

const mutations = {
  routerGo (state) {
    state.routerAnimate = {
      enter: 'animated slideInRight',
      leave: 'animated slideOutLeft'
    }
  },
  routerBack (state) {
    state.routerAnimate = {
      enter: 'animated slideInLeft',
      leave: 'animated slideOutRight'
    }
  },
  changeHeaderStatus (state, status) {
    state.headerShow = status
  },
  changeFooterStatus (state, status) {
    state.footerNavShow = status
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
  }
}
const getters = {
  routerAnimate: state => state.routerAnimate,
  headerShow: state => state.headerShow,
  footerNavShow: state => state.footerNavShow
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
