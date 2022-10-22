<template>
  <BaseDialog ref="dialog">
    <template #title> קורס חדש </template>

    <v-form>
      <v-input
        v-model="newCourse.validity"
        label="Regular"
        append-icon="mdi-calendar"
      >
      </v-input>
      <v-date-picker
        v-if="datePicker"
        v-model="newCourse.validity"
      ></v-date-picker>
    </v-form>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="save"> הוסף </v-btn>
    </v-card-actions>
  </BaseDialog>
</template>

<script>
import BaseDialog from "./BaseDialog.vue";

export default {
  name: "CoursesTableNewCourseDialog",

  components: { BaseDialog },

  data: () => ({
    newCourse: {
      name: "",
      validity: "",
    },
    datePicker: false,
  }),

  mounted() {
    this.$root.$on("openNewCourseDialog", this.$refs.dialog.openDialog);
  },
};
</script>
