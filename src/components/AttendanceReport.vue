<template>
  <div>
    <h1 class="ma-1">{{ unitName }}</h1>
    <BaseCard id="attendance-card" width="auto">
      <template #title>
        <span>נוכחות</span>
      </template>
      <template #subtitle>
        <span>{{ $formatDateString(Date().toString()) }}</span>
      </template>
      <v-card-text class="font-weight-bold d-flex flex-column text-h6">
        <span class="secondary--text">נוכחים</span>
        <span class="success--text">{{ attendance?.[0]?.amount }}</span>
        <v-progress-linear
          :value="
            (attendance?.[0].amount / countAttendance(attendance?.slice(1))) *
            100
          "
          height="20"
          rounded
          background-color="error"
          color="success"
        >
        </v-progress-linear>
        <span class="error--text align-self-end mb-4">
          {{ countAttendance(attendance?.slice(1)) }}
        </span>
        <v-divider class="align-self-stretch"></v-divider>
      </v-card-text>

      <v-card-text class="font-weight-bold text-h6">
        <p class="secondary--text">לא נוכחים</p>
        <div class="d-flex flex-row justify-space-between">
          <p
            v-for="att in attendance?.slice(1)"
            :key="att.status"
            class="d-flex flex-column align-center"
          >
            <span class="accent--text">{{ att.amount }}</span>
            <span>{{ att.status }}</span>
          </p>
        </div>
      </v-card-text>
    </BaseCard>
  </div>
</template>

<script>
import BaseCard from "./BaseCard.vue";

export default {
  name: "AttendanceReport",

  components: { BaseCard },

  computed: {
    unitName() {
      return this.$store.getters.name;
    },
    attendance() {
      return this.$store.getters.attendance;
    },
  },

  methods: {
    countAttendance(attendance) {
      let counter = 0;
      if (attendance != null) {
        attendance.forEach((att) => {
          counter += att.amount;
        });
      }
      return counter;
    },
  },
};
</script>

<style scoped>
#attendance-card {
  margin: 2% 2% 0 !important;
}
</style>
