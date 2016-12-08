<template>
  <div id="neighbor" class="home-content view-container">
    <div class="mainContent pane" >

      <div class="chat-head">
        <h2 @click="getFriends">邻里</h2>
        <div class="f_l">
          <img src="/static/img/home/test1.png" alt="">
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
            <button></button><input v-on:input="searchFriends" v-model="searchVal" type="text" placeholder="搜索">
          </div>
          <div @click="i = index" :class="{'active':index === i,'hide':val.enable === false}" class="chat-list-item" v-for="val,index in friendsList" >
            <img :src="'/static/img/'+val.img" alt="">
             <div class="dib">
               <p class="name">{{val.name}}</p>
               <p class="introduced">{{val.position}}，{{val.area}}</p>
             </div>
             <i class="status"></i>
          </div>
        </div>
        <div class="chat_content">
          <div class="chat_info1">
            <img class="headImg" :src="'/static/img/'+friendsList[i].img" alt="">
            <div class="dib">
              <p class="name">{{friendsList[i].name}}</p>
              <p class="position">{{friendsList[i].position}}</p>
              <p class="area">{{friendsList[i].area}}</p>
              <p class="contact">
                <span class="tel1">{{friendsList[i].phone}}</span>
                <span class="phone1">{{friendsList[i].mobile}}</span>
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
              <div v-for="item in friendsList[i].records" :class="item.who == 0 ? 'f_l' : 'f_r'">
                <img :src="'/static/img/'+(item.who == 0 ? friendsList[i].img : 'home/test1.png')" alt="">
                <div class="dib" v-html="item.info"></div>
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
<script>
  import { mapActions, mapGetters } from 'vuex'
  export default{
    created () {
      this.changeHeaderStatus(false)
      this.changeFooterStatus(false)
    },
    mounted () {
      this.getFriends()
    },
    data () {
      return {
        i: 0,
        searchVal: '',
        friendsList: [
          {
            names: '',
            position: '',
            area: '',
            img: ''
          }
        ],
        ...mapGetters(['user'])
      }
    },
    methods: {
      ...mapActions(['changeHeaderStatus', 'changeFooterStatus']),
      searchFriends () {
        let i
        for (i = 0; i < this.friendsList.length; i++) {
          if (this.friendsList[i].name.indexOf(this.searchVal) === -1 && this.friendsList[i].position.indexOf(this.searchVal) === -1) {
            this.friendsList[i].enable = false
          } else {
            this.friendsList[i].enable = true
          }
        }
      },
      sendInfo () {
        let inpt = document.getElementById('sendInfo')
        if (inpt.innerHTML === '') {
          return false
        }
        let obj = {'who': 1, 'info': inpt.innerHTML, 'headImg': '/static/img/home/test1.png'}
        this.friendsList[this.i].records.push(obj)
        inpt.innerHTML = ''
      },
      getFriends () {
        let that = this
        this.$http.get(
          '/static/test/getFriends.json',
          {emulateJSON: true, emulateHTTP: true}
        ).then((re) => {
          that.friendsList = re.data.data
        }, (response) => {
          console.log(response)
        })
      }
    }
  }
</script>
