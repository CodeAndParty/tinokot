<!-- eslint-disable vue/valid-v-slot -->
<template>
  <fragment>
    <v-data-table
      :items="courses"
      :headers="headers"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>My CRUD</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            dark
            class="mb-2"
            @click="$root.$emit('openNewCourseDialog')"
          >
            קורס חדש
          </v-btn>
        </v-toolbar>
      </template>
    </v-data-table>
    <CoursesTableNewCourseDialog></CoursesTableNewCourseDialog>
  </fragment>
</template>

<script>
import CoursesTableNewCourseDialog from "./CoursesTableNewCourseDialog.vue";
export default {
  name: "CoursesTable",
  data: () => ({
    headers: [
      {
        text: "שם",
        value: "name",
      },
      {
        text: "תוקף",
        value: "validity",
      },
    ],
    dialog: false,
    dialogDelete: false,
    formTitle: "test",
    editedIndex: -1,
    editedItem: {
      name: "",
      validity: "",
    },
    defaultItem: {
      name: "",
      validity: "",
    },
  }),
  computed: {
    courses() {
      const courses = this.$store.getters.courses;
      if (courses !== null) {
        courses.forEach((course) => {
          console.log(course);
          course.validity = this.$formatDateString(course.validity);
        });
      }
      return courses;
    },
  },
  components: { CoursesTableNewCourseDialog },
};
</script>
