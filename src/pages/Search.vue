<template>
  <div>
    <header>
      <router-link to="/home/new" style="padding: 0 !important;">
        <i class="fa fa-chevron-left fa-2x"></i>
      </router-link>
      <input type="text" placeholder="搜索商品名称">
      <i class="fa fa-search fa-2x"></i>
    </header>
    <main>
      <div class="hot">
        <span style="margin-left: 3%">热门搜索</span>
      </div>
      <div class="image">
        <img src="http://i8.mifile.cn/b2c-mimall-media/9c1f3d565f10229dbd0b06c102789783.jpg?bg=CE4249" alt="">
      </div>
      <div style="margin-top: 10px;margin-left: 5%">
        <a href="">红米5 新品</a>
        <a href="">电视32英寸</a>
        <a href="">净水器厨下</a>
      </div>
      <div style="margin-top: 20px;margin-left: 5%">
        <a href="">小米MIX 2</a>
      </div>
    </main>
  </div>
</template>
<script>
  export default{
    name:'Search'
  }
</script>
<style scoped>
header{
  width: 100%;
  height: 50px;
  background-color: #f2f2f2;
  font-size: 0.7rem;
}
.fa-chevron-left{
  position: absolute;
  top: 12px;
  left: 3%;
  color: gray;
}
.fa-search{
  float: right;
  margin-top: 12px;
  margin-right: 3%;
  color: gray;
}
input{
  width: 70%;
  height: 29px;
  margin-left: 12%;
  margin-top: 8px;
  font-size: 1rem;
  border: none;
  padding-left: 5%;
}
.hot{
  width: 100%;
  height: 41px;
  line-height: 41px;
  font-size: 0.9rem;
}
.image{
  width: 100%;
  height: 100px;
}
.image img {
  width: 100%;
  height: 100px;
}
a{
  text-decoration: none;
  color: #484848;
  font-size: 0.8rem;
  width: 25%;
  height: 25px;
  padding: 7px 10px;
  margin: 5px 1px;
  background-color: rgba(255,137,108,0.047);
  border: 1px solid #e4e4e4;
}
</style>
