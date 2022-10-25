<template>
  <BaseCard isClickable @click="$root.$emit('open-persistence-grants-dialog')">
    <template #title>מענקי התמדה</template>
    <PersistenceGrantsCarousel></PersistenceGrantsCarousel>
  </BaseCard>
</template>

<script>
import BaseCard from "../BaseCard.vue";
import PersistenceGrantsCarousel from "./PersistenceGrantsCarousel.vue";
export default { components: { BaseCard, PersistenceGrantsCarousel } };
</script>
