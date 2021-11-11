<template>
  <div class="card">
    <div class="left-container">
      <img class="avater" src="../assets/img/profile.jpeg" alt="avater" />
    </div>
    <div class="mid-container">
      <div class="mid-text-container">
        <h1>{{ bannerData.name }}</h1>
        <div class="small-title">Bio</div>
        <p2 class="bio">{{ bannerData.bio }}</p2>
      </div>
    </div>
    <div class="right-container">
      <div class="mid-text-container">
        <div class="small-title">Phone</div>
        <a class="contact-infor" :href="`tel:${bannerData.phone}`">{{ bannerData.phone }}</a>
        <div class="small-title">Email</div>
        <a class="contact-infor"  :href="`mailto:${bannerData.email}`">{{ bannerData.email }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import store from "../store/store";
export default {
  name: "BannerCard",
  setup() {
    const bannerData = computed(() => {
      return store.state.bannerData;
    });
    return {
      bannerData,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
.card {
  /* Add shadows to create the "card" effect */
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: white;
  width: 70%;
  border-radius: 5px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.bio{
    color: grey;
}
.small-title{
    color: rgb(102, 101, 101);
}
.contact-infor{
    color:rgb(248, 66, 106);
    text-decoration: none
}
h1 {
  font-family: "Bebas Neue", cursive;
}
.avater {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  overflow: hidden;
}
/* Add some padding inside the card container */
.left-container {
  display: inline-block;
  width: 25%;
  height: 200px;
  text-align: center;
}
.mid-container {
  height: 200px;
  width: 45%;
  display: inline-block;
  position: relative;
  overflow-y: auto;
}
.mid-text-container {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.right-container {
  height: 200px;
  display: inline-block;
  width: 30%;
  position: relative;
  overflow-x: auto;
}
</style>