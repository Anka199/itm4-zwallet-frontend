<template>
    <div class="dropdown ml-4 mb-4">
        <a
        class="btn btn-dropdown dropdown-toggle"
        href="#"
        role="button"
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Order By</a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" @click="OrderName">Name</a>
            <a class="dropdown-item" @click="OrderPhone">Phone</a>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'orderBy',
  methods: {
    OrderName (e) {
      e.preventDefault()
      this.getReceiversByName()
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    OrderPhone (e) {
      e.preventDefault()
      this.getReceiversByPhone()
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    ...mapActions(['getReceivers', 'getReceiversByName', 'getReceiversByPhone'])
  },
  computed: {
    ...mapGetters({
      receivers: 'receivers'
    })
  },
  mounted () {
    this.getReceivers()
  }
}
</script>

<style>
.btn-dropdown {
    border: 3px solid #6379F4;
    color: #212227;
}
.btn-dropdown:hover {
    background-color: #6379F4;
    color: aliceblue;
}
.dropdown-item {
    cursor: pointer;
}
</style>
