<template>
  <v-card
    id="soldier-info-card"
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
        <span class="green--text">{{ soldierInfo?.rank }}</span>
        <span>&nbsp;</span>
        <span>{{ soldierInfo?.name }}</span>
      </v-card-title>
      <v-card-subtitle class="white--text">{{
        soldierInfo?.pernr
      }}</v-card-subtitle>
    </div>

    <v-divider vertical class="white"></v-divider>
    <div class="mx-auto">
      <v-icon color="accent">mdi-cake</v-icon>
      <span>{{ $formatDateString(soldierInfo?.birthDate, false) }}</span>
    </div>

    <v-divider vertical class="white"></v-divider>
    <div class="mx-auto">
      <v-icon color="accent">mdi-account-box</v-icon>
      <span>פרופיל</span>
      <span>&nbsp;</span>
      <span>{{ soldierInfo?.medicalScore }}</span>
    </div>

    <v-divider vertical class="white"></v-divider>
    <div class="mx-auto">
      <v-icon color="accent">mdi-phone</v-icon>
      <span>{{ soldierInfo?.cell }}</span>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "SoldierInfo",

  computed: {
    soldierInfo() {
      return this.$store.getters.info;
    },
  },
};
</script>

<style scoped>
#soldier-info-card {
  margin: 2% 2% 0;
}
</style>
