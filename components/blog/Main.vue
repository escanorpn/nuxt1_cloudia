<template>
  <Layout>
    <div style="margin-top: -15px; overflow-x: ;">
      <div class="loading-box" v-if="loading">
                <div class="loader"></div>
              </div>
       <!-- <md-progress-bar md-mode="indeterminate" v-if="sending1" /> -->
       <!-- <mdb-edge-header color="" style="background-color: #3c0d0b ">
        <div class="home-page-background"></div>
           <div class="container">
           
        <div class="row">
          <div class="col-lg-8 text-center mx-auto" style="margin-top:87px;position: fixed;left: 0;width:100%;">
          <h1 class="text-white pt-3 mt-n5" style=" font-weight: 900;color: #ffffff;text-shadow: #cb6dff 1px 1px 2px;margin-top: 5px;margin-left: auto;margin-right: auto;" >Blog</h1>
        </div>
        </div>
           </div>
         
      </mdb-edge-header> -->

      <div style="margin-bottom: 222px;margin-top: -157px;">
          <a-affix :offset-top="top"  >
     
            <!-- <input class="form-control search_input dProperty mDiv" id="search" style="float:;border-radius: 50px 50px;max-width: 400px;text-align:left;margin-left: auto;margin-right: auto;padding-left:32px;cursor:text; box-shadow:12px 12px 12px black;box-shadow: 1px 6px 14px 6px #09131596;margin-bottom:33px" type="search" placeholder="Search" aria-label="Search"  v-on:keyup="keymonitor"/> -->

                <mdb-list-group v-if="dList">
                  <div style="margin-top: -22px;box-shadow: rgb(9 19 21 / 59%) 1px 6px 14px 6px;max-width: 410px;
                  margin-left: auto;
                  margin-right: auto;
                  width: 80%;">
                  <mdb-list-group-item  :action="true"  v-for="(item,index) in mItems" :key="index"   >
                  <div @click="g2r(item)">{{item.name}}</div >
                  </mdb-list-group-item>
                  </div>
                </mdb-list-group>   

                <mdb-list-group v-if="cRequest">
                  <div style="margin-top: -22px;box-shadow: rgb(9 19 21 / 59%) 1px 6px 14px 6px;max-width: 410px;
                  margin-left: auto;
                  margin-right: auto;
                  width: 80%;">
                  <mdb-list-group-item  :action="true" href="#" tag="a">Make request for this product?</mdb-list-group-item>
                  </div>
                </mdb-list-group>

            </a-affix>
        </div>
    
  <a-layout id="components-layout-demo-responsive" style="padding-top: 2px; margin-top: -174px;    background: #3b3b3b">
   
      <a-layout-content :style="{ margin: '54px 16px 0' }">
        
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">

          <div class="card white lighten-1 black-text" style="box-shadow:rgb(34 94 222 / 19%) -1px -11px 32px;width: 99%; max-width: 1300px;margin-left:auto; margin-right: auto;    border-radius: 0.25rem;margin-top: -75px;">
              <div class="card-body" style="color: rgba(1, 5, 9, 0.63);background: linear-gradient(21deg, white 9%, white 57%, #d9d0d000 1%) center center / cover fixed;">

                <mlist :posts="products" :key="list_key" />

                <mdb-row>
                <mdb-col col="sm">
                  <mdb-btn style="color:#e9ecef;background: linear-gradient(315deg,#3f0d12,#a71d31 74%);box-shadow: rgb(38 3 3) 1px 5px 5px;" color="" type="submit" v-on:click="previous1">Previous</mdb-btn>
                </mdb-col>
                <mdb-col col="sm">
                  <!-- <mdb-btn style="color:#e9ecef;background: linear-gradient(315deg,#3f0d12,#a71d31 74%);box-shadow: rgb(38 3 3) 1px 5px 5px;" color="" type="submit">Next</mdb-btn> -->
                </mdb-col>
                <mdb-col col="sm">
                  <mdb-btn style="color:#e9ecef;background: linear-gradient(315deg,#3f0d12,#a71d31 74%);box-shadow: rgb(38 3 3) 1px 5px 5px;" color="" type="submit" v-on:click="next1">Next</mdb-btn>
                </mdb-col>
                </mdb-row>
      </div>
      </div>
        </div>
      </a-layout-content>
      
  </a-layout>
   
     </div>
   
  </Layout>
</template>

<script>
import mlist from "./list.vue"
// import mylist from "./mList.vue"
// import axios from "axios"
import { mdbContainer, mdbCol, mdbRow,  mdbEdgeHeader, mdbListGroup,mdbListGroupItem,mdbBtn,mdbProgressBar, } from 'mdbvue';
// import data from "./posts.json"

export default {
  name: 'Blog_main',
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
      bottom: false,
      lastId:1,
      counter:3,
      direction:1,
      mIndex:0,
      chunkSize:4,
      master:[],
    }
  },
  watch: {
    bottom(newValue) {
      if (newValue) {
        this.addMore();
        console.log(newValue)
      }
    }
  },
  created() {
    // this.lastId=0;
 
  },
  methods: {
    bottomVisible() {
      const scrollY = window.scrollY+150;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;
      // console.log("scrollY: "+scrollY+" visible: "+visible+" pageHeight:"+pageHeight+" bottomOfPage:"+bottomOfPage)
      return bottomOfPage || pageHeight < visible;
    },
    addMore() {
      // alert("more")
      // this.fetchFolio();
    },
      reload(){
      console.log("reloading...");
      // this.list_key=this.list_key+1;
       this.refresh();
       this.fetchFolio();
    },
    refresh(){
      // console.log("refreshing...");
      this.list_key=this.list_key+1;
    },

     keymonitor(event) {
     
        // console.log(event.target.value);
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
    
      g2r(d){
      // this.$router.push('/Pitem');
      console.log("pclick data: "+JSON.stringify(d))
      this.$store.commit('pdata',d)
       this.$router.push({ path: '/Ritem', })
      // alert("foo")
    },
    async mSearch(search) {
      let mData={
        s:search
      }
      const context=this;
  this.loading=true;
              await this.$api.$post('srecipe',mData).then((response) => {
                  this.loading=false;
        // console.log("srecipe: "+ JSON.stringify(response));
        // console.log("srecipe: "+ response);
        const myData = response.data
       
      if(response.val==2){
          this.cRequest=false;
          // console.log(myData)
           this.mItems = myData
           
           this.dList=true;
        }else if(results.val==0){
           
           this.dList=false;
           this.cRequest=true;
        }

          // console.log("products"+JSON.stringify(myData))
     
  }).catch(function (response) {
      context.loading=false;
            //handle error
            console.log("error: "+response)
        });
    },
    next1(){
     
      if(this.mIndex+this.chunkSize<this.master.length){
        this.mIndex=this.mIndex+1+this.chunkSize;
        this.chunk()
      }
     
      // this.mIndex=this.mIndex+1
    },
    previous1(){
       console.log(this.mIndex-1-this.chunkSize)
      if(this.mIndex-1-this.chunkSize>-1){
        this.mIndex=this.mIndex-1-this.chunkSize
      }
      this.chunk()
    },

    previous(){
      if(this.lastId-this.counter>1){
        // this.lastId=this.lastId-this.counter;
        // alert(this.lastId)
        this.direction=2;
        this.fetchFolio() 
      }
      // this.fetchFolio1() 
    },
    
    next(){
      this.direction=1;
      this.fetchFolio() 
      // this.lastId=this.lastId+this.counter;
      
    },
    chunk(){
      console.log("chunking: "+this.mIndex)

    let d=this.master;
    const da=Object.values(d);  

let i = this.mIndex; 
const chunk = da.slice(i, i + this.chunkSize);
    this.products=chunk;
    this.list_key=this.list_key+1;

    },
    async filterD(c) {
      const context=this;
      this.loading=true;
      let mData={
        cat:c,
      }
              // await this.$api.$post('recipe',mData).then((response) => {
              await this.$api.$post('frecipe',mData).then((response) => {
                  this.loading=false;
        console.log("mData: "+ JSON.stringify(mData));
        console.log("response_: "+ JSON.stringify(response.data));
     
        const myData = response.data;
        
      if(response.val==2){

          this.master= myData.map(post => ({
            id: post.id,
            name: post.name,
            description: post.description,
            ctime: post.ctime,
            ptime: post.ptime,
            serving: post.serving,
            instructions: post.instructions,
            ingredients: post.ingredients, 
            dt: post.dt, 
            images: post.images,
            
          
          }))
          this.chunk()

      }
       
  }).catch(function (response) {
      context.loading=false;
            console.log("error: "+response)
        });
    },
    async fetchFolio() {
      const context=this;
      this.loading=true;
      let mData={
        id:this.lastId,
        counter:this.counter,
        direction:this.direction
      }
              // await this.$api.$post('recipe',mData).then((response) => {
              await this.$api.$get('blog').then((response) => {
                  this.loading=false;
        console.log("mData: "+ JSON.stringify(mData));
        console.log("response_: "+ JSON.stringify(response.data));
     
        const myData = response.data;
        // this.master=myData;
        // let md= myData1.map(post => ({
        //     id: post.id,
        //     name: post.name,
        //     description: post.description,
        //     ctime: post.ctime,
        //     ptime: post.ptime,
        //     serving: post.serving,
        //     instructions: post.instructions,
        //     ingredients: post.ingredients, 
        //     images: post.images,
            
          
        //   }))
        // const myData=this.chunk(myData1);
        // if(this.direction==2){
        //    myData.reverse()
        // }
        // let newData 
      if(response.val==2){
          // console.log("products1"+JSON.stringify(myData))
          // alert("data")
          // const lastData1 = myData;
          // const lastData = lastData1.reverse()[0];
          // const lastData = myData.reverse()[0]; 
          
          // console.log("lastData.id: "+JSON.stringify(lastData.id))
        
          this.master= myData.map(post => ({
            id: post.id,
            name: post.header,
            description: post.blog,
            // ctime: post.ctime,
            // ptime: post.ptime,
            // serving: post.serving,
            // instructions: post.instructions,
            // ingredients: post.ingredients, 
            dt: post.created_at, 
            images: post.cover,
            
          
          }))
          this.chunk()
          // this.products.forEach(element => {
          //   // console.log(Object.entries(element))
          //   // this.products.push(element)
          //   this.lastId=element.id
          // });
          
          console.log("lastData.id: "+this.lastId)
       
          // console.log("typeofnewData[0]: "+typeof newData)
          // this.products.push(newData[0])
          // let prevData=this.products;
          // this.products = Object.assign({}, newData,prevData );
          // this.products = prevData+newData;
      }
          // console.log("new products"+JSON.stringify( this.products))
     
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
    this.lastId=1;
    window.addEventListener("scroll", () => {
      this.bottom = this.bottomVisible();
    });
    // this.addMore();
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