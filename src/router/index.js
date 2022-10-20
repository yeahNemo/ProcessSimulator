import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout/home'
  },
  {
    path: '/layout',
    redirect: '/layout/home',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home')
      },
      // {
      //   path: 'setting',
      //   component: () => import('@/views/Setting')
      // }
      {
        path: 'demo2',
        component: () => import('@/views/Demo02')
      },
      {
        path: 'demo3',
        component: () => import('@/views/Demo03')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
