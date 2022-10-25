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
        <!-- Persistence Grants Carousel -->
        <BaseCard
          is-clickable
          @click="$refs.persistenceGrantsDialog.openDialog()"
        >
          <template #title>מענקי התמדה</template>
          <PersistenceGrantsCarousel></PersistenceGrantsCarousel>
        </BaseCard>

        <!-- Persistence Grants Timeline -->
        <BaseDialog is-clickable ref="persistenceGrantsDialog">
          <template #title> מענקי התמדה </template>
          <PersistenceGrantsTimeline></PersistenceGrantsTimeline>
        </BaseDialog>
      </v-col>
      <v-col>
        <ProficiencyBonus></ProficiencyBonus>
      </v-col>
    </v-row>
    <v-row no-gutters> </v-row>
  </v-container>
</template>

<script>
import SoldierInfoCard from "@/components/SoldierInfoCard.vue";
import ProficiencyBonus from "@/components/ProficiencyBonus.vue";
import BaseCard from "@/components/BaseCard.vue";
import PersistenceGrantsCarousel from "@/components/PersistenceGrantsCarousel.vue";
import BaseDialog from "@/components/BaseDialog.vue";
import PersistenceGrantsTimeline from "@/components/PersistenceGrantsTimeline.vue";

export default {
  name: "SoldierView",

  components: {
    SoldierInfoCard,
    ProficiencyBonus,
    BaseCard,
    PersistenceGrantsCarousel,
    BaseDialog,
    PersistenceGrantsTimeline,
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

  // Testing
  data: () => ({
    dialog: false,
  }),
};
</script>
