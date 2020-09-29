<template>
  <div class="container-fluid login-container row">
      <sidebarAuth class="sidebar" />
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
                    <span class="input-group-text"><i class="fa fa-envelope-o"></i></span>
                </div>
                <input type="text" class="form-control" v-model="email" placeholder="Enter your e-mail">
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text pl-3"><i class="fa fa-lock"></i></span>
                </div>
                <input type="password" class="form-control" v-model="password" placeholder="Enter your password">
            </div>
            <h6 @click="goResetPassword">Forgot password?</h6>
            <button type="button" class="btn" :disabled="!input" @click="handleLogin">Login</button>
            <div class="row go-register">
                <p>Don’t have an account? Let’s</p>
                <p class="ml-1" @click="goSignUp">Sign Up</p>
            </div>
        </form>
    </div>
  </div>
</template>

<script>
import sidebarAuth from '../../../components/sidebarAuth'
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  components: {
    sidebarAuth
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    input: function () {
      return this.password && this.email
    }
  },
  methods: {
    ...mapActions(['login']),
    handleLogin (e) {
      e.preventDefault()
      const data = {
        email: this.email,
        password: this.password
      }
      this.login(data)
        .then((res) => {
          this.$toast.success('Login Success')
          this.$router.push('/')
        })
        .catch((err) => {
          this.$toast.error(err.response.data.result)
        })
    },
    goSignUp () {
      this.$router.push('/register')
    },
    goResetPassword () {
      this.$router.push('/resetPassword')
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
  padding: 40px;
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
h6:hover {
  cursor: pointer;
  color: #6379F4;
}
button {
  width: 100%;
  height: 40px;
  border-radius: 10px;
  margin-top: 45px;
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
