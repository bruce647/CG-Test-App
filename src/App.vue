<template>
  <div class="background">
    <home-page>1</home-page>
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";
 
export default {
  name: "App", 
  components: {
    HomePage,
  },
  setup() {
   
  },

};
</script>

<style scoped>
.background {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background-image: url("./assets/img/background.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  overflow-y: auto;
  }
</style>
