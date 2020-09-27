<template>
    <div>
    <div class="row">
        <button class="btn w-75 btn-success my-5 mx-auto" @click="goHome">Dashboard</button>
    </div>
    <div class="row">
        <button class="btn w-75 btn-success mb-5 mx-auto" @click="goTransfer">Transfer</button>
    </div>
    <div class="row">
        <button class="btn w-75 btn-success mb-5 mx-auto" @click="goTopUp">Top Up</button>
    </div>
    <div class="row">
        <button class="btn w-75 btn-success mb-5 mx-auto" @click="goProfile">Profile</button>
    </div>
    <div class="row">
        <button class="btn w-75 btn-success mt-5 mx-auto" @click="handleLogout">Logout</button>
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
