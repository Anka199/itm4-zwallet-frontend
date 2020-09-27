import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    token: localStorage.getItem('token') || null,
    firstName: localStorage.getItem('firstName') || null,
    lastName: localStorage.getItem('lastName') || null,
    email: localStorage.getItem('email') || null,
    image: localStorage.getItem('image') || null,
    phoneNumber: localStorage.getItem('phoneNumber') || null,
    resetId: localStorage.getItem('resetId') || null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
      state.token = payload.token
      state.firstName = payload.firstName
      state.lastName = payload.lastName
      state.email = payload.email
      state.image = payload.image
      state.phoneNumber = payload.phoneNumber
    },
    setToken (state, payload) {
      state.token = payload
    },
    setResetId (state, id) {
      state.resetId = id
    }
  },
  actions: {
    interceptorsResponse (setex) {
      axios.interceptors.response.use(function (response) {
        return response
      }, function (error) {
        console.log(error.response.data.result)
        localStorage.removeItem('token')
        setex.commit('setToken', null)
        router.push('/login')
        // alert(error.response.data.result.message)
        return Promise.reject(error)
      })
    },
    interceptorsRequest (setex) {
      console.log('interse')
      axios.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${setex.state.token}`
        return config
      }, function (error) {
        return Promise.reject(error)
      })
    },
    login (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:4000/api/v1/users/login', payload)
          .then((res) => {
            setex.commit('setUser', res.data.result)
            localStorage.setItem('token', this.state.token)
            localStorage.setItem('firstName', this.state.firstName)
            localStorage.setItem('lastName', this.state.lastName)
            localStorage.setItem('email', this.state.email)
            localStorage.setItem('image', this.state.image)
            localStorage.setItem('phoneNumber', this.state.phoneNumber)
            resolve(res.data.result[0])
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    register (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:4000/api/v1/users/register', payload)
          .then((res) => {
            resolve(res.data.result[0])
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    forgotPassword (setex, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:4000/api/v1/users/forgotpassword', payload)
          .then((res) => {
            setex.commit('setResetId', res.data.result)
            localStorage.setItem('resetId', this.state.resetId)
            console.log(res.data.message)
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    resetPassword (setex, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.patch(`http://localhost:4000/api/v1/users/resetpassword/${this.state.resetId}`, payload)
          .then((res) => {
            console.log(res.data.message)
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    logout () {
      localStorage.removeItem('token')
      localStorage.removeItem('firstName')
      localStorage.removeItem('lastName')
      localStorage.removeItem('email')
      localStorage.removeItem('image')
      localStorage.removeItem('phoneNumber')
    }
  },
  getters: {
    isLogin (state) {
      return state.token !== null
    },
    token (state) {
      return state.token
    },
    firstName (state) {
      return state.firstName
    },
    lastName (state) {
      return state.lastName
    },
    email (state) {
      return state.email
    },
    image (state) {
      return state.image
    },
    phoneNumber (state) {
      return state.phoneNumber
    }
  },
  modules: {
  }
})
