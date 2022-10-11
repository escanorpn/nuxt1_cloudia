<template>
 <div :style="{ padding: '0px', background: '#fff', minHeight: '360px',paddingRight:'0px',
    paddingLeft: '0px'}">

<div class="loading-box" v-if="loading">
                <div class="loader"></div>
              </div>
       <mdb-edge-header color="" style="background-color: #3c0d0b ">
        <div class="home-page-background"></div>
           <div class="container">
           
        <div class="row">
          <div class="col-lg-8 text-center mx-auto" style="margin-top:87px;position: fixed;">
          <!-- <h1 class="text-white pt-3 mt-n5" style=" font-weight: 900;color: #ffffff;text-shadow: #cb6dff 1px 1px 2px;margin-top: 5px;margin-left: auto;margin-right: auto;" >Portfolio</h1> -->
        </div>
        </div>
           </div>
      </mdb-edge-header>
    

        <a-layout id="components-layout-demo-responsive" style="padding-top: 2px; margin-top: -74px;    background: #3b3b3b">
   
    <a-layout class="mTop" style=" background-color: #3b3b3b;" >
      <!-- <a-layout-header :style="{ background: '#fff', padding: 0 }" /> -->
      <a-layout-content :style="{ margin: '54px 16px 0' }">
       
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">

          <div class="wrap" style="max-width: 1500px;">
			<div class="card text-center"   style="width: 100%; max-width: 1200px; margin-right: auto; margin-left: auto; margin-top: -142px;
      background-color:##fffeec;
      /* background:linear-gradient(#a0998f 15%, rgb(255, 255, 255) 3%, rgb(255, 255, 255) 71%, #ebe6de 44%); */
      " >
			<div class="card-body">
        <div class="card white lighten-1 black-text" style="box-shadow:rgb(34 94 222 / 19%) -1px -11px 32px;width: 100%; max-width: 1300px;margin-left:auto; margin-right: auto;    border-radius: 0.25rem;margin-top: 25px;adding-right: 0px;
    padding-left: 0px;">
    <div class="card-body" style="color: rgba(1, 5, 9, 0.63);background: linear-gradient(21deg, white 9%, white 57%, #d9d0d000 1%) center center / cover fixed;">
        <!-- <div id="editor" ref="editor">{{iframe.src}}</div> -->
        <iframe 
        v-if="loaded"
        :src="iframe.src"
      
        frameborder="0" style="height:780px;width:100%; border:none;"
        
      >loading</iframe>


    </div>
</div>
    </div>
  
    <!-- <Recipe/> -->
    <!-- <mdb-btn style="width:50%;margin-left:auto;margin-right:auto;color:#e9ecef;background: linear-gradient(315deg,#3f0d12,#a71d31 74%);box-shadow: rgb(38 3 3) 1px 5px 5px;" color="" type="submit" v-on:click="print">Print</mdb-btn> -->
  </div>
  </div>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>



 </div>
 

</template>

<script>
  
import { mdbContainer, mdbCol, mdbRow,  mdbEdgeHeader,  } from 'mdbvue';
  // import api from "../../../services/api";
export default {
  components:{
    mdbContainer,
    mdbCol,
    mdbRow,
    mdbEdgeHeader,
  },
  data() {
    return {
      loaded: false,
      sending:false,
      iframe: {
        // src: 'https://docs.google.com/forms/d/e/1FAIpQLSd4F2CZX5POMMBUg0wLyfiE2xhex4fSDSRlGWQbcXonHddh4A/viewform?embedded=true',
        src: '',
        style: null,
        wrapperStyle: null,
      }
    }
  },
  methods:{
  init(){
    this.$api.$get('quiz').then((response) => {
      // console.log("qvresponse: "+ JSON.stringify(response.val));    
       console.log("qvresponse: "+ response.val);
       
    this.emsg4 = response.data;
            //  this.clearForm1();
            this.error4 = true
            
          if(response.val==response.val){ 
            // this.iframe.src=response.data.data.link
            // console.log("qvr: "+ JSON.stringify(response.data[0].link));
            this.iframe.src=response.data[0].link
            // this.emsg4 = response.data.message;
            //  this.clearForm1();
            // this.error4 = true
          }
          this.sending = false
           this.clearForm4();
}).catch(function (response) {
          //handle error
          // console.log("error"+JSON.stringify(response))
          // this.clearForm2();
          // this.sending = false
      });
  }
  },
   
  mounted() {
    this.init();
    // let editor = this.$refs.editor;
    this.iframe.style = {
      // position: 'absolute',
      // width: window.innerWidth,
      // height: window.innerHeight,
      
      height: 89+ "%",
      width: 89+ "%",
      // <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd4F2CZX5POMMBUg0wLyfiE2xhex4fSDSRlGWQbcXonHddh4A/viewform?embedded=true" width="640" height="1049" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      // top: -editor.offsetTop + "px",
      // left: -editor.offsetLeft + "px",
    }    
    this.iframe.wrapperStyle = {
      // overflow: 'hidden',
      // height: 89+ "%",
      // height: 1049+ "px",
      // width: editor.clientWidth + "px",
    } 
    this.loaded = true;
  }
}
</script>
14106394985