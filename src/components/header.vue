<template lang="html">
  <div class="home-header">
    <div class="top-logo"></div>
    <div class="top-date">
      <span>2016年11月18日</span>
      <!-- <mu-date-picker v-model="nowDate" format="YYYY年MM月DD日" container="inline" underlineShow="false" /> -->
      <div class="content">
        <img src="/static/img/home/calendar.png" alt="">
        <div class="activity">
          <img src="/static/img/home/calendar1.png" alt="">
          <div class="slide">
            <img class="l" src="/static/img/home/calendarL.png" alt="">
            <img class="r" src="/static/img/home/calendarR.png">
          </div>
        </div>
      </div>
    </div>
    <div class="top-icon">
      <div on-tap="iconChange(1)" class="message"><i>2</i><div class="content"><img src="/static/img/home/infoCard.png" alt=""><div class="more"><div class="ac"></div><img src="/static/img/home/infoDetails.png" alt=""></div></div></div>
      <div on-tap="iconChange(2)" class="video"><div class="content"><img src="/static/img/home/video.png" alt=""><div class="addressBook"><img src="/static/img/home/video1.png" alt=""></div></div></div>
      <div on-tap="iconChange(3)"><div class="content"></div></div>
      <div on-tap="iconChange(4)"><div class="content"></div></div>
      <div on-tap="iconChange(5)"><div class="content"></div></div>
      <!--ng-class="{true:'on',false:''}[icon_on==5]"-->
    </div>
    <div class="top-music">
      <audio v-on:loadedmetadata="loadedmetadata()" v-on:timeupdate="timeupdate(true)" id="media" >
        <source src="/static/music/海楠 - 爱啦啦.mp3" controls="" />
      </audio>
      <div class="t">
        <div class="mControl">
          <p class="musicTitle">海楠 - 爱啦啦</p>
          <div class="playTime">
            <span>{{currentTime|minutes}}</span><mu-slider :min="0" :max="Number(duration)" v-on:change="timeupdate(false)" v-model="currentTime" class="demo-slider"/><span class="duration">{{duration|minutes}}</span>
          </div>
          <div class="playControl">
            <span class="prev"></span><span v-touch:tap="play" class="play"></span><span class="next"></span>
          </div>
        </div>

      </div>
    </div>
    <div class="top-weather">
      <ul v-touch:tap="weatherShow.bind(this, true)">
        <li class="nowWeather">
          <h2>{{weatherData[0].date | fNowWeather}}</h2>
          <p>{{weatherData[0].wind}}，{{weatherData[0].weather}}</p>
        </li>
        <li v-for="val,index in weatherData" v-if="index !==0">
            <p>{{val.date}}</p>
            <p class="img" :alt="index"></p>
            <p>{{val.temperature | fWeather}}</p>
        </li>
      </ul>
      <div class="slideInfo" :class="weatherDetails?'active':''" v-touch:swiperight="weatherShow.bind(this, false)">
        <ul class="topTitle">
          <!--<li @click="tabControl = 0" :class="tabControl==0?'ac':''">天气</li>-->
          <li @click="tabControl = 1" :class="tabControl==1?'ac':''">信息</li>
        </ul>
        <div :class="tabControl==0?'':'hide'" class="weatherInfo">
          <div class="city">
            <h5>珠海</h5>
            <span>多云</span>
            <h4>28<span>℃</span></h4>
          </div>
          <div class="weatherBg">
            <div class="todayInfo">
              <p class="clearfix">
                <span class="f_l">周四 11/17</span>
                <span class="f_r">34&nbsp;-&nbsp;27</span>
              </p>
              <ul>
                <li>
                  <span class="time">11am</span>
                  <i></i>
                  <span>30</span>
                </li>
                <li>
                  <span class="time">11am</span>
                  <i></i>
                  <span>30</span>
                </li>
                <li>
                  <span class="time">11am</span>
                  <i></i>
                  <span>30</span>
                </li>
                <li>
                  <span class="time">11am</span>
                  <i></i>
                  <span>30</span>
                </li>
              </ul>
            </div>
            <div class="todayDetails clearfix">
              <div class="f_l">
                <label>详细资料</label>
              </div>
              <ul>
                <li class="humidity">63%</li>
                <li class="ultraviolet">中4</li>
                <li class="windDirection"><span>东北</span>3公尺/秒</li>
                <li class="PM">53良</li>
              </ul>
            </div>
            <div class="last7">
              <ul>
                <li class="sunny">
                  <label>星期五</label>
                  <i class="weather"></i>
                  <span class="temperature">27°<em>23°</em></span>
                </li>
                <li class="sunny">
                  <label>星期六</label>
                  <i class="weather"></i>
                  <span class="temperature">27°<em>23°</em></span>
                </li>
                <li class="sunny">
                  <label>星期日</label>
                  <i class="weather"></i>
                  <span class="temperature">27°<em>23°</em></span>
                </li>
                <li class="sunny">
                  <label>星期一</label>
                  <i class="weather"></i>
                  <span class="temperature">27°<em>23°</em></span>
                </li>
                <li class="sunny">
                  <label>星期而</label>
                  <i class="weather"></i>
                  <span class="temperature">27°<em>23°</em></span>
                </li>
                <li class="sunny">
                  <label>星期三</label>
                  <i class="weather"></i>
                  <span class="temperature">27°<em>23°</em></span>
                </li>
                <li class="sunny">
                  <label>星期四</label>
                  <i class="weather"></i>
                  <span class="temperature">27°<em>23°</em></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <dl :class="tabControl==1?'':'hide'" class="Information">
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
    </div>
    <mu-dialog dialogClass="repair" :open="repairStatus" title="Dialog" @close="shadeClick">
      <div>
        <ul class="addPic">
          <li><label><input class="repairFile" type="file" accept="image/*"></label></li>
          <li><label><input class="repairFile" type="file" accept="image/*"></label></li>
          <li><label><input class="repairFile" type="file" accept="image/*"></label></li>
          <li><label><input class="repairFile" type="file" accept="image/*"></label></li>
          <li><label><input class="repairFile" type="file" accept="image/*"></label></li>
        </ul>
        <div class="describe">
          <h6>报修内容：</h6>
          <!--<div class="enableInput" contenteditable="true">-->
          <!--</div>-->
          <textarea v-model="textVal" v-on:scroll.prevent="limitThree" class="enableInput" maxlength="50" rows="3"></textarea>
        </div>
      </div>
      <mu-flat-button slot="actions" primary @click="shadeClick" label="提交"/>
    </mu-dialog>
    <div class="moreRecord" :class="moreStatus==true ? '' : 'hide'"></div>
    <div id="shade" @click="shadeClick()" :class="shade==true ? 'ac' : 'hide'"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nowDate: '2016年12月01日',
      weatherDetails: false,
      canPlay: true,
      currentTime: '0',
      duration: '0',
      weatherData: [{data: '', wind: ''}],
      tabControl: 0,
      repairStatus: false,
      moreStatus: false,
      shade: false,
      textVal: ''
    }
  },
  methods: {
    weatherShow (status) {
      this.weatherDetails = status
    },
    loadedmetadata () {
      let audio = document.getElementById('media')
      this.duration = audio.duration
    },
    play () {
      let audio = document.getElementById('media')
      audio.currentTime = this.currentTime
      if (audio.paused === true) {
        audio.play()
      } else {
        audio.pause()
      }
    },
    timeupdate (auto) {
      let audio = document.getElementById('media')
      if (auto === true && this.canPlay === true) {
        this.currentTime = audio.currentTime
      } else {
        this.canPlay = false
        var that = this
        audio.currentTime = this.currentTime
        setTimeout(function () {
          that.canPlay = true
        }, 50)
      }
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
    limitThree () {
      this.textVal = this.textVal.substr(0, this.textVal.length - 1)
    }
  },
  mounted () {
    var that = this
    this.$http.get(
      'http://api.jirengu.com/weather.php',
      {emulateJSON: true, emulateHTTP: true}
    ).then((data) => {
      data.json().then(function (re) {
        that.weatherData = re.results[0].weather_data
      })
    }, (response) => {
      console.log(response)
    })
  },
  filters: {
    minutes (val) {
      val = val || 0
      var output = ''
      var h = (val / 60).toFixed(0)
      var s = (Number(val).toFixed(0)) % 60
      output = h + ':' + s
      return output
    },
    fWeather (val) {
      val = val || ''
      var output = ''
      output = val.replace(/ ~ /g, '/').replace(/℃/g, '').replace(/(.*)\/(.*)/g, '$2°' + '/$1°')
      return output
    },
    fNowWeather (val) {
      val = val || ''
      var output = ''
      output = val.replace(/.*：(.*)℃.*/g, '$1°')
      return output
    },
    time (val) {
      val = val || 0
      var output = ''
      var h = (val / 60).toFixed(0)
      var s = (Number(val).toFixed(0)) % 60
      output = h + ':' + s
      return output
    }
  }
}
</script>
