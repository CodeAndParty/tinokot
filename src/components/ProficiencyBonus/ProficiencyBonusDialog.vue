<template>
  <BaseDialog ref="dialog">
    <template #title> {{ type === "A" ? 'גמו"ש א' : 'גמו"ש ב' }}</template>

    <div class="d-flex justify-center">
      <div
        v-if="
          (type === 'A' && proficiencyBonus.firstCompletionRate === 1) ||
          (type === 'B' && proficiencyBonus.secondCompletionRate === 1)
        "
      >
        <ProficiencyBonusCompleted
          :startDate="
            type === 'A'
              ? proficiencyBonus.firstDate
              : proficiencyBonus.secondDate
          "
        />
      </div>

      <div v-else>
        <ProficiencyBonusChart
          :complitionRate="
            type === 'A'
              ? proficiencyBonus.firstCompletionRate
              : proficiencyBonus.secondCompletionRate
          "
        />
      </div>
    </div>
  </BaseDialog>
</template>

<script>
import BaseDialog from "@/components/BaseDialog.vue";
import ProficiencyBonusChart from "./ProficiencyBonusChart.vue";
import ProficiencyBonusCompleted from "./ProficiencyBonusCompleted.vue";

export default {
  components: { BaseDialog, ProficiencyBonusChart, ProficiencyBonusCompleted },

  data: () => ({
    type: String,
  }),

  mounted() {
    this.$root.$on("open-proficiency-bonus-dialog", (type) => {
      this.type = type;
      this.$refs.dialog.openDialog();
    });
  },

  computed: {
    proficiencyBonus() {
      return this.$store.getters.proficiencyBonus;
    },
  },
};
</script>
