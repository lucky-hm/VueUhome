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
          <div class="blur"></div>
        </div>
        <div class="society-items">
          <ul class="topTitle">
            <li class="ac">信息</li>
          </ul>
          <dl>
            <dt>报修<i class="edit" @click="showRepair()">我要报修</i></dt>
            <dd  class="repair">
              <h5>墙体维修</h5>
              <p class="details">4月9日，8:00-10:00AM<span class="more" @click="showMore">more</span></p>
              <p class="progress">
                <span>客户报修</span>
                <span>上门维修</span>
                <span>用户评价</span>
              </p>
              <p class="repairMan">
                <span>李晓明15879077879</span>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </p>
            </dd>
            <dt>活动</dt>
            <dd class="activity">
              <h5>羽毛球大赛召集中</h5>
              <p class="details">8:00AM，4月9日社区羽毛球馆<span class="more" @click="showMore">more</span></p>
            </dd>
            <dt>通知</dt>
            <dd class="notice">
              <h5>停水通知</h5>
              <p class="details">4月9日，上午8:00-上午10:00<span class="more" @click="showMore">more</span></p>
            </dd>
            <dd class="else">
              <ul>
                <li>账单缴费</li>
                <li>访客通行</li>
                <li>联系物业</li>
              </ul>
            </dd>
          </dl>
        </div>
        <div class="Monitoring" :class="MonitoringStatus==true ? '' : 'hide'">
        	<p class="name">{{MonitoringName}}</p>
        </div>
        <!--  -->
        <!--<div class="repair">
          
        </div>-->
        <mu-dialog dialogClass="repair" :open="repairStatus" title="Dialog" @close="shadeClick">
          <div>
            <ul class="addPic">
              <li><label><input type="file"></label></li>
              <li><label><input type="file"></label></li>
              <li><label><input type="file"></label></li>
              <li><label><input type="file"></label></li>
              <li><label><input type="file"></label></li>
            </ul>
            <div class="describe">
              <h6>报修内容：</h6>
              <div class="enableInput" contenteditable="true">
              </div>
            </div>
          </div>
          <mu-flat-button slot="actions" primary @click="shadeClick" label="提交"/>
        </mu-dialog>
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
      this.changeHeaderStatus(true)
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
      ...mapActions(['changeFooterStatus', 'changeHeaderStatus']),
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
