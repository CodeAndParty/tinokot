<template>
  <div class="d-flex flex-column justify-center">
    <v-icon size="9rem" color="success" class="ml-4">mdi-party-popper</v-icon>
    <p class="font-weight-bold">
      <span>מקבל גמו"ש מה </span>
      <span>{{ $formatDateString(startDate) }}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    startDate: {
      type: String,
      required: true,
    },
  },
};
</script>
