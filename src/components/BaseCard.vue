<template>
  <v-card
    color="white"
    rounded="xl"
    elevation="6"
    min-height="250"
    :class="{ 'cursor-pointer': isClickable, 'ma-10': !isDialog }"
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
    isClickable: {
      type: Boolean,
      required: false,
      default: false,
    },
    isDialog: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
