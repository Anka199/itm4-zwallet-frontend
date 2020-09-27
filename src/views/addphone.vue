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
                                <h5 id="mainText">Add Phone Number</h5>
                                <p class="text-muted">Add at least one phone number for the transfer ID <br> so you can start transfering your money to another user.</p>
                            </div>
                            <div class="row">
                                <form action="" class="col-6 mx-auto mt-5">
                                    <div class="input-group mb-3 border-bottom">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text bg-white border border-0"><img
                                                src="../assets/phone.png" alt=""></span>
                                        </div>
                                        <div class="input-group-prepend">
                                            <span class="input-group-text bg-white border border-0">+62</span>
                                        </div>
                                        <input type="number" class="form-control border border-0" placeholder="Enter your phone number">
                                    </div>
                                    <div class="row">
                                        <button class="btn btn-primary w-75 mx-auto" style="background: #6379F4;">Add Phone
                                        Number </button>
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
import navbar from '../components/navbar'
import sidebar from '../components/sidebar'
import footbar from '../components/footbar'

export default {
  name: 'addphone',
  components: {
    navbar,
    sidebar,
    footbar
  }
}
</script>
