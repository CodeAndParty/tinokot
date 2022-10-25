<template>
  <v-app>
    <TheToolbar />
    <TheSidenav />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import TheToolbar from "@/components/TheToolbar.vue";
import TheSidenav from "@/components/TheSidenav.vue";

export default {
  name: "App",

  components: {
    TheToolbar,
    TheSidenav,
  },
};
</script>
