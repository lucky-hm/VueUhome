<template lang="html">
  <div class="home-header">
    <div class="top-logo"></div>
    <div class="top-date">
      <span>2016年11月18日</span>
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
      <div on-tap="iconChange(3)" class="disable-user-behavior"><div class="content"></div></div>
      <div on-tap="iconChange(4)" class="disable-user-behavior"><div class="content"></div></div>
      <div on-tap="iconChange(5)" class="disable-user-behavior"><div class="content"></div></div>
      <!--ng-class="{true:'on',false:''}[icon_on==5]"-->
    </div>
    <div class="top-music" ng-controller="MusicPlayer">
      <audio id="media" src="/static/music/海楠 - 爱啦啦.mp3" controls=""></audio>
      <div class="t">
        <div class="mControl">
          <p class="musicTitle">海楠 - 爱啦啦</p>
          <div>
            <span class="f_l ng-binding">0:0</span>
            <div class="range">
              <input type="range" ng-change="progressChange()" id="range1" name="volume" ng-model="val" max="NaN" class="ng-pristine ng-valid ng-untouched ng-not-empty">
            </div>
            <span class="f_r ng-binding">0:0</span>
          </div>
          <div class="playControl">
            <span class="prev"></span>
            <span on-tap="play(this)" class="play"></span>
            <span class="next"></span>
          </div>
        </div>

      </div>
    </div>
    <div class="top-weather" ng-controller="weatherInfo">
      <!-- <img src="../img/home/weather.png" alt=""> -->
      <ul on-tap="active=true" class="disable-user-behavior">
        <li class="nowWeather">
          <h2>26°</h2>
          <p>微风，多云转小雨</p>
        </li>
        <!-- ngRepeat: val in weatherData --><!-- ngIf: $index !=0 --><!-- end ngRepeat: val in weatherData --><!-- ngIf: $index !=0 --><li ng-repeat="val in weatherData" ng-if="$index !=0" class="">
          <p>周六</p>
          <p class="img"></p>
          <p>22°/26°</p>
        </li><!-- end ngIf: $index !=0 --><!-- end ngRepeat: val in weatherData --><!-- ngIf: $index !=0 --><li ng-repeat="val in weatherData" ng-if="$index !=0" class="">
          <p>周日</p>
          <p class="img"></p>
          <p>22°/25°</p>
        </li><!-- end ngIf: $index !=0 --><!-- end ngRepeat: val in weatherData --><!-- ngIf: $index !=0 --><li ng-repeat="val in weatherData" ng-if="$index !=0" class="">
          <p>周一</p>
          <p class="img"></p>
          <p>21°/25°</p>
        </li><!-- end ngIf: $index !=0 --><!-- end ngRepeat: val in weatherData -->
      </ul>
      <div class="weatherInfo" ng-class="{true:'active',false:''}[active==true]" on-swipe-right="active = false;">
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
            <ul class="clearfix">
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
    </div>
  </div>
</template>

<script>
export default {
}
</script>
