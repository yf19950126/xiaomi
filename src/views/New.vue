<template>
  <div class="new">
    <!--轮播图-->
    <div class="block">
      <el-carousel height="200px">
        <el-carousel-item v-for="item in images" :key="item.url">
          <img :src=item.url alt="" style="width: 100%; height: 200px">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--轮播图下的图片列表-->
    <div class="images">
      <img src="//i8.mifile.cn/v1/a1/594dec83-b317-175c-1916-e73c591452b7!180x152.webp" alt="" class="images-2">
      <img src="//i8.mifile.cn/v1/a1/82d92b9e-63fa-16d5-2a37-a1675c72351a!180x152.webp" alt="" class="images-2">
      <img src="//i8.mifile.cn/v1/a1/0437c9f2-dfba-a19f-d8d6-472e107bc4ca!180x152.webp" alt="" class="images-2">
      <img src="//i8.mifile.cn/v1/a1/6b06addd-6460-aa48-bdb2-043292b3d141!180x152.webp" alt="" class="images-2">
    </div>
    <!--详细图片-->
    <div class="detail-1" style="position: relative">
      <img src="../assets/images/main-1.png" alt=""
           style="width: 49%;height: 264px;position: absolute">
      <img src="../assets/images/main-2.png" alt=""
           style="width: 49%;height: 131px;display:block;position: absolute;left:50%;">
      <img src="../assets/images/main-3.png" alt=""
           style="width: 49%;height: 131px;display:block;position:absolute;left: 50%;top:8.4rem">
    </div>
    <div style="margin-top: 17rem">
      <img src="../assets/images/main-4.png" alt="" style="width: 100%;height: 145px">
      <img src="../assets/images/main-5.png" alt="" style="width: 100%;height: 145px">
      <img src="../assets/images/main-6.png" alt="" style="width: 100%;height: 230px">
    </div>
    <div>
      <img src="../assets/images/body-1.png" alt="" style="width:49.5%;height: 187px">
      <img src="../assets/images/body-2.png" alt="" style="width:49.5%;height: 187px;float: right">
      <div style="margin-top: 0px;margin-left: 2%">
        <p style="margin: 0">红米Note 5A 16GB</p>
        <span>5.5高清大屏</span>
        <div class="money">￥649</div>
      </div>
      <div style="float: right;margin-top: -65px;margin-right: 2%">
        <p style="margin: 0">红米5</p>
        <span>千元曲面屏，前置柔光自拍</span>
        <div class="money">￥799起</div>
      </div>
      <img src="../assets/images/body-3.png" alt="" style="width:49.5%;height: 187px;">
      <img src="../assets/images/body-4.png" alt="" style="width:49.5%;height: 187px;float: right">
      <div style="margin-top: 0px;margin-left: 2%">
        <p style="margin: 0">小米移动电源高配版</p>
        <span>轻薄设计，轻松出行</span>
        <div class="money">￥149</div>
      </div>
      <div style="float: right;margin-top: -65px;margin-right: 12%">
        <p style="margin: 0">米家感应夜灯</p>
        <span>举步之间，光明立现</span>
        <div class="money">￥49</div>
      </div>
      <img src="//i8.mifile.cn/v1/a1/a9ab24e2-55e0-4a3e-d0cd-cb19591a74a3!360x360.webp" alt="" style="width:49%;height: 187px;">
      <img src="//i8.mifile.cn/v1/a1/57912412-70d9-515c-6a6f-1b22cb5ed93e!360x360.webp" alt="" style="width:49%;height: 187px;float: right">
      <div style="margin-top: 0px;margin-left: 2%">
        <p style="margin: 0">小米电视4A 65</p>
        <span>4K超清大屏，64位处理器</span>
        <div class="money">￥4999</div>
      </div>
      <div style="float: right;margin-top: -65px;margin-right: 8%">
        <p style="margin: 0">小米路由器HD/Pro</p>
        <span>全新一代智能家庭中心</span>
        <div class="money">￥469起</div>
      </div>
      <img src="../assets/images/body-7.png" alt="" style="width:100%;height: 146px;">
      <img src="../assets/images/body-8.png" alt="" style="width:100%;height: 230px;">
    </div>
    <div>
      <img src="../assets/images/body-1.png" alt="" style="width:49.5%;height: 187px">
      <img src="../assets/images/body-2.png" alt="" style="width:49.5%;height: 187px;float: right">
      <div style="margin-top: 0px;margin-left: 2%">
        <p style="margin: 0">红米Note 5A 16GB</p>
        <span>5.5高清大屏</span>
        <div class="money">￥649</div>
      </div>
      <div style="float: right;margin-top: -65px;margin-right: 2%">
        <p style="margin: 0">红米5</p>
        <span>千元曲面屏，前置柔光自拍</span>
        <div class="money">￥799起</div>
      </div>
      <img src="../assets/images/body-3.png" alt="" style="width:49.5%;height: 187px;">
      <img src="../assets/images/body-4.png" alt="" style="width:49.5%;height: 187px;float: right">
      <div style="margin-top: 0px;margin-left: 2%">
        <p style="margin: 0">小米移动电源高配版</p>
        <span>轻薄设计，轻松出行</span>
        <div class="money">￥149</div>
      </div>
      <div style="float: right;margin-top: -65px;margin-right: 12%">
        <p style="margin: 0">米家感应夜灯</p>
        <span>举步之间，光明立现</span>
        <div class="money">￥49</div>
      </div>
      <img src="//i8.mifile.cn/v1/a1/a9ab24e2-55e0-4a3e-d0cd-cb19591a74a3!360x360.webp" alt="" style="width:49%;height: 187px;">
      <img src="//i8.mifile.cn/v1/a1/57912412-70d9-515c-6a6f-1b22cb5ed93e!360x360.webp" alt="" style="width:49%;height: 187px;float: right">
      <div style="margin-top: 0px;margin-left: 2%">
        <p style="margin: 0">小米电视4A 65</p>
        <span>4K超清大屏，64位处理器</span>
        <div class="money">￥4999</div>
      </div>
      <div style="float: right;margin-top: -65px;margin-right: 8%">
        <p style="margin: 0">小米路由器HD/Pro</p>
        <span>全新一代智能家庭中心</span>
        <div class="money">￥469起</div>
      </div>
      <img src="//i8.mifile.cn/v1/a1/740f7289-747e-f4f5-d23a-5688e0864b10!720x280.webp" alt="" style="width:100%;height: 146px;">
      <img src="//i8.mifile.cn/v1/a1/515c6b0e-a841-3348-2182-592d18ac66bc!720x440.webp" alt="" style="width:100%;height: 230px;">
      <div>
        <img src="../assets/images/body-1.png" alt="" style="width:49.5%;height: 187px">
        <img src="../assets/images/body-2.png" alt="" style="width:49.5%;height: 187px;float: right">
        <div style="margin-top: 0px;margin-left: 2%">
          <p style="margin: 0">红米Note 5A 16GB</p>
          <span>5.5高清大屏</span>
          <div class="money">￥649</div>
        </div>
        <div style="float: right;margin-top: -65px;margin-right: 2%">
          <p style="margin: 0">红米5</p>
          <span>千元曲面屏，前置柔光自拍</span>
          <div class="money">￥799起</div>
        </div>
        <img src="../assets/images/body-3.png" alt="" style="width:49.5%;height: 187px;">
        <img src="../assets/images/body-4.png" alt="" style="width:49.5%;height: 187px;float: right">
        <div style="margin-top: 0px;margin-left: 2%">
          <p style="margin: 0">小米移动电源高配版</p>
          <span>轻薄设计，轻松出行</span>
          <div class="money">￥149</div>
        </div>
        <div style="float: right;margin-top: -65px;margin-right: 12%">
          <p style="margin: 0">米家感应夜灯</p>
          <span>举步之间，光明立现</span>
          <div class="money">￥49</div>
        </div>
        <img src="//i8.mifile.cn/v1/a1/a9ab24e2-55e0-4a3e-d0cd-cb19591a74a3!360x360.webp" alt="" style="width:49%;height: 187px;">
        <img src="//i8.mifile.cn/v1/a1/57912412-70d9-515c-6a6f-1b22cb5ed93e!360x360.webp" alt="" style="width:49%;height: 187px;float: right">
        <div style="margin-top: 0px;margin-left: 2%">
          <p style="margin: 0">小米电视4A 65</p>
          <span>4K超清大屏，64位处理器</span>
          <div class="money">￥4999</div>
        </div>
        <div style="float: right;margin-top: -65px;margin-right: 8%">
          <p style="margin: 0">小米路由器HD/Pro</p>
          <span>全新一代智能家庭中心</span>
          <div class="money">￥469起</div>
        </div>
        <img src="//i8.mifile.cn/v1/a1/163548f7-7ab3-fcdb-6599-b2845be27592!720x280.webp" alt="" style="width:100%;height: 146px;">
        <img src="//i8.mifile.cn/v1/a1/06eb44b8-3d3e-0843-35b9-d19ff49777d5!720x440.webp" alt="" style="width:100%;height: 230px;">
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'New',
    data(){
      return{
        images:[
          {url:'https://i8.mifile.cn/v1/a1/eae16128-5550-41f6-fa6c-e969a25c6b99.webp?bg=E1D8C8'},
          {url:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/37a79c01ef3e3d0ab5e657070e9bbbde.jpg?bg=FFFFFF'},
          {url:'https://i8.mifile.cn/v1/a1/d3df9dff-58da-f50e-ff73-21dfa694482f.webp?bg=B2C5AB'},
          {url:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4ec1f82a9431a65c614133168e7bbb50.jpg?bg=FFFFFF'}
        ]
      }
    }
  }
</script>
<style scoped>
  .new{
    width: 100%;
    height: 75vh;
    position: fixed;
    overflow: auto;
  }
  .block{
    margin-top: -1.5rem;
  }
  .images{
    width: 100%;
    height: 100px;
  }
  .images-2{
    display: inline-block;
    width: 24%;
    height: 90px;
    margin: 0;
  }
  p{
    margin: 0;
    padding: 0;
    color: dimgrey;
    font-size: 1rem;
  }
  span{
    color: lightgray;
    font-size: 0.9rem;
  }
  .money{
    color: red;
    font-size: 1rem;
    width: 50%;
  }
</style>
