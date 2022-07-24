import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: '/',
  routes: [
    {
      path: '/',
      component: () => import('@/components/AdminIndex'),
      children: [
        {
          name: 'Home',
          path: '',
          component: () => import('@/views/pages/DashBoard'),
        },
        {
          name: 'SeviceHandle',
          path: '/pages/ServiceHandle',
          component: () => import('@/views/pages/ServiceHandle'),
        },
        {
          name: 'ServiceRequest',
          path: '/pages/SR/ServiceRequest',
          component: () => import('@/views/pages/SR/ServiceRequest'),
        },
        {
          name: 'ServiceComplain',
          path: '/pages/SR/ServiceComplain',
          component: () => import('@/views/pages/SR/ServiceComplain'),
        },
      ],
    },
  ],
})
