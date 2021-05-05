import Vue from "vue";
import App from "./App.vue";
import router from "./router"
import SimpleVueValidation from "simple-vue-validator";
import { store } from "./store/entry"
import axiosRequest from './requests'

store.$axios = axiosRequest

Vue.use(SimpleVueValidation);

new Vue({
  el: "#admin-app",
  router,
  store,
  render: h => h(App)
});

