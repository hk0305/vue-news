import Vue from 'vue';
import Vuex from 'vuex';
import { fetchAskList, fetchJobsList, fetchNewsList } from '../api/index.js';

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
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs;
        },
        SET_ASK(state, ask) {
            state.ask = ask;
        }
    },
    // NewsView에서의 API actions - context 연결 및 response data 전달
    actions: {
        FETCH_NEWS(context) {
          // 1. API 호출
          fetchNewsList()
            .then(response => {
              console.log(response);
              // 2. mutations와 연결
              context.commit('SET_NEWS', response.data);
            })
            .catch(err => console.error(err));
        },
        FETCH_JOBS({ commit }) {
            fetchJobsList()
              .then(({ data }) => commit('SET_JOBS', data))
              .catch(err => console.error(err));
        },
        FETCH_ASK({ commit }) {
            fetchAskList()
                .then(({ data }) => commit('SET_ASK', data))
                .catch(err => console.error(err));
        }
    }
});