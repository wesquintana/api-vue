import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
const _api = axios.create({
  baseURL: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity",
  timeout: 10000
});
const extention =
  "photos?api_key=DHPmjRc0hHa8WPokk5uZnZu7MkNY34z6ZeIcM6o5&earth_date=";
export default new Vuex.Store({
  state: {
    searchResults: [],
    activePhoto: {}
  },
  mutations: {
    setSearchResults(state, searchResults) {
      state.searchResults = searchResults;
    },
    setActivePhoto(state, photo) {
      state.activePhoto = photo;
    }
  },
  actions: {
    async searchNasaApi({ commit, dispatch }, date) {
      let res = await _api.get(extention + date);
      commit("setSearchResults", res.data.photos);
    },
    setActivePhoto({ commit, dispatch }, photo) {
      commit("setActivePhoto", photo);
    }
  }
});
