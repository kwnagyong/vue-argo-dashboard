import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import ArgonDashboard from './plugins/argon-dashboard'
import LiquorTree from 'liquor-tree'
import store from './store'
import firebase from 'firebase/app'
import VeeValidate from 'vee-validate'
import VueCookies from 'vue-cookies'
import interceptorsSetup from './apis/interceptors'

const config = {
  apiKey: "AIzaSyAbmxvpNXz_K2sZ5l37ZpWlTCuoQSPMbeo",
  authDomain: "smart-selling-be9bc.firebaseapp.com",
  databaseURL: "https://smart-selling-be9bc.firebaseio.com",
  storageBucket: "smart-selling-be9bc.appspot.com",
};

firebase.initializeApp(config);
interceptorsSetup();

Vue.config.productionTip = false;
Vue.use(store);
Vue.use(LiquorTree);
Vue.use(VeeValidate);
Vue.use(VueCookies);

Vue.use(ArgonDashboard);
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
