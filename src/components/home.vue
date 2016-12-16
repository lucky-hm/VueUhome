<template>

  <div id="home" class="home-content view-container">

    <div class="mainContent pane" >

      <ul class="room-ul home-bg" :class="roomName">
        <li v-touch:tap="positionRoom.bind(this, 'childrenRoom')">
          <div class="room-info">
            <label class="room-info-lab">儿童房</label>
            <label class="room-info-lab">Children's room</label>
          </div>
        </li>
        <li v-touch:tap="positionRoom.bind(this, 'subalternRoom')">
          <div class="room-info">
            <label class="room-info-lab">次卧</label>
            <label class="room-info-lab">Subaltern room</label>
          </div>
        </li>
        <li>
          <div class="room-info">
            <label class="room-info-lab">洗手间</label>
            <label class="room-info-lab">Restroom</label>
          </div>
        </li>
        <li>
          <div class="room-info">
            <label class="room-info-lab">洗手间</label>
            <label class="room-info-lab">Restroom</label>
          </div>
        </li>
        <li v-touch:tap="positionRoom.bind(this, 'masterRoom')">
          <div class="room-info">
            <label class="room-info-lab">主卧</label>
            <label class="room-info-lab">Master Bedroom</label>
          </div>
        </li>
        <li v-touch:tap="positionRoom.bind(this, 'kitchenRoom')">
          <div class="room-info">
            <label class="room-info-lab">厨房</label>
            <label class="room-info-lab">KitChen</label>
          </div>
        </li>
        <li v-touch:tap="positionRoom.bind(this, 'diningRoom')">
          <div class="room-info">
            <label class="room-info-lab">餐厅</label>
            <label class="room-info-lab">Restaurant</label>
          </div>
        </li>
        <!--<li ng-click="moduleChange(1,6)">-->
        <li v-touch:tap="positionRoom.bind(this, 'livingRoom')">
          <div class="room-info">
            <label class="room-info-lab">客厅</label>
            <label class="room-info-lab">Living room</label>
          </div>
        </li>
        <li>
          <div class="room-info">
            <label class="room-info-lab">楼梯</label>
            <label class="room-info-lab">Stairs</label>
          </div>
        </li>
        <li>
          <div class="room-info">
            <label class="room-info-lab">入户</label>
            <label class="room-info-lab">Entrance</label>
          </div>
        </li>
        <li>
          <div class="room-info">
            <label class="room-info-lab">电梯</label>
            <label class="room-info-lab">Elevator</label>
          </div>
        </li>
      </ul>

      <div class="map" v-touch:tap="positionRoom.bind(this, '')">
        <img src="/static/img/home/bedroomMap.png" alt="">
      </div>

      <ul class="device" :class="roomName+'Device'" v-touch:doubletap="positionRoom.bind(this, '')">
        <li @click="changeDevice(key,val)" :class="val+' '+key[3]+' '+(key[2]=='0000'?'':'open')" v-for="(key,val) in nowRoomDevice">
          <label class="room-switch-title">{{key[0]}}</label>
        </li>
      </ul>

    </div>
  </div>

</template>
<script>
import { mapActions } from 'vuex'
export default {
  created () {
    this.changeFooterStatus(true)
    this.changeHeaderStatus(true)
  },
  data () {
    return {
      roomName: '',
      nowRoomDevice: {},
      model302: {
        'room_id': '302',
        // ['显示名称', '设备ID', '开关状态(0000=关闭,00ff=开启)', '样式类'],同一房间中键名不要重复
        // 小孩房
        'childrenRoom': {
          'kingLight': ['主灯', '021C1664', '0000', 'lamp'],
          'balconyLamp': ['阳台灯', '022C1664', '0000', 'lamp'],
          'LampWith': ['灯带', '023C1664', '0000', 'lamp'],
          'drape1': ['布帘', '0B1411A0', '0000', 'curtain'],
          'drape2': ['纱帘', '0B2411A0', '0000', 'curtain'],
          'appliances': ['电器', '7600016A', '0000', 'appliances']
        },
        // 次卧、老人房
        'subalternRoom': {
          'kingLight': ['主灯', '02182BCA', '0000', 'lamp'],
          'balconyLamp': ['阳台灯', '02282BCA', '0000', 'lamp'],
          'LampWith': ['灯带', '02382BCA', '0000', 'lamp'],
          'doorLamp': ['门口灯', '021050C6', '0000', 'lamp'],
          'drape1': ['布帘', '0B141178', '0000', 'curtain'],
          'drape2': ['纱帘', '0B241178', '0000', 'curtain'],
          'appliances': ['电器', '760001D8', '0000', 'appliances']
        },
        // 主卧
        'masterRoom': {
          // 'kingLight': ['主灯', '021C1678', '0000', 'lamp'],
          'bedLamp': ['床头灯', '023C1678', '0000', 'lamp'],
          'shootLamp': ['射灯', '02382C0B', '0000', 'lamp'],
          'LampWith': ['灯带', '024C1678', '0000', 'lamp'],
          'drape1': ['布帘', '0B14115F', '0000', 'curtain'],
          'drape2': ['纱帘', '0B24115F', '0000', 'curtain'],
          'appliances': ['电器', '76000162', '0000', 'appliances'],
          'pushWindow': ['推窗器', '0B100BBC', '0000', 'appliances']
        },
        // 客厅
        'livingRoom': {
          'kingLight': ['主灯', '021C1607', '0000', 'lamp'],
          'balconyLamp': ['阳台灯', '021051B5', '0000', 'lamp'],
          'LampWith': ['灯带', '022C1607', '0000', 'lamp'],
          'shootLamp': ['射灯', '023C1607', '0000', 'lamp'],
          'wallLamp': ['壁灯', '024C1607', '0000', 'lamp'],
          'drape1': ['布帘', '0B1411E4', '0000', 'curtain'],
          'drape2': ['纱帘', '0B2411E4', '0000', 'curtain'],
          'appliances': ['电器', '7600015D', '0000', 'appliances'],
          'socket1': ['电视机插座', '13104853', '0000', 'appliances'],
          'socket2': ['插座2', '13204853', '0000', 'appliances'],
          'socket3': ['插座3', '13304853', '0000', 'appliances'],
          'socket4': ['机顶盒插座', '13404853', '0000', 'appliances']
        },
        // 餐厅
        'diningRoom': {
          'kingLight': ['主灯', '021C159E', '0000', 'lamp'],
          'shootLamp': ['射灯', '022C159E', '0000', 'lamp'],
          'LampWith1': ['灯带', '024C159E', '0000', 'lamp'],
          'LampWith': ['鞋柜灯', '023C159E', '0000', 'lamp']
        },
        // 厨房
        'kitchenRoom': {
          'kingLight': ['主灯', '02105153', '0000', 'lamp'],
          'balconyLamp': ['阳台灯', '02105111', '0000', 'lamp'],
          'socket': ['水阀插座', '031802E4', '0000', 'appliances']
        },
        // 主卫
        'masterRestRoom': {
          'kingLight': ['主灯', '02182BC4', '0000', 'lamp'],
          'bathroomLamp': ['浴室灯', '02282BC4', '0000', 'lamp'],
          'LensHeadLight': ['镜前灯', '02382BC4', '0000', 'lamp']
        },
        // 公卫
        'restRoom': {
          'kingLight': ['主灯', '02182BBE', '0000', 'lamp'],
          'LensHeadLight': ['镜前灯', '02282BBE', '0000', 'lamp'],
          'exhaustAir': ['排风', '02382BBE', '0000', 'fans']
        },
        'leaveHome': ['出门', '7324002C', '00000', ''],
        'goHome': ['回家', '7314002C', '0000', '']
      }
    }
  },
  methods: {
    positionRoom (x) {
      this.roomName = x
      this.nowRoomDevice = this.model302[x]
    },
    changeDevice (nowDevice, index) {
      var that = this
      var deviceId = nowDevice[1]
      var value = nowDevice[2]
      value === '0000' ? value = '00ff' : value = '0000'
      this.$http.post(
        'http://139.196.115.11:3000/control',
        {room_id: '302', deviceId: deviceId, value: value},
        {emulateJSON: true, emulateHTTP: true}
      ).then((re) => {
        if (re.data.code === 200) {
          that.$set(that.model302[that.roomName][index], 2, value)
          // that.model302[that.roomName][index].splice(2, 1, value)
        } else {
          console.log(re.data)
        }
      }, (response) => {
        console.log(response)
      })
    },
    ...mapActions(['changeFooterStatus', 'changeHeaderStatus'])
  }
}
</script>
