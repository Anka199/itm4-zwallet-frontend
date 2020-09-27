import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'
import addphone from '../views/addphone.vue'
import changepassword from '../views/changepassword.vue'
import changepin from '../views/changepin.vue'
import confirmation from '../views/confirmation.vue'
import managephone from '../views/managephone.vue'
import personal from '../views/personal.vue'
import profile from '../views/profile.vue'
import status from '../views/status.vue'
import topup from '../views/topup.vue'
import transfer from '../views/transfer.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/auth',
  name: 'Auth',
  component: Auth
},
{
  path: '/addphone',
  name: 'addphone',
  component: addphone
},
{
  path: '/changepassword',
  name: 'changepassword',
  component: changepassword
},
{
  path: '/changepin',
  name: 'changepin',
  component: changepin
},
{
  path: '/confirmation',
  name: 'confirmation',
  component: confirmation
},
{
  path: '/managephone',
  name: 'managephone',
  component: managephone
},
{
  path: '/personal',
  name: 'personal',
  component: personal
},
{
  path: '/profile',
  name: 'profile',
  component: profile
},
{
  path: '/status',
  name: 'status',
  component: status
},
{
  path: '/topup',
  name: 'topup',
  component: topup
},
{
  path: '/transfer',
  name: 'transfer',
  component: transfer
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
