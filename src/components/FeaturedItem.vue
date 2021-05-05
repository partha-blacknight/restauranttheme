<template>
  <div class="featured-item">
    <b-container fluid class="bv-example-row">
      <b-row>
        <div class="heading"><span class="heading-text">FEATURED ITEMS</span></div>
      </b-row>
      <b-row>
        <b-col>
          <b-card class="round-card">
            <b-img src="https://picsum.photos/300/300/?image=41" rounded="circle" fluid-grow alt="Fluid-grow image"></b-img>
          </b-card>
        </b-col>
        <b-col>
          <b-card class="round-card">
            <b-img src="https://picsum.photos/300/300/?image=41" rounded="circle" fluid-grow alt="Fluid-grow image"></b-img>
          </b-card>
        </b-col>
        <b-col>
          <b-card class="round-card">
            <b-img src="https://picsum.photos/300/300/?image=41" rounded="circle" fluid-grow alt="Fluid-grow image"></b-img>
          </b-card>
        </b-col>
        <b-col>
          <b-card class="round-card">
            <b-img src="https://picsum.photos/300/300/?image=41" rounded="circle" fluid-grow alt="Fluid-grow image"></b-img>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'FeaturedItem',
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
.featured-item {
  margin-top: 10px;
}
.round-card {
  display: flex;
  align-content: space-around;
  border-radius: 50%;
  width: 300px;
  height: 300px;
}
</style>
