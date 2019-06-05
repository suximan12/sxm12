import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('./views/Home/')
    },
    {
      path: '/goodlist',
      component: () => import('./views/goodlist/')
    },
    {
      path: '/user',
      component: () => import('./views/user/')
    },
    {
      path: '/car',
      component: () => import('./views/car/')
    }
  ]
})
