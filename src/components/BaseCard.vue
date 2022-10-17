<template>
  <v-card
    color="white"
    rounded="xl"
    elevation="6"
    :width="width"
    class="ma-1"
    :class="{ 'cursor-pointer': clickable }"
    @click.native="$emit('click')"
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
    width: {
      type: String,
      required: false,
      default: "400",
    },
    clickable: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
};
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
