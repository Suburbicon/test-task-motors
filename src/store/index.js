import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dogs: [],
    perPage: 3,
    currentPage: 1,
    amountPage: 1,
    category: null
  },
  actions: {
    async FETCH_DOGS({ commit }) {
      const { data } = await axios("http://localhost:5000/dogs");
      commit("SET_DOGS", data);
    },

    async SORT_BY_ALPHABET({ commit }) {
      const { data } = await axios("http://localhost:5000/dogs?_sort=name&_order=asc");
      commit("SET_DOGS_ALPHABET", data);
    },

    async SORT_BY_CATEGORY({ commit }, category) {
      const { data } = await axios(
        `http://localhost:5000/dogs?${category !== null ? `category=${category}` : ""}`
      );
      commit("SET_DOGS_CATEGORY", { dogs: data, category });
    },

    async FETCH_FAVOURITE_DOGS({ commit }) {
      const { data } = await axios("http://localhost:5000/dogs?favourite=true");
      commit("SET_DOGS", data);
    },

    async POST_FAVOURITE_DOGS({ commit, getters }, id) {
      console.log(id);

      let toggleFavourite;
      // getters.DOGS[id]["favourite"];
      getters.DOGS.some((dog) => {
        if (dog.id == id) {
          toggleFavourite = dog.favourite;
        }
      });
      console.log(toggleFavourite);

      await axios
        .patch(`http://localhost:5000/dogs/${id}`, {
          favourite: !toggleFavourite
        })
        .catch((err) => {
          console.log(err);
        });
      const { data } = await axios("http://localhost:5000/dogs");
      commit("SET_DOGS", data);
    }
  },
  mutations: {
    SET_DOGS: (state, dogs) => {
      if (dogs) {
        state.dogs = dogs;
      }
    },
    SET_DOGS_ALPHABET: (state, dogs) => (state.dogs = dogs),
    SET_DOGS_CATEGORY: (state, data) => {
      state.dogs = data.dogs;
      state.category = data.category;
    }
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
    CATEGORY(state) {
      return state.category;
    }
  }
});
