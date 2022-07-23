import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: () => import('@/components/AdminIndex'),
      children: [
        {
          name: 'Home',
          path: '',
          component: () => import('@/views/HomeView'),
        },
        {
          name: 'Stack',
          path: '/pages/testpage',
          component: () => import('@/views/pages/TestPage'),
        },
      ],
    },
  ],
})

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
    
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
// ]



