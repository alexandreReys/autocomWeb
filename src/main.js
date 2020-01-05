import Vue from "vue";
import App from "./App";
import store from "./store";
import router from "./router";
import "./assets/scss/app.scss";
import VueMask from "di-vue-mask";
import VueNumericInput from "vue-numeric-input";

Vue.use(VueNumericInput);
Vue.use(VueMask);

Vue.config.productionTip = false;

window._Vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
