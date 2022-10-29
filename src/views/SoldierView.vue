<template>
  <v-container fluid v-if="!loading">
    <v-row no-gutters>
      <v-col>
        <SoldierInfoCard></SoldierInfoCard>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <PersistenceGrantsCarousel />
      </v-col>
      <v-col>
        <ProficiencyBonusList />
      </v-col>
    </v-row>
  </v-container>
  <!-- Loading  -->
  <LoadingView v-else />
</template>

<script>
import SoldierInfoCard from "@/components/SoldierInfoCard.vue";

import LoadingView from "@/views/LoadingView.vue";
import PersistenceGrantsCarousel from "@/components/PersistenceGrants/PersistenceGrantsCarousel.vue";
import ProficiencyBonusList from "@/components/ProficiencyBonus/ProficiencyBonusList.vue";

export default {
  components: {
    LoadingView,

    SoldierInfoCard,

    PersistenceGrantsCarousel,

    ProficiencyBonusList,
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
