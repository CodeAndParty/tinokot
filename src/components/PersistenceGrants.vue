<template>
  <fragment>
    <PersistenceGrantsCarousel />
    <PersistenceGrantsDialog />
  </fragment>
</template>

<script>
import PersistenceGrantsCarousel from "./PersistenceGrantsCarousel.vue";
import PersistenceGrantsDialog from "./PersistenceGrantsDialog.vue";
export default {
  name: "PersistenceGrants",
  components: { PersistenceGrantsCarousel, PersistenceGrantsDialog },
};
</script>
