<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col>
        <SoldierInfo></SoldierInfo>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <PersistenceGrants></PersistenceGrants>
      </v-col>
      <v-col>
        <ProficiencyBonus></ProficiencyBonus>
      </v-col>
    </v-row>
    <v-row no-gutters> </v-row>
  </v-container>
</template>

<script>
import SoldierInfo from "@/components/SoldierInfo.vue";
import PersistenceGrants from "@/components/PersistenceGrants.vue";
import ProficiencyBonus from "@/components/ProficiencyBonus.vue";

export default {
  name: "SoldierView",

  components: {
    SoldierInfo,
    PersistenceGrants,
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
