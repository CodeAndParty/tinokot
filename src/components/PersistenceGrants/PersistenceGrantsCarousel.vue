<template>
  <v-carousel hide-delimiters height="fit-content" :continuous="false">
    <v-carousel-item
      v-for="(date, index) in persistenceGrantsDates"
      :key="index"
    >
      <div class="text-center">
        <v-icon x-large color="accent">mdi-piggy-bank</v-icon>
        <v-card-text>
          <p>
            <span class="text-h6">מענק {{ index + 1 }}</span>
            <br />
            <span class="font-weight-bold">
              {{ $formatDateString(date) }}
            </span>
          </p>
          <v-icon
            v-if="!$isDateStringBiggerThanToday(date)"
            x-large
            color="success"
          >
            mdi-check
          </v-icon>
          <v-icon v-else x-large color="error"> mdi-close </v-icon>
        </v-card-text>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  computed: {
    persistenceGrantsDates() {
      return this.$store.getters.persistenceGrantsDates;
    },
  },
};
</script>
