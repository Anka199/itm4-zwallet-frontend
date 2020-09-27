<template>
    <div>
     <nav class="navbar bg-white shadow px-5">
        <h3 class="m-0" style="color: #6379F4;">Zwallet</h3>
        <div class="row ml-auto">
            <img :src=image width="50px" id="photo">
            <div class="col">
                <h6 class="m-0 mt-1">{{firstName}}</h6>
                <small class="m-0">{{phoneNumber}}</small>
            </div>
        </div>
        <a href=""><img src="../assets/bell.png" width="15px" class="ml-4"></a>
    </nav>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'navbar',
  computed: {
    ...mapGetters({
      firstName: 'firstName',
      lastName: 'lastName',
      email: 'email',
      image: 'image',
      phoneNumber: 'phoneNumber'
    })
  }
}
</script>
