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
                            <div class="m-4">
                                <h5 id="mainText">Personal Information</h5>
                                <p class="text-muted">We got your personal information from<br>the sign up proccess. If you want to make changes on
                                    <br> your information, contact our support.</p>
                            </div>
                            <nav class="navbar rounded-pill shadow-sm mx-4 mb-4 p-0 px-3">
                                <div class="col">
                                    <small class="text-muted m-0">First Name</small>
                                    <h6>{{firstName}}</h6>
                                </div>
                            </nav>
                            <nav class="navbar rounded-pill shadow-sm mx-4 mb-4 p-0 px-3">
                                <div class="col">
                                    <small class="text-muted m-0">Last Name</small>
                                    <h6>{{lastName}}</h6>
                                </div>
                            </nav>
                            <nav class="navbar rounded-pill shadow-sm mx-4 mb-4 p-0 px-3">
                                <div class="col">
                                    <small class="text-muted m-0">Verified E-mail</small>
                                    <h6>{{email}}</h6>
                                </div>
                            </nav>
                            <nav class="navbar rounded-pill shadow-sm mx-4 mb-4 p-0 px-3">
                                <div class="col">
                                    <small class="text-muted m-0">Phone Number</small>
                                    <h6>{{phoneNumber}}</h6>
                                </div>
                                <a href="" class="ml-auto">manage</a>
                            </nav>
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
import { mapGetters } from 'vuex'
import navbar from '../components/navbar'
import sidebar from '../components/sidebar'
import footbar from '../components/footbar'

export default {
  name: 'personal',
  components: {
    navbar,
    sidebar,
    footbar
  },
  computed: {
    ...mapGetters({
      firstName: 'firstName',
      lastName: 'lastName',
      email: 'email',
      phoneNumber: 'phoneNumber'
    })
  }
}
</script>
