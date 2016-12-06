<template>
  <div id="loginRegister" class="full">
    <div class="login-bg">
      <div class="login-form loginRegister active" >
        <div class="list login">
          <label class="item item-input account">
            <input type="text">
          </label>
          <label class="item item-input password mt10">
            <input type="password" :value="yy">
          </label>
          <p class="hint mt10">Forgot your password?</p>
        </div>
        <!-- <router-link to="/main/home" v-on:click.stop="doThis" class="login submit button mt10">Sign in</router-link> -->
        <router-link to="/main/home"><mu-raised-button label="Sign in" class="submit button mt10" /></router-link>
      </div>
      <div class="oper">
        <a ng-click="signSelect()" ng-class="{true:'active',false:''}[login]" class="sign active" href="javascript:void(0)"></a>
        <a class="help" href="javascript:void(0)">Help</a>
      </div>
    </div>
  </div>
</template>
