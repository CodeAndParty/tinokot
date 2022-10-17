<template>
  <BaseDialog>
    <template #title> מענקי התמדה </template>
    <div>test</div>
  </BaseDialog>
</template>

<script>
import BaseDialog from "./BaseDialog.vue";

export default {
  name: "PersistenceGrantsDialog",

  components: { BaseDialog },

  computed: {
    persistenceGrantsDates() {
      return this.$store.getters.persistenceGrantsDates;
    },
  },
};
</script>
