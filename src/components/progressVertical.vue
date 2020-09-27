<template>
  <div class="container">
      <div class="progress progress-bar-vertical">
        <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="height: 100%;"></div>
      </div>
      <div class="progress progress-bar-vertical">
        <div class="progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="height: 30%;"></div>
      </div>
      <div class="progress progress-bar-vertical">
        <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="height: 0%;"></div>
      </div>
      <div class="progress progress-bar-vertical">
        <div class="progress-bar" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="height: 10%;"></div>
      </div>
      <div class="progress progress-bar-vertical">
        <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="height: 0%;"></div>
      </div>
      <div class="progress progress-bar-vertical">
        <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="height: 100%;"></div>
      </div>
      <div class="progress progress-bar-vertical">
        <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="height: 0%;"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'progressVertical'
}
</script>

<style scoped>
.progress-bar-vertical {
  width: 15px;
  min-height: 250px;
  border-radius: 20px;
  display: flex;
  align-items: flex-end;
  margin-right: 20px;
  float: left;
}
.progress-bar-vertical .progress-bar {
  width: 100%;
  height: auto;
  -webkit-transition: height 0.6s ease;
  -o-transition: height 0.6s ease;
  transition: height 0.6s ease;
}
</style>
