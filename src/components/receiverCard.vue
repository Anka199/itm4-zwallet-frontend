<template>
    <nav class="navbar px-2 mx-4 shadow-sm mb-3">
        <img :src="item.image" width="50px" alt="img">
        <div class="col-auto mr-auto">
            <h6 class="m-0">{{item.name}}</h6>
            <small>{{item.phoneNumber}}</small>
        </div>
    </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'receiverCard',
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    ...mapActions(['getReceivers'])
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
