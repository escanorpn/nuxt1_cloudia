(window.webpackJsonp=window.webpackJsonp||[]).push([[5,6,10,11,14],{1326:function(t,e,o){var content=o(1331);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(70).default)("74a3f210",content,!0,{sourceMap:!1})},1327:function(t,e,o){var content=o(1333);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(70).default)("3da4f52f",content,!0,{sourceMap:!1})},1328:function(t,e,o){var content=o(1337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(70).default)("1440c0fa",content,!0,{sourceMap:!1})},1329:function(t,e,o){"use strict";o.r(e);var r=o(63),n={name:"HomePage",components:{mdbBtn:r.mdbBtn,mdbCard:r.mdbCard,mdbCardBody:r.mdbCardBody,mdbView:r.mdbView},directives:{animateOnScroll:r.animateOnScroll},props:{post:{type:Object,required:!0}},data:function(){return{isBold:!1,id:0,murl:this.$store.state.iUrl,sm1:[],someList:[],options:{currentPage:0,effect:"slide",loop:!0}}},methods:{},mounted:function(){this.sm1=this.post,console.log("im: "+JSON.stringify(this.post))}},d=(o(1332),o(93)),component=Object(d.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-12 col-md-12"},[e("mdb-card",[e("mdb-view",{staticClass:"ms",attrs:{hover:"",cascade:""}},[e("img",{staticClass:"ms1",attrs:{src:t.murl+t.sm1.url,alt:"Card image cap"}})])],1)],1)}),[],!1,null,"3d205dea",null);e.default=component.exports},1330:function(t,e,o){"use strict";o(1326)},1331:function(t,e,o){var r=o(69)(!1);r.push([t.i,".ms[data-v-714e6d24]{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);margin-bottom:22px;background-color:#e9ecef}.ms1[data-v-714e6d24]{max-width:100%;margin-left:auto;margin-right:auto}.ant-carousel[data-v-714e6d24] .slick-slide{text-align:center;height:190px;line-height:160px;background:#02050a;overflow:hidden}.ant-carousel[data-v-714e6d24] .custom-slick-arrow{width:25px;height:25px;font-size:25px;color:#fff;background-color:rgba(31,45,61,.11);opacity:.3}.ant-carousel[data-v-714e6d24] .custom-slick-arrow:before{display:none}.ant-carousel[data-v-714e6d24] .custom-slick-arrow:hover{opacity:.5}.ant-carousel[data-v-714e6d24] .slick-slide h3{color:#fff}.ant-carousel .slick-dots li[data-v-714e6d24]{background-color:#0ff}.card .card-body[data-v-714e6d24]{margin-top:-32px;font-family:Arial,Helvetica,sans-serif}",""]),t.exports=r},1332:function(t,e,o){"use strict";o(1327)},1333:function(t,e,o){var r=o(69)(!1);r.push([t.i,".ms[data-v-3d205dea]{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);margin-bottom:22px;background-color:#e9ecef}.ms1[data-v-3d205dea]{max-width:100%;margin-left:auto;margin-right:auto}.ant-carousel[data-v-3d205dea] .slick-slide{text-align:center;height:190px;line-height:160px;background:#02050a;overflow:hidden}.ant-carousel[data-v-3d205dea] .custom-slick-arrow{width:25px;height:25px;font-size:25px;color:#fff;background-color:rgba(31,45,61,.11);opacity:.3}.ant-carousel[data-v-3d205dea] .custom-slick-arrow:before{display:none}.ant-carousel[data-v-3d205dea] .custom-slick-arrow:hover{opacity:.5}.ant-carousel[data-v-3d205dea] .slick-slide h3{color:#fff}.ant-carousel .slick-dots li[data-v-3d205dea]{background-color:#0ff}.card .card-body[data-v-3d205dea]{margin-top:-32px;font-family:Arial,Helvetica,sans-serif}",""]),t.exports=r},1334:function(t,e,o){"use strict";o.r(e);var r=o(63),n={name:"HomePage",components:{mdbBtn:r.mdbBtn,mdbCard:r.mdbCard,mdbCardBody:r.mdbCardBody,mdbMask:r.mdbMask,mdbView:r.mdbView},directives:{animateOnScroll:r.animateOnScroll},props:{post:{type:Object,required:!0}},data:function(){return{isBold:!1,id:0,murl:this.$store.state.iUrl,sm1:[],someList:[],options:{currentPage:0,effect:"slide",loop:!0}}},methods:{},mounted:function(){this.sm1=this.post}},d=(o(1330),o(93)),component=Object(d.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-5 col-md-4"},[e("mdb-card",{directives:[{name:"animateOnScroll",rawName:"v-animateOnScroll",value:{animation:"fadeInLeft",delay:30},expression:"{animation: 'fadeInLeft', delay: 30}"}],attrs:{wide:""}},[e("mdb-view",{staticClass:"ms",attrs:{hover:"",cascade:""}},[e("img",{staticClass:"ms1",attrs:{src:t.murl+t.sm1.url,alt:"Card image cap"}}),t._v(" "),e("mdb-mask",{attrs:{"flex-center":"",waves:"",overlay:"white-slight"}})],1),t._v(" "),e("mdb-card-body",{staticClass:"text-center pb-0",attrs:{cascade:""}})],1)],1)}),[],!1,null,"714e6d24",null);e.default=component.exports},1335:function(t,e,o){"use strict";o.r(e);var r=o(1334),n=o(1329),d=o(1343),c=o.n(d),l=(o(1344),o(1345),{props:{posts:{type:Array,required:!0}},data:function(){return{sending:!1,settings:{lazyLoad:"ondemand",arrows:!1,dots:!0,infinite:!0,slidesToShow:4,slidesToScroll:1,autoplay:!0,speed:4e3,autoplaySpeed:30,cssEase:"linear",responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}}},components:{item:r.default,item1:n.default,VueSlickCarousel:c.a},methods:{reload:function(){this.$parent.fetchNews()},loading:function(){this.sending=!0},done:function(){this.sending=!1}}}),m=(o(1336),o(93)),component=Object(m.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row",attrs:{"data-v-320224c2":"","data-v-40b8d964":"","data-v-35ea163e":"",id:"div2"}},[t.sending?e("md-progress-bar",{attrs:{"md-mode":"indeterminate"}}):t._e(),t._v(" "),t._l(t.posts,(function(t,o){return e("item",{key:o,attrs:{post:t}})})),t._v(" "),e("div")],2)}),[],!1,null,null,null);e.default=component.exports},1336:function(t,e,o){"use strict";o(1328)},1337:function(t,e,o){var r=o(69)(!1);r.push([t.i,"#div2{width:100%;max-width:1200px;padding:2px;margin-top:20px;margin-right:auto;margin-left:auto;box-shadow:0 8px 22px rgba(0,0,0,.21176)}.md-progress-bar{position:fixed;height:7px;top:48px;right:0;left:0;z-index:3}",""]),t.exports=r},1388:function(t,e,o){var content=o(1416);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(70).default)("392fe718",content,!0,{sourceMap:!1})},1401:function(t,e,o){"use strict";o.r(e);o(77);var r=o(1335),n=o(63),d={name:"Recipe",components:{mdbListGroup:n.mdbListGroup,mdbListGroupItem:n.mdbListGroupItem,mdbContainer:n.mdbContainer,mdbCol:n.mdbCol,mdbRow:n.mdbRow,mdbEdgeHeader:n.mdbEdgeHeader,mdbProgressBar:n.mdbProgressBar,mdbBtn:n.mdbBtn,folio:r.default},data:function(){return{murl:this.$store.state.iUrl,mItems:[],products:[]}},methods:{},mounted:function(){this.mItems=this.$store.state.pitem.images[0],this.products=this.$store.state.pitem,console.log("pitem Data: "+JSON.stringify(this.$store.state.pitem))}},c=o(93),component=Object(c.a)(d,(function(){var t=this,e=t._self._c;return e("Layout",[e("div",{staticStyle:{"margin-top":"15px"}},[t.sending?e("mdb-progress-bar",{attrs:{"md-mode":"indeterminate"}}):t._e(),t._v(" "),e("div",{staticClass:"wrap",staticStyle:{"max-width":"1200px"}},[e("div",{staticClass:"card",staticStyle:{width:"100%","max-width":"1200px","margin-right":"auto","margin-left":"auto","margin-top":"142px","background-color":"#483f3f","*/\n      box-shadow":"rgb(40 18 10 / 59%) 0px 32px 32px"}},[e("div",{staticClass:"card-body"},[e("h2",{staticStyle:{color:"white","text-shadow":"4px 2px 2px #2c0406","margin-top":"-15px"}},[e("b",[t._v(t._s(t.products.name))])]),t._v(" "),e("mdb-card",{directives:[{name:"animateOnScroll",rawName:"v-animateOnScroll",value:{animation:"fadeInLeft",delay:30},expression:"{animation: 'fadeInLeft', delay: 30}"}]},[e("mdb-view",{staticClass:"ms",attrs:{hover:"",cascade:""}},[t.mItems.url?e("img",{staticClass:"ms1",staticStyle:{"max-width":"200px"},attrs:{src:t.murl+t.mItems.url,alt:"Card image cap"}}):t._e(),t._v(" "),e("mdb-mask",{attrs:{"flex-center":"",waves:"",overlay:"white-slight"}})],1),t._v(" "),e("mdb-card-body",{staticClass:"text-center pb-0",attrs:{cascade:""}})],1),t._v(" "),e("div",{staticStyle:{"text-align":"left"}},[e("mdb-row",[e("mdb-col",{attrs:{col:"sm"}},[e("p",{staticStyle:{color:"white","margin-top":"15px"}},[e("b",{staticStyle:{"text-shadow":"4px 2px 2px #2c0406"}},[t._v("Cooking time: ")]),t._v(" "+t._s(t.products.ctime)+"\n\t\t\t\t")])]),t._v(" "),e("mdb-col",{attrs:{col:"sm"}},[e("p",{staticStyle:{color:"white","margin-top":"15px","text-shadow":"4px 2px 2px #2c0406"}},[e("b",[t._v("Preparation time: "+t._s(t.products.ptime))])])]),t._v(" "),e("mdb-col",{attrs:{col:"sm"}},[e("p",{staticStyle:{color:"white","margin-top":"15px","text-shadow":"4px 2px 2px #2c0406"}},[e("b",[t._v("Total time: "+t._s(t.products.ptime))])])])],1),t._v(" "),e("mdb-row",[e("mdb-col",{attrs:{col:"sm"}},[e("p",{staticStyle:{color:"white","margin-top":"15px","text-shadow":"4px 2px 2px #2c0406"}},[e("b",[t._v("Ingredients")])]),t._v(" "),e("div",{staticStyle:{color:"white"},domProps:{innerHTML:t._s(t.products.ingredients)}})])],1),t._v(" "),e("mdb-row",[e("mdb-col",{attrs:{col:"sm"}},[e("p",{staticStyle:{color:"white","margin-top":"15px","text-shadow":"4px 2px 2px #2c0406"}},[e("b",[t._v("Instructions")])]),t._v(" "),e("div",{staticStyle:{color:"white"},domProps:{innerHTML:t._s(t.products.instructions)}})])],1)],1)],1)])])],1)])}),[],!1,null,"62ac31bb",null);e.default=component.exports},1415:function(t,e,o){"use strict";o(1388)},1416:function(t,e,o){var r=o(69)(!1);r.push([t.i,".md-progress-bar[data-v-32822a90]{position:fixed;height:7px;top:48px;right:0;left:0;z-index:3}.btn-default[data-v-32822a90]{margin-left:41%;margin-right:45%;color:#e9ecef;background-color:#0c0f24!important}.mDiv[data-v-32822a90]{padding-top:3px;padding-left:3px}.md-form[data-v-32822a90],.mDiv[data-v-32822a90]{background-color:#fff}.ant-affix[data-v-32822a90]{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}@-webkit-keyframes rotate-32822a90{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes rotate-32822a90{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.refresh-start[data-v-32822a90]{-webkit-animation-name:rotate-32822a90;animation-name:rotate-32822a90;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-play-state:running;animation-play-state:running}",""]),t.exports=r},1452:function(t,e,o){"use strict";o.r(e);o(77),o(84),o(106);var r=o(43),n=(o(126),o(1335)),d=o(1401),c=o(63),l={name:"bItem",components:{mdbListGroup:c.mdbListGroup,mdbListGroupItem:c.mdbListGroupItem,Recipe:d.default,mdbContainer:c.mdbContainer,mdbCol:c.mdbCol,mdbRow:c.mdbRow,mdbEdgeHeader:c.mdbEdgeHeader,mdbProgressBar:c.mdbProgressBar,mdbBtn:c.mdbBtn,folio:n.default},data:function(){return{top:50,top1:50,products:[],mItemsList:[],mItems:[],loading:!1,sending:!1,dList:!1,cRequest:!1,list_key:0,printing:!1}},methods:{print:function(){window.print()},keymonitor:function(t){console.log(t.target.value),""!=t.target.value?this.mSearch(t.target.value):(this.mItemsList=[],this.dList=!1)},g2r:function(t){this.mItems=t.images,this.products=t,this.$store.commit("pdata",t)},mSearch:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function o(){var r,n;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return r={s:t},n=e,e.loading=!0,o.next=5,e.$api.$post("srecipe",r).then((function(t){e.loading=!1,console.log("srecipe: "+t);var o=t.data;2==t.val&&(e.cRequest=!1,console.log(o),e.mItemsList=o,e.dList=!0)})).catch((function(t){n.loading=!1,console.log("error: "+t)}));case 5:case"end":return o.stop()}}),o)})))()}},mounted:function(){this.mItems=this.$store.state.pitem.images,this.products=this.$store.state.pitem,console.log("BData: "+JSON.stringify(this.$store.state.pitem))}},m=(o(1415),o(93)),component=Object(m.a)(l,(function(){var t=this,e=t._self._c;return e("Layout",[e("div",{staticStyle:{"overflow-x":""}},[t.sending?e("mdb-progress-bar",{attrs:{"md-mode":"indeterminate"}}):t._e(),t._v(" "),e("mdb-edge-header",{staticStyle:{"background-color":"#3c0d0b"},attrs:{color:""}},[e("div",{staticClass:"home-page-background"}),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-8 text-center mx-auto",staticStyle:{"margin-top":"87px",position:"fixed"}})])])]),t._v(" "),e("a-layout",{staticStyle:{"padding-top":"2px","margin-top":"-74px",background:"#3b3b3b"},attrs:{id:"components-layout-demo-responsive"}},[e("a-layout",{staticClass:"mTop"},[e("a-layout-content",{style:{margin:"54px 16px 0"}},[e("div",{style:{padding:"24px",background:"#fff",minHeight:"360px"}},[e("div",{staticClass:"wrap",staticStyle:{"max-width":"1500px"}},[e("div",{staticClass:"card text-center",staticStyle:{width:"100%","max-width":"1200px","margin-right":"auto","margin-left":"auto","margin-top":"-142px",background:"linear-gradient(#a0998f 15%, rgb(255, 255, 255) 3%, rgb(255, 255, 255) 71%, #ebe6de 44%)"}},[e("div",{staticClass:"card-body"},[e("h2",{staticStyle:{color:"white","text-shadow":"4px 2px 2px #2c0406","margin-top":"-15px"}},[e("b",[t._v(t._s(t.products.name))])]),t._v(" "),e("h5",{staticStyle:{color:"white","font-size":"12px"}},[e("i",[t._v("Posted on: "+t._s(t.products.dt))])]),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.products.description)}})])])])])])],1)],1)],1)])}),[],!1,null,"32822a90",null);e.default=component.exports}}]);