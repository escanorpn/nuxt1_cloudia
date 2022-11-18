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
       
          <!--Grid row-->
          <mdb-row center class="d-flex">
            <!--Grid column-->
            <mdb-col auto>
              <p class="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
              <p class="pt-2" style="color:#fff;text-shadow: 4px 2px 2px #2c0406;">
                <b>{{emsg}}</b>
              </p>
            </mdb-col>
          </mdb-row>
            <mdb-row center class="d-flex">

            <!--Grid column-->
            <!--Grid column-->
            <mdb-col md="12" col="12" style="margin:auto">
              <!-- Email input -->
              <mdb-input  
              outline 
              style="box-shadow: rgb(38 3 3) 1px 5px 5px;margin:auto;background-color:#fff;max-width:800px" 
                type="email"
                id="form5Example2"
                label="email"
                wrapperClass="mb-4"
                v-model="mail"
                textColor="red"
                required
              />
            </mdb-col>
            <!--Grid column-->
            <!--Grid column-->
         
            <!--Grid column-->
          </mdb-row>
          <mdb-row>
            <mdb-col md="5" col="12" style="margin:auto">
              <!-- Submit button -->
              <mdb-btn outline="light" class="mb-4" v-on:click="mailChimp" type="submit" > Subscribe </mdb-btn>
            </mdb-col>
          </mdb-row>
          <!--Grid row-->
       
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

  import { mdbFooter, mdbContainer, mdbRow, mdbCol, mdbIcon, mdbBtn,mdbInput } from 'mdbvue';

  export default {
    components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbIcon,
      mdbBtn,
      mdbInput
    },  data() {
    return {
      mail:"",
      emsg:""
    }},
    methods:{
      async mailChimp(){
        if(this.mail==""){
          this.emsg="Enter your email";
          return;
        }
        // alert("foo")
        console.log("sending to mailchimp")
        let mdata={
          e:this.mail
        }
        await this.$api.$post('mailChimp',mdata).then((response) => {
          console.log("mailChimp: "+JSON.stringify(response))
          if(response.status==400){
            this.emsg=response.detail;
          }else{
            this.emsg=response.status;
          }
      //   if(response.val==2){
            // this.gImages(response.gurl)
      //     }
     
  }).catch(function (response) {
            //handle error
            console.log("error: "+response)
        });
  },
  send(){
    const axios = require('axios');

// Make a request for a user with a given ID
axios.post('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  }
    }
  };
</script>