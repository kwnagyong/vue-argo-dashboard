import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
import store from './store'


Vue.use(Router);

const requireAuth = () => (from, to, next) => {
  if (store.state.user.isLogin) return next()
  next('/login') // isAuth === false면 다시 로그인 화면으로 이동
}


export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'dashboard',
      component: DashboardLayout,
      beforeEnter: requireAuth(),
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "demo" */ './views/Dashboard.vue'),
        },
        {
          path: '/articles',
          name: '제품관리',
          component: () => import(/* webpackChunkName: "demo" */ './views/Articles.vue')
        },
        {
          path: '/customers',
          name: '고객',
          component: () => import(/* webpackChunkName: "demo" */ './views/Customers.vue')
        },        {
          path: '/sheets',
          name: '견적/납품',
          component: () => import(/* webpackChunkName: "demo" */ './views/Sheets.vue')
        },
        {
          path: '/maps',
          name: 'maps',
          component: () => import(/* webpackChunkName: "demo" */ './views/Maps.vue')
        },
        {
          path: '/tables',
          name: 'tables',
          component: () => import(/* webpackChunkName: "demo" */ './views/Tables.vue')
        }
      ]
    },
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import(/* webpackChunkName: "demo" */ './views/Login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import(/* webpackChunkName: "demo" */ './views/Register.vue')
        }
      ]
    }
  ]
})
