import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import New from '@/views/New'
import Art from '@/views/Art'
import Int from '@/views/Int'
import Life from '@/views/Life'
import Phone from '@/views/Phone'
import Screen from '@/views/Screen'
import Tv from '@/views/Tv'
import Box from '@/views/Box'
import Sort from '@/pages/Sort'
import Cart from '@/pages/Cart'
import My from '@/pages/My'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home/new'
    },
    {
      path:'/home',
      name:'Home',
      component:Home,
      children:[
        {
          path:'/home/new',
          component:New
        },
        {
          path:'/home/phone',
          component:Phone
        },
        {
          path:'/home/int',
          component:Int
        },
        {
          path:'/home/tv',
          component:Tv
        },
        {
          path:'/home/screen',
          component:Screen
        },
        {
          path:'/home/life',
          component:Life
        },
        {
          path:'/home/box',
          component:Box
        },
        {
          path:'/home/art',
          component:Art
        },
      ]
    },
    {
      path:'/sort',
      name:'Sort',
      component:Sort
    },
    {
      path:'/cart',
      name:'Cart',
      component:Cart
    },
    {
      path:'/my',
      name:'My',
      component:My
    },
    {
      path:'/search',
      name:'Search',
      component:Search
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
  ]
})
