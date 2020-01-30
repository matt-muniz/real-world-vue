import Vue from "vue";
import Vuex from "vuex";
import * as user from "@/store/modules/user.js";
import * as event from "@/store/modules/event.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: ["a", "b", "c", "d"]
  },
  modules: {
    user,
    event
  }
});
