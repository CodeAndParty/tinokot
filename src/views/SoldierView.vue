<template>
  <SoldierInfoCard :soldierInfo="soldierInfo"></SoldierInfoCard>
</template>

<script>
import SoldierInfoCard from "@/components/SoldierInfoCard.vue";

export default {
  name: "SoldierView",

  components: {
    SoldierInfoCard,
  },

  mounted() {
    this.dispatchFetchInfo();
  },

  computed: {
    soldierInfo() {
      return this.$store.getters.info;
    },
  },

  watch: {
    $route() {
      this.dispatchFetchInfo();
    },
  },

  methods: {
    dispatchFetchInfo() {
      this.$store.dispatch("fetchInfo", this.$route.params.id);
    },
  },
};
</script>
