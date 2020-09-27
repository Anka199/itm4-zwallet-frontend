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
                                <nav class="navbar rounded-pill shadow-sm mx-3 mb-3 mt-4">
                                    <p class="text-info m-0 mr-3">1. </p>
                                    <small class="m-0 mr-auto">Go to the nearest ATM or you can use E-Banking.</small>
                                </nav>
                                <nav class="navbar rounded-pill shadow-sm mx-3 mb-3">
                                    <p class="text-info m-0 mr-3">2. </p>
                                    <small class="m-0 mr-auto">Type your security number on the ATM or E-Banking.</small>
                                </nav>
                                <nav class="navbar rounded-pill shadow-sm mx-3 mb-3">
                                    <p class="text-info m-0 mr-3">3. </p>
                                    <small class="m-0 mr-auto">Select “Transfer” in the menu</small>
                                </nav>
                                <nav class="navbar rounded-pill shadow-sm mx-3 mb-3">
                                    <p class="text-info m-0 mr-3">4. </p>
                                    <small class="m-0 mr-auto">Type the virtual account number that we provide you at the
                                        top.</small>
                                </nav>
                                <nav class="navbar rounded-pill shadow-sm mx-3 mb-3">
                                    <p class="text-info m-0 mr-3">5. </p>
                                    <small class="m-0 mr-auto">Type the amount of the money you want to top up.</small>
                                </nav>
                                <nav class="navbar rounded-pill shadow-sm mx-3 mb-3">
                                    <p class="text-info m-0 mr-3">6. </p>
                                    <small class="m-0 mr-auto">Read the summary details</small>
                                </nav>
                                <nav class="navbar rounded-pill shadow-sm mx-3 mb-3">
                                    <p class="text-info m-0 mr-3">7. </p>
                                    <small class="m-0 mr-auto">Press transfer / top up</small>
                                </nav>
                                <nav class="navbar rounded-pill shadow-sm mx-3 mb-3">
                                    <p class="text-info m-0 mr-3">8. </p>
                                    <small class="m-0 mr-auto">You can see your money in Zwallet within 3 hours.</small>
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
  name: 'topup',
  components: {
    navbar,
    sidebar,
    footbar
  }
}
</script>
