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
                                    <div class="row mt-3 mb-2">
                                        <img src="../assets/success.png" class="mx-auto" width="40px" alt=""><br>
                                    </div>
                                    <h5 class="text-center">Transfer Successfully</h5>
                                    <nav class="navbar rounded-pill shadow-sm mb-3 p-0 px-2">
                                        <div class="col">
                                            <small class="text-muted m-0">Ammount</small>
                                            <h6>Rp100.000</h6>
                                        </div>
                                    </nav>
                                    <nav class="navbar rounded-pill shadow-sm mb-3 p-0 px-2">
                                        <div class="col">
                                            <small class="text-muted m-0">Balance Left</small>
                                            <h6>Rp20.000</h6>
                                        </div>
                                    </nav>
                                    <nav class="navbar rounded-pill shadow-sm mb-3 p-0 px-2">
                                        <div class="col">
                                            <small class="text-muted m-0">Date & Time</small>
                                            <h6>May 11, 2020 - 12.20</h6>
                                        </div>
                                    </nav>
                                    <nav class="navbar rounded-pill shadow-sm mb-3 p-0 px-2">
                                        <div class="col">
                                            <small class="text-muted m-0">Notes</small>
                                            <h6>For buying some socks</h6>
                                        </div>
                                    </nav>
                                    <h6>Transfer to :</h6>
                                    <nav class="navbar p-0">
                                        <form class="form-inline ml-auto">
                                            <button class="btn mr-2" id="btnstatus1"><img src="../assets/share-2.png"
                                                    alt=""></button>
                                            <button class="btn px-4 mr-2" id="btnstatus1">
                                                <div class="row">
                                                    <img src="../assets/download.png" alt="">
                                                    <span>Download PDF</span>
                                                </div>
                                            </button>
                                            <button class="btn btn-primary" id="btnstatus2">
                                                Back To Home
                                            </button>
                                        </form>
                                    </nav>
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
import navbar from '../components/navbar'
import sidebar from '../components/sidebar'
import footbar from '../components/footbar'

export default {
  name: 'status',
  components: {
    navbar,
    sidebar,
    footbar
  },
  data () {
    return {
      status: true
    }
  }
}
</script>
