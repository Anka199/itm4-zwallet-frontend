<template>
  <div class="auth">
    <!-- <Navbar /> -->
    <div class="content pt-5 pb-5">
      <!-- <Sidebar class="mr-3"/> -->
      <div class="container-box-balance">
        <div class="box-balance">
          <div class="balance">
            <div>
              <p>Balance</p>
              <p>Rp 120.000</p>
              <p>+62 813-9387-7946</p>
            </div>
            <div>
              <button class="btn-transfer"><i class="fas fa-arrow-up mr-2 ml-3"></i>Transfer</button>
              <button class="btn-top-up"><i class="fas fa-plus mr-2 ml-3"></i>Top Up</button>
            </div>
          </div>
        </div>
        <div class="box-income">
          <div class="income-expense">
            <div class="income">
              <p class="green"><i class="fas fa-arrow-down"></i></p>
              <p>Income</p>
              <p>Rp2.120.000</p>
            </div>
            <div class="expense">
              <p class="salmon"><i class="fas fa-arrow-up"></i></p>
              <p>Expense</p>
              <p>Rp1.560.000</p>
            </div>
          </div>
          <div class="chart"><img src="../assets/homepage/capture.png" alt=""></div>
        </div>
        <div class="box-transaction">
          <div class="flex">
            <div>Transaction History</div>
            <div>See all</div>
          </div>
          <div class="flex">
            <div class="container-user">
              <div class="image"><img src="../assets/homepage/1.svg" alt=""></div>
              <div class="content-text">
                <p>Samuel Suhi</p>
                <p>Transfer</p>
              </div>
            </div>
            <div class="price">+Rp50.000</div>
          </div>
          <div class="flex">
            <div class="container-user">
              <div class="image"><img src="../assets/homepage/1.svg" alt=""></div>
              <div class="content-text">
                <p>Samuel Suhi</p>
                <p>Transfer</p>
              </div>
            </div>
            <div class="price">+Rp50.000</div>
          </div>
          <div class="flex">
            <div class="container-user">
              <div class="image"><img src="../assets/homepage/1.svg" alt=""></div>
              <div class="content-text">
                <p>Samuel Suhi</p>
                <p>Transfer</p>
              </div>
            </div>
            <div class="price">+Rp50.000</div>
          </div>
          <div class="flex">
            <div class="container-user">
              <div class="image"><img src="../assets/homepage/1.svg" alt=""></div>
              <div class="content-text">
                <p>Samuel Suhi</p>
                <p>Transfer</p>
              </div>
            </div>
            <div class="price">+Rp50.000</div>
          </div>
        </div>
      </div>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import Navbar from '@/components/Navbar.vue'
// import Sidebar from '@/components/Sidebar.vue'
// import Footer from '@/components/Footer.vue'
export default {
  name: 'Auth',
  components: {
    // Navbar,
    // Sidebar,
    // Footer
  }
}
</script>

<style scoped>
body {
  background:#eaf3ff !important;
}
.content {
  margin: 0;
  padding-left: 150px;
  padding-right: 150px;
  background:#eaf3ff !important;
  display: flex;
}
.container-box-balance {
  width: 100%;
  display: grid;
  grid-template-areas: 'box-balance box-balance'
                       'box-income box-transaction';
}
.box-balance {
  grid-area: box-balance;
  margin-bottom: 20px;
  /* border: 1px solid salmon; */
}
.box-income {
  grid-area: box-income;
  grid-column: 2fr;
  margin-right: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  padding: 40px;
  padding-left: 30px;
  padding-right: 30px;
  /* border: 1px solid red; */
}
.box-transaction {
  grid-area: box-transaction;
  grid-column: 1fr;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  padding: 40px;
  /* border: 1px solid sandybrown; */
}
.box-transaction .flex {
  display: flex;
  justify-content: space-between;
}
/* .box-transaction div:nth-child(1) {
  border: 1px solid;
  flex: 2;
} */
/* .box-transaction div:nth-child(2) {
  border: 1px solid;
  flex: 1;
} */
.income-expense {
  display: flex;
  justify-content: space-between;
}
.balance {
  background: #6379F4;
  border-radius: 20px;
  display: flex;
  padding: 10px;
  justify-content: space-between;
}
.balance p:nth-child(1) {
  font-size: 18px;
  color: #e0e0e0;
}
.balance p:nth-child(2) {
  font-size: 40px;
  color: #ffffff;
}
.balance p:nth-child(3) {
  font-size: 14px;
  color: #dfdcdc;
}
.balance button {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 10px;
  color: #ffffff;
  display: block;
  padding: 5px;
  width: 125px;
  margin-bottom: 16px;
}
i {
  color: #e0e0e0;
}
.green {
  color: #1ec15f;
}
.salmon {
  color: #ff5b37;
}
.income p:nth-child(2), .expense p:nth-child(2) {
  color: #6a6a6a;
  font-size: 14px;
  font-weight: 400;
}
.income p:nth-child(3), .expense p:nth-child(3) {
  color: #3a3d42;
  font-size: 18px;
  font-weight: 700;
}
.container-user {
  display: flex;
}
.container-user .image {
  width: 56px !important;
  height: 56px !important;
  margin-right: 15px;
}
.container-user .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content-text p:nth-child(1) {
  color: #4d4b57;
  font-size: 16px;
  font-weight: bold;
  margin: 0;
}
.content-text p:nth-child(2) {
  color: #7a7886;
  font-size: 14px;
  margin: 0;
}
</style>
