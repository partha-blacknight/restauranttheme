<template>
  <div class="top-item">
    <b-row>
      <div class="heading"><span class="heading-text">TOP ITEMS</span></div>
    </b-row>
    <b-container fluid class="bv-example-row">
      <b-row>
        <b-col>
          <b-card class="crd-reco" title="Title" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
            <b-card-text>
              This is a wider card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card class="crd-reco" title="Title" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
            <b-card-text>
              This is a wider card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card class="crd-reco" title="Title" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
            <b-card-text>
              This is a wider card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card class="crd-reco" title="Title" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
            <b-card-text>
              This is a wider card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'TopItem',
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
.top-item {
  margin-top: 10px;
}
</style>
