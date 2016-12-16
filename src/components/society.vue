<template>
  <div id="society" class="home-content view-container">
    <div class="mainContent pane society-group" >
        <div class="society-map">
          <ul class="camera">
            <li>
              <div class="box">
                <p>申请查看监控</p>
                <img src="/static/img/home/-135.png">
                <span>主入口1号监控机位</span>
                <div class="btnL">
                  <button v-touch:tap="showMonitoring.bind(this,1)">申请查看</button>
                  <button>取消</button>
                </div>
              </div>
            </li>
            <li v-touch:tap="showMonitoring.bind(this,2)"></li>
            <li v-touch:tap="showMonitoring.bind(this,3)"></li>
            <li v-touch:tap="showMonitoring.bind(this,4)"></li>
            <li v-touch:tap="showMonitoring.bind(this,5)"></li>
          </ul>
          <ul class="man">
            <li v-on:webkitAnimationEnd="tadaing=false" class="animated" :class="{'tada': tadaing}">
              <div class="card">
                <p class="name">琪琪</p>
                <span>已识别她的定位卡</span>
              </div>
            </li>
          </ul>
          <!--<div class="blur"></div>-->
        </div>
        <div class="society-items">
          <h2>园区定位</h2>
          <div class="gprs">
            识别定位中
          </div>
          <ul>
            <li><img src="/static/img/home/test.png"><p>邓丽君</p></li>
          </ul>
          <div class="shake" v-touch:tap="tada">定位卡振动按钮</div>
          <textarea placeholder="编辑信息"></textarea>
          <button>发送</button>
        </div>
        <div class="Monitoring" :class="MonitoringStatus==true ? '' : 'hide'">
        	<p class="name">{{MonitoringName}}</p>
        </div>
        <div id="shade" v-touch:tap="shadeClick" :class="shade==true ? 'ac' : 'hide'"></div>
        <!--<div class="repair">

        </div>-->
      </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default{
    created () {
      this.changeFooterStatus(false)
      this.changeHeaderStatus(true)
    },
    data () {
      return {
        MonitoringName: '1',
        textVal: '',
        MonitoringStatus: false,
        repairStatus: false,
        moreStatus: false,
        shade: false,
        tadaing: false
      }
    },
    methods: {
      ...mapActions(['changeFooterStatus', 'changeHeaderStatus']),
      limitThree () {
        this.textVal = this.textVal.substr(0, this.textVal.length - 1)
      },
      showMonitoring (index) {
        this.MonitoringName = index
        this.MonitoringStatus = true
        this.shade = true
      },
      showRepair () {
        this.repairStatus = true
        this.shade = true
      },
      showMore () {
        this.moreStatus = true
        this.shade = true
      },
      shadeClick () {
        this.MonitoringStatus = false
        this.repairStatus = false
        this.moreStatus = false
        this.shade = false
      },
      tada () {
        this.tadaing = true
      }
    }
  }
</script>
