<template>
  <fragment>
    <div v-for="n in proficiencyBonus?.type === 'A' ? 1 : 2" :key="n">
      <div
        class="px-5"
        :class="{
          'text-center mt-10': proficiencyBonus?.type === 'A',
          'd-flex mt-4': proficiencyBonus?.type === 'AB',
        }"
        @click="
          $root.$emit('open-proficiency-bonus-dialog', n === 1 ? 'A' : 'B')
        "
      >
        <p class="mb-0">
          <span class="text-h6 font-weight-bold">{{
            n === 1 ? "גמוש א" : "גמוש ב"
          }}</span>
          <br />
          <span>
            {{
              $formatDateString(
                n === 1
                  ? proficiencyBonus?.firstDate
                  : proficiencyBonus?.secondDate
              )
            }}
          </span>
        </p>
        <v-spacer v-if="proficiencyBonus?.type === 'AB'"></v-spacer>
        <v-icon
          v-if="
            !$isDateStringBiggerThanToday(
              n === 1
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
      <v-divider
        v-if="proficiencyBonus?.type === 'AB' && n === 1"
        class="my-5"
      ></v-divider>
    </div>
  </fragment>
</template>

<script>
export default {
  computed: {
    proficiencyBonus() {
      return this.$store.getters.proficiencyBonus;
    },
  },
};
</script>
