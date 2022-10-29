<template>
  <fragment>
    <v-data-table
      :items="items"
      :headers="headers"
      :sort-by="['validity']"
      class="elevation-1"
    >
      <template #top>
        <v-toolbar flat>
          <v-toolbar-title>ניהול קורסים</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            dark
            class="mb-2"
            @click="openDialog('creation')"
          >
            קורס חדש
          </v-btn>
        </v-toolbar>
      </template>

      <template #item="{ item, headers }">
        <tr>
          <td
            v-for="header in headers"
            :key="header.value"
            :class="{
              'error--text':
                header.value === 'validity' &&
                !$isDateStringBiggerThanToday(item.validity),
            }"
          >
            {{
              header.value == "validity"
                ? $formatDateString(item[header.value])
                : item[header.value]
            }}
          </td>

          <v-btn icon color="secondary" @click="openDialog('editing', item)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon color="secondary" @click="deleteCourse(item.id)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </tr>
      </template>
    </v-data-table>

    <BaseDialog v-model="showDialog">
      <template #title>
        {{ formMode === "creation" ? "קורס חדש" : "עריכת קורס" }}
      </template>
      <CoursesForm
        :mode="formMode"
        :course="formCourse"
        @create-course="createCourse"
        @edit-course="editCourse"
        @close-dialog="showDialog = false"
      />
    </BaseDialog>
  </fragment>
</template>

<script>
import BaseDialog from "../BaseDialog.vue";
import CoursesForm from "./CoursesForm.vue";

export default {
  components: { CoursesForm, BaseDialog },

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

    showDialog: false,

    formMode: "creation",
    formCourse: {
      name: "",
      validity: new Date().toISOString().split("T")[0],
    },
  }),

  computed: {
    items() {
      return this.$store.getters.courses;
    },
  },

  methods: {
    openDialog(mode, course) {
      this.formMode = mode;
      if (course !== undefined) this.formCourse = course;
      this.showDialog = true;
    },

    createCourse(course) {
      this.resetCourse();
      this.$store.dispatch("createCourse", course);
    },
    deleteCourse(id) {
      this.resetCourse();
      this.$store.dispatch("deleteCourse", id);
    },
    editCourse(newCourse) {
      this.resetCourse();
      this.$store.dispatch("updateCourse", newCourse);
    },

    resetCourse() {
      this.formCourse = {
        name: "",
        validity: new Date().toISOString().split("T")[0],
      };
    },
  },
};
</script>
