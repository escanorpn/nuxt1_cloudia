<template>
  <div >
           <mdb-edge-header id="edge" color="" style="background-color: #3c0d0b ">
        <div class="home-page-background"></div>
       
         
      </mdb-edge-header>
       <div id="div3">
    <b-form style="font-family: Open Sans;" @submit="onSubmit" @reset="onReset" v-if="show">
  
      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>
      
      <b-form-group
        id="input-group-4"
        label="Phone number:"
        label-for="input-4"
      >
    
        <VuePhoneNumberInput default-country-code="KE" required v-model="form.phone" />
      </b-form-group>

      <b-form-group id="input-group-3" label="Custom service:" label-for="input-3">
    
      <b-form-textarea
      id="textarea"
      v-model="form.desc"
      placeholder="Describe service"
      rows="3"
      max-rows="6"
    ></b-form-textarea>
      </b-form-group>

     <mdb-btn style="margin-left:auto;margin-right:auto;color:#e9ecef;background: linear-gradient(315deg,#3f0d12,#a71d31 74%);box-shadow: rgb(38 3 3) 1px 5px 5px;" color="" type="submit">submit</mdb-btn>
      <!-- <b-button type="submit" variant="primary">Submit</b-button> -->
      <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
    </b-form>
    </div>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>

  import { mdbBtn,mdbEdgeHeader} from 'mdbvue';
  import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
  export default {
       components: {
       VuePhoneNumberInput,
       mdbBtn,
       mdbEdgeHeader
      },
    data() {
      return {
        form: {
          email: '',
          name: '',
          phone:'',
          desc: '',
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
<style>
#div3{
    width: 100%;
    max-width: 900px;
    background-color: white;
    padding: 22px;
    margin-top: -125px;
    margin-right: auto;
    margin-left: auto;
    box-shadow: 0px 8px 22px rgb(0 0 0 / 21%);
}
#edge{
  margin-top: -87px;
    background-attachment: fixed;
    background-position: center ;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>