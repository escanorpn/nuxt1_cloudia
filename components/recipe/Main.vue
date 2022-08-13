<template>
  <Layout>
    <div style="margin-top: -15px; overflow-x: ;">
       <!-- <md-progress-bar md-mode="indeterminate" v-if="sending1" /> -->
       <mdb-edge-header color="" style="background-color: #3c0d0b ">
        <div class="home-page-background"></div>
           <div class="container">
              <div class="loading-box" v-if="loading">
                <div class="loader"></div>
              </div>
        <div class="row">
          <div class="col-lg-8 text-center mx-auto" style="margin-top:87px;position: fixed;left: 0;width:100%;">
          <h1 class="text-white pt-3 mt-n5" style=" font-weight: 900;color: #ffffff;text-shadow: #cb6dff 1px 1px 2px;margin-top: 5px;margin-left: auto;margin-right: auto;" >Recipes</h1>
        </div>
        </div>
           </div>
         
      </mdb-edge-header>

      <div style="margin-bottom: 222px;
    margin-top: -157px;">
            <a-affix :offset-top="top"  >
     
            <input class="form-control search_input dProperty mDiv" id="search" style="float:;border-radius: 50px 50px;max-width: 400px;text-align:left;margin-left: auto;margin-right: auto;padding-left:32px;cursor:text; box-shadow:12px 12px 12px black;box-shadow: 1px 6px 14px 6px #09131596;margin-bottom:33px" type="search" placeholder="Search" aria-label="Search"  v-on:keyup="keymonitor"/>
           
           

  <mdb-list-group v-if="dList">
    <div style="margin-top: -52px;box-shadow: rgb(9 19 21 / 59%) 1px 6px 14px 6px;max-width: 410px;
    margin-left: auto;
    margin-right: auto;
    width: 80%;">
    <mdb-list-group-item  :action="true"  v-for="(item,index) in mItems" :key="index"   >
    <div @click="mSearchitem(item.name)">{{item.name}}</div ></mdb-list-group-item>
    </div>
  </mdb-list-group>   

  <mdb-list-group v-if="cRequest">
    <div style="margin-top: -52px;box-shadow: rgb(9 19 21 / 59%) 1px 6px 14px 6px;max-width: 410px;
    margin-left: auto;
    margin-right: auto;
    width: 80%;">
    <mdb-list-group-item  :action="true" href="#" tag="a">Make request for this product?</mdb-list-group-item>
    </div>
  </mdb-list-group>

          </a-affix>
          </div>
    
  <a-layout id="components-layout-demo-responsive" style="padding-top: 2px; margin-top: -174px;    background: #3b3b3b">
    <a-affix :offset-top="top" class="mTop" style="background: #110303;" >
    <a-layout-sider 
      breakpoint="lg"
      collapsed-width="0"
      style="color:#fff;background-color:transparent; text-shadow: 1px 1px 2px black;
    font-weight: 600 !important;margin-top:22px;"
    >
   <p style="margin-left:12px"><u>Recommendations</u></p>
      <ol>
        <li>chocolate granola chocolate granola </li>
        <li>chocolate granola </li>
        <li>chocolate granola </li>
        <li>chocolate granola </li>
       
      </ol>
    </a-layout-sider>
    </a-affix>
    <a-layout class="mTop" >
      <!-- <a-layout-header :style="{ background: '#fff', padding: 0 }" /> -->
      <a-layout-content :style="{ margin: '54px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">

          <div class="card white lighten-1 black-text" style="box-shadow:rgb(34 94 222 / 19%) -1px -11px 32px;width: 99%; max-width: 1300px;margin-left:auto; margin-right: auto;    border-radius: 0.25rem;margin-top: -75px;">
              <div class="card-body" style="color: rgba(1, 5, 9, 0.63);background: linear-gradient(21deg, white 9%, white 57%, #d9d0d000 1%) center center / cover fixed;">

    <mlist :posts="products" :key="list_key" />
      </div>
      </div>
        </div>
      </a-layout-content>
      <!-- <a-layout-footer style="textAlign: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer> -->
    </a-layout>
  </a-layout>
      
      <!-- <div class="card white lighten-1 black-text" style="box-shadow:rgb(34 94 222 / 19%) -1px -11px 32px;width: 99%; max-width: 1300px;margin-left:auto; margin-right: auto;    border-radius: 0.25rem;margin-top: -157px;">
              <div class="card-body" style="color: rgba(1, 5, 9, 0.63);background: linear-gradient(21deg, white 9%, white 57%, #d9d0d000 1%) center center / cover fixed;">

    <mlist :posts="products" :key="list_key" />
      </div>
      </div> -->
     </div>
   
  </Layout>
</template>

<script>
import mlist from "./list.vue"
// import mylist from "./mList.vue"
import axios from "axios"
import { mdbContainer, mdbCol, mdbRow,  mdbEdgeHeader, mdbListGroup,mdbListGroupItem,mdbBtn,mdbProgressBar } from 'mdbvue';
// import data from "./posts.json"

export default {
  name: 'Recipe_main',
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
      loading: false,
      loading1: true,
      dList:false,
      cRequest:false,
      list_key:0,
    }
  },
  methods: {
      reload(){
      console.log("reloading...");
      // this.list_key=this.list_key+1;
       this.refresh();
       this.fetchFolio();
    },
    refresh(){
      console.log("refreshing...");
      this.list_key=this.list_key+1;
    },

     keymonitor: function(event) {
     
        console.log(event.target.value);
        if(event.target.value!= ""){

        this.mSearch(event.target.value);
        
        }else{
           this.mItems=[]; 
           this.dList=false;
        }
    },
    
   // Helper function for extracting a nested image object
   onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
    async fetchFolio() {
      const context=this;
  this.loading=true;
              await this.$api.$get('recipe').then((response) => {
                  this.loading=false;
        console.log("response: "+ JSON.stringify(response));
        const myData = response.data
      if(response.val==2){
          console.log("products1"+JSON.stringify(myData))
          // alert("data")
            this.products = myData.map(post => ({
            id: post.id,
            name: post.name,
            description: post.description, 
            img: post.images,
          
          }))
      }
          console.log("products"+JSON.stringify(myData))
     
  }).catch(function (response) {
      context.loading=false;
            //handle error
            console.log("error: "+response)
        });
    },
  },
  mounted() {
    // if(this.name!="" && this.name!=undefined){
    //   console.log("url ok="+this.name)
    //   this.mSearchitem(this.name);
    // }else{
      
    // this.fetchFolio()
    //   console.log("url not ok")
    // }
     this.fetchFolio()
      console.log("loading folio")
  },

}
</script>
<style scoped>
.loading-box{
     position: fixed;
    width: 100%;
    height: 5px;
    border-radius: 50px;
    /* border: 2px solid #ededed; */
    overflow: hidden;
    top: 38px;
    left: 0;
}
.loader{
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 50px;
    background: linear-gradient(45deg, #3c0d0b,#b6b5ff, #ff9797,#3c0d0b);
    left: 0%;
}
.loader{
    left: -100%;
    animation: load 3s linear infinite;
}

@keyframes load{
    0%{
        left: -100%;
    }
    100%{
        left: 100%;
    }
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