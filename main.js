import "./src/index.css";
import Vue from "vue";
import App from "./src/App.vue";
import store from "./src/store";

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
