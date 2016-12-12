<template>
  <div id="society" class="home-content view-container">
    <div class="mainContent pane society-group" >
        <div class="society-map">
          <ul>
            <li v-touch:tap="showMonitoring.bind(this,1)">1</li>
            <li v-touch:tap="showMonitoring.bind(this,2)">2</li>
            <li v-touch:tap="showMonitoring.bind(this,3)">3</li>
            <li v-touch:tap="showMonitoring.bind(this,4)">4</li>
          </ul>
          <!--<div class="blur"></div>-->
        </div>
        <div class="society-items">
          <h2>园区定位</h2>
          <div class="gprs">
            识别定位中
          </div>
          <ul>
            <li><img src="/static/img/home/test.png"></li>
          </ul>
          <div class="shake">定位卡振动按钮</div>
          <textarea placeholder="编辑信息"></textarea>
          <button>发送</button>
        </div>
        <div class="Monitoring" :class="MonitoringStatus==true ? '' : 'hide'">
        	<p class="name">{{MonitoringName}}</p>
        </div>
        <div id="shade" @click="shadeClick()" :class="shade==true ? 'ac' : 'hide'"></div>
        <!--  -->
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
        shade: false
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
      }
    }
  }
</script>
