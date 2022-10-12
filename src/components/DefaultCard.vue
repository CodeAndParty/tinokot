<template>
  <v-card color="white" rounded="xl" elevation="6" width="400px" class="ma-1">
    <v-card-title class="justify-center">
      {{ title }}
    </v-card-title>
    <v-divider></v-divider>
    <slot></slot>
  </v-card>
</template>

<script>
export default {
  name: "DefaultCard",

  props: {
    title: String,
  },
};
</script>
