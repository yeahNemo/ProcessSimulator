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
      {
        path: 'setting',
        component: () => import('@/views/Setting')
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
