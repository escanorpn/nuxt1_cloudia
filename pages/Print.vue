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
      <rItemRecipe  />
       <!-- <homeServices  /> -->
    </div>
    
   
    
  
</template>

<script>
// import Main from "./home/mainContent.vue"
// import Services from "./home/services.vue"
export default {
  name: 'Print',
    head: {
    title: 'Print',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Print description'
      }
    ],
  },
  props: {

  },
  components: {
    // Main,
    // Services,
  },
  mounted(){
    window.print()
  }
}
</script>

<style>

</style>