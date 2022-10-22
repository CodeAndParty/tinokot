<template>
  <BaseDialog ref="dialog">
    <template #title> {{ type === "A" ? 'גמו"ש א' : 'גמו"ש ב' }}</template>

    <div class="d-flex justify-center">
      <div
        v-if="
          (type === 'A' && proficiencyBonus?.firstCompletionRate === 1) ||
          (type === 'B' && proficiencyBonus?.scondCompletionRate === 1)
        "
        class="d-flex flex-column justify-center"
      >
        <v-icon size="9rem" color="success" class="ml-4"
          >mdi-party-popper</v-icon
        >
        <p class="font-weight-bold">
          <span>מקבל גמו"ש מה </span>
          <span>{{
            type === "A"
              ? $formatDateString(proficiencyBonus?.firstDate)
              : $formatDateString(proficiencyBonus?.secondDate)
          }}</span>
        </p>
      </div>
      <div v-else>else</div>
    </div>
  </BaseDialog>
</template>

<script>
import BaseDialog from "./BaseDialog.vue";

export default {
  name: "ProficiencyBonus",

  components: { BaseDialog },

  data: () => ({
    type: null,
  }),

  // props: {
  //   type: {
  //     type: String,
  //     required: false,
  //     validator: (string) => {
  //       return string === "A" || string === "B";
  //     },
  //   },
  //   completed: {
  //     type: Number,
  //     required: false,
  //     validator: (num) => {
  //       return num >= 0 && num <= 1;
  //     },
  //   },
  // },

  mounted() {
    this.$root.$on("openProficiencyBonusDialog", (type) => {
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
