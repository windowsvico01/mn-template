import { Commit } from 'vuex';
const state: any = {
  login: 1
};

const mutations: any = {
  SAVE_LOGIN(states: any, params: object) {
    states.login = params;
  },
};

const getters: any = {
    getlogin(state: any) {
        return state.login
    }
}

const actions: any = {
  setlogin(context: { commit: Commit }, params: number) {
    context.commit('SAVE_LOGIN', params);
  },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
