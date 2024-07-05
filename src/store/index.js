import Vue from "vue";
import Vuex from "vuex";
import { moduleUserData } from "./modules/userData";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { userData: moduleUserData },
});
