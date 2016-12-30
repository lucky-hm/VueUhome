<template lang="html">
    <transition :enter-active-class="routerAnimate.enter" :leave-active-class="routerAnimate.leave">

      <router-view class="animated"></router-view>

    </transition>
</template>
<style>
  @import 'assets/css/animate.css';
  @import 'assets/css/animation.css';
  @import 'assets/css/muse-ui.css';
</style>
<style lang="scss">
  @import "assets/css/style";
</style>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters([
    'routerAnimate'
  ])
}
</script>
