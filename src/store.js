import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  routerAnimate: {
    enter: 'animated slideInRight',
    leave: 'animated slideOutLeft'
  }
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
  }
}
const actions = {

}
const getters = {
  routerAnimate: state => state.routerAnimate
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
