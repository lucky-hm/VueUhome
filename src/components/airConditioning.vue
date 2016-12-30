<template>
    <div class="airBody gCenter">
        <div class="airNumber">
          <p class="button gCenter">
            &nbsp;&nbsp;26°
          </p>
        </div>
      <div class="space-between">
        <button class="high"></button>
        <button class="hot"></button>
      </div>
      <div class="space-between">
        <button class="arefaction">除湿</button>
        <button class="airSupply">送风</button>
      </div>
    </div>
</template>
<style lang="scss" scoped>
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
