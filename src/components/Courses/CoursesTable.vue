<template>
  <fragment>
    <v-data-table
      :items="items"
      :headers="headers"
      sort-by="calories"
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
            @click="$root.$emit('open-courses-dialog', 'creation')"
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

          <v-btn
            icon
            color="secondary"
            @click="$root.$emit('open-courses-dialog', 'editing', item)"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon color="secondary" @click="deleteCourse(item.id)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </tr>
      </template>
    </v-data-table>
    <CoursesDialog @create-course="createCourse" @edit-course="editCourse" />
  </fragment>
</template>

<script>
import CoursesDialog from "./CoursesDialog.vue";

export default {
  components: { CoursesDialog },

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
  }),

  computed: {
    items() {
      return this.$store.getters.courses;
    },
  },

  methods: {
    createCourse(course) {
      this.$store.dispatch("createCourse", course);
    },
    deleteCourse(id) {
      this.$store.dispatch("deleteCourse", id);
    },
    editCourse(newCourse) {
      this.$store.dispatch("updateCourse", newCourse);
    },
  },
};
</script>
