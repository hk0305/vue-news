import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList } from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    // 저장된 state는 NewsView에서 호출
    state : {
        news: []
    },
    // context.commit의 mutaion으로 전달받은 값을 stats로 전달
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        }
    },
    // NewsView에서의 API actions - context 연결 및 response data 전달
    actions: {
        FETCH_NEWS(context) {
          fetchNewsList()
            .then(response => {
              console.log(response);
              // mutations와 연결
              context.commit('SET_NEWS', response.data);

            })
            .catch(err => console.error(err));
        }
    }
});