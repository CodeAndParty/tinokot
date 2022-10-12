<template>
  <v-card
    id="solider-card"
    color="primary"
    rounded="xl"
    height="120px"
    elevation="6"
    class="pa-2 white--text d-flex flex-row justify-start align-center"
  >
    <v-avatar size="64px">
      <img src="@/assets/person-avatar.svg" alt="person-avatar" />
    </v-avatar>

    <div>
      <v-card-title>
        <span class="green--text">{{ soldier?.rank }}</span>
        <span>&nbsp;</span>
        <span>{{ soldier?.name }}</span>
      </v-card-title>
      <v-card-subtitle class="white--text">{{
        soldier?.pernr
      }}</v-card-subtitle>
    </div>

    <v-divider vertical class="white"></v-divider>
    <div class="mx-auto">
      <v-icon color="accent">mdi-cake</v-icon>
      <span>{{ soldier?.birthDate }}</span>
    </div>

    <v-divider vertical class="white"></v-divider>
    <div class="mx-auto">
      <v-icon color="accent">mdi-account-box</v-icon>
      <span>פרופיל</span>
      <span>&nbsp;</span>
      <span>{{ soldier?.medicalScore }}</span>
    </div>

    <v-divider vertical class="white"></v-divider>
    <div class="mx-auto">
      <v-icon color="accent">mdi-phone</v-icon>
      <span>{{ soldier?.cell }}</span>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "SoldierInfoCard",

  props: ["soldier"],
};
</script>

<style scoped>
#solider-card {
  margin: 2% 2% 0;
}
</style>
