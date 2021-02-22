<template>
  <div>
    <Header />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Header from '../components/Header';

export default {
  name: 'Home',
  components: {
    Header,
  },
  data: () => {
    return {};
  },
  computed: {
    ...mapGetters(['DOGS']),
  },
  methods: {
    ...mapActions(['FETCH_DOGS']),
  },
  mounted() {
    this.FETCH_DOGS();
  },
};
</script>

<style lang="scss"></style>
