import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dogs: [],
    perPage: 3,
    currentPage: 1,
    amountPage: 1,
  },
  actions: {
    async FETCH_DOGS({ commit }) {
      const { data } = await axios('http://localhost:5000/dogs');
      commit('SET_DOGS', data);
    },
  },
  mutations: {
    SET_DOGS: (state, dogs) => (state.dogs = dogs),
  },
  getters: {
    DOGS(state) {
      return state.dogs;
    },
    DOGS_BY_PAGE(state) {
      let dogsPerPage = [];

      for (
        let x = state.currentPage - 1 * state.perPage;
        x < state.currentPage * state.perPage;
        x++
      ) {
        dogsPerPage.push(state.dogs[x]);
      }

      return dogsPerPage;
    },
    AMOUNT_OF_PAGES(state, getters) {
      return (state.amountPage = Math.ceil(getters.DOGS.length / state.perPage));
    },
  },
});
