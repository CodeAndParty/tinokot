<template>
  <v-container fluid v-if="!loading">
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
  <!-- Loading  -->
  <LoadingView v-else />
</template>

<script>
import SoldierInfoCard from "@/components/SoldierInfoCard.vue";

import PersistenceGrantsCard from "@/components/PersistenceGrants/PersistenceGrantsCard.vue";
import PersistenceGrantsDialog from "@/components/PersistenceGrants/PersistenceGrantsDialog.vue";

import ProficiencyBonusCard from "@/components/ProficiencyBonus/ProficiencyBonusCard.vue";
import ProficiencyBonusDialog from "@/components/ProficiencyBonus/ProficiencyBonusDialog.vue";

import LoadingView from "@/views/LoadingView.vue";

export default {
  components: {
    SoldierInfoCard,

    PersistenceGrantsCard,
    PersistenceGrantsDialog,

    ProficiencyBonusCard,
    ProficiencyBonusDialog,

    LoadingView,
  },

  data: () => ({
    loading: Boolean,
  }),

  async mounted() {
    this.fetchSoldier();

    this.$watch(() => this.$route.params, this.fetchSoldier);
  },

  methods: {
    async fetchSoldier() {
      this.loading = true;

      const soldierId = this.$route.params.id;
      await this.$store.dispatch("fetchInfo", soldierId);
      await this.$store.dispatch("fetchPersistenceGrants", soldierId);
      await this.$store.dispatch("fetchProficiencyBonus", soldierId);
      await this.$store.dispatch("fetchCourses", soldierId);

      this.loading = false;
    },
  },
};
</script>
