<template>
<div>
   <!-- background: linear-gradient(rgb(0, 0, 0), rgb(0 0 0 / 88%), rgb(0 0 0 / 30%) 100%) -->
  <mdb-navbar  v-bind:class = "isMobile()?'mNavc':'dNavc'"   color="info" position="top" dark transparent scrolling style=" background: linear-gradient(#000000, #0000000d, rgba(0, 0, 0, 0.11) 100%);">
    <mdb-navbar-brand to="/" >
           <!-- <img src="~/assets/img/flogo.jpeg" alt=" LMG" style="max-width:43px;background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgb(0 0 0 / 0%) 100%);border-radius: 5px;" > -->
           <span style="color: white;font-weight: 500;text-shadow: rgb(203 109 255) 1px 1px 2px;">
    Cloudia </span>
    </mdb-navbar-brand>

    <mdb-navbar-toggler>
      <mdb-navbar-nav style="background: #0700007a;">  
        <mdb-nav-item  class="nav_text"  to="/" active>Home</mdb-nav-item>
        <mdb-nav-item class="nav_text"  to="/recipes">Recipes</mdb-nav-item>
        <mdb-nav-item  class="nav_text"  to="/Portfolio">Portfolio</mdb-nav-item>
        <mdb-nav-item class="nav_text"   to="/Services">Services</mdb-nav-item>
        <mdb-nav-item  class="nav_text"  to="/blog">Blog</mdb-nav-item>
        <!-- <mdb-nav-item  class="nav_text"  to="/about">About</mdb-nav-item> -->
        <mdb-nav-item class="nav_text"  to="/quiz">Quiz</mdb-nav-item>
        <mdb-nav-item class="nav_text"  to="/about">Shop</mdb-nav-item>
        <!-- <mdb-nav-item  class="nav_text"   to="/admin">Admin</mdb-nav-item> -->
        
      </mdb-navbar-nav>
      <mdb-navbar-nav right>  
       
        <mdb-nav-item  class="nav_text"  to="/about">  <mdb-icon fab icon="facebook-f" /> </mdb-nav-item>
        <mdb-nav-item  class="nav_text"  to="/about">  <mdb-icon fab icon="instagram" /> </mdb-nav-item>
        <mdb-nav-item  class="nav_text"  to="/about">  <mdb-icon fab icon="twitter" /> </mdb-nav-item>
        <mdb-nav-item  class="nav_text"  to="/about">  <mdb-icon fab icon="pinterest-p" /></mdb-nav-item>
      </mdb-navbar-nav>
    
       
    </mdb-navbar-toggler>
  </mdb-navbar>
   <Nuxt :style="{ marginTop: '0px' }">
      <transition name="fade" mode="out-in">
       <slot />
      </transition>
    </Nuxt>
        
   <!-- Footer -->
   <div class="" style="background-color:#3b3b3b">
   
			<div class="card text-center" :style="folio"  style="width: 90%;  margin-right: auto; margin-left: auto; margin-top: 42px;background: linear-gradient(180deg, #efefef 35%, #efefef 3%, #efefef 81%, rgb(60 13 11) 4%);box-shadow:rgb(40 18 10 / 59%) 0px 32px 32px;" >
			<div class="card-body">
        <h4 style="color:black;margin-top: -23px;text-shadow: 4px 2px 2px #efefef;">
					<b>Subscribe to mail list</b>
          
				</h4>
        <mdb-icon fab icon="facebook-f" style=""/> 
      <mdb-icon fab icon="instagram" />
      <mdb-icon fab icon="twitter" /> 
      <mdb-icon fab icon="pinterest-p" />
        <Footer/>
		
		
    </div>
  </div>
  </div>

    </div>
</template>
<script>
  import Footer from "./Footer.vue";
  import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem,mdbIcon } from 'mdbvue';
  
import { isMobile } from 'mobile-device-detect';
  // alert(this.mib);
  export default {
    
    name: 'Default',
     layout: 'default',
      props: ['isMobilez'],
       data() {
          return {
            cItems:0,
            mib:isMobile,
            // email:this.postEmail,
            msg:""
          }
        },
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
      mdbIcon,
      Footer
      
     
    },
    methods: {
   
      isMobile1() {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          return true
        } else {
          return false
        }
      },
      isMobile() {
        return isMobile
      }
    },
      mounted() {
    // this.add2cart();
  },
  }
</script>
<style>
.nav-link {
      color: white;
    text-shadow: 1px 1px 2px black;
    font-weight: 600 !important;
}
    .nav {
        background-color: #ffffff;
    }
    .mNavc{
      /* background-color: #000 !important; */
      background: linear-gradient(177deg, rgb(0, 1, 2), #02092300);
    }
    .dNavc{
      background-color: transparent;
    }
    .info-color {
            /* background: linear-gradient(175deg, rgb(88 0 9) 0%, #45100f 74%)!important; */
            /* background: transparent!important; */
        background-color:rgba(0, 0, 0, 0.409) !important;
}
</style>