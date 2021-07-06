import { 
    fetchAskList, 
    fetchJobsList, 
    fetchNewsList, 
    fetchUserInfo 
} from '../api/index.js';

export default {
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
    },
    FETCH_USER({ commit }, name) {
        fetchUserInfo(name)
            .then(({ data }) => commit('SET_USER', data))
            .catch(err => console.error(err));
    },
};