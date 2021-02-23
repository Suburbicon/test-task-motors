<template>
  <header class="header">
    <div class="header__wrap container">
      <h2 class="header__title">
        <router-link class="header__title-link" to="/">ПЁСЕЛЬ</router-link>
      </h2>
      <div class="header__favourite-dogs">
        <router-link to="favourite" class="header__link">
          Избранные пёсели <vue-icon class="v-icon" name="heart"></vue-icon>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data: () => {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.v-icon {
  width: 16px;
  color: #626262;
}

.header {
  height: 100px;
  background-color: #151419;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.55);

  .container {
    padding: 35px 60px;
  }

  &__wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title-link {
    color: #3c59f0;
    text-decoration: none;
  }

  &__link {
    font-size: 16px;
    color: #626262;
    text-decoration: none;
  }
}
</style>
