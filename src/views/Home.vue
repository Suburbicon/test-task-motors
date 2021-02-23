<template>
  <div class="hero container">
    <div class="hero__sort">
      <p @click="showCategories = !showCategories" class="hero__race">
        Породы
        <vue-icon v-if="!showCategories" class="v-icon" name="arrow-up"></vue-icon>
        <vue-icon v-else class="v-icon" name="arrow-down"></vue-icon>
      </p>
      <Sort />
    </div>
    <div class="hero__categories" v-if="showCategories">
      <Categories
        :categories="sortOfCategories"
        :activeCategory="CATEGORY"
        @onClickCategory="onClickCategory"
      />
    </div>
    <div class="hero__content hero__content--main">
      <Card
        v-for="dog in DOGS"
        :key="dog.id"
        class="hero__card"
        :dog="dog"
        :favouriteDog="dog['favourite']"
        @addToFavourite="addToFavourite"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Card from "../components/Card";

export default {
  name: "Home",
  components: {
    Categories,
    Sort,
    Card
  },
  data: () => {
    return {
      sortOfCategories: {},
      showCategories: false
    };
  },
  computed: {
    ...mapGetters(["DOGS", "CATEGORY"])
  },
  methods: {
    ...mapActions(["FETCH_DOGS", "SORT_BY_CATEGORY", "POST_FAVOURITE_DOGS"]),
    onClickCategory(category) {
      this.SORT_BY_CATEGORY(category);
      this.showCategories = !this.showCategories;
    },
    addToFavourite(id) {
      this.POST_FAVOURITE_DOGS(id);
    }
  },
  mounted() {
    this.FETCH_DOGS();

    const categories = [
      "Maltese",
      "Bulldog",
      "Canine",
      "Cattledog",
      "Corgi",
      "Kelpie",
      "Labrador",
      "Poodle",
      "Shiba",
      "Spaniel"
    ];

    categories.forEach((item) => {
      if (!this.sortOfCategories[item[0]]) {
        this.sortOfCategories[item[0]] = [];
      }
      this.sortOfCategories[item[0]].push(item);
    });
  }
};
</script>

<style lang="scss" scoped>
.v-icon {
  width: 15px;
  color: white;
}

.hero {
  background-color: #151419;

  &.container {
    padding: 50px 60px;
  }

  &__sort {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__race {
    text-decoration: dotted;
    cursor: pointer;
  }

  &__categories {
    display: flex;
    margin-bottom: 50px;
  }

  &__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 50px;

    &--main {
      .hero__card {
        &:first-child {
          width: 100%;
          padding-bottom: 50%;
        }
      }
    }
  }

  &__card {
    width: 32%;
    padding-bottom: 20%;
    margin-bottom: 2%;
  }
}
</style>
