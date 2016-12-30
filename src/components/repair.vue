<template>
  <div class="repairBody">
    <div class="schedule">
      <dl class="clearfix">
        <dt>墙体维修</dt>
        <dd class="cloud">房屋翻新、旧墙体需要清除装饰重新上漆粉刷，请给清除及粉刷作出工程预算和施工进度、工具请自行安排，尽快回复，谢谢！</dd>
        <dd class="list">
          <ul class="clearfix">
            <li><img src="" alt=""></li>
            <li><img src="" alt=""></li>
            <li><img src="" alt=""></li>
            <li><img src="" alt=""></li>
          </ul>
        </dd>
        <dd class="mt30">
          <p class="user">李先生&nbsp;(&nbsp;2A栋6B业主&nbsp;)</p>
          <p class="mobile">135&nbsp;4756&nbsp;4300</p>
        </dd>
        <dd class="date">
          2016年10月1日上午11点30分
        </dd>
      </dl>
      <dl class="clearfix">
        <dt class="gary tac mt30">技术工程师已上门服务</dt>
        <dd class="card">
          <img class="headImg" src="static/img/home/test.png" alt="">
          <div class="info">
            <p class="position">维修工程师</p>
            <p>
              <span class="name">李强&nbsp;工号0006</span>
              <span class="mobile">135&nbsp;8866&nbsp;0000</span>
            </p>
            <p>评级<i></i><i></i><i></i><i class="off"></i><i class="off"></i></p>
          </div>
        </dd>
        <dd class="date">2016年10月1日上午12点00分</dd>
      </dl>
      <dl class="mt30 clearfix">
        <dt>维修工程处理方案</dt>
        <dd class="gary fz12">
          <p>1、乳胶漆                        5桶        100元/桶</p>
          <p>2、水泥砂浆                   15袋         30元/袋</p>
          <p>3、专用聚合物砂浆         10袋         50元/袋
          </p>
          <p>4、工具由施工人员提供
          </p>
          <p>5、工期5天（周六周日非工作日不施工）</p>
        </dd>
        <dd class="date">
          2016年10月1日上午11点30分
        </dd>
      </dl>
      <dl class="clearfix mt30">
        <dd class="gary tac mt30">工程已完工等待业主验收</dd>
        <dt class="mt30">工程验收</dt>
        <dd class="gary mt30">工程进度快，施工完美非常满意！谢谢李师傅，幸苦了！！！</dd>
        <dd class="list clearfix">
          <ul>
            <li><img src="" alt=""></li>
            <li><img src="" alt=""></li>
            <li><img src="" alt=""></li>
            <li><img src="" alt=""></li>
          </ul>
        </dd>
        <dd class="comment mt30">
          <p><label>服务态度</label><b></b><b></b><b></b><b></b><b></b></p>
          <p><label>工程品质</label><b></b><b></b><b></b><b></b><b></b></p>
        </dd>
        <dd class="date">2016年10月1日上午11点30分</dd>
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
    height:356px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    font-size:12px;
    color:#fff;
    -webkit-font-smoothing: antialiased;
    .gary{
      color:#959a9c;
      font-size:10px;
    }
    .tac{
      text-align: center;
    }
    .fz12{
      font-size:12px;
    }
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
      color:#959a9c;
    }
    .list{
      margin-top:30px;
      li{
        width:42px;height:42px;border-radius:50%;
        background-color: #fff;float:left;
        margin-right:10px;overflow:hidden;
        img{
          width:100%;
          height:100%;
        }
      }
    }
    .mt30{
      margin-top:30px;
    }
    .user {
      background: url("../assets/img/home/user1.png") no-repeat left 3px;
      padding-left:20px;
    }
    .mobile{
      background: url("../assets/img/home/phone1.png") no-repeat left 3px;
      padding-left:20px;
      margin-top:12px;
    }
    .date {
      color: #959a9c;
      margin-top:15px;
      font-size: 10px;
      background: url("../assets/img/home/ok.png") no-repeat left 4px;
      float: right;
      padding-left:12px;
    }
    .card{
      display:-webkit-flex;
      .position{
        -webkit-font-smoothing: auto;
        margin-bottom:2px;
        font-size:12px;
      }
      p{
        font-size:10px;
        i {
          width: 12px;
          height: 15px;
          display: inline-block;
          vertical-align: top;
          background: url("../assets/img/home/star1.png") no-repeat center 2px;
          &:nth-child(1){
             margin-left:5px;
          }
          &.off{
            background: url("../assets/img/home/star2.png") no-repeat center .4px;
          }
        }
      }
      .headImg{
        width:50px;height:50px;
        margin-right:5px;
        border-radius:50%;
      }
      .mobile{
        padding-left:11px;background-size: 11%;
        margin-left:12px;background-position: left 2px;
      }
    }
    .comment{
      line-height:30px;
      label{
        margin-right:10px;
        font-size:10px;
      }
      b {
        background: url("../assets/img/home/star.png") no-repeat left center;
        display: inline-block;width:19px;height:29px;vertical-align: top;
      }
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
