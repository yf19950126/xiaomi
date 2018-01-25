<template>
  <div class="home">
    <header>
        <router-link to="/home/new">
          <img id="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAyCAYAAAD2vz2aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjQ2OUE2MkU0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjQ2OUE2MkY0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCOUQ0QkM2RjREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCOUQ0QkM3MDREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiL8gcIAAAF1SURBVHja7Ju/LwRRFEbf+FVsQ0dBdJKNSksUSqVCr6AhKxGVwn+gVUpQEI1So5XoZUOhEbKMDiESIeOTzPbvzpoxz5wvOd3duzsn++7cSXajZMU9OOeGXPmTiHtxIU7FoYh/oe+ZmPKsjSMJS1yY+RS7YrNDcTdi1Le4y4WbHrEorsRcUW8asrB2BsSxWEeYLVtiCWG2bIsJhPmnV+zkeV3/TZhLv2HzCLNlFWG2TIqRvHYZa97FR84XXEvnUSeZEft/LexZDIvXnIVFop6uCQ3RnaHHeBmO5FMBstrPjZdiTUyLlww9Bqs6w87FcobX9Vd56B+IZoZjXVlhP0f0qAwfJKS1ookw+w0HYaEFYQVs+j4ZE7Oed6o3sVfA00OphW2IBUN9S5xU+Uhad6A+ZhhDnyAMYQhDGMIQRhCGMIQhDGEEYQhDGMIQhjCCMIQhDGEIIwhDWFHCLP81vPOsezT0/BK3nj0tP1i59qxrGXrG3wIMAK5yNsqRAjAyAAAAAElFTkSuQmCC" alt="">
        </router-link>
        <router-link to="/search" style="text-decoration: none;color: lightgray">
          <div class="search">
            <i class="fa fa-search"></i>
            搜索商品名称
          </div>
        </router-link>
       <router-link to="/my">
         <div id="user">
           <i class="fa fa-user-o"></i>
         </div>
       </router-link>
      <!--推荐商品列表-->
        <ul>
          <li v-for="item in List">
            <router-link :to="'/home/'+item.id" active-class="active">{{item.name}}</router-link>
          </li>
        </ul>
      <transition name="in" mode="out-in">
        <router-view></router-view>
      </transition>
    </header>
  </div>
</template>

<script>
    export default {
      name: "Home",
      components:{
      },
      data(){
        return{
          List:[
            {name:'推荐',id:'new'},
            {name:'手机',id:'phone'},
            {name:'智能',id:'int'},
            {name:'电视',id:'tv'},
            {name:'全面屏',id:'screen'},
            {name:'生活周边',id:'life'},
            {name:'盒子',id:'box'},
            {name:'艺术',id:'art'},
          ]
        }
      }
    }
</script>

<style scoped>
  .in-enter{
    transform: translateX(100%);
  }
  .in-enter-active{
    transition: all 0.5s;
    position: absolute;
  }
  .active{
    color: #fb7d34 !important;
    border-bottom:2px solid orange !important;
  }
  a{
    text-decoration: none;
    color: gray;
  }
  .home{
    width: 100%;
    position: fixed;
    height: 90vh;
    overflow: auto;
  }
  ::-webkit-scrollbar{
    width: 1px;
  }
  header{
    background-color: #f2f2f2;
    width: 100%;
    height: 95px;
    margin: 0;
    padding: 0;
    position: fixed;
    top:-1px;
    left: 0;
    right: 0;
    z-index: 99;
  }
  #img{
    background-color: #eee;
    width: 24px;
    height: 15px;
    margin-top: 1rem;
    margin-left: 2%;
  }
  .search{
    width: 80%;
    height: 30px;
    line-height: 30px;
    display: block;
    background-color: white;
    color: lightgray;
    font-size:1rem;
    margin-left:11%;
    margin-top: -1.6rem;
    border: 1px solid #eee;
  }
  .search i{
    margin-left: 2%;
  }
  #user i{
    color: gray;
    float: right;
    margin-right: 2%;
    margin-top: -1.4rem;
  }
  ul{
    padding: 0;
    height: 40px;
    margin-bottom: 0;
    margin-top: 16px;
    white-space: nowrap;
    overflow-x: visible;
    overflow-y: hidden;
  }
  li{
    list-style: none;
    display: inline-block;
    color: rgb(116,116,116);
    font-size: 0.9rem;
    margin-left: 5%;
  }
  ::-webkit-scrollbar{
    width: 1px;
  }
</style>
