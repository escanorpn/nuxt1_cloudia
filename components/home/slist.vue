<template>
   
<div >
   	<div class="wrap" style="max-width: 1200px;">
			<div class="card text-center"   style="width: 100%; max-width: 1200px; margin-right: auto; margin-left: auto; margin-top: -142px;background: linear-gradient(180deg, #483f3f 15%, rgb(255, 255, 255) 3%, rgb(255, 255, 255) 81%, rgb(60 13 11) 4%);box-shadow:rgb(40 18 10 / 59%) 0px 32px 32px;">
			<div class="card-body">
				<h2 style="color:white;text-shadow: 1px 1px 2px black;margin-top: -15px;text-shadow: 4px 2px 2px #2c0406;">
					<b>Instagam</b>
				</h2>
     
  <vueper-slides
  class="no-shadow"
  style="display:"
  :autoplay="true"
  slide-multiple
  :gap="3"
  :arrows="false"
  :bullets="true"
  :touchable="true"
 :visible-slides="3"
  :slide-ratio="1 / 4"
  :dragging-distance="70">
  <!-- <vueper-slide v-for="i in 10" :key="i" :title="i.toString()" /> -->
 <vueper-slide
    v-for="(slide,i ) in posts" 
    :key="i"
    :image="murl+slide.url"
  
    />
</vueper-slides>
<!-- <vueper-slides 
slide-image-inside
 slide-multiple
  :gap="28" 
  
  :visible-slides="2"
  :autoplay="true"
  :arrows="false" 
progress>
    <vueper-slide
    v-for="(slide,i ) in posts" 
    :key="i"
    :image="murl+slide.url"
  
    />
</vueper-slides> -->

<!-- <vueper-slides 
 slide-multiple
  :gap="3" 
  fade
  :visible-slides="2"
  :autoplay="true"
  :arrows="false" 
progress>
    <vueper-slide
    v-for="(slide,i ) in posts" 
    :key="i"
    >
    <template #content>
    <img  :src="murl+slide.url" alt="Card image cap" class="ms1"/>
    </template>
    </vueper-slide>
</vueper-slides> -->
<mdb-btn style="color:#e9ecef;background: linear-gradient(315deg,#3f0d12,#a71d31 74%);box-shadow: rgb(38 3 3) 1px 5px 5px;margin-top: 2px;" color="" type="submit">View More</mdb-btn>
 </div>
      </div>
    </div>
  </div>
  
</template>



<script>
import item from "./sitem.vue"
import item1 from "./item.vue"
import { VueperSlides, VueperSlide } from 'vueperslides';
import {   mdbCard, mdbCardBody,mdbView,mdbBtn} from 'mdbvue';
// import  VueperSlides  from 'vueperslides'
// import  VueperSlide  from 'vueperslides'

import 'vueperslides/dist/vueperslides.css'
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
 data() {
  return {
 sending: false,
 murl:this.$store.state.iUrl,
   slides: [
    {
      title: 'Slide #1',
      content: 'Slide 1 content.'
    },
    {
      title: 'Slide #2',
      content: 'Slide 2 content.'
    }
  ],
 settings:{
  "lazyLoad": "ondemand",
 "arrows": false,
  "dots": true,
  "infinite": true,
  "slidesToShow": 4,
  "slidesToScroll": 1,
  "autoplay": true,
  "speed": 4000,
  "autoplaySpeed": 30,
  "cssEase": "linear",
  // "initialSlide": 0,
  // "responsive": [
  //   {
  //     "breakpoint": 1024,
  //     "settings": {
  //       "slidesToShow": 3,
  //       "slidesToScroll": 3,
  //       "infinite": true,
  //       "dots": true
  //     }
  //   },
  //   {
  //     "breakpoint": 600,
  //     "settings": {
  //       "slidesToShow": 2,
  //       "slidesToScroll": 2,
  //       "initialSlide": 2
  //     }
  //   },
  //   {
  //     "breakpoint": 480,
  //     "settings": {
  //       "slidesToShow": 1,
  //       "slidesToScroll": 1
  //     }
  //   }
  // ]
  
}
  }},
  components: {
    item,
    item1,
    VueperSlides, 
    VueperSlide,
    mdbCard,  
    mdbCardBody,
    mdbView,
    mdbBtn
    // VueSlickCarousel,
    // VueAwesomeSwiper
  },
  methods:{
     reload(){
       console.log("list_reload");
        this.$parent.fetchNews();
    },
     loading(){
       console.log("loading");
        this.sending=true;
    },
     done(){
      //  console.log("list_reload");
        this.sending=false;
    },

  },
  mounted(){
    console.log("posts")
    console.log(this.posts)
    this.slides=this.posts;
  }
}
</script>

<style>
#div2{
width: 100%; max-width: 1200px; padding: 2px;margin-top: 2px; margin-right: auto; margin-left: auto;  
}
.wrap {
margin-left: auto;
margin-right: auto;
width:99%;
max-width: 900px;
}
 .vueperslides{
  max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}
/*
.vueperslide__image{
      max-width: 20%;
    max-height: 40%;
    margin-top:52px;
}
.vueperslides__inner{
margin-bottom:-17%;
} */
.slide-image-inside{
   max-width: 30px;
}
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}

</style>