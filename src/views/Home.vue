<template>
  <div>
    <div class="container-fluid p-0 bg-light">
    <navbar/>
      <div class="container p-0">
        <div class="row my-4">
          <div class="col-3 shadow">
            <sidebar/>
          </div>
          <div class="col-9">
            <div class="row m-0">
              <div id="box" class="shadow mx-auto">
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
  name: 'Home',
  components: {
    navbar,
    sidebar,
    footbar
  }
}
</script>
