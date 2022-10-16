<template>
  <div>
    <SoldierInfoCard></SoldierInfoCard>
    <PersistenceGrantsCarousel></PersistenceGrantsCarousel>
    <ProficiencyBonus></ProficiencyBonus>
  </div>
</template>

<script>
import SoldierInfoCard from "@/components/SoldierInfo.vue";
import PersistenceGrantsCarousel from "@/components/PersistenceGrants.vue";
import ProficiencyBonus from "@/components/ProficiencyBonus.vue";

export default {
  name: "SoldierView",

  components: {
    SoldierInfoCard,
    PersistenceGrantsCarousel,
    ProficiencyBonus,
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
      const soldierId = this.$route.params.id;
      this.$store.dispatch("fetchInfo", soldierId);
      this.$store.dispatch("fetchPersistenceGrants", soldierId);
      this.$store.dispatch("fetchProficiencyBonus", soldierId);
    },
  },
};
</script>
