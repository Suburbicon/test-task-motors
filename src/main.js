import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import feather from "vue-icon";
import VueRouter from "vue-router";

import "./assets/scss/styles.scss";
import vuetify from "./plugins/vuetify";

Vue.use(VueRouter);
Vue.use(feather, "vue-icon");
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
