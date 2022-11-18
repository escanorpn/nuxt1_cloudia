<template>
  <Layout>
    <div style=" overflow-x: ;">
       <mdb-progress-bar md-mode="indeterminate" v-if="sending" />
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
      <a-layout-content :style="{ margin: '74px 0px 0' }">
        
        <div :style="{ paddingTop: '24px',paddingLeft:'0px',paddingRight:'0px',maxWidth:'1300px',margin:'auto', background: '#fff', minHeight: '360px', marginBottom:'100px', marginTop:'20px' }">

          <div class="wrap" style="max-width: 1500px;">
			<div class="card text-center"   style="width: 100%; max-width: 1200px; margin-right: auto; margin-left: auto; margin-top: -142px;
      background-color:##fffeec;
      /* background:linear-gradient(#a0998f 15%, rgb(255, 255, 255) 3%, rgb(255, 255, 255) 71%, #ebe6de 44%); */
      " >
			<div class="card-body" style="padding:28px 10px 0px">
				<h2 style="color:black;margin-top: -15px;">
					<b>{{products.name }}</b>
				</h2>
        <h5 style="color:black;font-size:12px"><i>Posted on: {{products.dt}}</i></h5>
		  <!-- <folio :posts="mItems" :key="list_key" /> -->
        <div v-html="products.description"></div>
       
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
   
  </Layout>
</template>

<script>
import folio from "../home/folio.vue"
import Recipe from "./Recipe.vue"
import { mdbContainer, mdbCol, mdbRow,  mdbEdgeHeader, mdbListGroup,mdbListGroupItem,mdbBtn,mdbProgressBar } from 'mdbvue';
// import data from "./posts.json"

export default {
  name: 'bItem',
  components: {
    // Layout,
    // NewsFilter,
    // mylist,
      mdbListGroup,
      mdbListGroupItem,
    Recipe,
    mdbContainer,
    mdbCol,
    mdbRow,
    mdbEdgeHeader,
    mdbProgressBar,
    // mdbIcon,
    mdbBtn,
    folio
    // mdbInput,
    // mdbCardBody
  },
  // props: ['name',],


  data() {
    return {
       top:50,
       top1:50,
      products: [],
      mItemsList: [],
      mItems: [],
      mdesc:null,
      mid:0,
      loading: false,
      sending: false,
      dList:false,
      cRequest:false,
      list_key:0,
      printing:false,
    }
  },
  methods: {
    print(){
      // this.printing=true;
      // this.$router.push({ path: '/Print', })
      window.print()
    },
           
    
    async mSearch(search) {
      let mData={
        id:search
      }
      const context=this;
  this.loading=true;
              await this.$api.$post('srecipe',mData).then((response) => {
                  this.loading=false;
        // console.log("srecipe: "+ JSON.stringify(response));
        console.log("srecipe: "+ response);
        const myData = response.data
       
      if(response.val==2){
          this.cRequest=false;
          console.log(myData)
           this.mItemsList = myData
           
           this.dList=true;
        }
     
  }).catch(function (response) {
      context.loading=false;
            //handle error
            console.log("error: "+response)
        });
    },
   
  },
  mounted() {
   
    this.mItems=this.$store.state.pitem.images
    let str2=this.$store.state.pitem
    this.mid=this.$store.state.pitem.id
    console.log("mid: "+mid)
    var str1=JSON.stringify(str2);
    
    const a=str1.replaceAll('src',"style='max-width:97%' src"); 
    let str=JSON.parse(a)
    this.products=str
    // alert(JSON.stringify(this.$store.state.pitem))
    // console.log('BData: ' +JSON.stringify(this.products));
  },

}
</script>
<style scoped>
  .md-progress-bar {
    position: fixed;
    height:7px;
    top: 48px;
    right: 0;
    left: 0;
    z-index: 3;
  }
.btn-default {
  margin-left: 41%;
  margin-right:45%;
 color:#e9ecef;
 background-color:#0c0f24 !important
}
 .mDiv{
    background-color: #fff;
   padding-top: 3px;
    padding-left: 3px;
 }
.md-form {
  
    /* border-radius: 30px; */
    background-color: #fff;

}
.ant-affix{
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%) ;
}
@keyframes rotate {

from {transform: rotate(0deg)}
to {transform: rotate(360deg)}

}
.refresh-start {

animation-name: rotate;
animation-duration: 1s;
animation-iteration-count: infinite;
animation-timing-function: linear;
animation-play-state: running;

}
</style>