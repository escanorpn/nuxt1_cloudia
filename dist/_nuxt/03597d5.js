(window.webpackJsonp=window.webpackJsonp||[]).push([[13,11,12],{1291:function(t,e,o){var content=o(1302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(62).default)("8bb48810",content,!0,{sourceMap:!1})},1301:function(t,e,o){"use strict";o(1291)},1302:function(t,e,o){var r=o(61)(!1);r.push([t.i,".card[data-v-63ee12bd]{width:100%}.ms[data-v-63ee12bd]{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);margin-bottom:22px;background-color:#e9ecef}.ms1[data-v-63ee12bd],.ms2[data-v-63ee12bd]{margin-left:auto;margin-right:auto}.ms1[data-v-63ee12bd]{max-width:100%;max-height:234px}#ms2 .ant-carousel[data-v-63ee12bd] .slick-slide{height:30px}#ms2 .ant-carousel[data-v-63ee12bd] .slick-slide,.ant-carousel[data-v-63ee12bd] .slick-slide{text-align:center;line-height:160px;background:#02050a;overflow:hidden}.ant-carousel[data-v-63ee12bd] .slick-slide{height:230px}.ant-carousel[data-v-63ee12bd] .custom-slick-arrow{width:25px;height:25px;font-size:25px;color:#fff;background-color:rgba(31,45,61,.11);opacity:.3}.ant-carousel[data-v-63ee12bd] .custom-slick-arrow:before{display:none}.ant-carousel[data-v-63ee12bd] .custom-slick-arrow:hover{opacity:.5}.ant-carousel[data-v-63ee12bd] .slick-slide h3{color:#fff}.ant-carousel .slick-dots li[data-v-63ee12bd]{background-color:#0ff}.card .card-body[data-v-63ee12bd]{margin-top:-32px;font-family:Arial,Helvetica,sans-serif}",""]),t.exports=r},1303:function(t,e,o){var content=o(1313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(62).default)("78b050ec",content,!0,{sourceMap:!1})},1304:function(t,e,o){"use strict";o.r(e);o(54),o(63),o(82),o(32),o(71),o(102),o(130);var r=o(81),n={name:"HomePage",components:{mdbModal:r.mdbModal,mdbModalHeader:r.mdbModalHeader,mdbModalTitle:r.mdbModalTitle,mdbModalFooter:r.mdbModalFooter,mdbBtn:r.mdbBtn,mdbCard:r.mdbCard,mdbCardBody:r.mdbCardBody,mdbView:r.mdbView,mdbMask:r.mdbMask},directives:{animateOnScroll:r.animateOnScroll},props:{post:{type:Object,required:!0}},data:function(){return{sMsg:"",userSaved:!1,visible:!1,placement:"bottom",modal:!1,isBold:!1,murl:this.$store.state.iUrl,sm1:[],someList:[{html:"https://mdbootstrap.com/img/Photos/Others/photo6.jpg",style:{background:"#1bbc9b"}},{html:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg",style:{background:"#4bbfc3"}},{html:"../../files",style:{background:"#7baabe"}}],options:{currentPage:0,effect:"slide",loop:!0}}},methods:{showDrawer:function(){this.visible=!0},onClose:function(){this.visible=!1},add2cart:function(){var t=this,e=[];this.$cookies.isKey("mp")?(e=JSON.parse(this.$cookies.get("mp"))).length>1?e.forEach((function(element){e.includes(t.post.id)?(console.log(element+"exist"),t.sMsg="Added",t.userSaved=!0):e.push(t.post.id)})):(console.log("ff"),e.push(this.post.id)):(console.log(this.post.id),e.push(this.post.id));var o=JSON.stringify(e);console.log(o),this.$cookies.set("mp",o,"22min"),this.visible=!1,this.$parent.add2cart()}},mounted:function(){this.sm1=this.post.img,console.log("folio: "+JSON.stringify(this.post.img))}},d=(o(1301),o(101)),component=Object(d.a)(n,(function(){var t=this,e=t._self._c;return t.post.name?e("div",{staticClass:"mb-5 col-md-6",attrs:{"data-v-5e2edc68":"","data-v-40b8d964":"","data-v-320224c2":""}},[e("mdb-card",{directives:[{name:"animateOnScroll",rawName:"v-animateOnScroll",value:{animation:"fadeInLeft",delay:30},expression:"{animation: 'fadeInLeft', delay: 30}"}],attrs:{wide:""}},[e("mdb-view",{staticClass:"ms",attrs:{hover:"",cascade:""}},[e("a-carousel",{attrs:{effect:"slide",arrows:""}},[e("div",{staticClass:"custom-slick-arrow",staticStyle:{left:"10px",zIndex:"1"},attrs:{slot:"prevArrow"},slot:"prevArrow"},[e("a-icon",{attrs:{type:"left-circle"}})],1),t._v(" "),e("div",{staticClass:"custom-slick-arrow",staticStyle:{right:"10px"},attrs:{slot:"nextArrow"},slot:"nextArrow"},[e("a-icon",{attrs:{type:"right-circle"}})],1),t._v(" "),t._l(t.sm1,(function(o,r){return e("div",{key:r},[e("img",{staticClass:"ms1",attrs:{src:t.murl+o.url,alt:"Card image cap"}}),t._v(" "),e("mdb-mask",{attrs:{"flex-center":"",waves:"",overlay:"white-slight"}})],1)}))],2)],1),t._v(" "),e("mdb-card-body",{staticClass:"text-center pb-0",attrs:{cascade:""}},[e("h5",{staticStyle:{"text-align":"center",color:"#000000d9"}},[t._v(t._s(t.post.name))]),t._v(" "),"null"!=t.post.description?e("p",[t._v(t._s(t.post.description))]):t._e()]),t._v(" "),e("div",{staticStyle:{"margin-left":"auto","margin-right":"auto"}},[e("mdb-btn",{staticStyle:{color:"#e9ecef","background-color":"#ff3547"},attrs:{color:"",type:"submit"}},[t._v("Read the post")])],1)],1),t._v(" "),e("md-snackbar",{attrs:{"md-active":t.userSaved},on:{"update:mdActive":function(e){t.userSaved=e},"update:md-active":function(e){t.userSaved=e}}},[t._v(t._s(t.sMsg))])],1):t._e()}),[],!1,null,"63ee12bd",null);e.default=component.exports},1312:function(t,e,o){"use strict";o(1303)},1313:function(t,e,o){var r=o(61)(!1);r.push([t.i,"#div2{width:100%;max-width:1100px;padding:22px;margin-top:20px;margin-right:auto;margin-left:auto;box-shadow:0 8px 22px rgba(0,0,0,.21176)}",""]),t.exports=r},1322:function(t,e,o){var content=o(1339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(62).default)("2f87f490",content,!0,{sourceMap:!1})},1325:function(t,e,o){"use strict";o.r(e);var r=o(1304),n={props:{posts:{type:Array,required:!0}},methods:{add2cart:function(){console.log("list"),this.$parent.add2cart()}},components:{item:r.default},mounted:function(){}},d=(o(1312),o(101)),component=Object(d.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row",staticStyle:{"padding-left":"1px","padding-right":"1px"},attrs:{"data-v-320224c2":"","data-v-40b8d964":"","data-v-35ea163e":"",id:"div2"}},t._l(t.posts,(function(t,o){return e("item",{key:o,attrs:{post:t}})})),1)}),[],!1,null,null,null);e.default=component.exports},1338:function(t,e,o){"use strict";o(1322)},1339:function(t,e,o){var r=o(61)(!1);r.push([t.i,".md-progress-bar[data-v-3fe054e4]{position:fixed;height:7px;top:48px;right:0;left:0;z-index:3}.btn-default[data-v-3fe054e4]{margin-left:41%;margin-right:45%;color:#e9ecef;background-color:#0c0f24!important}.mDiv[data-v-3fe054e4]{padding-top:3px;padding-left:3px}.md-form[data-v-3fe054e4],.mDiv[data-v-3fe054e4]{background-color:#fff}.ant-affix[data-v-3fe054e4]{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}@-webkit-keyframes rotate-3fe054e4{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes rotate-3fe054e4{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.refresh-start[data-v-3fe054e4]{-webkit-animation-name:rotate-3fe054e4;animation-name:rotate-3fe054e4;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-play-state:running;animation-play-state:running}",""]),t.exports=r},1345:function(t,e,o){"use strict";o.r(e);o(54);var r=o(26),n=(o(83),o(103),o(63),o(82),o(1325)),d=o(161),c=o.n(d),l=o(81),m={components:{mdbListGroup:l.mdbListGroup,mdbListGroupItem:l.mdbListGroupItem,mlist:n.default,mdbContainer:l.mdbContainer,mdbCol:l.mdbCol,mdbRow:l.mdbRow,mdbEdgeHeader:l.mdbEdgeHeader,mdbBtn:l.mdbBtn},props:["name"],data:function(){return{top:50,top1:50,products:[],mItems:[],sending:!1,dList:!1,cRequest:!1,list_key:0}},methods:{reload:function(){console.log("reloading..."),this.refresh(),this.fetchFolio()},refresh:function(){console.log("refreshing..."),this.list_key=this.list_key+1},keymonitor:function(t){console.log(t.target.value),""!=t.target.value?this.mSearch(t.target.value):(this.mItems=[],this.dList=!1)},mSearchitem:function(s){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.dList=!1,t.sending=!0,o=t.$store.state.mUrl,r={nm:s},c()({method:"POST",url:o+"api.php?apicall=a_m1",data:r,config:{headers:{"Content-Type":"multipart/form-data"}}}).then((function(e){var o=e.data,r=e.data.data;console.log("response2: "+JSON.stringify(r)),2==o.val&&(console.log(r),t.products=[],t.products=r.map((function(t){return{id:t.pro.pid,name:t.pro.name,images:t.pro.img,description:t.pro.description,type:t.pro.type,price:t.pro.price,im:t.im}})),t.refresh()),t.sending=!1})).catch((function(t){this.sending=!1,console.log("error"+t)}));case 5:case"end":return e.stop()}}),e)})))()},mSearch:function(s){var t=this;this.sending=!0;var e=this.$store.state.mUrl,o={search:s};c()({method:"POST",url:e+"api.php?apicall=a_search_moto",data:o,config:{headers:{"Content-Type":"multipart/form-data"}}}).then((function(e){var o=e.data,r=e.data.data;console.log("response: "+JSON.stringify(e)),console.log("response1: "+JSON.stringify(r)),2==o.val?(t.cRequest=!1,console.log(r),t.mItems=r.map((function(t){return{name:t.name}})),t.dList=!0):0==o.val&&(t.dList=!1,t.cRequest=!0),t.sending=!1})).catch((function(t){this.sending=!1,console.log("error"+t)}))},add2cart:function(){console.log("mtocycles"),this.$parent.add2cart()},onCollapse:function(t,e){console.log(t,e)},onBreakpoint:function(t){console.log(t)},fetchFolio:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("product").then((function(e){console.log("response: "+JSON.stringify(e));var o=e.data;2==e.val&&(console.log("products1"+JSON.stringify(o)),t.products=o.map((function(t){return{id:t.id,name:t.name,description:t.description,img:t.images}}))),console.log("products"+JSON.stringify(o))})).catch((function(t){console.log("error: "+t)}));case 2:t.sending=!0,o=t.$store.state.mUrl,r={nm:"peter"},c()({method:"POST",url:o+"api.php?apicall=a_moto",data:r,config:{headers:{"Content-Type":"multipart/form-data"}}}).then((function(e){var o=e.data,r=e.data.data;console.log("response: "+JSON.stringify(e)),console.log("response1: "+JSON.stringify(r)),2==o.val&&(console.log(r),t.products=r.map((function(t){return{id:t.pro.pid,name:t.pro.name,images:t.pro.img,description:t.pro.description,type:t.pro.type,price:t.pro.price,im:t.im}}))),t.sending=!1})).catch((function(t){this.sending=!1,console.log("error"+t)}));case 6:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.fetchFolio(),console.log("url not ok")}},f=(o(1338),o(101)),component=Object(f.a)(m,(function(){var t=this,e=t._self._c;return e("Layout",[e("div",{staticStyle:{"margin-top":"-15px","overflow-x":""}},[t.sending?e("md-progress-bar",{attrs:{"md-mode":"indeterminate"}}):t._e(),t._v(" "),e("mdb-edge-header",{staticStyle:{"background-color":"#3c0d0b"},attrs:{color:""}},[e("div",{staticClass:"home-page-background"})]),t._v(" "),e("mdb-container",{staticClass:"free-bird"},[e("mdb-row",[e("mdb-col",{staticClass:"mx-auto white z-depth-1 py-2 px-2",attrs:{md:"10"}},[e("h3",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("Explore")])]),t._v(" "),e("a-affix",{attrs:{"offset-top":t.top}},[e("input",{staticClass:"form-control search_input dProperty mDiv",staticStyle:{"border-radius":"50px 50px","max-width":"400px","text-align":"left","margin-left":"auto","margin-right":"auto","padding-left":"32px",cursor:"text","box-shadow":"1px 6px 14px 6px #09131596","margin-bottom":"33px"},attrs:{id:"search",type:"search",placeholder:"Search","aria-label":"Search"},on:{keyup:t.keymonitor}}),t._v(" "),t.dList?e("mdb-list-group",[e("div",{staticStyle:{"margin-top":"-52px","box-shadow":"rgb(9 19 21 / 59%) 1px 6px 14px 6px","max-width":"410px","margin-left":"auto","margin-right":"auto",width:"80%"}},t._l(t.mItems,(function(o,r){return e("mdb-list-group-item",{key:r,attrs:{action:!0}},[e("div",{on:{click:function(e){return t.mSearchitem(o.name)}}},[t._v(t._s(o.name))])])})),1)]):t._e(),t._v(" "),t.cRequest?e("mdb-list-group",[e("div",{staticStyle:{"margin-top":"-52px","box-shadow":"rgb(9 19 21 / 59%) 1px 6px 14px 6px","max-width":"410px","margin-left":"auto","margin-right":"auto",width:"80%"}},[e("mdb-list-group-item",{attrs:{action:!0,href:"#",tag:"a"}},[t._v("Make request for this product?")])],1)]):t._e()],1),t._v(" "),e("div",{staticStyle:{"margin-left":"auto","margin-right":"auto"}},[e("mdb-btn",{on:{click:t.reload}},[t._v("Refresh")])],1)],1)],1)],1)],1),t._v(" "),e("mlist",{key:t.list_key,attrs:{posts:t.products}})],1)}),[],!1,null,"3fe054e4",null);e.default=component.exports}}]);