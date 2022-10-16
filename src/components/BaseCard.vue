<template>
  <v-card
    color="white"
    rounded="xl"
    elevation="6"
    :width="width || '400px'"
    class="ma-1"
  >
    <v-card-title class="justify-center font-weight-bold primary--text">
      <slot name="title" />
    </v-card-title>
    <v-card-subtitle class="text-center">
      <slot name="subtitle" />
    </v-card-subtitle>
    <v-divider></v-divider>
    <slot></slot>
  </v-card>
</template>

<script>
export default {
  name: "BaseCard",

  props: {
    width: String,
  },
};
</script>
