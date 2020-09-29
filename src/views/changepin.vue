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
                                <h5 id="mainText">Change PIN</h5>
                                <p class="text-muted">Enter your current 6 digits Zwallet PIN<br> below to continue to the next steps.</p>
                            </div>
                            <div class="row">
                                <form action="" class="col-6 mx-auto mt-5">
                                    <div class="vue-pincode-input-wrapper mb-5">
                                        <PincodeInput
                                            v-model="code"
                                            :length="6"
                                        />
                                    </div>
                                    <div class="row">
                                        <button class="btn btn-primary w-75 mx-auto" style="background: #6379F4;">Continue</button>
                                    </div>
                                </form>
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
import PincodeInput from 'vue-pincode-input'
import navbar from '../components/navbar'
import sidebar from '../components/sidebar'
import footbar from '../components/footbar'

export default {
  name: 'changepin',
  components: {
    PincodeInput,
    navbar,
    sidebar,
    footbar
  },
  data: () => ({
    code: ''
  })
}
</script>
<style scoped>
.vue-pincode-input-wrapper {
  padding: 0px 35px;
}
</style>
