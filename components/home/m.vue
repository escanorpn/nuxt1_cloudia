<template> 
  <div class="bg" id="top-image" v-bind:style="{ backgroundPositionX: mWx,backgroundPositionY: mWy, backgroundAttachment: 'none',
  }"  @mousemove="mouseMove" >



    <div class="page-header" style="min-height: 95vh;" >
 
         <div class="container">
           
        <div class="row">
          <div class="col-lg-8 text-center mx-auto" style="margin-top:27px">
            <h1 class="text-white pt-3 mt-n5" style=" font-weight: 900;font-size: 2p;color: #ffffff;
    text-shadow: #cb6dff 1px 1px 2px;" >BLOG</h1>

          </div>
        </div>
      </div>
      <div class="position-absolute w-100 z-index-1 bottom-0">
        <!-- <NuxtLogo/> -->
        <!-- <wave/> -->
      </div>
    </div>
  
 
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
        await this.$api.$get('company_limited').then((response) => {
        console.log("response: "+ JSON.stringify(response));
        const myData = response.data
        if(myData.val==2){
            console.log(myData)
          }
          console.log("Gallery"+JSON.stringify(myData))
     
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