<template>
<div class="mb-4 col-md-4"  v-if="post.name" >


     <mdb-card v-animateOnScroll="{animation: 'fadeInLeft', delay: 30}" wide >
		<mdb-view hover cascade class="ms">

    <div  v-for="(item,index) in sm1" :key="index"  >
   
      <!-- <img  :src="murl+item.url" alt="Card image cap" class="ms1"/> -->
              <div class="bgImg" :style="{backgroundImage:`url(${murl+item.url})`}"></div>

				<mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
    </div>
       
		</mdb-view>
		<mdb-card-body class="text-center pb-0" cascade>
     
   <h5 style="text-align: center;color:#000000d9">{{post.name }}</h5>   
<!-- <p style="text-align: center;"><b>Price: </b> {{post.price }}</p> -->
        <!-- <h4><b>Description</b></h4> -->
        <p v-if="post.description!='null'">{{post.description}}</p>
		</mdb-card-body>
    
       <div  style="margin-left: auto;margin-right: auto;">
    
       </div>
	</mdb-card>


      <md-snackbar :md-active.sync="userSaved">{{ sMsg }}</md-snackbar>
        </div>
</template>

<script>
import {   mdbCard, mdbCardBody,mdbView,mdbMask, animateOnScroll, mdbBtn,
mdbModal,
      mdbModalHeader,
      mdbModalTitle,
      // mdbModalBody,
      mdbModalFooter,} from 'mdbvue';
      
// import { slider, slideritem } from 'vue-concise-slider'
export default {
   name: 'HomePage',
  components: {
mdbModal,
      mdbModalHeader,
      mdbModalTitle,
      // mdbModalBody,
      mdbModalFooter,
  mdbBtn,
  mdbCard,
  // mdbCardTitle,
  // mdbCardText,
  mdbCardBody,
  mdbView,
  mdbMask,
  // mdbCardImage,
  // mdbCardFooter,
  // slider,
  // slideritem
  },  directives: {
    animateOnScroll
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
  return {
    sMsg:"",
    userSaved:false,
     visible: false,
      placement: 'bottom',
    modal: false,
    isBold: false,
     murl:this.$store.state.iUrl,
     sm1:[],
        //Slider configuration [obj]
        options: {
          currentPage: 0,
          effect:'slide',
          // thresholdDistance: 500,
          // thresholdTime: 100,
          // autoplay:3000,
          loop:true,
          // preventDocumentMove:true
          // // direction:'vertical',
          // loopedSlides:1,
          // slidesToScroll:1
        }
    
  }
},
  methods: {
    g2p(){
      this.$router.push('/Pitem');
      // alert("foo")
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },

  },
  mounted() {
  //  alert("gg")
    this.sm1=this.post.img;
    console.log("item: "+JSON.stringify(this.post))
  },
}
</script>
<style scoped>
.card{
  width: 100%;
}
.bgImg{
  height:70vh;
  width:100%;
  background-size:cover;
  background-attachment: fixed;
  background-position: center;
}
.ms{
      box-shadow: 0 5px 11px 0 rgb(0 0 0 / 18%), 0 4px 15px 0 rgb(0 0 0 / 15%);
    /* margin-left: -22px;
    margin-right: -22px; */
    /* margin-top: 22px; */
    margin-bottom: 22px;
    background-color: #e9ecef;
}
.ms2{
  /* max-width: 1340px;
    width: 100%;
    max-width: 100%;
    height: 2222px; */
    /* max-height: 234px; */
    
    margin-left: auto;
    margin-right: auto;
}
.ms1{
  /* max-width: 340px;
    width: 100%; */
    max-width: 100%;
    /* height: 2222px; */
    max-height: 234px;
    
    margin-left: auto;
    margin-right: auto;
}

#ms2 .ant-carousel >>> .slick-slide {
  text-align: center;
  height: 30px;
  /* max-height: 360px; */
  /* height: 70%; */
  line-height: 160px;
  background: #02050a;
  overflow: hidden;
}
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 230px;
  /* max-height: 360px; */
  /* height: 70%; */
  line-height: 160px;
  background: #02050a;
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
.ant-carousel .slick-dots li{
background-color: aqua;
}
.card .card-body{
    margin-top: -32px;
    font-family: Arial, Helvetica, sans-serif;
}
</style>