<template>
  <v-app>
    <v-app-bar app color="white" clipped-right>
      <v-img
        alt="Tinokot Logo"
        class="shrink ml-1"
        src="./assets/logo.svg"
        width="50"
      />
      <v-app-bar-title>תינוקות</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-icon>mdi-account</v-icon>
      <span>אלכסנדר דרפקין</span>
    </v-app-bar>

    <v-navigation-drawer app clipped right permanent color="primary">
      <TheOrganizationalStructure></TheOrganizationalStructure>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import TheOrganizationalStructure from "@/components/TheOrganizationalStructure.vue";

export default {
  name: "App",

  data: () => ({
    //
  }),

  components: {
    TheOrganizationalStructure,
  },
};
</script>
