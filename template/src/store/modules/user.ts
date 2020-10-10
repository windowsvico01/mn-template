import { Commit } from 'vuex';
const state: any = {
    userinfo: {
        avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
        nickname: "",
        mobile: ""
    }
};
const getters: any = {
    getUserInfo(state: any) {
        return state.userinfo
    }
}
const mutations: any = {
    SET_USER(states: any, params: object) {
        states.userinfo = params
    }
};

const actions: any = {
    setUser(context: { commit: Commit }, params: object) {
        context.commit('SET_USER', params);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
