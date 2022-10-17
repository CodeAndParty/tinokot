<template>
  <fragment>
    <ProficiencyBonusCard />
    <ProficiencyBonusDialog />
  </fragment>
</template>

<script>
import ProficiencyBonusCard from "./ProficiencyBonusCard.vue";
import ProficiencyBonusDialog from "./ProficiencyBonusDialog.vue";
export default {
  name: "ProficiencyBonus",
  components: { ProficiencyBonusCard, ProficiencyBonusDialog },
};
</script>
