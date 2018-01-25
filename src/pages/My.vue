<template>
  <div class="my">
    <header>
      <div>
       <router-link to="/login">
         <img src="../assets/images/1.jpg" alt="">
         <span class="login">登录/注册</span>
       </router-link>
      </div>
    </header>
    <main style="background-color: whitesmoke;height:580px">
      <div class="order">
       <div>
         我的订单
       </div>
        <router-link to="">
          <span>
          全部订单&nbsp;<i class="fa fa-chevron-right"></i>
          </span>
        </router-link>
      </div>
      <div class="icons">
        <div class="icon-1">
          <a href="#">
            <i class="fa fa-money"></i>
            <p>待付款</p>
          </a>
        </div>
        <div class="icon-2">
          <a href="#">
            <i class="fa fa-truck fa-2x"></i>
            <p>待收货</p>
          </a>
        </div>
        <div class="icon-3">
          <a href="#">
            <i class="fa fa-wrench fa-2x"></i>
            <p>退换修</p>
          </a>
        </div>
      </div>
      <div class="mine">
        <div class="mine-icon">
          <i class="fa fa-gift fa-x"></i>
        </div>
        <div class="gift">
          <a href="" style="color: black">
            会员福利
            <i class="fa fa-chevron-right"></i>
          </a>
        </div>
        <div class="mine-icon" style="color: cornflowerblue">
          <i class="fa fa-diamond fa-x"></i>
        </div>
        <div class="gift" style="border-bottom: none">
          <a href="" style="color: black">
            我的优惠
            <i class="fa fa-chevron-right"></i>
          </a>
        </div>
      </div>
      <div class="mine">
        <div class="mine-icon" style="color: red">
          <i class="fa fa-heart fa-x"></i>
        </div>
        <div class="gift">
          <a href="" style="color: black">
            服务中心
            <i class="fa fa-chevron-right"></i>
          </a>
        </div>
        <div class="mine-icon" style="color: #ff6700">
          <i class="fa fa-home fa-x"></i>
        </div>
        <div class="gift" style="border-bottom: none">
          <a href="" style="color: black">
            小米之家
            <i class="fa fa-chevron-right"></i>
          </a>
        </div>
      </div>
      <div class="mine">
        <div class="mine-icon" style="color: orange">
          <i class="fa fa-road fa-x"></i>
        </div>
        <div class="gift" style="border-bottom: none">
          <a href="" style="color: black">
            F码通道
            <i class="fa fa-chevron-right"></i>
          </a>
        </div>
      </div>
      <div class="mine">
        <div class="mine-icon" style="color: gray">
          <i class="fa fa-cog fa-x"></i>
        </div>
        <div class="gift" style="border-bottom: none">
          <a href="" style="color: black">
            设置
            <i class="fa fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: "My"
  }
</script>

<style scoped>
.my{
  width: 100%;
  position: fixed;
  height: 1950px;
 }
a{
  text-decoration: none;
  color: lightgray;
}
header{
  width: 100%;
  height: 85px;
  background: url(https://m.mi.com/static/img/bg.63c8e19.png) center 0 #f37d0f;
  background-size: auto 100%;
}
img{
  width: 44px;
  height: 44px;
  margin-top: 20px;
  margin-left: 5%;
}
.login{
  position: absolute;
  top: 33px;
  left: 20%;
  font-size: 0.8rem;
  color: white;
}
.order{
  width: 100%;
  height: 41px;
  line-height: 41px;
  background-color: white;
  border-bottom: 1px solid lightgray;
}
.order div{
  margin-left: 5%;
  font-size: 0.9rem;
}
.order span{
  display: inline-block;
  float: right;
  margin-top: -40px;
  margin-right: 4%;
  font-size: 0.8rem;
  color: gray;
}
.icons{
  width: 99%;
  height: 80px;
  background-color: white;
}
.icon-1{
  width: 30%;
  height: 40px;
  float: left;
  text-align: center;
  line-height: 40px;
  margin-left: 3%;
  margin-top: 10px;
  font-size: 0.8rem;
}
.icon-1 i{
  font-size: 1.4rem;
}
.icon-2{
  width: 30%;
  height: 40px;
  float: left;
  text-align: center;
  line-height: 40px;
  margin-left: 3%;
  margin-top: 10px;
  font-size: 0.8rem;
}
.icon-3{
  margin-left: 3%;
  width: 30%;
  height: 40px;
  float: left;
  text-align: center;
  line-height: 40px;
  margin-top: 10px;
  font-size: 0.8rem;
}
.fa-money,.fa-truck,.fa-wrench {
  color: #919191;
}
p{
    height: 30px;
    line-height: 30px;
    margin: 0;
    padding: 0;
    color: black;
  }
.mine-icon{
  width: 15%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  margin-left: 4%;
  color: orange;
  margin-top: 15px;
}
.gift{
  width: 78%;
  height: 48px;
  float: right;
  margin-top: -50px;
  line-height: 50px;
  display: inline-block;
  font-size: 0.9rem;
  border-bottom: 1px solid lightgray;
}
.gift i{
  float: right;
  color: lightgray;
  font-size: 1.2rem;
  line-height: 40px;
  margin-right: 3%;
}
.mine{
  background-color: white;
  margin-top: 0;
}
</style>
