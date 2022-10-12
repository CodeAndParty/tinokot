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
        <span class="green--text">סמל</span>
        <span>&nbsp;</span>
        <span>אלכסנדר דרפקין</span>
      </v-card-title>
      <v-card-subtitle class="white--text">9044826</v-card-subtitle>
    </div>

    <v-divider vertical class="white"></v-divider>
    <div class="mx-auto">
      <v-icon color="accent">mdi-cake</v-icon>
      <span>30.06.22</span>
    </div>

    <v-divider vertical class="white"></v-divider>
    <div class="mx-auto">
      <v-icon color="accent">mdi-account-box</v-icon>
      <span>פרופיל</span>
      <span>&nbsp;</span>
      <span>45</span>
    </div>

    <v-divider vertical class="white"></v-divider>
    <div class="mx-auto">
      <v-icon color="accent">mdi-phone</v-icon>
      <span>054-7126468</span>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "SoldierInfoCard",
};
</script>

<style scoped>
#solider-card {
  margin: 2% 2% 0;
}
</style>
