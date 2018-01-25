<template>
  <div class="cart">
    <header-bar>购物车</header-bar>
    <main>
      <p style="position: absolute;top: 50px;" class="login">
        登录后享受更多优惠
        <router-link to="/login">
        <span class="goLogin">去登录&nbsp;<i class="fa fa-chevron-right"></i>
        </span>
        </router-link>
      </p>
      <div class="goShop">
        <i class="fa fa-shopping-cart fa-2x"></i>
        购物车还是空的
        <router-link to="/home/new"><button>去逛逛</button></router-link>
      </div>
      <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg" alt="" style="width: 100%;height: 63px;position: absolute;top: 160px;">
      <div class="detail_good">
        <div class="image-1" v-for="item in List">
          <img :src="'https://'+item.image_url" alt="">
          <span style="color: gray">
          {{item.name}}
        </span>
          <p style="margin: 0;color: #ff6700;width: 70px">
            ￥{{item.price}}
          </p>
          <del>
            ￥{{item.market_price}}
          </del>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import data from './cartdata.json'
  import HeaderBar from '../components/HeaderBar'
    export default {
        name: "Cart",
        components:{
          HeaderBar,
        },
        data(){
          return{
              List:{}
          }
        },
        mounted:function(){
            this.List = data.data.recom_list;
            //console.log(data.data.recom_list);
        }
    }
</script>

<style scoped>
.cart{
  width: 100%;
  position: fixed;
  height: 90vh;
  overflow: auto;
}
::-webkit-scrollbar{
  width: 1px;
}
a{
  text-decoration: none;
  color: gray;
}
.login{
  font-size: 1.1rem;
  margin: 0;
  height: 50px;
  line-height: 55px;
  margin-left: 6%;
}
.goLogin{
  display: inline-block;
  width: 60px !important;
  position: absolute;
  top: 2px;
  left: 260px;
  color: gray;
  font-size: 0.9rem;
}
.goShop{
  position: absolute;
  top: 109px;
  background-color: #eeeeee;
  width: 100%;
  line-height: 50px;
  height: 50px;
  text-align: center;
  color: lightgray;
}
button{
  border: 1px solid lightgray;
  background-color: whitesmoke;
}
.detail_good{
  /*background-color: red;*/
  position: absolute;
  top: 230px;
}
.image-1{
  width: 48%;
  padding-right: 1px;
  float: left;
  margin: 3px;
}
img{
  width: 100%;
}
del{
  display: inline-block;
  color: gray;
  font-size: 0.8rem;
  float: right;
  margin-top: -18px;
  margin-right: 80px;
}
</style>
