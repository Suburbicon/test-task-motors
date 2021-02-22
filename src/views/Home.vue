<template>
  <div class="hero container">
    <div class="hero__sort">
      <p class="hero__race">
        Породы
        <vue-icon class="v-icon" name="arrow-up"></vue-icon>
      </p>
      <Sort />
    </div>
    <div class="hero__categories">
      <Categories :categories="categories" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Categories from "../components/Categories";
import Sort from "../components/Sort.vue";

export default {
  name: "Home",
  components: {
    Categories,
    Sort
  },
  data: () => {
    return {
      categories: [
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
      ]
    };
  },
  computed: {
    ...mapGetters(["DOGS"])
  },
  methods: {
    ...mapActions(["FETCH_DOGS"])
  },
  mounted() {
    this.FETCH_DOGS();
  }
};
</script>

<style lang="scss" scoped>
.v-icon {
  width: 15px;
  color: white;
  // transform: rotate(180deg);
}

.hero {
  height: 100vh;
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
  }
}
</style>
