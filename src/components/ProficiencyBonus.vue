<template>
  <DefaultCard title="גמוש">
    <div v-if="proficiencyBonus?.type === 'A'" class="text-center">
      <p>
        <span class="text-h6 font-weight-bold">גמוש א</span>
        <br />
        <span>
          {{
            new Date(proficiencyBonus?.firstDate).toLocaleDateString("he", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          }}
        </span>
      </p>
      <v-icon
        v-if="new Date(proficiencyBonus?.firstDate) <= new Date()"
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
              new Date(
                index === 1
                  ? proficiencyBonus?.firstDate
                  : proficiencyBonus?.secondDate
              ).toLocaleDateString("he", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            }}
          </span>
        </p>
        <v-icon
          v-if="
            new Date(
              index === 1
                ? proficiencyBonus?.firstDate
                : proficiencyBonus?.secondDate
            ) <= new Date()
          "
          x-large
          color="success"
        >
          mdi-check
        </v-icon>
        <v-icon v-else x-large color="error"> mdi-close </v-icon>
      </div>
    </div>
  </DefaultCard>
</template>

<script>
import DefaultCard from "./DefaultCard.vue";
export default {
  name: "ProficiencyBonus",

  components: { DefaultCard },

  computed: {
    proficiencyBonus() {
      return this.$store.getters.proficiencyBonus;
    },
  },
};
</script>
