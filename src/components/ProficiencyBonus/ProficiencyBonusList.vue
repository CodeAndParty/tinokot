<template>
  <fragment>
    <BaseCard is-clickable>
      <template #title> גמו"ש </template>
      <div v-for="n in proficiencyBonus.type === 'A' ? 1 : 2" :key="n">
        <div
          class="px-5"
          :class="{
            'text-center mt-10': proficiencyBonus.type === 'A',
            'd-flex mt-4': proficiencyBonus.type === 'AB',
          }"
          @click="openDialog(n)"
        >
          <p class="mb-0">
            <span class="text-h6 font-weight-bold">{{
              n === 1 ? "גמוש א" : "גמוש ב"
            }}</span>
            <br />
            <span>
              {{
                $formatDateString(
                  n === 1
                    ? proficiencyBonus.firstDate
                    : proficiencyBonus.secondDate
                )
              }}
            </span>
          </p>
          <v-spacer v-if="proficiencyBonus.type === 'AB'"></v-spacer>
          <v-icon
            v-if="
              !$isDateStringBiggerThanToday(
                n === 1
                  ? proficiencyBonus.firstDate
                  : proficiencyBonus.secondDate
              )
            "
            x-large
            color="success"
          >
            mdi-check
          </v-icon>
          <v-icon v-else x-large color="error"> mdi-close </v-icon>
        </div>
        <v-divider
          v-if="proficiencyBonus.type === 'AB' && n === 1"
          class="my-5"
        ></v-divider>
      </div>
    </BaseCard>

    <BaseDialog v-model="showDialog">
      <template #title> {{ type === "A" ? 'גמו"ש א' : 'גמו"ש ב' }}</template>

      <div class="d-flex justify-center">
        <div
          v-if="
            (type === 'A' && proficiencyBonus.firstCompletionRate === 1) ||
            (type === 'B' && proficiencyBonus.secondCompletionRate === 1)
          "
        >
          <ProficiencyBonusCompleted
            :startDate="
              type === 'A'
                ? proficiencyBonus.firstDate
                : proficiencyBonus.secondDate
            "
          />
        </div>

        <div v-else>
          <ProficiencyBonusChart
            :complitionRate="
              type === 'A'
                ? proficiencyBonus.firstCompletionRate
                : proficiencyBonus.secondCompletionRate
            "
          />
          <CoursesTable />
        </div>
      </div>
    </BaseDialog>
  </fragment>
</template>

<script>
import BaseCard from "../BaseCard.vue";
import BaseDialog from "../BaseDialog.vue";
import CoursesTable from "../Courses/CoursesTable.vue";
import ProficiencyBonusChart from "./ProficiencyBonusChart.vue";
import ProficiencyBonusCompleted from "./ProficiencyBonusCompleted.vue";

export default {
  components: {
    BaseCard,
    BaseDialog,
    ProficiencyBonusCompleted,
    ProficiencyBonusChart,
    CoursesTable,
  },

  data: () => ({
    showDialog: false,
    type: String,
  }),

  computed: {
    proficiencyBonus() {
      return this.$store.getters.proficiencyBonus;
    },
  },

  methods: {
    openDialog(n) {
      this.type = n === 1 ? "A" : "B";
      this.showDialog = true;
    },
  },
};
</script>
