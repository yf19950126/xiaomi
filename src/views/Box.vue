<template>
  <div class="box">
    <div style="width: 100%;height: 188px;">
      <img src="//i8.mifile.cn/v1/a1/e6a32c30-3525-3f99-261a-f800810fd513!720x360.webp" alt="" style="width: 100%;height: 188px;">
    </div>
    <div style="width: 100%;height: 42px;">
      <img src="//i8.mifile.cn/v1/a1/fff08346-3b05-7127-8f5e-2f633ae8f0d9!720x80.webp" alt=""
           style="width: 100%;height: 42px;">
    </div>
    <div style="width: 100%;height: 188px;">
      <img src="//i8.mifile.cn/v1/a1/1cbb2f87-1aaa-c4e0-273c-7ab571cc82bd!720x360.webp" alt=""
           style="width: 100%;height: 188px;">
    </div>
    <div class="mi-box">
      <span>小米盒子3s</span>
      <span>￥999</span>
      <p>4k超高清机顶盒，64位处理器支持HDR</p>
      <del>￥349</del>
    </div>
    <div style="width: 100%;height: 188px;margin-top: 10px">
      <img src="//i8.mifile.cn/v1/a1/85622792-8558-e997-fa04-b37b7274b111!720x360.webp" alt=""
           style="width: 100%;height: 188px;">
    </div>
    <div class="mi-box">
      <span>小米盒子3 增强版</span>
      <span>￥399</span>
      <p>高清4K网络机顶盒，标配智能遥控器</p>
      <del>￥449</del>
    </div>
    <div style="width: 100%;height: 188px;margin-top: 10px">
      <img src="//i8.mifile.cn/v1/a1/721d3f0c-6b8d-b7d7-68c6-44ec96a88c2c!720x360.webp" alt=""
           style="width: 100%;height: 188px;">
    </div>
    <div class="mi-box">
      <span>小米盒子3c</span>
      <span>￥249</span>
      <p>64位处理器，PatchWall人工智能</p>
    </div>
    <div style="width: 100%;height: 146px;margin-top: 10px">
      <img src="//i8.mifile.cn/v1/a1/e1056b88-2137-d22d-8cef-ca6d2dac8350!720x280.webp" alt=""
           style="width: 100%;height: 146px;">
    </div>
    <div style="width: 100%;height: 42px;">
      <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/182e7b3eca8509de2c7390d34dea1960.png?thumb=1&w=720&h=80" alt=""
           style="width: 100%;height: 42px;">
    </div>
    <div style="width: 100%;height: 188px;">
      <img src="//i8.mifile.cn/v1/a1/907c2af8-e7e8-58c8-e420-c6654e8861cc!720x360.webp" alt=""
           style="width: 100%;height: 188px;">
    </div>
    <div class="mi-box">
      <span>小米人工智能家庭影院</span>
      <span>￥2099</span>
      <p>环绕立体声人工智能家庭影院</p>
    </div>
    <div style="width: 100%;height: 146px;margin-top: 10px">
      <img src="//i8.mifile.cn/v1/a1/3ba78746-1499-f8ba-b0bb-2939e51a7185!720x280.webp" alt=""
           style="width: 100%;height: 146px;">
    </div>
  </div>
</template>
<script>
  export default{
    name:'Box'
  }
</script>
<style scoped>
  .box{
    width: 100%;
    height: 75vh;
    position: fixed;
    overflow: auto;
  }
  .mi-box{
    width: 100%;
    height: 50px;
  }
  .mi-box span:nth-of-type(1){
    float: left;
    margin-left: 5%;
    margin-top: 10px;
  }
  .mi-box span:nth-of-type(2){
    float: right;
    margin-right: 5%;
    color: #ea625b;
    margin-top: 10px;
  }
  p{
    clear: both;
    margin: 0;
    padding: 0;
    margin-left: 5%;
    font-size: 0.8rem;
    color: gray;
  }
  del{
    float: right;
    margin-top: -20px;
    margin-right: 5%;
    color: #ea625b;
  }
</style>
