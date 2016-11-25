<template>
  <div id="neighbor" class="home-content view-container">
    <div class="mainContent pane" >

      <div class="chat-head">
        <h2>邻里</h2>
        <div class="f_l">
          <img src="/static/img/home/test.png" alt="">
          <div class="dib">
            <p class="name">John</p>
            <p class="introduced">建筑设计师、A单元3306</p>
          </div>
        </div>
        <div class="f_r"></div>
      </div>

      <h3 class="title">
        <span class="topParent">主目录</span><span>联系人</span>
        <p class="f_r date">
          星期一，June 9 2016
        </p>
      </h3>

      <div class="chat-group">
        <div class="chat-list">
          <div class="search">
            <button></button><input type="text" placeholder="搜索">
          </div>
          <div class="chat-list-item">
            <img src="/static/img/home/test1.png" alt="">
            <div class="dib">
              <p class="name">李露</p>
              <p class="introduced">媒体记者，A单元1106</p>
            </div>
            <i class="status"></i>
          </div>
          <div class="chat-list-item active">
            <img src="/static/img/home/test1.png" alt="">
            <div class="dib">
              <p class="name">李露</p>
              <p class="introduced">媒体记者，A单元1106</p>
            </div>
            <i class="status"></i>
          </div>
          <div class="chat-list-item">
            <img src="/static/img/home/test1.png" alt="">
            <div class="dib">
              <p class="name">李露</p>
              <p class="introduced">媒体记者，A单元1106</p>
            </div>
            <i class="status"></i>
          </div>
        </div>
        <div class="chat_content">
          <div class="chat_info1">
            <img class="headImg" src="/static/img/home/test1.png" alt="">
            <div class="dib">
              <p class="name">胡小飞</p>
              <p class="position">资深大客户经理</p>
              <p class="area">A单元3306、中国深圳</p>
              <p class="contact">
                <span class="tel1">0775 555 9612</span>
                <span class="phone1">135 555 498</span>
              </p>
              <div class="oper">
                <button class="edt"></button>
                <div class="dib concern">关注</div>
                <div class="dib share">分享</div>
              </div>
            </div>
          </div>
          <div class="chat_info2">
            <div class="chatContet scroll-content ionic-scroll">
              <div v-for="item in gg" :class="item.who == 0 ? 'f_l' : 'f_r'">
                <img :src="item.headImg" alt="">
                <div class="dib">{{item.info}}</div>
              </div>
            </div>
            <div class="input">
              <button class="camera"></button>
              <div id="sendInfo" class="dib" contenteditable="true" placeholder="iMessage"></div>
              <button class="send" v-touch:tap="sendInfo">发送</button>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>
<script type="text/javascript">
  import { mapActions } from 'vuex'
  export default{
    created () {
      this.changeHeaderStatus(false)
      this.changeFooterStatus(false)
    },
    data () {
      return {
        gg: [
          {'who': 0, 'info': '你在哪里？', 'headImg': '/static/img/home/test.png'},
          {'who': 1, 'info': '我在珠海周末要不要聚一聚？', 'headImg': '/static/img/home/test1.png'}
        ]
      }
    },
    methods: {
      ...mapActions(['changeHeaderStatus', 'changeFooterStatus']),
      sendInfo () {
        let inpt = document.getElementById('sendInfo')
        if (inpt.innerHTML === '') {
          return false
        }
        let obj = {'who': 1, 'info': inpt.innerHTML, 'headImg': '/static/img/home/test1.png'}
        this.gg.push(obj)
        inpt.innerHTML = ''
      }
    }
  }
</script>
