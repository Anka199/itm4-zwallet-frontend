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
    <div class="m-4">
        <h5 id="mainText">Change Password</h5>
        <p class="text-muted">You must enter your current password<br> and then type your new password twice.</p>
    </div>
    <div class="row">
        <form action="" class="col-6 mx-auto mt-3">
            <div class="input-group mb-4 border-bottom">
                <div class="input-group-prepend">
                    <span class="input-group-text bg-white border border-0"><img src="../assets/lock.png" alt=""></span>
                </div>
                <input type="password" class="form-control border border-0" placeholder="Current password">
            </div>
            <div class="input-group mb-4 border-bottom">
                <div class="input-group-prepend">
                    <span class="input-group-text bg-white border border-0"><img src="../assets/lock.png" alt=""></span>
                </div>
                <input type="password" class="form-control border border-0" placeholder="New password">
            </div>
            <div class="input-group mb-4 border-bottom">
                <div class="input-group-prepend">
                    <span class="input-group-text bg-white border border-0"><img src="../assets/lock.png" alt=""></span>
                </div>
                <input type="password" class="form-control border border-0" placeholder="Repeat new password">
            </div>
            <div class="row">
                <button class="btn btn-primary w-75 mx-auto mt-3" style="background: #6379F4;">Change Password</button>
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
  name: 'changepassword',
  components: {
    navbar,
    sidebar,
    footbar
  }
}
</script>
