<template>
  <AttendanceReport></AttendanceReport>
</template>

<script>
import AttendanceReport from "@/components/AttendanceReport.vue";
export default {
  name: "UnitView",
  components: { AttendanceReport },

  mounted() {
    this.fetchUnit();
  },

  watch: {
    $route() {
      this.fetchUnit();
    },
  },

  methods: {
    fetchUnit() {
      this.$store.dispatch("fetchAttendanceReport", this.$route.params.id);
    },
  },
};
</script>
