import Vue from 'vue'
import Vuex from 'vuex'
import merchant from './modules/merchant'
import employee from "./modules/employee";
import user from "./modules/user";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        merchant: merchant,
        employee: employee,
        user: user
    },
    strict: debug

})
