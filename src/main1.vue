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
      <div class="home-right-panel" :class="headerShow?'':'headHide'" >
        <!--头部信息栏-->
        <top></top>

        <!--内容栏-->
        <transition :enter-active-class="routerAnimate.enter" :leave-active-class="routerAnimate.leave">
          <keep-alive>
          <router-view></router-view>
          </keep-alive>
        </transition>
      </div>

      <!--底部浮动切换栏-->
      <bottom></bottom>
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
import top from './components/header.vue'
import bottom from './components/footer.vue'
export default {
  computed: mapGetters([
    'routerAnimate',
    'headerShow'
  ]),
  components: { top, bottom }
}
</script>
