<template>
  <div class="container">
    <el-row>
      <el-col v-for="(o,index) in 6" :key="o" :span="7" :offset="1">
        <el-card  v-if="cardData[index]" :body-style="{ padding: '0px' }" class="card">
          <div class="image">
            <img class="image"  :src="imgData[index]" />
            <span class="title" >{{cardData[index].title}}</span>
          </div>
          <div style="padding: 14px">
            <div class="bottom">
              <time class="time" >{{cardData[index].description}}</time> 
              
              <img class="heart" v-if="cardData[index].featured" src="../assets/heart.png" @click.stop="isFeatured(index)"/>
              <img class="heart" v-if="!cardData[index].featured" src="../assets/like.png" @click.stop="isFeatured(index)"/>
              <div class="date" >{{cardData[index].date}}</div>
             
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import store from "../store/store";
export default {
  name: "InforCardSection",
  setup() {
    const cardData = computed(() => {
      return store.getters.cardDataGetter;
    });
    const isFeatured = (index) => {
      store.commit('setFeatured',index)
    }
    const imgData = ref([
      require('/src/assets/img/landscape1.jpeg'),
      require('/src/assets/img/landscape2.jpeg'),
      require('/src/assets/img/landscape3.jpeg'),
      require('/src/assets/img/landscape4.jpeg'),
      require('/src/assets/img/landscape5.jpeg'),
      require('/src/assets/img/landscape6.jpeg')
    ])
    console.log("data:",cardData.value)
    return {
      cardData,
      imgData,
      isFeatured
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
.container {
  margin-top: 20px;
  padding-right: 25px;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  display: flex;
  justify-content: center;
}

.card {
  margin-bottom: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.time {
  height:40px ;
  font-size: 15px;
  color: black;
  position: absolute;
  top:0;
  overflow-y:auto;
}

.bottom {
  height: 65px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  position: relative;
  height: 160px;
  width: 100%;
  display: block;
  background-size: 100% 100%;
}
.title {
  font-family: "Bebas Neue", cursive;
  font-size: 25px;
  position: absolute;
  left: 4px;
  bottom: 2px;
  color: white;
}
.heart{
  padding-top: 15px;
  height: 20px;
  width: 20px;
  position: absolute;
  bottom: 0;
  display: flex;
}
.date{
   height: 20px;
  position: absolute;
  bottom: 0;
  right: 0;
  color: rgb(180, 180, 180);
  display: flex;
}
</style>

