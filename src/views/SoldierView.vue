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
        <PersistenceGrantsCard></PersistenceGrantsCard>

        <!-- Persistence Grants Dialog -->
        <PersistenceGrantsDialog></PersistenceGrantsDialog>
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
import PersistenceGrantsCard from "@/components/PersistenceGrants/PersistenceGrantsCard.vue";
import PersistenceGrantsDialog from "@/components/PersistenceGrants/PersistenceGrantsDialog.vue";

export default {
  name: "SoldierView",

  components: {
    SoldierInfoCard,
    ProficiencyBonus,
    PersistenceGrantsCard,
    PersistenceGrantsDialog,
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
