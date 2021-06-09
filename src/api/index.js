import axios from 'axios'; // node_modules/axiox와 동일.

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API 함수들을 정리
function fetchNewsList() {
    // return axios.get(config.baseUrl + 'news/1.json');
    return axios.get(`${config.baseUrl}news/1.json`); // 백틱을 사용한 표현식(ES6 템플릿)
}

// 3. Export
export {
    fetchNewsList
}