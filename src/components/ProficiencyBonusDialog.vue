<template>
  <BaseDialog ref="dialog">
    <template #title> גמו"ש </template>
  </BaseDialog>
</template>

<script>
import BaseDialog from "./BaseDialog.vue";

export default {
  name: "ProficiencyBonus",

  components: { BaseDialog },

  mounted() {
    this.$root.$on("openProficiencyBonusDialog", this.$refs.dialog.openDialog);
  },
};
</script>
