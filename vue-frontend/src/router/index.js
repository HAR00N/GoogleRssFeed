import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: '/',
  routes: [
    {
      path: '',
      redirect: 'admin/sr',
    },
    {
      path: '/admin',
      name: '관리자 페이지',
      component: () => import('@/components/AdminIndex'),
      children: [
        {
          name: '관리자 시작 페이지',
          path: '',
          redirect: '/admin/sr'
        },
        {
          name: 'SR 처리',
          path: '/admin/sr',
          component: () => import('@/views/pages/admin/ServiceTreat.vue'),
        },
        {
          name: '대시보드',
          path: '/admin/dashboard',
          component: () => import('@/views/pages/admin/DashBoard.vue'),
        },
        {
          name: '사용자 관리',
          path: '/admin/system/user',
          component: () => import('@/views/pages/admin/SystemManage/UserManage.vue'),
        },
        {
          name: '권한 관리',
          path: '/admin/system/role',
          component: () => import('@/views/pages/admin/SystemManage/RoleManage.vue'),
        },
        {
          name: '운영팀 관리 1',
          path: '/admin/team/no1',
          component: () => import('@/views/pages/admin/TeamManage/TeamManage1.vue'),
        },
        {
          name: '운영팀 관리 2',
          path: '/admin/team/no2',
          component: () => import('@/views/pages/admin/TeamManage/TeamManage2.vue'),
        },
        {
          name: '통계',
          path: '/admin/chart',
          component: () => import('@/views/pages/admin/StatisticsChart.vue')
        }
      ],
    },
    {
      path: '/client',
      name: '사용자 페이지',
      component: () => import('@/components/ClientIndex'),
      children: [
        {
          name: '사용자 시작 페이지',
          path: '',
          redirect: '/client/main',
        },
        {
          name: '사용자 메인 페이지',
          path: '/client/main',
          component: () => import('@/views/pages/client/ClientMain'),
        },
      ]
    },
  ],
})
