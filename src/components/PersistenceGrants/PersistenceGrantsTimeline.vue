<template>
  <fragment>
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
  </fragment>
</template>

<script>
export default {
  computed: {
    timeline() {
      const dates = this.$store.getters.persistenceGrantsDates.slice(0);
      dates.push(new Date().toLocaleDateString());
      dates.sort((dateA, dateB) => {
        return new Date(dateA) - new Date(dateB);
      });

      const timeline = [];
      let counter = 1;
      dates.forEach((date) => {
        if (!this.$isDateStringToday(date)) {
          timeline.push({
            name: `מענק ${counter}`,
            date: date,
          });
          counter++;
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
