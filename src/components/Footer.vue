<template>
  <!-- Footer -->
  <mdb-footer color="mdb-color" class="font-small lighten-3 pt-4 mt-4 footer-wrapper">
    <mdb-container class="text-center text-md-left">
      <mdb-row class="my-4">
        <mdb-col md="4" lg="4">
          <h5 class="text-uppercase mb-4 font-weight-bold texting">FOODIESFIESTA</h5>
          <p class="texting">Here you can use rows and columns here to organize your footer content.</p>
          <p class="texting">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident
              voluptate esse quasi, veritatis totam voluptas nostrum. </p>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none"/>
        <mdb-col md="2" lg="2" class="ml-auto">
          <h5 class="text-uppercase mb-4 font-weight-bold texting">Receipes</h5>
          <ul class="list-unstyled">
            <p><a href="#!" class="subtexting">STARTER</a></p>
            <p><a href="#!" class="subtexting">MAIN COURSE</a></p>
            <p><a href="#!" class="subtexting">DESERT</a></p>
            <p><a href="#!" class="subtexting">CONFECTIONARY</a></p>
            <p><a href="#!" class="subtexting">SWEET FUSION</a></p>
          </ul>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none"/>
        <mdb-col md="5" lg="3">
          <h5 class="text-uppercase mb-4 font-weight-bold texting">Address</h5>
          <p><mdb-icon icon="home" class="mr-3" /> New York, NY 10012, US</p>
          <p><mdb-icon icon="envelope" class="mr-3" /> info@example.com</p>
          <p><mdb-icon icon="phone" class="mr-3" /> + 01 234 567 88</p>
          <p><mdb-icon icon="print" class="mr-3" /> + 01 234 567 89</p>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none"/>
        <mdb-col md="2" lg="2" class="text-center">
          <h5 class="text-uppercase mb-4 font-weight-bold texting">Follow us</h5>
          <div class="mt-2 ">
            <a type="button" class="btn-floating btn-small btn-fb"><mdb-icon fab icon="facebook" /></a>
            <a type="button" class="btn-floating btn-small btn-tw"><mdb-icon fab icon="twitter" /></a>
            <a type="button" class="btn-floating btn-small btn-gplus"><mdb-icon fab icon="google-plus" /></a>
            <a type="button" class="btn-floating btn-small btn-dribbble"><mdb-icon fab icon="dribbble" /></a>
          </div>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none"/>
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
          &copy; <span class="texting">2020 Copyright:</span> <a href="https://www.MDBootstrap.com" class="texting"> FOODIESFIESTA.com </a>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
  import { mdbFooter, mdbContainer, mdbRow, mdbCol, mdbIcon } from 'mdbvue';
  export default {
    name: 'Footer',
    components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbIcon
    }
  }
</script>

<style>
.footer-wrapper {
    background-color: #231b1b;
}
.texting {
    color: #C4B1B1;
    font-variant: revert;
    font-family: cedarvile cursive;
    font-style: revert;
    font-size: 20px;
    font-weight: 300;
}
.subtexting {
    color: #954362;
}
</style>