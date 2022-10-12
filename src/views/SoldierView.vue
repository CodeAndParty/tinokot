<template>
  <SoldierInfoCard :soldierInfo="soldierInfo"></SoldierInfoCard>
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

  computed: {
    soldierInfo() {
      return this.$store.getters.info;
    },

    soldierPersistenceGrants() {
      return this.$store.getters.PersistenceGrants;
    },
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
