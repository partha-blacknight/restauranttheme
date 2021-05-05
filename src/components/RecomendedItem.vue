<template>
  <div class="recomended-item">
    <b-row>
      <div class="heading"><span class="heading-text">RECOMENDED ITEMS</span></div>
    </b-row>
    <b-container fluid class="bv-example-row">
      <b-row>
        <b-col>
          <b-card class="crd-reco" title="Title" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
            <b-card-text>
              
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card class="crd-reco" title="Title" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
            <b-card-text>
              
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card class="crd-reco" title="Title" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
            <b-card-text>
              
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card class="crd-reco" title="Title" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
            <b-card-text>
              
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <b-row class="snd-row">
        <b-col>
          <b-card class="crd-reco" title="Title" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
            <b-card-text>
              
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card class="crd-reco" title="Title" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
            <b-card-text>
              
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card class="crd-reco" title="Title" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
            <b-card-text>
              
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card class="crd-reco" title="Title" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
            <b-card-text>
              
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'RecomendedItem',
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
.recomended-item {
  margin-top: 10px;
}
.snd-row {
    margin-top: 10px;
}
.crd-reco {
    border-radius: 20px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
}
.card-img, .card-img-top {
    border-top-left-radius: 20px !important;
    border-top-right-radius: 20px !important;
    border-bottom-right-radius: 20px !important;
    border-bottom-left-radius: 20px !important;
}
</style>
