<template>
<div>
  <banner-card></banner-card>
  <infor-card-section></infor-card-section>
</div>
</template>

<script>
import { computed } from "vue";
import store from "../store/store";
import BannerCard from "../components/BannerCard.vue"
import InforCardSection from "../components/InforCardSection.vue"

export default {
  name: "HomePage",
  components: {
    BannerCard,
    InforCardSection
  },
  setup() {
    
    store.dispatch('fetchData')

    const data = computed(() => {
      return store.state.cardData
    })
    return {
      data
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
