<template> 
  <div class="bg" id="top-image" v-bind:style="{ backgroundPositionX: mWx,backgroundPositionY: mWy, backgroundAttachment: 'none'
  }"  @mousemove="mouseMove">



    <div class="page-header" style="min-height: 95vh;" >
 
         <div class="container">
           
        <div class="row">
          <div class="col-lg-8 text-center mx-auto" style="margin-top:87px">
           
            <!-- <h1 class="text-white pt-3 mt-n5" >15Minutes Logistics</h1> -->

             <h1 class="text-white pt-3 mt-n5" style=" font-weight: 900;font-size: 2p;color: #ffffff;
    text-shadow: #cb6dff 1px 1px 2px;;" >{{heading}}</h1>
     
            <!-- <p class="lead text-white mt-3" style="font-weight: 700;">Global Exhibitions </p> -->

            <!-- <mdb-list-group v-if="dList">
            <div style="margin-top: 1px;box-shadow: rgb(9 19 21 / 59%) 1px 6px 14px 6px;max-width: 410px;
            margin-left: auto;
            margin-right: auto;
            width: 80%;">
          
            </div>
          </mdb-list-group>   

          <mdb-list-group v-if="cRequest">
            <div style="margin-top:1px;box-shadow: rgb(9 19 21 / 59%) 1px 6px 14px 6px;max-width: 410px;
            margin-left: auto;
            margin-right: auto;
            width: 80%;">
            <mdb-list-group-item  :action="true" href="#" tag="a">Make request for this product?</mdb-list-group-item>
            </div>
          </mdb-list-group> -->

            <router-link to="/Portfolio" > 
              <mdb-btn style="margin-top: 42px;" outline="white" rounded color="white" >
            Explore</mdb-btn>
            </router-link>
          </div>
        </div>
      </div>
      <div class="position-absolute w-100 z-index-1 bottom-0">
        <!-- <NuxtLogo/> -->
        <wave/>
      </div>
    </div>
  
  

      
<article class="Home">
  <div class="panel-content" style="    background: linear-gradient(124deg, white 9%, white 65%, #d9d0d0 1%) center center / cover fixed;background-color:#bb975d;">
    <div class="wrap" style="">		
      <div class="">
        <div style="background: linear-gradient(124deg, white 9%, white 65%, #d9d0d0  1%) center center / cover fixed;margin-bottom: 33px;">
        
          <img src="~assets/img/bg/c.jpg" alt="claudia" style="max-width: 120px;border-radius: 50%;float: right;box-shadow: rgb(38 3 3) 1px 5px 5px;margin-bottom: -22px;"/>
          <div text="black" class="text-center" style="margin-left: auto; margin-right: auto;     box-shadow: #225ede30 0px -20px 32px;padding-bottom: 33px;">
            <h2 style="padding-top:52px;font-weight: 600;">Hi, i’m claudia!</h2>
            
            <div style="padding-left:22px;padding-right:22px;margin-bottom:22px">
            </div>

            <div class="card white lighten-1 black-text" style="box-shadow:rgb(34 94 222 / 19%) -1px -11px 32px;width: 90%; max-width: 700px;margin-left:auto; margin-right: auto;    border-radius: 0.25rem;background-color: transparent!important;">
              <div class="card-body" style="color: rgba(1, 5, 9, 0.63);background: linear-gradient(21deg, white 9%, white 57%, #d9d0d000 1%) center center / cover fixed;">
                <div style="margin-top: 52px;color: #010509a1;">I’m the recipe developer, photographer and stylist of Spice & Heat. I love working with brands, companies and individuals to capture beautiful content. Fill in the form below and let’s work together! </div>
                  <!-- <a role="button" class="btn-floating btn t btn-sm Ripple-parent waves-effect waves-light" style="padding: 8px; border-radius: 12px;background: linear-gradient(315deg,#3f0d12,#a71d31 74%);">Contact us<div class="Ripple " style="top: 0px; left: 0px; width: 0px; height: 0px;">
                  </div>
                  </a> -->
                     <mdb-btn style="color:#e9ecef;background: linear-gradient(315deg,#3f0d12,#a71d31 74%);box-shadow: rgb(38 3 3) 1px 5px 5px;" color="" type="submit">Contact me</mdb-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</article>

  </div>
</template>
<script>
  import { mdbBtn,mdbListGroup,mdbListGroupItem,mdbIcon} from 'mdbvue';
  // import axios from "axios";
  // import $ from 'jquery'
  export default {
    name: 'HomePage',
    components: {
     
      mdbListGroup,
      mdbListGroupItem,
      mdbBtn,
      mdbIcon
    },
      data() {
    return {
      mItems: [],
      sending: false,
      dList:false,
      cRequest:false,
      mWx:'0px',
      mWy:'0px',
      products:[],
      heading:this.$store.state.hmName,
    }
  },
    methods:{
        async fetchSomething(){
        this.products=[];
          // console.log("resprequestingonse: ")
        await this.$api.$get('company').then((response) => {
        console.log("response: "+ JSON.stringify(response));
        const myData = response.data
        if(myData.val==2){
            console.log(myData)
          }
          console.log("products"+JSON.stringify(myData))
     
  }).catch(function (response) {
            //handle error
            console.log("error: "+response)
        });
       
  },

       
      
      onClick(){
// alert("foo")
      },
       mouseMove(event) {
         var movementStrength = 5;
var height = movementStrength / window.innerHeight;
var width = movementStrength / window.innerWidth;
            // console.log(event.clientX, event.clientY);
              var pageX = event.clientX - (window.innerWidth / 2);
              var pageY = event.clientY - (window.innerHeight / 2);
              
          var newvalueX = width * pageX * -1 -2;
          var newvalueY = height * pageY * -1 - 2;
          // console.log(newvalueX)
          // console.log(newvalueY)
          
          
        this.mWx=newvalueX+"px"; 
        this.mWy=newvalueY+"px";
          // console.log(this.mWx)
          // console.log(this.mWy)
            // alert(event.clientX, event.clientY);
        },

},

    mounted() {
    // this.animateBg();
    // this.fetchSomething();
  },

    
     

    
  };
</script>

<style scoped>

/* @import  "~/assets/css/soft-design-system.css"; */
  .wrap {
    margin-left: auto;
    margin-right: auto;
    width:90%;
    max-width: 900px;
  }
  .bg {
    /* The image used */
    /* background-image: url("~/assets/img/curved-images/curved1.jpg"); */
    background-image: url("~/assets/img/bg/2c.jpg");
    /* background-image: url("../assets/img/3.jpg"); */

    /* Full height */
    /* height: 120%; */
    width:100%;

    /* Center and scale the image nicely */
    background-attachment: fixed;
    background-position: center ;
    background-repeat: no-repeat;
    background-size: cover;
    right:0%;

  }
    h1 {
      font-weight: bolder;
      letter-spacing: 8px;
    }
    h1, h5 {
      text-transform: uppercase;
    }

    h5 {
      letter-spacing: 3px;
          font-weight: 300;
    }

    .hr-light {
      border-top: 3px solid #fff;
      width: 80px;
    }
    .navbar {
      transition: 1s;
    }
    .navbar .md-form {
      margin: 0;
    }
    .top-nav-collapse {
      background-color: #78909c !important;
    }
    @media (max-width: 990px){
      .navbar {
        background-color: #78909c !important;
      }
    }
    .gradient {
      background: -moz-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
      background: -webkit-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
      background: -webkit-gradient(linear, 45deg, from(rgba(42, 27, 161, 0.7)), to(rgba(29, 210, 177, 0.7)));
      background: -o-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
      background: linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
    }
    h6 {
        line-height: 1.7;
    }
</style>