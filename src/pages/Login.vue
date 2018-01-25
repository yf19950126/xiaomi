<template>
  <div class="login">
    <div class="login-1">
      <img src="../assets/images/mi.png" alt="" style="width: 50px;height: 50px;"/>
      <p>小米账号登录</p>
    </div>
    <div class="login-2">
      <div>
        <input type="text" placeholder="邮箱/手机号码/小米ID" style="border-radius: 20px 20px 0 0"/>
        <input type="text" placeholder="密码" style="border-radius: 0 0 20px 20px"/>
      </div>
    </div>
    <div class="login-3">
      <span>登录</span>
    </div>
    <div class="login-3 login-3-1">
      <span>手机短信注册/登录</span>
    </div>
    <div style="margin: 1rem;">
      <fieldset id="login-4">
        <legend center>其他方式登录</legend>
      </fieldset>
    </div>
    <div class="login-5">
      <div style="width: 100%;margin: 0 auto;">
        <div class="login-5-img-1"></div>
        <div class="login-5-img-2"></div>
        <div class="login-5-img-3"></div>
      </div>
    </div>
    <div class="login-6">
      <span style="margin-right: 1rem;">立即注册</span>
      <span style="margin-left: 1rem;">忘记密码?</span>
    </div>
    <div class="login-7" style="color: rgba(0,0,0,.35);">
      <span class="loginactive">简体</span>&nbsp;|&nbsp;
      <span>繁体</span>&nbsp;|&nbsp;
      <span>English</span>&nbsp;|&nbsp;
      <span>常见问题</span>
    </div>
  </div>
</template>

<script>
  export default{
    name:'login'
  }
</script>

<style scoped>
  .login{
    width: 100%;
    height:100%;
    text-align: center;
    background-color: #f2f2f2;
  }
  .login-1{
    font-size: 1.2rem;
    padding-top: 2.5rem;
  }
  .login-1 p{
    margin-top: 1rem;
  }
  .login-2{
    margin: 1rem;
  }
  .login-2 div{
    width: 90%;
    height: 4.5rem;
    margin-left: 3%;
    border-radius: 10px;
  }
  .login-2 input{
    width: 100%;
    display: block;
    font-size: 1rem;
    padding: 0.5rem;
    outline: none;
    border: none;
    background-color: white;
  }
  .login-3{
    margin: 2rem 1rem;
  }
  .login-3 span{
    display: block;
    width: 100%;
    background-color: #33b4ff;
    height: 2.5rem;
    line-height: 2.5rem;
    border-radius: 2.5rem;
    color: white;
  }
  .login-3-1 span{
    background-color: white;
    color: rgba(0,0,0,.85);
  }
  #login-4{
    border: none;
    border-top: 1px dashed rgba(0,0,0,.25);
    color: rgba(0,0,0,.35);
  }
  .login-5 .login-5-img-1,.login-5-img-2,.login-5-img-3{
    display: inline-block;
  }
  .login-5-img-1{
    width: 4rem;
    height: 4rem;
    background-image: url(../assets/images/2.png);
    background-position: 12% -10px;
  }
  .login-5-img-2{
    width: 4rem;
    height: 4rem;
    background-image: url(../assets/images/2.png);
    background-position: center -10px;
  }
  .login-5-img-3{
    width: 4rem;
    height: 4rem;
    background-image: url(../assets/images/2.png);
    background-position: 88% -10px;
  }
  .login-6{
    margin: 2rem 0;
    color: rgba(0,0,0,.35);
  }
  .loginactive{
    color: rgba(0,0,0,.88);
  }
  .login-7{
    width: 100%;
    height: 57px;
    line-height: 57px;
  }
</style>
