<template>
  <BaseDialog ref="dialog">
    <template #title>ציר זמן מענקי התמדה</template>
    <PersistenceGrantsTimeline />
  </BaseDialog>
</template>

<script>
import BaseDialog from "../BaseDialog.vue";
import PersistenceGrantsTimeline from "./PersistenceGrantsTimeline.vue";

export default {
  components: { BaseDialog, PersistenceGrantsTimeline },

  mounted() {
    this.$root.$on(
      "open-persistence-grants-dialog",
      this.$refs.dialog.openDialog
    );
  },
};
</script>
