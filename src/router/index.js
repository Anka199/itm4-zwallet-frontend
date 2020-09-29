import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Auth/Login/Login.vue'
import Register from '../views/Auth/Register/Register.vue'
import ResetPassword from '../views/Auth/ResetPassword/ResetPassword.vue'
import Home from '../views/Home.vue'
import Dashboard from '../views/dashboard.vue'
import addphone from '../views/addphone.vue'
import changepassword from '../views/changepassword.vue'
import changepin from '../views/changepin.vue'
import confirmation from '../views/confirmation.vue'
import managephone from '../views/managephone.vue'
import personal from '../views/personal.vue'
import profile from '../views/profile.vue'
import editImage from '../views/editImage.vue'
import status from '../views/status.vue'
import topup from '../views/topup.vue'
import transfer from '../views/transfer.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [{
  path: '/register',
  name: 'Register',
  component: Register,
  meta: { requiresVisitor: true }
},
{
  path: '/login',
  name: 'Login',
  component: Login,
  meta: { requiresVisitor: true }
},
{
  path: '/resetPassword',
  name: 'ResetPassword',
  component: ResetPassword,
  meta: { requiresVisitor: true }
},
{
  path: '/',
  name: 'Home',
  component: Home,
  meta: { requiresAuth: true }
},
{
  path: '/dashboard',
  name: 'Dashboard',
  component: Dashboard,
  meta: { requiresAuth: true }
},
{
  path: '/addphone',
  name: 'addphone',
  component: addphone,
  meta: { requiresAuth: true }
},
{
  path: '/changepassword',
  name: 'changepassword',
  component: changepassword,
  meta: { requiresAuth: true }
},
{
  path: '/changepin',
  name: 'changepin',
  component: changepin,
  meta: { requiresAuth: true }
},
{
  path: '/confirmation',
  name: 'confirmation',
  component: confirmation,
  meta: { requiresAuth: true }
},
{
  path: '/managephone',
  name: 'managephone',
  component: managephone,
  meta: { requiresAuth: true }
},
{
  path: '/personal',
  name: 'personal',
  component: personal,
  meta: { requiresAuth: true }
},
{
  path: '/profile',
  name: 'profile',
  component: profile,
  meta: { requiresAuth: true }
},
{
  path: '/editImage',
  name: 'editImage',
  component: editImage,
  meta: { requiresAuth: true }
},
{
  path: '/status',
  name: 'status',
  component: status,
  meta: { requiresAuth: true }
},
{
  path: '/topup',
  name: 'topup',
  component: topup,
  meta: { requiresAuth: true }
},
{
  path: '/transfer',
  name: 'transfer',
  component: transfer,
  meta: { requiresAuth: true }
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
