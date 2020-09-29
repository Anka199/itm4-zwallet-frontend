<template>
    <div>
        <div class="container-fluid p-0 bg-light">
            <navbar/>
            <div class="container p-0">
                <div class="row my-4">
                    <div class="col-3 shadow">
                        <sidebar />
                    </div>
                    <div class="col-9">
                        <div class="row m-0">
                            <div id="box" class="shadow mx-auto">
                                <div class="col-auto">
                                    <div class="row mt-5">
                                        <img :src="image" class="mx-auto" width="100px" id="photo"><br>
                                    </div>
                                    <div class="row">
                                      <router-link to="/editImage" class="mx-auto mb-3"><img src="../assets/edit-2.png" alt=""><span class="ml-2 text-secondary">edit</span></router-link>
                                    </div>
                                    <h5 class="text-center mb-0">{{username}}</h5>
                                    <p class="text-center text-muted">{{phoneNumber}}</p>
                                    <div class="row">
                                        <div class="col-6 mx-auto">
                                            <button class="btn w-100 mb-3 shadow-sm" id="btnprofile" @click="goPersonal">
                                                <nav class="navbar py-0">
                                                    <p class="m-0 my-auto">Personal Information</p>
                                                    <img src="../assets/arrow-left.png" class="my-auto ml-auto">
                                                </nav>
                                            </button>
                                            <button class="btn w-100 mb-3 shadow-sm" id="btnprofile" @click="goChangePassword">
                                                <nav class="navbar py-0">
                                                    <p class="m-0 my-auto">Change Password</p>
                                                    <img src="../assets/arrow-left.png" class="my-auto ml-auto">
                                                </nav>
                                            </button>
                                            <button class="btn w-100 mb-3 shadow-sm" id="btnprofile" @click="goChangePin">
                                                <nav class="navbar py-0">
                                                    <p class="m-0 my-auto">Change Pin</p>
                                                    <img src="../assets/arrow-left.png" class="my-auto ml-auto">
                                                </nav>
                                            </button>
                                            <button class="btn w-100 mb-3 shadow-sm" id="btnprofile" @click="handleLogout">
                                                <nav class="navbar py-0">
                                                    <p class="m-0 my-auto">Logout</p>
                                                </nav>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footbar/>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import navbar from '../components/navbar'
import sidebar from '../components/sidebar'
import footbar from '../components/footbar'

export default {
  name: 'profile',
  // data () {
  //   return {
  //     File: ''
  //   }
  // },
  components: {
    navbar,
    sidebar,
    footbar
  },
  methods: {
    ...mapActions(['logout']),
    handleLogout () {
      this.$router.go(0)
      this.logout()
    },
    goPersonal () {
      this.$router.push('/personal')
    },
    goChangePassword () {
      this.$router.push('/changepassword')
    },
    goChangePin () {
      this.$router.push('/changepin')
    }
  },
  computed: {
    ...mapGetters({
      userId: 'userId',
      firstName: 'firstName',
      lastName: 'lastName',
      username: 'username',
      email: 'email',
      image: 'image',
      phoneNumber: 'phoneNumber'
    })
  }
}
</script>
<style scoped>
button:hover {
  cursor: pointer;
  background-color: #6379F4;
  font-weight: bolder;
}
</style>
