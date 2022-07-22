<!-- <template>
  <Home/>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script> -->

<template>
   
    <!-- <Tutorial/> -->
    <div>
      <homeMainContent  />
       <homeServices  />
    </div>
    
   
    
  
</template>

<script>
// import Main from "./home/mainContent.vue"
// import Services from "./home/services.vue"
export default {
  name: 'IndexPage',
    head: {
    title: 'Home page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description'
      }
    ],
  },
  props: {

  },
  components: {
    // Main,
    // Services,
  },
}
</script>

<style>

</style>