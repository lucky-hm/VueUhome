<template>
  <div id="main" class="full" >
    <div class="home pane">
      <!--左边导航栏-->
      <div class="home-left-panel">
        <ul>
          <li><a class="main-left-menu"></a></li>
          <li><a class="main-left-users"></a></li>
          <li><a class="main-left-call"></a></li>
          <!--<li><a class="main-left-exit"  on-tap="loginOut()"></a></li>-->
          <li><router-link to="/loginRegister" class="main-left-exit"></router-link></li>
        </ul>
      </div>


      <!--右边内容栏-->
      <div class="home-right-panel" ng-class="{true:'',false:'headHide'}[headShow==true]">
        <!--头部信息栏-->
        <header></header>

        <!--内容栏-->
        <transition :enter-active-class="routerAnimate.enter" :leave-active-class="routerAnimate.leave">
          <keep-alive>
          <router-view></router-view>
          </keep-alive>
        </transition>
      </div>

      <!--底部浮动切换栏-->
      <div class="main-footer" :class="[footerShow ? 'footerShow': '']">
            <div class="home-footer" v-touch:tap="footerChange.bind(this, true)">
              <ul class="footer-circle">
                <router-link class="home-footer-active" to="/main/home" tag="li"><div class="l"></div><div class="r"></div></router-link>
                <router-link v-touch:tap="addNote" class="home-footer-active" to="/main/society" tag="li"><div class="l"></div><div class="r"></div></router-link>
                <router-link class="home-footer-active" to="/main/life" tag="li"><div class="l"></div><div class="r"></div></router-link>
                <router-link class="home-footer-active" to="/main/neighbor" tag="li"><div class="l"></div><div class="r"></div></router-link>
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
    </div>
      <!-- <div class="welcome-bg">
      </div>
      <div class="welcome">
          <p>欢迎您</p>
          <div class="f_l">
            <p>尊敬的{{name}}</p>
            <span>级别：云家会员</span>
          </div>
          <div class="f_r">
            <p>你有一条消息未读</p>
            <span>来自：物业管理处</span>
          </div>
        </div> -->
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import header from './components/header.vue'
export default {
  computed: mapGetters([
    'routerAnimate'
  ]),
  components: { header },
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
