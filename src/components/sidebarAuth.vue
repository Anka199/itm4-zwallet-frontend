<template>
    <div class="sidebar">
        <h4>Zwallet</h4>
        <div class="img-container mt-4 mb-2">
            <img src="../assets/hp.svg" alt="hp">
        </div>
        <h5 class="mb-4">App that Covering Banking Needs.</h5>
        <p>Zwallet is an application that focussing in banking needs for all users
        in the world. Always updated and always following world trends.
        5000+ users registered in Zwallet everyday with worldwide
        users coverage.</p>
    </div>
</template>

<script>
export default {
  name: 'sidebarAuth'
}
</script>

<style scoped>
.sidebar {
    width: 55%;
    height: 100%;
    background-image: url('../assets/sidebarAuth.svg');
    text-align: left;
    padding: 30px 60px;
    color: #fff;
}
h4 {
    padding-left: 70px;
    font-weight: 700;
}
h5 {
    padding-left: 70px;
    font-weight: 700;
}
p {
    padding-left: 70px;
}
.img-container {
    width: 450px;
    height: 400px;
}
img {
    width: 100%;
    height: 100%;
}
</style>
