<template lang="html">
  <div class="main-footer" :class="[footerShow==true ? 'active': '']">
        <!-- <div class="home-footer" v-touch:tap="footerChange.bind(this, true)">


        </div> -->
        <div class="Fcontrol">
          <ul class="footerNav">
            <router-link v-touch:tap="changeModule.bind(this,1)" to="/main/home" tag="li"><div class="border"><div class="l"></div><div class="r"></div></div><span>家</span></router-link>
            <router-link v-touch:tap="changeModule.bind(this,2)" to="/main/society" tag="li"><div class="border"><div class="l"></div><div class="r"></div></div><span>社</span></router-link>
            <router-link v-touch:tap="changeModule.bind(this,3)" to="/main/life" tag="li"><div class="border"><div class="l"></div><div class="r"></div></div><span>生</span></router-link>
            <router-link v-touch:tap="changeModule.bind(this,4)" to="/main/neighbor" tag="li"><div class="border"><div class="l"></div><div class="r"></div></div><span>邻</span></router-link>
          </ul>
          <div class="footerControl" :class="[footerNavShow ? 'navShow': '']">
            <a class="goHome" href="javascript:void(0);">回&nbsp;家</a>
            <a class="leaveHome" href="javascript:void(0);">离&nbsp;家</a>
            <a class="elevator" href="javascript:void(0);">呼&nbsp;梯</a>
            <a class="unlock" href="javascript:void(0);">开&nbsp;锁</a>
            <a class="monitoring" href="javascript:void(0);">监&nbsp;控</a>
            <a class="safe" href="javascript:void(0);">红外安锁</a>
          </div>
        </div>
        <div class="footerCircle"  v-touch:tap="footerChange.bind(this, false)"><div class="l"></div></div>
        <!-- 遮罩 -->
        <div class="shade" :class="footerShow==true?'hide':''" v-touch:tap="footerChange.bind(this, true)"></div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      footerShow: false,
      nowModule: 1
    }
  },
  computed: mapGetters([
    'footerNavShow'
  ]),
  methods: {
    footerChange (status) {
      this.footerShow = status
    },
    changeModule (Module) {
      this.nowModule = Module
//      if (this.nowModule < 4) {
//        this.changeHeaderStatus(true)
//      } else {
//        this.changeHeaderStatus(false)
//      }
      this.nowModule !== 1 ? this.changeFooterStatus(false) : this.changeFooterStatus(true)
    },
    ...mapActions(['changeHeaderStatus', 'changeFooterStatus'])
  }
}
</script>
