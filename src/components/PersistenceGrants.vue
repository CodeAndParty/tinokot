<template>
  <fragment>
    <PersistenceGrantsCardCarousel />
    <PersistenceGrantsDialog />
  </fragment>
</template>

<script>
import PersistenceGrantsCardCarousel from "./PersistenceGrantsCardCarousel.vue";
import PersistenceGrantsDialog from "./PersistenceGrantsDialog.vue";
export default {
  name: "PersistenceGrants",
  components: { PersistenceGrantsCardCarousel, PersistenceGrantsDialog },
};
</script>
