<template>
  <div class="text-center">
    <v-dialog v-model="dialog" content-class="elevation-0 rounded-xl">
      <BaseCard is-dialog>
        <template #title>
          <v-spacer />
          <slot name="title" />
          <v-spacer />

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

  components: { BaseCard },

  data: () => ({
    dialog: false,
  }),

  methods: {
    openDialog() {
      this.dialog = true;
    },

    closeDialog() {
      this.dialog = false;
    },
  },
};
</script>
