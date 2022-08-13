

<template>
   
    <!-- <Tutorial/> -->
    <div>
       <recipeMain  />
       <!-- <homeServices  /> -->
    </div>
    
   
    
  
</template>

<script>
// import Main from "./home/mainContent.vue"
// import Services from "./home/services.vue"
export default {
  name: 'Recipes',
    head: {
    title: 'Recipes',
    meta: [
      {
        hid: 'Recipes',
        name: 'Recipes',
        content: 'Recipes'
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