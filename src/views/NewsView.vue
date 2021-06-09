<!-- <vue>로 vue file 자동완성 -->
<template>
  <div>
      <div v-for="user in users" v-bind:key="user.id">{{ user }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      users: []
    }
  },
  created() {
    // axios는 promise 기반
    axios.get('https://api.hnpwa.com/v0/news/1.json')
      .then(response => console.log(response))
      .catch(err => console.err(err))
  }
}
</script>

<style>

</style>