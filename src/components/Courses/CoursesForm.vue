<template>
  <v-form
    v-model="valid"
    class="d-flex flex-column justify-center align-center"
    @submit.prevent="
      mode === 'creation'
        ? $emit('create-course', newCourse)
        : $emit('edit-course', newCourse)
    "
  >
    <v-text-field
      v-model="newCourse.name"
      label="שם הקורס"
      :rules="[(input) => input.length > 0 || 'יש להכניס שם']"
    />
    <h5 class="green--text">תוקף הקורס</h5>
    <v-date-picker
      v-model="newCourse.validity"
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
        @click="$emit('close-dialog')"
      >
        {{ mode === "creation" ? "הוסף" : "ערוך" }}
      </v-btn>
    </v-card-actions>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      newCourse: { ...this.course },
    };
  },

  props: {
    mode: {
      type: String,
      required: true,
      validator: (value) => (value === "creation") | (value === "editing"),
    },

    course: {
      type: Object,
      required: true,
      validator: (value) =>
        "name" in value &&
        typeof value.name === "string" &&
        "validity" in value &&
        typeof value.validity === "string",
    },
  },

  watch: {
    course() {
      this.newCourse = { ...this.course };
    },
  },
};
</script>
