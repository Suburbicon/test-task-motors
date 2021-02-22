<template>
  <header class="header">
    <div class="header__wrap container">
      <h1 class="header__title">ПЁСЕЛЬ</h1>
      <div class="header__favourite-dogs">
        <a href="/favourite" class="header__link"
          >Избранные пёсели <v-icon name="heart"></v-icon
        ></a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  data: () => {
    return {};
  },
};
</script>

<style lang="scss">
.header {
  .container {
    max-width: 750px;
    margin: 0 auto;
  }
}
</style>
