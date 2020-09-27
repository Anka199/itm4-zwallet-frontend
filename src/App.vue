<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
textarea:hover,
input:hover,
textarea:active,
input:active,
textarea:focus,
input:focus,
button:focus,
button:active,
button:hover,
label:focus,
.btn:active,
.btn.active {
    outline: 0px;
    -webkit-appearance: none;
    box-shadow: none !important;
}

/* Chrome, Safari, Edge, Opera */

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */

input[type=number] {
    -moz-appearance: textfield;
}

#photo {
    border-radius: 10px;
}

#box {
    Width: 100%;
    Height: 503px;
    background: white;
    border-radius: 25px;
    overflow: hidden;
}

#btnprofile {
    background: #E5E8ED;
    border-radius: 10px;
}

#btnstatus1 {
    background: rgba(99, 121, 244, 0.15);
    color: #6379F4;
    border-radius: 12px;
}

#btnstatus1 span {
    font-size: 15px;
    margin-left: 5px;
}

#btnstatus2 {
    background: #6379F4;
    border-radius: 12px;
}

#searchreceiver {
    background: rgb(219, 224, 230);
    border-radius: 25px;
}
#foot{
    background: #6379F4;
    color: white;
}
</style>
