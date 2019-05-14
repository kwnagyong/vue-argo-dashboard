    import * as types from '../mutation/user_type';
import firebase from 'firebase'
import {UserApiService} from '../../apis/UserApiService';

const apiService = new UserApiService();

const state = {
    email:'',
    employeeId: '',
    companyId: '',
    companyName: '',
    departmentId: '',
    departmentName: '',
    createdAt: 0,
    isLogin: false
};

// getters
const getters = {
}

// actions
const actions = {
    async fetchSignIn(context, {email, password}) {
        try {
            let user = await firebase.auth().signInWithEmailAndPassword(email, password);
            context.commit(types.SET_SIGN_IN, user);
            let response = await apiService.getMyself();
            context.commit(types.SET_USER_INFO, response);
            return true;
        } catch(error) {
            console.error('user login fail');
            const errorCode = error.code;
            if (errorCode === 'auth/wrong-password') {
                alert('올바르지 않은 패스워드입니다.');
            }
            return false;
        }
    }
}


// mutations
const mutations = {
    [types.SET_SIGN_IN] (state, firebasePayload) {
        window.$cookies.set('isLogin', 'true', 60 * 60 * 24);
        window.$cookies.set('refreshToken', firebasePayload.user.refreshToken, 60 * 60 * 24);
        window.$cookies.set('accessToken', firebasePayload.user.ra, 60 * 60 * 24);
        state.isLogin = true;
    },
   [types.SET_USER_INFO](state, payload) {
        state.email = payload.email;
        state.employeeId = payload.employeeId;
        state.companyId = payload.companyId;
        state.companyName = payload.companyName;
        state.departmentId = payload.departmentId;
        state.departmentName = payload.departmentName;
        state.createdAt = payload.createdAt;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
