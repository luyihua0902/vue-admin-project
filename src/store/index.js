import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/app.js";
// import app1 from "./app1.js";
import login from "./modules/login";
Vue.use(Vuex);

export default new Vuex.Store({

  modules:{
    app,
    login,
    // app1,
  }
});
