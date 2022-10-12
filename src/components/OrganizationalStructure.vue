<template>
  <v-treeview
    :items="items"
    activatable
    return-object
    :active.sync="activatedNodes"
    active-class="secondary"
    hoverable
    transition
  >
    <template #prepend="{ item }">
      <v-avatar v-if="item.otype === 'P'" size="36px">
        <img src="../assets/person-avatar.svg" alt="person-avatar" />
      </v-avatar>
      <v-icon v-else large class="white--text"> mdi-domain </v-icon>
    </template>

    <template #label="{ item }">
      <span class="font-weight-bold white--text">{{ item.name }}</span>
      <br />
      <span class="green--text">
        {{ item.minui }}
      </span>
    </template>
  </v-treeview>
</template>

<script>
export default {
  name: "OrganizationalStructure",

  data: () => ({
    items: [
      {
        id: 1,
        name: "שחר",
        otype: "SO",
        children: [
          {
            id: 2,
            name: "הילה יוליוס",
            otype: "P",
            minui: "רמטכ״ל במילואים",
          },
          {
            id: 3,
            name: "אלכסנדר דרפקין",
            otype: "P",
            minui: "רש״צ ליגת הצדק",
          },
        ],
      },
      {
        id: 4,
        name: "מצפן",
        otype: "SO",
        children: [
          {
            id: 5,
            name: "סופרמן",
            otype: "P",
            minui: "חבר בליגת הצדק",
          },
          {
            id: 6,
            name: "יונתן דולגופיאטוב",
            otype: "P",
            minui: "משקה עציצים בכיר",
          },
        ],
      },
    ],

    activatedNodes: [],
  }),

  watch: {
    activatedNodes(activatedNodes) {
      const activeNode = activatedNodes[0];
      const id = activeNode.id;

      activeNode.otype === "P"
        ? this.$router.push(`/soliders/${id}`)
        : this.$router.push(`/units/${id}`);
    },
  },
};
</script>
