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
                                        <button class="btn"><img src="../assets/search.png" alt=""></button>
                                    </div>
                                    <input type="search" class="form-control border border-0 bg-transparent" placeholder="Search receiver here">
                                </div>
                            </div>
                            <nav class="navbar px-2 mx-4 shadow-sm mb-3">
                                <img src="../assets/christian-buehner-DItYlc26zVI-unsplash 1.png" width="50px" alt="">
                                <div class="col-auto mr-auto">
                                    <h6 class="m-0">Samuel Sushi</h6>
                                    <small>+62 895 0520 6416</small>
                                </div>
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
import navbar from '../components/navbar'
import sidebar from '../components/sidebar'
import footbar from '../components/footbar'

export default {
  name: 'transfer',
  components: {
    navbar,
    sidebar,
    footbar
  }
}
</script>
