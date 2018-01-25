<template>
  <header>
      <a @click="back"><i class="fa fa-chevron-left"></i></a>
      <span><slot></slot></span>
      <router-link to="/search"><i class="fa fa-search"></i></router-link>
  </header>
</template>
<script>
export default{
  name:'HeaderBar',
  data(){
    return{

    }
  },
  methods:{
    back:function(){
      window.history.back()
    }
  }
}
</script>
<style scoped>
header{
  width: 100%;
  height: 50px;
  background-color: #f2f2f2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}
.fa-chevron-left{
  color: gray;
  font-size: 1.5rem;
  line-height: 50px;
  margin-left: 2%;
}
span{
  position: absolute;
  left: 45%;
  top: 13px;
  font-size: 1.1rem;
  color: #666;
}
.fa-search{
  float: right;
  color: gray;
  font-size: 1.5rem;
  line-height: 50px;
  margin-right: 2%;
}
</style>
