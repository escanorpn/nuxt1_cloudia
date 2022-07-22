<template>
<article id="" class="Services" >
	<div class="panel-image" v-bind:style="mBg"   
	
	>
		<div class="panel-image-prop" style="padding-top: 60%">
		</div>
	</div>
	<div class="panel-content" style="
	background: linear-gradient(180deg, #ffffff00 9%, white 85%, #d9d0d0 1%) center center / cover fixed;">

		<div class="wrap" style="max-width: 1200px;">
			<div class="card text-center" :style="folio"  style="width: 100%; max-width: 1200px; margin-right: auto; margin-left: auto; margin-top: -142px;background: linear-gradient(180deg, #483f3f 15%, rgb(255, 255, 255) 3%, rgb(255, 255, 255) 81%, rgb(60 13 11) 4%);box-shadow:rgb(40 18 10 / 59%) 0px 32px 32px;">
			<div class="card-body">
				<h2 style="color:white;text-shadow: 1px 1px 2px black;margin-top: -15px;text-shadow: 4px 2px 2px #2c0406;">
					<b>Portfolio</b>
				</h2>
	
		<folio :posts="products" />
		<mdb-btn style="color:#e9ecef;background: linear-gradient(315deg,#3f0d12,#a71d31 74%);box-shadow: rgb(38 3 3) 1px 5px 5px;margin-top: -22px;" color="" type="submit">View the
		 Portfolio</mdb-btn>
		
	</div>
</div>
</div>
<div class="card text-center" >

<div class="card-body" style="margin-top:100px;    background: linear-gradient(#000000, rgba(0, 0, 0, 0.11) 100%) center center / cover fixed rgb(217, 208, 208);
    background-color: rgb(217 208 208);">
				<h2 style="color:white;text-shadow: 1px 1px 2px black;margin-top: 15px;text-shadow: 4px 2px 2px #2c0406;text-align: center;">
					<b>Instagram</b>
				</h2>
	
		
	</div>
      
<article class="Home">
  <div class="panel-content" style="    background: linear-gradient(124deg, white 9%, white 65%, #d9d0d0 1%) center center / cover fixed;background-color:#bb975d;">
    <div class="wrap" style="">		
      <div class="">
        <div style="background: linear-gradient(124deg, white 9%, white 65%, #d9d0d0  1%) center center / cover fixed;margin-bottom: 33px;">
        
          <!-- <img src="~assets/img/bg/c.jpg" style="max-width: 120px;border-radius: 50%;float: right;box-shadow: rgb(38 3 3) 1px 5px 5px;margin-bottom: -22px;"/> -->
          <div text="black" class="text-center" style="margin-left: auto; margin-right: auto;     box-shadow: #225ede30 0px -20px 32px;padding-bottom: 33px;">  
		  <h4 style="padding-top:52px;font-weight: 600;">HAVE A VISION?</h4>
            <h2 style="padding-top:2px;font-weight: 600;">
let's work together!</h2>
            
            <div style="padding-left:22px;padding-right:22px;margin-bottom:22px">
            </div>

            <div class="card white lighten-1 black-text" style="box-shadow:rgb(34 94 222 / 19%) -1px -11px 32px;width: 90%; max-width: 700px;margin-left:auto; margin-right: auto;    border-radius: 0.25rem;background-color: transparent!important;">
              <div class="card-body" style="color: rgba(1, 5, 9, 0.63);background: linear-gradient(21deg, white 9%, white 57%, #d9d0d000 1%) center center / cover fixed;">
                <div style="margin-top: 52px;color: #010509a1;">I’m the recipe developer, photographer and stylist of Spice & Heat. I love working with brands, companies and individuals to capture beautiful content. Fill in the form below and let’s work together! </div>
                  <!-- <a role="button" class="btn-floating btn t btn-sm Ripple-parent waves-effect waves-light" style="padding: 8px; border-radius: 12px;background: linear-gradient(315deg,#3f0d12,#a71d31 74%);">Contact us<div class="Ripple " style="top: 0px; left: 0px; width: 0px; height: 0px;">
                  </div>
                  </a> -->
                     <mdb-btn style="color:#e9ecef;background: linear-gradient(315deg,#3f0d12,#a71d31 74%);box-shadow: rgb(38 3 3) 1px 5px 5px;margin-top:22px" color="" type="submit">Count me In!</mdb-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</article>
		
	
			</div>
			
			<mlist :posts="products" />
			  <a-carousel autoplay>
              <!-- <item1 v-for="(post, index) in posts" :key="index" :post="post" /> -->
    <!-- <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div> -->
  </a-carousel>
	
</div>

</article>
</template>
<script>

import folio from "./folio.vue"
import mlist from "./slist.vue"

import item1 from "./item.vue"
  import { mdbBtn} from 'mdbvue';
export default {
name: 'hservicePage',
components: {
	mlist,
	folio,
	item1,
	mdbBtn
},
data() {
return {
	products: [],
	mItems: [],
	sending: false,
	dList:false,
	cRequest:false,
	mWx:'0px',
	mWy:'0px',
	primary_color:this.$store.state.primary_color,
	secondary_color:this.$store.state.secondary_color,

}
},
computed: {
  mBg() {
    return {
    backgroundImage: `url(${require('~/assets/img/bg/1c.jpg')})`,
	backgroundAttachment: "fixed",
	height: "50vh",
	backgroundPositionX: this.mWx,
	backgroundPositionY: this.mWy,
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",	
	backgroundSize: "cover",
    };
  },
  folio(){
	return `linearGradient(180deg, ${this.primary_color} 15%, rgb(255, 255, 255) 3%, rgb(255, 255, 255) 81%, ${this.secondary_color}) 4%)`
	// width: "100%",
	//  maxWidth: "1200px", 
	//  marginRight: "auto",
	//  marginLeft: "auto", 
	//  marginTop: "-142px",
	//  background: 	`linearGradient(180deg, ${this.primary_color} 15%, rgb(255, 255, 255) 3%, rgb(255, 255, 255) 81%, ${this.secondary_color}) 4%)`,
	//  boxShadow:'rgb(40 18 10 / 59%) 0px 32px 32px',
	
	
	
  }
},
methods:{
    
        async fetchImages(){
        this.products=[];
          console.log("Fetching Images: ")
        await this.$api.$get('company').then((response) => {
        console.log("response: "+ JSON.stringify(response));
        const myData = response.data
        if(response.val==2){
            console.log(myData)
			this.products = myData
          }
          console.log("products:  "+JSON.stringify(this.products))
     
  }).catch(function (response) {
            //handle error
            console.log("error: "+response)
        });
       
  },
},
mounted() {
 this.fetchImages();
},




};
</script>

<style scoped>

@import  "../../assets/css/soft-design-system.css";
.wrap {
margin-left: auto;
margin-right: auto;
width:90%;
max-width: 900px;
}
.bg {
/* The image used */
/* background-image: url("~/assets/img/curved-images/curved1.jpg"); */
/* background-image: url("../assets/img/3.jpg"); */

/* Full height */
height: 100%;

/* Center and scale the image nicely */
background-position: center;
background-repeat: no-repeat;
background-size: cover;
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