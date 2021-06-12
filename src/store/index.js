import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    // 저장된 state는 NewsView에서 호출
    state : {
        news: [],
        jobs: [],
        ask: [],
    },
    getters: {
        // mapGetters 사용하기(AskView.vue)
        fetchedAsk(state) {
            return state.ask;
        }
    },
    // context.commit의 mutaion으로 전달받은 값을 stats로 전달
    mutations, // mutations.js 그대로 호출
    // NewsView에서의 API actions - context 연결 및 response data 전달
    actions,
});