<template>
  <!-- Footer -->
  <mdb-footer style="background-color:#332d2d">
    <!-- Grid container -->
    <mdb-container class="p-4">
      <!-- Section: Social media -->
      <section class="mb-4">
        <!-- Facebook -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
          ><mdb-icon fab icon="facebook-f"
        /></a>
        
        <!-- Twitter -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
          ><mdb-icon fab icon="twitter"
        /></a>
     
        <!-- Instagram -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
          ><mdb-icon fab icon="instagram"
        /></a>
        <!-- Linkedin -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
          ><mdb-icon fab icon="pinterest-p"
        /></a>
      
      </section>
      <!-- Section: Social media -->
      <!-- Section: Form -->
      <section class="">
        <form action="">
          <!--Grid row-->
          <mdb-row center class="d-flex">
            <!--Grid column-->
            <mdb-col auto>
              <p class="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </mdb-col>
          </mdb-row>
            <mdb-row center class="d-flex">

            <!--Grid column-->
            <!--Grid column-->
            <mdb-col md="12" col="12">
              <!-- Email input -->
              <mdb-input  
              outline 
                style="color: red;background-color:white"
                type="email"
                id="form5Example2"
                label="Email address"
                wrapperClass="mb-4"
                  
                  textColor="red"
                  required
              />
            </mdb-col>
            <!--Grid column-->
            <!--Grid column-->
         
            <!--Grid column-->
          </mdb-row>
          <mdb-row>
            <mdb-col md="5" col="12">
              <!-- Submit button -->
              <mdb-btn outline="light" class="mb-4"> Subscribe </mdb-btn>
            </mdb-col>
          </mdb-row>
          <!--Grid row-->
        </form>
      </section>
      <!-- Section: Form -->
      <!-- Section: Text -->
      <!-- <section class="mb-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          distinctio earum repellat quaerat voluptatibus placeat nam,
          commodi optio pariatur est quia magnam eum harum corrupti
          dicta, aliquam sequi voluptate quas.
        </p>
      </section> -->
    </mdb-container>
    <!-- Grid container -->
    <!-- Copyright -->
    <div
      class="text-center p-3"
      style="background-color: rgba(0, 0, 0, 0.2)"
    >
      © 2020 Copyright:
      <a class="text-white" href="https://vector.losenviskas.com"
        >Dexter</a
      >
    </div>
    <!-- Copyright -->
  </mdb-footer>
  <!-- Footer -->
</template>
<script>
  import { mdbFooter, mdbContainer, mdbRrow, mdbCol, mdbIcon, mdbBtn,mdbInput } from 'mdbvue';

  export default {
    components: {
      mdbFooter,
      mdbContainer,
      mdbRrow,
      mdbCol,
      mdbIcon,
      mdbBtn,
      mdbInput
    },
  };
</script>