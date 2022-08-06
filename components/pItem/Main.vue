<template>
  <Layout>
    <div style="margin-top: -15px; overflow-x: ;">
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
      	<div class="wrap" style="max-width: 1200px;">
			<div class="card text-center" :style="folio"  style="width: 100%; max-width: 1200px; margin-right: auto; margin-left: auto; margin-top: -142px;background: linear-gradient(180deg, #483f3f 15%, rgb(255, 255, 255) 3%, rgb(255, 255, 255) 81%, rgb(60 13 11) 4%);box-shadow:rgb(40 18 10 / 59%) 0px 32px 32px;" >
			<div class="card-body">
				<h2 style="color:white;text-shadow: 1px 1px 2px black;margin-top: -15px;text-shadow: 4px 2px 2px #2c0406;">
					<b>{{products.name }}</b>
				</h2>
	
		  <!-- <mlist :posts="products" :key="list_key" /> -->
		  <folio :posts="mItems" :key="list_key" />
		<!-- <mdb-btn style="color:#e9ecef;background: linear-gradient(315deg,#3f0d12,#a71d31 74%);box-shadow: rgb(38 3 3) 1px 5px 5px;margin-top: -22px;" color="" type="submit">View the
		 Portfolio</mdb-btn> -->
			<p style="color:white;text-shadow: 1px 1px 2px black;margin-top: -15px;text-shadow: 4px 2px 2px #2c0406;">
					<b>{{products.description }}</b>
				</p>
	</div>
</div>
</div>
    
      <!-- <div class="card white lighten-1 black-text" style="box-shadow:rgb(34 94 222 / 19%) -1px -11px 32px;width: 99%; max-width: 1300px;margin-left:auto; margin-right: auto;    border-radius: 0.25rem;margin-top: -157px;">
              <div class="card-body" style="color: rgba(1, 5, 9, 0.63);background: linear-gradient(21deg, white 9%, white 57%, #d9d0d000 1%) center center / cover fixed;">

    <mlist :posts="products" :key="list_key" />
      </div>
      </div> -->
     </div>
   
  </Layout>
</template>

<script>
import folio from "../home/folio.vue"
import mlist from "./list.vue"
import { mdbContainer, mdbCol, mdbRow,  mdbEdgeHeader, mdbListGroup,mdbListGroupItem,mdbBtn,mdbProgressBar } from 'mdbvue';
// import data from "./posts.json"

export default {
  name: 'pItem',
  components: {
    // Layout,
    // NewsFilter,
    // mylist,
      mdbListGroup,
      mdbListGroupItem,
    mlist,
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
      mItems: [],
      sending: false,
      dList:false,
      cRequest:false,
      list_key:0,
    }
  },
  methods: {
     
  },
  mounted() {
   
    this.mItems=this.$store.state.pitem.img
    this.products=this.$store.state.pitem
    // console.log('Data: ' +JSON.stringify(this.$store.state.pitem));
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