import Vue from "vue";
import EventService from "@/services/EventService.js";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: "abc123", name: "Matt Silva" },
    categories: ["a", "b", "c", "d"],
    events: []
  },
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id);
    }
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    SET_USERNAME(state, { id, name }) {
      state.user.name = name;
      state.user.id = id;
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit("ADD_EVENT", event);
      });
    },
    createUser({ commit }, user) {
      commit("SET_USERNAME", user);
    }
  },
  modules: {}
});
