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
                            <h6 class="ml-4 mt-3">Search Receiver</h6>
                            <div class="row my-3">
                                <div class="input-group col-11 mx-auto" id="searchreceiver">
                                    <div class="input-group-prepend">
                                        <button class="btn"><img src="../assets/search.png" alt="icon"></button>
                                    </div>
                                    <input type="search" class="form-control border border-0 bg-transparent" placeholder="Search receiver here" v-on:keyup.enter="setSearch">
                                </div>
                            </div>
                            <orderBy />
                            <div class="list-receiver">
                                <div v-for="receiver in receivers" :key="receiver.id">
                                    <receiverCard :item="receiver" />
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
import orderBy from '../components/orderBy'
import receiverCard from '../components/receiverCard'

export default {
  name: 'transfer',
  props: {
    item: {
      type: Object
    }
  },
  components: {
    navbar,
    sidebar,
    footbar,
    orderBy,
    receiverCard
  },
  methods: {
    setSearch (e) {
      this.handleSearch(e.target.value)
    },
    ...mapActions(['getReceivers', 'handleSearch'])
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
.list-receiver {
    overflow: auto;
    height: 300px;
}
</style>
