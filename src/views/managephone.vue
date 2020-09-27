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
                                <h5 id="mainText">Manage Phone Number</h5>
                                <p class="text-muted">You can only delete the phone number <br> and then you must add another phone number.</p>
                            </div>
                            <nav class="navbar rounded-pill shadow m-2">
                                <div class="col">
                                    <p class="text-muted m-0">Primary</p>
                                    <h5>+62 895 0510 6416</h5>
                                </div>
                                <a href="" class="ml-auto">X</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footbar/>
</div>
</template>

<script>
import navbar from '../components/navbar'
import sidebar from '../components/sidebar'
import footbar from '../components/footbar'

export default {
  name: 'managephone',
  components: {
    navbar,
    sidebar,
    footbar
  }
}
</script>
