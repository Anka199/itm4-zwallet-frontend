<template>
  <div class="container-fluid login-container row">
      <sidebarAuth class="sidebar" />
      <div class="login">
        <div class="title mb-3">
            <h5>Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</h5>
        </div>
        <div class="subtitle">
            <p>To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>
        </div>
        <form class="mt-5">
            <div class="input-group mb-5">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-envelope-o"></i></span>
                </div>
                <input type="text" class="form-control" v-model="email" placeholder="Enter your e-mail">
            </div>
            <button type="button" class="btn" :disabled="!input" @click="handleLogin">Confirm</button>
        </form>
    </div>
  </div>
</template>

<script>
import sidebarAuth from '../../../components/sidebarAuth'
import { mapActions } from 'vuex'
export default {
  name: 'ResetPassword',
  components: {
    sidebarAuth
  },
  data () {
    return {
      email: ''
    }
  },
  computed: {
    input: function () {
      return this.email
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
