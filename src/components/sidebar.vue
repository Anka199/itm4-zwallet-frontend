<template>
    <div>
    <div class="row">
        <button class="btn w-75 btn-success my-5 mx-auto">Dashboard</button>
    </div>
    <div class="row">
        <button class="btn w-75 btn-success mb-5 mx-auto">Transfer</button>
    </div>
    <div class="row">
        <button class="btn w-75 btn-success mb-5 mx-auto">Top Up</button>
    </div>
    <div class="row">
        <button class="btn w-75 btn-success mb-5 mx-auto">Proifle</button>
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
    }
  }
}
</script>
