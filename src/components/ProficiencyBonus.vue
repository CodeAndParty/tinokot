<template>
  <BaseCard is-clickable>
    <template #title> גמו"ש </template>
    <div v-if="proficiencyBonus?.type === 'A'" class="text-center">
      <p>
        <span class="text-h6 font-weight-bold">גמוש א</span>
        <br />
        <span>
          {{ $formatDateString(proficiencyBonus?.firstDate) }}
        </span>
      </p>
      <v-icon
        v-if="!$isDateStringBiggerThanToday(proficiencyBonus?.firstDate)"
        x-large
        color="success"
      >
        mdi-check
      </v-icon>
      <v-icon v-else x-large color="error"> mdi-close </v-icon>
    </div>
    <div v-else>
      <div v-for="index in 2" :key="index" class="d-flex justify-space-between">
        <p>
          <span class="text-h6 font-weight-bold">{{
            index === 1 ? "גמוש א" : "גמוש ב"
          }}</span>
          <br />
          <span>
            {{
              $formatDateString(
                index === 1
                  ? proficiencyBonus?.firstDate
                  : proficiencyBonus?.secondDate
              )
            }}
          </span>
        </p>
        <v-icon
          v-if="
            !$isDateStringBiggerThanToday(
              index === 1
                ? proficiencyBonus?.firstDate
                : proficiencyBonus?.secondDate
            )
          "
          x-large
          color="success"
        >
          mdi-check
        </v-icon>
        <v-icon v-else x-large color="error"> mdi-close </v-icon>
      </div>
    </div>
  </BaseCard>
</template>

<script>
import BaseCard from "./BaseCard.vue";
export default {
  name: "ProficiencyBonus",

  components: { BaseCard },

  computed: {
    proficiencyBonus() {
      return this.$store.getters.proficiencyBonus;
    },
  },
};
</script>
