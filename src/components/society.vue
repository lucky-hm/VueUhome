<template>
  <div id="society" class="home-content view-container">
    <div class="mainContent pane society-group" >
        <div class="society-map">
          <ul>
            <li @click="showMonitoring(1)">1</li>
            <li @click="showMonitoring(2)">2</li>
            <li @click="showMonitoring(3)">3</li>
            <li @click="showMonitoring(4)">4</li>
          </ul>
        </div>
        <div class="society-items">
          <div class="repairBtn" @click="showRepair()"></div>
          <div class="more" @click="showMore()"></div>
        </div>
        <div class="Monitoring" :class="MonitoringStatus==true ? '' : 'hide'">
        	<p class="name">{{MonitoringName}}</p>
        </div>
        <div class="repair" :class="repairStatus==true ? '' : 'hide'"></div>
        <div class="moreRecord" :class="moreStatus==true ? '' : 'hide'"></div>
        <div id="shade" @click="shadeClick()" :class="shade==true ? 'ac' : 'hide'"></div>
      </div>
  </div>
</template>
<script type="text/javascript">
  import { mapActions } from 'vuex'
  export default{
    created () {
      this.changeFooterStatus(false)
    },
    data () {
      return {
        MonitoringName: '1',
        MonitoringStatus: false,
        repairStatus: false,
        moreStatus: false,
        shade: false
      }
    },
    methods: {
      ...mapActions(['changeFooterStatus']),
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
