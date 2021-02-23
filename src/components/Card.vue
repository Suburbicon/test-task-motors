<template>
  <div @click="$emit('addToFavourite', dog.id)" class="card">
    <div class="card__content"></div>
    <img class="card__image" :src="dog.imageUrl" alt="image of dog" />
    <span class="card__title">{{ dog.name }}</span>
    <img class="card__heart" v-if="favouriteDog" :src="heartFilled" alt="heart outline" />
    <img class="card__heart" v-else :src="heartOutline" alt="" />
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    dog: {
      type: Object,
      default: () => {}
    },
    favouriteDog: {
      type: Boolean
    }
  },
  data: () => {
    return {
      heartFilled: require("../assets/image/heart-fill.svg"),
      heartOutline: require("../assets/image/heart.svg")
    };
  }
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  display: flex;
  cursor: pointer;

  &__content {
    position: absolute;
    background-image: linear-gradient(1.26deg, #000000 -5.53%, rgba(0, 0, 0, 0) 54.45%);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  &__heart {
    padding: 25px 0 0 25px;
    width: 65px;
    position: absolute;
    z-index: 1;
  }

  &__image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    max-width: 100%;
    border-radius: 10px;
  }

  &__title {
    position: absolute;
    color: #fff;
    font-size: 24px;
    z-index: 1;
    bottom: 0;
    right: 0;
    padding: 0 50px 50px 0;
  }
}
</style>
