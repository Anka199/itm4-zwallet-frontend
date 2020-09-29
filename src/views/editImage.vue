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
                            <div class="col-auto">
                                <div class="row mt-5">
                                    <img :src="image" class="mx-auto" width="150px" id="photo"><br>
                                </div>
                                <div class="row mt-3 mb-2">
                                    <form>
                                        <input type="file" name="file" id="file" class="inputfile" @change="onFileChange" />
                                        <label for="file" @change="onFileChange">Select image</label>
                                        <button class="btn ml-3" @click.prevent="handleUpload"><i class="fa fa-upload"></i></button>
                                    </form>
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
import { mapActions, mapGetters } from 'vuex'
import navbar from '../components/navbar'
import sidebar from '../components/sidebar'
import footbar from '../components/footbar'

export default {
  name: 'editImage',
  components: {
    navbar,
    sidebar,
    footbar
  },
  data () {
    return {
      File: ''
    }
  },
  methods: {
    ...mapActions(['uploadImg', 'getUserById']),
    onFileChange (event) {
      this.FILE = event.target.files[0]
    },
    handleUpload () {
      const formData = new FormData()
      formData.append('image', this.FILE, this.FILE.name)
      const data = {
        id: this.userId,
        form: formData
      }
      this.uploadImg(data)
        .then((res) => {
          this.getUserById(data)
            .then((res) => {
              this.$toast.success('Update Profile Success')
              this.$router.push('/profile')
            })
            .catch((err) => {
              this.$toast.error(err.response.data.result)
            })
        })
        .catch((err) => {
          console.log(err.response.data.result)
          this.$toast.error(err.response.data.result)
        })
    }
  },
  computed: {
    ...mapGetters({
      userId: 'userId',
      image: 'image'
    })
  }
}
</script>

<style scoped>
form {
    margin-left: auto;
    margin-right: auto;
}
button {
    background-color: #6379F4;
    color: #fff;
}
button:hover {
    opacity: 0.8;
}
.inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
}
.inputfile + label {
    font-size: 14px;
    font-weight: 700;
    color: #6379F4;
    padding: 5px 10px;
    width: 105px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 2px 6px 0 rgba(0, 0, 0, 0.19);
    background-color: #fff;
    display: inline-block;
}

.inputfile:focus + label,
.inputfile + label:hover {
    background-color:  #a0aefc;
    color: #fff;
}
.inputfile + label {
    cursor: pointer;
}
</style>
