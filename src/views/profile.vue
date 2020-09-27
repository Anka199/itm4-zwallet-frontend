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
                                    <div class="row mt-5">
                                        <img src="../assets/christian-buehner-DItYlc26zVI-unsplash 1.png" class="mx-auto" width="80px" id="photo"><br>
                                    </div>
                                    <div class="row">
                                        <a href="" class="mx-auto mb-3"><img src="../assets/edit-2.png" alt=""><span class="ml-2 text-secondary">edit</span></a>
                                    </div>
                                    <h5 class="text-center">Robert Chandler</h5>
                                    <p class="text-center text-muted">+62 895 0510 6416</p>
                                    <div class="row">
                                        <div class="col-6 mx-auto">
                                            <button class="btn w-100 mb-3 shadow-sm" id="btnprofile">
                                                <nav class="navbar py-0">
                                                    <p class="m-0 my-auto">Personal Information</p>
                                                    <img src="../assets/arrow-left.png" class="my-auto ml-auto">
                                                </nav>
                                            </button>
                                            <button class="btn w-100 mb-3 shadow-sm" id="btnprofile">
                                                <nav class="navbar py-0">
                                                    <p class="m-0 my-auto">Change Password</p>
                                                    <img src="../assets/arrow-left.png" class="my-auto ml-auto">
                                                </nav>
                                            </button>
                                            <button class="btn w-100 mb-3 shadow-sm" id="btnprofile">
                                                <nav class="navbar py-0">
                                                    <p class="m-0 my-auto">Change Pin</p>
                                                    <img src="../assets/arrow-left.png" class="my-auto ml-auto">
                                                </nav>
                                            </button>
                                            <button class="btn w-100 mb-3 shadow-sm" id="btnprofile">
                                                <nav class="navbar py-0">
                                                    <p class="m-0 my-auto">Logout</p>
                                                </nav>
                                            </button>
                                        </div>
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
import navbar from '../components/navbar'
import sidebar from '../components/sidebar'
import footbar from '../components/footbar'

export default {
  name: 'profile',
  components: {
    navbar,
    sidebar,
    footbar
  }
}
</script>
