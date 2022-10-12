<template>
  <SoldierInfoCard :soldier="soldier"></SoldierInfoCard>
</template>

<script>
import SoldierInfoCard from "@/components/SoldierInfoCard.vue";

export default {
  name: "SoldierView",

  components: {
    SoldierInfoCard,
  },

  data: () => ({
    soldier: null,
  }),

  mounted() {
    this.$http
      .get(`${process.env.VUE_APP_API_URL}/soldiers/${this.$route.params.id}`)
      .then((response) => {
        this.soldier = response.data;
      });
  },
};
</script>
