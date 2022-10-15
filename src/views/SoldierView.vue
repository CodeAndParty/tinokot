<template>
  <div>
    <SoldierInfoCard></SoldierInfoCard>
    <PersistenceGrantsCarousel></PersistenceGrantsCarousel>
  </div>
</template>

<script>
import SoldierInfoCard from "@/components/SoldierInfoCard.vue";
import PersistenceGrantsCarousel from "@/components/PersistenceGrantsCarousel.vue";

export default {
  name: "SoldierView",

  components: {
    SoldierInfoCard,
    PersistenceGrantsCarousel,
  },

  mounted() {
    this.fetchSoldier();
  },

  watch: {
    $route() {
      this.fetchSoldier();
    },
  },

  methods: {
    fetchSoldier() {
      this.$store.dispatch("fetchInfo", this.$route.params.id);
      this.$store.dispatch("fetchPersistenceGrants", this.$route.params.id);
    },
  },
};
</script>
