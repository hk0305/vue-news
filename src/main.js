import Vue from 'vue';
import App from './App.vue';
// 라우터 가져오기
import { router } from './routes/index.js';
// 스토어 가져오기
import { store } from './store/index.js'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router, // router : router 과 동일(앞뒤가 동일하므로 하나로 씀)
  store,
}).$mount('#app');