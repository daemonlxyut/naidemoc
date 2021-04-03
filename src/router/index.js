import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Chat from '@/components/Chat'
import Work from '@/components/Works'

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
      component: Chat
    },
    {
      path: '/nonodebris-com',
      name: 'Work',
      component: Work
    },
  ]
})
