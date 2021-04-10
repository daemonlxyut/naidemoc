import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/chat',
      name: 'Chat',
      component: () => import(/* webpackChunkName: "about" */ '@/components/Chat.vue')
    },
    {
      path: '/nonodebris-com',
      name: 'Work',
      component: () => import(/* webpackChunkName: "about" */ '@/components/Works.vue')
    },
  ]
})
