<!-- <vue>로 vue file 자동완성 -->
<template>
  <div>
      <div v-for="user in users" v-bind:key="user.id">{{ user }}</div>
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
    // axios는 promise 기반
    fetchNewsList()
      .then(function(response) {
        console.log(response);
        vm.users = response.data;
      })
      .catch(err => console.error(err))
  }
}
</script>

<style>

</style>