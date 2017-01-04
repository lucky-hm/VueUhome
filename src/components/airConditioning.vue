<template>
    <div class="airBody gCenter">
        <div class="airNumber">
          <p class="button gCenter">
            &nbsp;&nbsp;26°
          </p>
        </div>
      <div class="space-between mt-20">
        <button class="high"></button>
        <button class="hot"></button>
      </div>
      <div class="fans1">
        <li v-for="x in new Array(18)"></li>
      </div>
      <div class="space-between">
        <button class="arefaction">除湿</button>
        <button class="airSupply">送风</button>
      </div>
      <div class="airStrength">
        <label>睡眠</label>
        <label>强劲</label>
        <label>上下风</label>
        <label>左右风</label>
      </div>
      <div class="exit"></div>
    </div>
</template>
<style lang="scss" scoped>
  .mt-20{
    margin-top:-20px;
  }
  .airBody{
    width:100%;
    -webkit-flex-direction: column;
    &>*{
      width:100%;
    }
  }
  .airNumber {
    color: #00d5c3;
    font-size: 30px;
    width: 178px;
    height: 178px;
    border-radius: 50%;
    background: url("../assets/img/Layer-16.png") no-repeat;
  }
  .button{
    width:100%;height:100%;
    font-weight:normal;
    -webkit-font-smoothing: antialiased;
    padding-bottom:12px;
    text-shadow: 2px 4px 2px #444;
    background: url("../assets/img/Knob.png") no-repeat center center / 138px 138px;
  }
  .space-between {
    display: -webkit-flex;
    justify-content: space-between;
  }
  .high{
    border:0;
    background: url("../assets/img/high.png") no-repeat;
    width:76px;height:29px;
  }
  .hot{
    border:0;
    background: url("../assets/img/fire.png") no-repeat;
    width:76px;height:29px;
  }
  .arefaction,.airSupply{
    background: url("../assets/img/Divider.png") no-repeat ;
    border:0;
    position: relative;
    width:88px;height:31px;
    text-indent: -30px;
    padding-bottom:3px;
    &:after{
       background: url("../assets/img/qushi.png") no-repeat;
       width:21px;height:32px;
       position: absolute;
       right:5px;top:5px;
       content:' ';
     }
  }
  .airSupply:after{
    background: url("../assets/img/fans1.png") no-repeat;
    top:5px;
  }
  .airStrength {
    margin-top:16px;
    background: url("../assets/img/line-2.png") no-repeat center center /100% 100%;
    width:205px;height:17px;color:#fff;
    label {
      float: left;
      display: block;
      width: 25%;
      text-align: center;
      position: relative;
      top:15px;
      -webkit-font-smoothing: antialiased;
      font-size:14px;
    }
  }
  .fans1{
    -webkit-justify-content: center;
    display:-webkit-flex;
    position: relative;
    margin:12px 0;
    li {
      background: url("../assets/img/line_2.png") no-repeat;
      background-size:100% 100%;
      width:4px;height:16px;float:left;
      margin:0 1px;
    }
    &:before{
      content: ' ';
      position: absolute;
      top:-1px;
      left:15px;background: url("../assets/img/fans.png") no-repeat;
      width:24px;height:22px;
      -webkit-transform: scale(.8);
    }
    &:after{
      content: ' ';
      position: absolute;
      top:-2px;
      right:15px;background: url("../assets/img/fans.png") no-repeat;
      width:24px;height:22px;
    }
  }
  .exit{
    position: absolute;
    border-radius:50%;
    border:1px solid #888;
    left:15px;top:15px;padding:15px;
    width:15px;height:17px;
    background: url("../assets/img/exit.png") no-repeat center 6px;
  }
</style>
<script>
  export default{
    data () {
      return {
        msg: 'hello vue'
      }
    }
  }
</script>
