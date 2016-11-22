<template lang="html">
  <div class="main-footer" :class="[footerShow ? 'footerShow': '']">
        <div class="home-footer" v-touch:tap="footerChange.bind(this, true)">
          <ul class="footer-circle">
            <router-link class="home-footer-active" to="/main/home" tag="li"><div class="l"></div><div class="r"></div></router-link>
            <router-link to="/main/society" tag="li"><div class="l"></div><div class="r"></div></router-link>
            <router-link to="/main/life" tag="li"><div class="l"></div><div class="r"></div></router-link>
            <router-link to="/main/neighbor" tag="li"><div class="l"></div><div class="r"></div></router-link>
          </ul>
          <ul>
            <li>家</li>
            <li>社</li>
            <li>生</li>
            <li>邻</li>
          </ul>
          <div class="footerCircle"><div class="l"></div></div>
        </div>

        <div class="footernav" :class="[footerShow ? '': 'footerShow']">
          <a class="goHome" href="javascript:void(0);"></a>
          <a class="leaveHome" href="javascript:void(0);"></a>
          <a class="elevator" href="javascript:void(0);"></a>
          <a class="unlock" href="javascript:void(0);"></a>
          <a class="monitoring" href="javascript:void(0);"></a>
          <a class="safe" href="javascript:void(0);"></a>
        </div>
        <div class="shade" v-touch:tap="footerChange.bind(this, false)">
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      footerShow: false
    }
  },
  methods: {
    footerChange (status) {
      this.footerShow = status
    }
  }
}
</script>
