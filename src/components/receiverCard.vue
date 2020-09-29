<template>
    <nav class="navbar px-2 mx-4 shadow-sm mb-3">
        <img :src="item.image" width="50px" alt="img">
        <div class="col mr">
            <div class="d-flex justify-content-between">
              <h6 class="m-0">{{item.name}}</h6>
              <i class="fa fa-trash" @click="$emit('event-delete', item.id)"></i>
            </div>
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

<style scoped>
i {
  font-size: 18px;
  color: red;
}
i:hover {
  cursor: pointer;
  font-size: 20px;
}
</style>
