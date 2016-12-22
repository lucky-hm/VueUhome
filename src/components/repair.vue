<template>
  <div class="repairBody">
    <div class="schedule">
      <dl>
        <dt>墙体维修</dt>
        <dd class="cloud">房屋翻新、旧墙体需要清除装饰重新上漆粉刷，请给清除及粉刷作出工程预算和施工进度、工具请自行安排，尽快回复，谢谢！</dd>
      </dl>
    </div>
    <dl class="apply">
      <dt>报修申请</dt>
      <dd>
        <input type="text" placeholder="报修人">
        <input type="text" placeholder="电  话">
      </dd>
      <dd>
        <input type="text" placeholder="主  题">
      </dd>
      <dd class="file">
        <label><input type="file"></label>
        <ul>
        </ul>
      </dd>
      <dd class="textarea">
        <textarea></textarea>
      </dd>
      <dd class="last">
        <span class="status">已提交成功</span>
        <button>提&nbsp;交</button>
      </dd>
    </dl>
  </div>
</template>
<script>
  export default{
    props: ['test'],
    data () {
      return {
        msg: 'hello vue'
      }
    },
    methods: {

    }
  }
</script>
<style lang="scss">
  .mu-dialog.repair{
    max-width:none;
    border-radius:5px;
    background:#fff url("../assets/img/home/repair-bg.png") no-repeat 0 0 / 100% 100%;
    width:810px;
    height:456px;
    box-shadow: 0 0 20px 2px #15191d;
    .mu-dialog-title{
      display: none;
    }
    .mu-dialog-body{
      padding:50px;
      height:100%;
    }
  }
  /*报修进度*/
  .schedule{
    width:258px;
    font-size:12px;
    color:#fff;
    -webkit-font-smoothing: antialiased;
    dt{
      font-size:18px;
      font-weight:bold;
      margin-bottom:25px;
    }
    .cloud {
      background: url("../assets/img/home/cloud.png") no-repeat left 3px;
      text-indent: 18px;
      line-height:18px;
      letter-spacing: 1px;
    }
  }
  /*报修申请*/
  .repairBody {
    position:relative;height:100%;
    .apply {
      width: 356px;
      height: 356px;
      padding:30px 43px;
      background-color: #fff;
      position: absolute;
      right: 0;
      top: 0;
      border-radius: 5px;
      display: -webkit-flex;
      -webkit-flex-direction: column;
      -webkit-justify-content: center;
      -webkit-align-items: center;
      dt{
        color:#4f5362;
        font-size:18px;
        font-weight:bold;
        margin-bottom:26px;
      }
      dd{
        display:-webkit-flex;width:100%;
        margin-bottom:10px;
        ::-webkit-input-placeholder{
          color:#a8acb9;
        }
        input,textarea,label{
          background-color: #eff0f4;border:0;border-radius:3px;
          height:30px;width:100%;padding-left:8px;font-size:12px;
          &:nth-child(2){
             margin-left:10px;
           }
        }
        input[type='file']{
          display: none;
        }
        label {
          min-width: 70px;width:70px;
          background: #eff0f4 url("../assets/img/home/camera1.png") no-repeat 10px center;
        }
        ul{
          width:100%;background-color: #eff0f4;
          li{
            float:left;width:30px;height:100%;
            margin-right:10px;
          }
        }
        textarea{
          resize:none;height:70px;
          padding:8px;
        }
        &.last{
          height:25px;
          line-height:25px;
          -webkit-justify-content:space-between;
          button {
            width: 125px;
            color: #fff;
            font-size: 12px;
            background-color: #1ecde2;
            border:0;border-radius:5px;
            &:hover{
               background-color: #1db9cc;
            }
          }
        }
        .status{
          font-size:10px;letter-spacing: 2px;
          padding-left:20px;
          background: url("../assets/img/home/success.png") no-repeat left center;
        }
      }
    }
  }
</style>
