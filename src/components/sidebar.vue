<template>
    <div>
    <div class="row">
        <button class="btn w-75 my-5 mx-auto" @click="goHome">
          <img src="../assets/sidebar/grid.svg" class="mr-4" alt="icon" width="25px">
          Dashboard
        </button>
    </div>
    <div class="row">
        <button class="btn w-75 mb-5 mx-auto" @click="goTransfer">
          <img src="../assets/sidebar/arrow-up.svg" class="mr-4" alt="icon" width="25px">
          Transfer
        </button>
    </div>
    <div class="row">
        <button class="btn w-75 mb-5 mx-auto" @click="goTopUp">
          <img src="../assets/sidebar/plus.svg" class="mr-4" alt="icon" width="25px">
          Top Up
        </button>
    </div>
    <div class="row">
        <button class="btn w-75 mb-5 mx-auto" @click="goProfile">
          <img src="../assets/sidebar/user.svg" class="mr-4" alt="icon" width="25px">
          Profile
        </button>
    </div>
    <div class="row">
        <button class="btn w-75 mt-5 mx-auto" @click="handleLogout">
          <img src="../assets/sidebar/log-out.svg" class="mr-4" alt="icon" width="25px">
          Logout
        </button>
    </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'sidebar',
  methods: {
    ...mapActions(['logout']),
    handleLogout () {
      this.$router.go(0)
      this.logout()
    },
    goHome () {
      this.$router.push('/')
    },
    goTransfer () {
      this.$router.push('/transfer')
    },
    goTopUp () {
      this.$router.push('/topup')
    },
    goProfile () {
      this.$router.push('/profile')
    }
  }
}
</script>
<style scoped>
button {
  text-align: center;
}
button:hover {
  background-color: #a0aefc;
}
</style>
