<template>
    <div id="link">
      <router-link to="/home/new" active-class="active">
        <i class="fa fa-home"></i>
        首页
      </router-link>
      <router-link to="/sort" active-class="active">
        <i class="fa fa-bars"></i>
        分类
      </router-link>
      <router-link to="/cart" active-class="active">
        <i class="fa fa-shopping-cart"></i>
        购物车
      </router-link>
      <router-link to="/my" active-class="active">
        <i class="fa fa-user"></i>
        我的
      </router-link>
    </div>
</template>
<script>

</script>
<style scoped>
  #link{
    background-color: white;
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    z-index: 9999;
  }
  .active{
    color: #ff6700 !important;
    font-size: 1.1rem !important;
  }
  #link a i{
    display: block;
    margin-top: 0.1rem;
    line-height: 20px;
  }
  #link a{
    text-decoration: none;
    display: inline-block;
    width: 24%;
    font-size: 0.9rem;
    line-height: 30px;
    text-align: center;
    color: gray;
  }
</style>
