<template>
  <div>
     <transition name="in" mode="out-in">
       <router-view></router-view>
     </transition>
    <transition name="footbar">
      <footBar v-if="agourl != 'search' && nowurl != 'login' && agourl != 'login' && nowurl != 'search'"></footBar>
    </transition>
  </div>
</template>
<script>
  import footBar from './components/FootBar'
  export default {
    name: 'app',
    data(){
      return{
        agourl:'',
        nowurl:''
      }
    },
    components:{
      footBar
    },
    mounted(){
      this.agourl = window.location.href.slice(24);
    },
    updated(){
      this.nowurl = window.location.href.slice(24);
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
</style>
