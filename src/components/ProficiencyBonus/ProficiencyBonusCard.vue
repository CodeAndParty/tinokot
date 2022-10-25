<template>
  <BaseCard is-clickable>
    <template #title> גמו"ש </template>
    <ProficiencyBonusList />
  </BaseCard>
</template>

<script>
import BaseCard from "@/components/BaseCard.vue";
import ProficiencyBonusList from "./ProficiencyBonusList.vue";
export default { components: { BaseCard, ProficiencyBonusList } };
</script>
