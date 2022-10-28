<template>
  <BaseDialog ref="dialog">
    <template #title> קורס חדש </template>

    <v-form
      v-model="valid"
      class="d-flex flex-column justify-center align-center"
      @submit.prevent="
        mode === 'creation'
          ? $emit('create-course', course)
          : $emit('edit-course', course)
      "
    >
      <v-text-field
        v-model="course.name"
        label="שם הקורס"
        :rules="[(input) => input.length > 0 || 'יש להכניס שם']"
      />
      <h5 class="green--text">תוקף הקורס</h5>
      <v-date-picker
        v-model="course.validity"
        locale="he"
        no-title
        show-current="false"
      />

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          type="submit"
          :disabled="!valid"
          @click="$refs.dialog.closeDialog()"
        >
          הוסף
        </v-btn>
      </v-card-actions>
    </v-form>
  </BaseDialog>
</template>

<script>
import BaseDialog from "../BaseDialog.vue";

export default {
  components: { BaseDialog },

  data: () => ({
    valid: false,
    course: {
      name: "",
      validity: "",
    },
    mode: "creation",
  }),

  mounted() {
    this.$root.$on("open-courses-dialog", (mode, currentCourse) => {
      if (mode === "creation") {
        this.mode = "creation";
        this.course.name = "";
        this.course.validity = new Date().toISOString().split("T")[0];
      } else if (mode == "editing") {
        this.mode = "editing";
        this.course = { ...currentCourse };
      }
      this.$refs.dialog.openDialog();
    });
  },
};
</script>
