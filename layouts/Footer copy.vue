<template>
    <div class="">
      <!-- <form novalidate style="
      margin-left: auto;
      margin-right: auto;z-index:0;
      justify-content: space-around;" class="md-layout" >
        <md-card class="md-layout-item md-size-90 md-small-size-100">
        
         
            <mdb-row>
        <mdb-col col="sm">   
          <mdb-input type="email" label="email" outline :disabled="sending" 
          v-model="email" name="email" style="box-shadow: rgb(38 3 3) 1px 5px 5px;"/>
        </mdb-col>
        <mdb-col col="sm">   
            <mdb-btn style="color:#e9ecef;background: linear-gradient(315deg,#3f0d12,#a71d31 74%);box-shadow: rgb(38 3 3) 1px 5px 5px;margin-top:22px" color="" type="submit">Subscribe</mdb-btn>
        </mdb-col>
            </mdb-row>
        </md-card>
        </form> -->
        <!-- Begin Mailchimp Signup Form -->
<!-- <link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css"> -->
<style type="text/css">
	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;  width:600px;}
	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup" style="background-color: transparent;
    width: 90%;">
  
  <form action="https://gmail.us8.list-manage.com/subscribe/post?u=b09c52d078c85a985858bec97&amp;id=17b99f3ab4&amp;f_id=00c85fe0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
        <md-card class="md-layout-item md-size-90 md-small-size-100">
        <mdb-row>
    <mdb-col col="sm">   
      <div class="mc-field-group">
      <mdb-input name="EMAIL" type="email" label="email" outline :disabled="sending" 
          v-model="email" style="box-shadow: rgb(38 3 3) 1px 5px 5px;margin-top:42px;background-color:#fff" />
      <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
    </div>
    </mdb-col>
    <mdb-col col="sm">   
        <mdb-btn style="color:#e9ecef;background: linear-gradient(315deg,#3f0d12,#a71d31 74%);box-shadow: rgb(38 3 3) 1px 5px 5px;margin-top:42px" type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" >Subscribe</mdb-btn>
    </mdb-col>
        </mdb-row>
    </md-card>

	<div id="mce-responses" class="clear foot">
		<div class="response" id="mce-error-response" style="display:none;background-color: #3c0d0b;
    color: #fff;"></div>
		<div class="response" id="mce-success-response" style="display:none;background-color: #3c0d0b;
    color: #fff;" ></div>
	</div> 
    <div style="position: absolute; left: -5000px;" aria-hidden="true">
      <input type="text" name="b_b09c52d078c85a985858bec97_17b99f3ab4" tabindex="-1" value=""></div>
        <div class="optionalParent">
            <div class="clear foot">
            </div>
        </div>
    </div>
</form>
    <!-- <form action="https://gmail.us8.list-manage.com/subscribe/post?u=b09c52d078c85a985858bec97&amp;id=17b99f3ab4&amp;f_id=00c85fe0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
        <h2>Subscribe</h2>
        <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
<div class="mc-field-group">
	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
</label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
	<span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
</div>
	<div id="mce-responses" class="clear foot">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_b09c52d078c85a985858bec97_17b99f3ab4" tabindex="-1" value=""></div>
        <div class="optionalParent">
            <div class="clear foot">
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                <p class="brandingLogo"><a href="http://eepurl.com/h_fuAv" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></p>
            </div>
        </div>
    </div>
</form> -->
<!-- <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeFBJ6E-fSLkAV-zgK6WYtm4AFICr2txhHFqW5K4h-Y7UmqXw/viewform?embedded=true" width="640" height="407" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> -->
</div>
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
<!--End mc_embed_signup-->
    </div>
  </template>
  
  <script>
    import {  mdbBtn, mdbInput, mdbRow, mdbCol } from 'mdbvue';
    // import Mailchimp from 'mailchimp-api-v3'

    export default {
        components: {
          mdbBtn,
          mdbInput, mdbRow, mdbCol,

        },
      name: 'Footer',
      data: () => ({
        sending:false,
         email: null,
 
      }),

       mounted() {

  
    },
      methods: {
      
  
        subscribe(){
            let apiKey="9d9966199ff0cddb380a06c8ce8f55c5-us8";
    //         const mailchimp = new Mailchimp(apiKey);
    //         try{
    //   const response =  mailchimp.request({
    //     method: 'post',mdb
    //     path: `/lists/${audienceId}/members`,
    //     body: {
    //       email_address,
    //       status: "subscribed"
    //     }
    //   })
    //   const { _links, ...result } = response
    //   res.status(result.statusCode).json(result)
    // }catch(err){
    // //   res.status(err.status).send(err.detail)
    // console.log(err)
    // }
}
       
      }
    }
  </script>
  
  <style lang="scss" scoped>
  
  </style>