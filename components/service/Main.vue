<template>
  <Layout>
    <div style="margin-top: -15px; overflow-x: ;">
       <md-progress-bar md-mode="indeterminate" v-if="sending" />
       <mdb-edge-header color="" style="background-color: #3c0d0b ">
        <div class="home-page-background"></div>
           <div class="container">
              <div class="loading-box" v-if="loading">
                <div class="loader"></div>
              </div>
        <div class="row">
          <div class="col-lg-8 text-center mx-auto" style="margin-top:87px;position: fixed;left: 0;width:100%;">
          <h1 class="text-white pt-3 mt-n5" style=" font-weight: 900;color: #ffffff;text-shadow: #cb6dff 1px 1px 2px;margin-top: 5px;margin-left: auto;margin-right: auto;" >Services</h1>
        </div>
        </div>
           </div>
         
      </mdb-edge-header>
           
    <!-- <mdb-container class="free-bird">
        <mdb-row>
          <mdb-col md="10" class="mx-auto white z-depth-1 py-2 px-2" >
            
          <h3  style="text-align: center;"><strong>Explore</strong></h3>
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
<div style="margin-left:auto;margin-right:auto;">
          <mdb-btn   @click="reload" >Refresh</mdb-btn>
</div>
  
          </mdb-col>
        </mdb-row>
      </mdb-container> -->
      <div class="card white lighten-1 black-text" style="box-shadow:rgb(34 94 222 / 19%) -1px -11px 32px;width: 99%; max-width: 1300px;margin-left:auto; margin-right: auto;    border-radius: 0.25rem;margin-top: -157px;">
              <div class="card-body" style="color: rgba(1, 5, 9, 0.63);background: linear-gradient(21deg, white 9%, white 57%, #d9d0d000 1%) center center / cover fixed;">

    <mlist :posts="products" :key="list_key" />
    
      </div>
      </div>
    <mForm  />
     </div>
   
  </Layout>
</template>

<script>
import mlist from "./list.vue"
import mForm from "./form.vue"
// import mylist from "./mList.vue"
import axios from "axios"
import { mdbContainer, mdbCol, mdbRow,  mdbEdgeHeader, mdbListGroup,mdbListGroupItem,mdbBtn } from 'mdbvue';
// import data from "./posts.json"

export default {
   name: 'service',
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
    // mdbIcon,
    mdbBtn,
    mForm,
    // mdbInput,
    // mdbCardBody
  },
  props: ['name',],


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
      loading:false
    }
  },
  methods: {
      reload(){
      console.log("reloading...");
      // this.list_key=this.list_key+1;
       this.refresh();
       this.fetch();
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
    
   async mSearchitem (s){
      
      //  console.log("clicked: mSearchitem"+ s)

           this.dList=false;
        this.sending=true;
        var murl=this.$store.state.mUrl;
       const mData = { 
          nm:s,
            // pass:this.pass
        };
    
      axios({
          method: 'POST',
          url: murl+'api.php?apicall=a_m1',
          data: mData,
          config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then((response) => {
         const results = response.data
         const myData = response.data.data
        // console.log("response: "+JSON.stringify(response));
        console.log("response2: "+ JSON.stringify(myData));
        
        if(results.val==2){
          console.log(myData)
            this.products=[]
            this.products = myData.map(post => ({
            
          id: post.pro.pid,
          name: post.pro.name,
          images: post.pro.img,
          description: post.pro.description,
          type: post.pro.type,
          price: post.pro.price,
          im: post.im
          // created_at: post.name,
          // updated_at: post.name
         
        }))
        this.refresh();
        }
       this.sending=false;

      })
      .catch(function (response) {
        this.sending=false;
          //handle error
          console.log("error"+response)
      });

    },
    mSearch (s){
      
        this.sending=true;
        var murl=this.$store.state.mUrl;
    const mData = { 
              search:s ,
              };
    axios({
          method: 'POST',
          // url: 'http://localhost/nw/vap/regApi.php?apicall=signup'
          url: murl+'api.php?apicall=a_search_moto',
          data: mData,
          config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then((response) => {
         const results = response.data
         const myData = response.data.data
        console.log("response: "+JSON.stringify(response));
        console.log("response1: "+ JSON.stringify(myData));
        
        if(results.val==2){
           this.cRequest=false;
          console.log(myData)
           this.mItems = myData.map(post => ({
             name:post.name
           }))
           
           this.dList=true;
        }else if(results.val==0){
           
           
           this.dList=false;
           this.cRequest=true;
        }
       this.sending=false;

      })
      .catch(function (response) {
        this.sending=false;
          //handle error
          console.log("error"+response)
      });

    },
     add2cart(){
      console.log("mtocycles");
     
      this.$parent.add2cart();
    },
    // Helper function for extracting a nested image object
   onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
    async fetch() {
this.loading=true
              await this.$api.$get('service').then((response) => {
                this.loading=false
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
            //handle error
            console.log("error: "+response)
        });
        this.loading=false
       
    

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
     this.fetch()
      console.log("url not ok")
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
    animation: load 1s linear infinite;
}


@keyframes load{
    0%{
        left: -100%;
    }
    100%{
        left: 100%;
    }
}
</style>