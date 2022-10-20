<template>
  <BaseDialog ref="dialog">
    <template #title> מענקי התמדה </template>
    <v-progress-linear
      value="100"
      color="primary"
      class="mt-5"
    ></v-progress-linear>
    <v-card-text class="d-flex justify-space-between">
      <div v-for="item in timeline" :key="item.name" class="text-center ma-5">
        <span>
          <span>{{ item.name }}</span>
        </span>
        <br />
        <span
          class="font-weight-bold"
          :class="{
            'success--text': !$isDateStringBiggerThanToday(item.date),
            'error--text': $isDateStringBiggerThanToday(item.date),
          }"
        >
          {{ $formatDateString(item.date) }}
        </span>
      </div>
    </v-card-text>
  </BaseDialog>
</template>

<script>
import BaseDialog from "./BaseDialog.vue";

export default {
  name: "PersistenceGrantsDialog",

  components: { BaseDialog },

  mounted() {
    this.$root.$on("openPersistenceGrantsDialog", this.$refs.dialog.openDialog);
  },

  computed: {
    timeline() {
      const persistenceGrantsDates =
        this.$store.getters.persistenceGrantsDates?.slice(0);
      persistenceGrantsDates.push(new Date().toLocaleDateString());
      persistenceGrantsDates.sort((dateA, dateB) => {
        return new Date(dateA) - new Date(dateB);
      });

      const timeline = [];
      let persistenceGrantCounter = 1;
      persistenceGrantsDates.forEach((date) => {
        if (!this.$isDateStringToday(date)) {
          timeline.push({
            name: `מענק ${persistenceGrantCounter}`,
            date: date,
          });
          persistenceGrantCounter++;
        } else {
          timeline.push({
            name: "היום",
            date: date,
          });
        }
      });
      return timeline;
    },
  },
};
</script>
