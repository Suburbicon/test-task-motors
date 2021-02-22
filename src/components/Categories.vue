<template>
  <div class="categories">
    <!-- <v-row justify="space-around">
      <v-col cols="12" sm="10" md="8">
        <v-sheet elevation="10" class="py-4 px-1"> -->
    <v-chip-group mandatory active-class="primary--text" class="chip-group">
      <v-chip v-for="item in categories" :key="item" class="chip-item" outlined>
        {{ item }}
      </v-chip>
    </v-chip-group>
    <!-- </v-sheet>
      </v-col>
    </v-row> -->
  </div>
</template>

<script>
export default {
  name: "Categories",
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.chip-group {
  background-color: #151419;
}

.theme--light.v-chip {
	color: #626262;
  border-color: #626262;
}

</style>
