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
                            <h6 class="ml-4 mt-3">Transfer to :</h6>
                            <nav class="navbar px-2 mx-2 shadow-sm mb-3">
                                <img src="../assets/christian-buehner-DItYlc26zVI-unsplash 1.png" width="50px" alt="">
                                <div class="col-auto mr-auto">
                                    <h6 class="m-0">Samuel Sushi</h6>
                                    <small>+62 895 0520 6416</small>
                                </div>
                            </nav>
                            <h6 class="ml-4">Details :</h6>
                            <nav class="navbar rounded-pill shadow-sm mb-3 p-0 px-2 mx-4">
                                <div class="col">
                                    <small class="text-muted m-0">Ammount</small>
                                    <h6>Rp100.000</h6>
                                </div>
                            </nav>
                            <nav class="navbar rounded-pill shadow-sm mb-3 p-0 px-2 mx-4">
                                <div class="col">
                                    <small class="text-muted m-0">Balance Left</small>
                                    <h6>Rp20.000</h6>
                                </div>
                            </nav>
                            <nav class="navbar rounded-pill shadow-sm mb-3 p-0 px-2 mx-4">
                                <div class="col">
                                    <small class="text-muted m-0">Date & Time</small>
                                    <h6>May 11, 2020 - 12.20</h6>
                                </div>
                            </nav>
                            <nav class="navbar rounded-pill shadow-sm mb-3 p-0 px-2 mx-4">
                                <div class="col">
                                    <small class="text-muted m-0">Notes</small>
                                    <h6>For buying some socks</h6>
                                </div>
                            </nav>
                            <div class="row mx-5">
                                <buttom class="btn btn-primary ml-auto px-4" id="btnstatus2">Continue</buttom>
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
  name: 'confirmation',
  components: {
    navbar,
    sidebar,
    footbar
  }
}
</script>
