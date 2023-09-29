import Vuex from 'vuex';

const store = new Vuex.Store({
  state: {
    characters: [], // Здесь будет ваш массив персонажей
  },
  mutations: {
    setCharacters(state, characters) {
      state.characters = characters;
    },
  },
  getters: {
    getCharacters(state) {
      return state.characters;
    },
  },
});

export default store;