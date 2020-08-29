import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from 'views/home/Home.vue'
import Index from 'views/home/components/Index.vue'
import login from 'views/login/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'Index',
        component: Index
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

const router = new VueRouter({
  routes
})

export default router
