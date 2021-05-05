<template>
  <div class="popular-item">
    <b-row>
      <div class="heading"><span class="heading-text">POPULAR ITEMS</span></div>
    </b-row>
    <b-container fluid class="bv-example-row">
      <b-row>
        <b-col>
          <b-img class="popular-card" :src="require('../assets/img/popular-1.jpg')" fluid alt="">
          </b-img>
        </b-col>
        <b-col>
          <b-img class="popular-card" :src="require('../assets/img/popular-2.jpg')" fluid alt="">
          </b-img>
        </b-col>
        <b-col>
          <b-img class="popular-card" :src="require('../assets/img/popular-3.jpg')" fluid alt="">
          </b-img>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'PopularItem',
}
</script>

<style>
.heading {
  margin: 0px auto;
  margin-top: 0px;
  margin-bottom: 10px;
}
.heading-text {
  font-size: 20px;
  text-decoration: underline;
  font-weight: bold;
  color: #4a3f43;
}
.popular-item {
  margin-top: 10px;
}
.popular-card {
    width: 450px;
    height: 300px !important;
    border-radius: 10px;
}
</style>
