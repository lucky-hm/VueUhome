import Vue from 'vue'
import VueRouter from 'vue-router'
import VueTouch from '../lib/vue-touch'
import routes from './routers'
import store from './store'
import index from './index.vue'
Vue.use(VueRouter)
Vue.use(VueTouch)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#uHome',
  router,
  store,
  VueTouch,
  components: { index },
  computed: {
    enter () {
      return store.state.routerAnimate.enter
    },
    leave () {
      return store.state.routerAnimate.leave
    }
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.length > from.matched.length) {
    store.commit('routerGo')
  } else if (to.matched.length < from.matched.length) {
    store.commit('routerBack')
  } else {
    for (var i = 0; i < routes.length; i++) {
      if (to.matched[0].path === routes[i].path) {
        for (var j = 0; j < routes[i].children.length; j++) {
          if (from.matched[from.matched.length - 1].path.split('/').reverse()[0] === routes[i].children[j].path) {
            store.commit('routerGo')
            break
          } else if (to.matched[to.matched.length - 1].path.split('/').reverse()[0] === routes[i].children[j].path) {
            store.commit('routerBack')
            break
          }
        }
        break
      }
    }
  }
  next()
})
