<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col>
        <SoldierInfoCard></SoldierInfoCard>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <!-- Persistence Grants  -->
      <v-col>
        <!-- Persistence Grants Card -->
        <PersistenceGrantsCard />

        <!-- Persistence Grants Dialog -->
        <PersistenceGrantsDialog />
      </v-col>
      <!-- Proficiency Bonus -->
      <v-col>
        <!-- Proficiency Bonus Card -->
        <ProficiencyBonusCard />

        <!-- Proficiency Bonus Dialog -->
        <ProficiencyBonusDialog />
      </v-col>
    </v-row>
    <v-row no-gutters> </v-row>
  </v-container>
</template>

<script>
import SoldierInfoCard from "@/components/SoldierInfoCard.vue";

import PersistenceGrantsCard from "@/components/PersistenceGrants/PersistenceGrantsCard.vue";
import PersistenceGrantsDialog from "@/components/PersistenceGrants/PersistenceGrantsDialog.vue";

import ProficiencyBonusCard from "@/components/ProficiencyBonus/ProficiencyBonusCard.vue";
import ProficiencyBonusDialog from "@/components/ProficiencyBonus/ProficiencyBonusDialog.vue";

export default {
  components: {
    SoldierInfoCard,

    PersistenceGrantsCard,
    PersistenceGrantsDialog,

    ProficiencyBonusCard,
    ProficiencyBonusDialog,
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
      this.$store.dispatch("fetchCourses", soldierId);
    },
  },
};
</script>
