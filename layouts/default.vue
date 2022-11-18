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
        <!-- <mdb-nav-item class="nav_text"  to="/quiz">Quiz</mdb-nav-item>
        <mdb-nav-item class="nav_text"  to="/about">Shop</mdb-nav-item> -->
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
    <!-- <a-button type="primary" @click="showModal">Open Modal</a-button> -->
<!--     
    <a-modal v-model="visible" title="Basic Modal" @ok="handleOk">
      <Footer/>
      <p>hi</p>
    </a-modal> -->
    <a-modal v-model:visible="visible"  @ok="handleOk" style="background-color:red">
      <Footer/>
    </a-modal>
    <div>

    <!-- <mdb-btn color="primary" @click="modal = true">Launch demo modal</mdb-btn> -->
    <mdb-modal :show="modal" @close="modal = false" >
      <mdb-modal-header style="background-color:red">
        <mdb-modal-title>Modal title</mdb-modal-title>
      </mdb-modal-header>
      <Footer/>
      <mdb-modal-footer>
        <mdb-btn color="secondary" @click.native="modal = false">Close</mdb-btn>
        <mdb-btn color="primary">Save changes</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </div>
   <!-- Footer -->
   <div class="" style="background-color:#3b3b3b">
   
			<div class="card text-center" :style="folio"  style="width: 100%;  margin-right: auto; margin-left: auto; margin-top: 0px;background-color:#332d2d;box-shadow:rgb(40 18 10 / 59%) 0px 32px 32px;" >
			<div class="card-body">
        <!-- <h4 style="color:white;margin-top: -23px;text-shadow: 4px 2px 2px #efefef;">
					<b>Subscribe to mail list</b>
          
				</h4> -->
        <!-- <mdb-icon fab icon="facebook-f" style=""/> 
      <mdb-icon fab icon="instagram" />
      <mdb-icon fab icon="twitter" /> 
      <mdb-icon fab icon="pinterest-p" /> -->
        <Footer/>
		
		
    </div>
  </div>
  </div>

    </div>
</template>
<script>
  import Footer from "./Footer.vue";
  import { Modal } from 'ant-design-vue';
  import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem,mdbIcon,mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbBtn} from 'mdbvue';
  
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
            visible:false,
            modal:false,
            // showModal,
            // handleOk,
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
      Footer,
      mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbBtn
      
     
    },
    methods: {
       showModal () {
        setTimeout(() => this.visible = true, 3000);
      // this.visible = true;
      // Modal.success({
      //   title: () => 'This is a success message',
      //   content: () => h('div', {}, [
      //     h('p', 'some messages...some messages...'),
      //     h('p', 'some messages...some messages...'),
      //   ]),
      // });
    },

     handleOk (e) {
      console.log(e);
      this.visible = false;
    },
   
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
    //   setTimeout(function() {
    //     this.showModal()
    // }, 500)
    //   setTimeout(function() { 
    //     this.showModal()
    //   }, 3000);
      this.showModal()
  // window.setInterval(() => {
  //   this.showModal()
  // }, 3000)
}
  }
</script>
<style>
.ant-modal-content{
  background-color: #332d2d;
}
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