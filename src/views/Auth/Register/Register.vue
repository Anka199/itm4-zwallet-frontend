<template>
  <div class="container-fluid login-container row">
      <sidebarAuth />
      <div class="login">
        <div class="title mb-3">
            <h5>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h5>
        </div>
        <div class="subtitle">
            <p>Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
        </div>
        <form class="mt-5">
            <div class="input-group mb-5">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-user"></i></span>
                </div>
                <input type="text" class="form-control" v-model="username" placeholder="Enter your username">
            </div>
            <div class="input-group mb-5">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-envelope-o"></i></span>
                </div>
                <input type="text" class="form-control" v-model="email" placeholder="Enter your e-mail">
            </div>
            <div class="input-group mb-4">
                <div class="input-group-prepend">
                    <span class="input-group-text pl-3"><i class="fa fa-lock"></i></span>
                </div>
                <input type="password" class="form-control" v-model="password" placeholder="Create your password">
            </div>
            <button type="button" class="btn" :disabled="!input" @click="handleRegister">Sign Up</button>
            <div class="row go-register">
                <p>Already have an account? Let’s</p>
                <p class="ml-1" @click="goLogin">Login</p>
            </div>
        </form>
    </div>
  </div>
</template>

<script>
import sidebarAuth from '../../../components/sidebarAuth'
import { mapActions } from 'vuex'
export default {
  name: 'Register',
  components: {
    sidebarAuth
  },
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  computed: {
    input: function () {
      return this.username && this.email && this.password
    }
  },
  methods: {
    ...mapActions(['register']),
    handleRegister (e) {
      e.preventDefault()
      const data = {
        username: this.username,
        email: this.email,
        password: this.password
      }
      this.register(data)
        .then((res) => {
          this.$toast.success('Register Success')
          this.$router.push('/')
          this.$router.go(0)
        })
        .catch((err) => {
          this.$toast.error(err.response.data.result)
        })
    },
    goLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.login-container {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.login {
  width: 45%;
  background-color: #fff;
  text-align: left;
  padding: 25px 40px;
}
.title {
  width: 70%;
}
.subtitle {
  width: 80%;
}
h5 {
  font-weight: 700;
  color: black;
  line-height: 32.74px;
}
p {
  line-height: 30px;
  color: rgba(58, 61, 66, 0.6);
}
form {
  width: 80%;
}
span {
  background-color: transparent;
  border: none;
  border-radius: 0;
  border-bottom: 1.5px solid rgba(169, 169, 169, 0.6);
}
i {
  color: rgba(169, 169, 169, 0.6);
}
input {
  border: none;
  border-radius: 0;
  border-bottom: 1.5px solid rgba(169, 169, 169, 0.6);
  font-size: 14px;
}
h6 {
  float: right;
  font-size: 15px;
}
button {
  width: 100%;
  height: 40px;
  border-radius: 10px;
  margin-top: 25px;
  margin-bottom: 15px;
  background-color: #6379F4;
  color: white;
}
.go-register {
  justify-content: center;
  font-weight: 600;
}
.go-register p:last-of-type {
  color: #6379F4;
}
.go-register p:last-of-type:hover {
  cursor: pointer;
}
@media screen and (max-width: 900px) and (min-width: 258px) {
  .sidebar {
    display: none;
  }
  .login {
    padding: 30px;
    width: 100%;
  }
  .title {
    width: 100%;
  }
  .subtitle {
    width: 100%;
  }
  form {
    width: 100%;
  }
}
</style>
