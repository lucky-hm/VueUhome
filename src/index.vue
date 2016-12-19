<template lang="html">
    <transition :enter-active-class="routerAnimate.enter" :leave-active-class="routerAnimate.leave">
      <keep-alive>
      <router-view class="animated"></router-view>
      </keep-alive>
    </transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters([
    'routerAnimate'
  ])
}
</script>
