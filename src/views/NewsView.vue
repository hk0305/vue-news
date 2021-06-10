<!-- <vue>로 vue file 자동완성 -->
<template>
  <div>
      <div v-for="user in users" v-bind:key="user.id">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js'

export default {
  data () {
    return {
      users: []
    }
  },
  created() {
    // 객체를 맵핑
    var vm = this;
    // console.log('호출 전 :', this); // 전역 this
    // axios는 promise 기반
    fetchNewsList()
      .then(response => {
        // 화살 함수 선언을 사용하면 vm = this 바인딩을 하지 않아도 this를 바로 사용할 수 있다.
        // then(function(response) { console.log(this);}) 이렇게 선언하면 this는 function 내부를 가르킨다.
        // console.log('호출 후 :', this);
        vm.users = response.data;
      })
      .catch(err => console.error(err))
  }
}
</script>

<style>

</style>