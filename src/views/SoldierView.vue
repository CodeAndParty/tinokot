<template>
  <SoldierInfoCard></SoldierInfoCard>
</template>

<script>
import SoldierInfoCard from "@/components/SoldierInfoCard.vue";

export default {
  name: "SoldierView",

  components: {
    SoldierInfoCard,
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
