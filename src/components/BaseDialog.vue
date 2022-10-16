<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="400"
      content-class="elevation-0 rounded-xl"
    >
      <BaseCard width="auto">
        <template #title>
          <v-spacer></v-spacer>
          <slot name="title" />
          <v-spacer></v-spacer>

          <v-btn icon color="secondary" @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>

        <slot />
      </BaseCard>
    </v-dialog>
  </div>
</template>

<script>
import BaseCard from "./BaseCard.vue";

export default {
  name: "BaseDialog",

  data: () => ({
    dialog: false,
  }),

  mounted() {
    this.$root.$on("openDialog", () => (this.dialog = true));
  },

  components: { BaseCard },
};
</script>
