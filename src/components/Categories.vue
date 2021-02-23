<template>
  <div class="categories">
    <!-- <v-row justify="space-around">
      <v-col cols="12" sm="10" md="8">
        <v-sheet elevation="10" class="py-4 px-1"> -->
    <v-chip-group mandatory active-class="primary--text" class="chip-group">
      <div>
        <v-chip
          @click="$emit('onClickCategory', null)"
          :class="{ activeCategory: activeCategory === null }"
          class="chip-item"
          outlined
        >
          Все пёсели
        </v-chip>
      </div>

      <div class="categories_dogs">
        <p v-for="char of characters" class="character" :key="char">
          {{ char }}
          <v-chip
            v-for="item of categories[char]"
            :key="item"
            :class="{ activeCategory: activeCategory === item }"
            @click="$emit('onClickCategory', item)"
            class="chip-item"
            outlined
          >
            {{ item }}
          </v-chip>
        </p>
      </div>
    </v-chip-group>
    <!-- </v-sheet>
      </v-col>
    </v-row> -->
  </div>
</template>

<script>
export default {
  name: "Categories",
  data: () => {
    return {
      characters: [],
      dogsByCategories: []
    };
  },
  props: {
    categories: {
      type: Object
    },
    activeCategory: {
      type: String
    }
  },
  mounted() {
    for (let char in this.categories) {
      this.characters.push(char);
    }
  }
};
</script>

<style lang="scss" scoped>
.chip-group {
  background-color: #151419;
}

.activeCategory {
  color: #3c59f0 !important;
  border-color: #3c59f0 !important;
}

.theme--light.v-chip {
  color: #626262;
  border-color: #626262;
}

.character {
  color: #626262;
  font-weight: 400;
  font-size: 20px;
  margin-right: 30px;
}

.categories_dogs {
  display: flex;
}
</style>

<style>
.v-slide-group__content {
  display: block !important;
}
</style>
