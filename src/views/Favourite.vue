<template>
  <div class="favourite container">
    <div v-if="DOGS.length" class="favourite__content favourite__content--main">
      <Card
        v-for="dog in DOGS"
        :key="dog.id"
        class="favourite__card"
        :dog="dog"
        :favouriteDog="dog.favourite"
      />
    </div>
    <p v-else>Не добавлен избранных пёсель</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Card from "../components/Card";

export default {
  name: "Favourite",
  components: {
    Card
  },
  data: () => {
    return {};
  },
  computed: {
    ...mapGetters(["DOGS"])
  },
  methods: {
    ...mapActions(["FETCH_FAVOURITE_DOGS", "POST_FAVOURITE_DOGS"]),
    addToFavourite(id) {
      this.POST_FAVOURITE_DOGS(id);
    }
  },
  mounted() {
    this.FETCH_FAVOURITE_DOGS();
  }
};
</script>

<style lang="scss" scoped>
.favourite {
  background-color: #151419;

  &.container {
    padding: 50px 60px;
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
    width: 49%;
    padding-bottom: 20%;
    margin-bottom: 2%;
  }
}
</style>
