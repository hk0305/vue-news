<!-- <vue>로 vue file 자동완성 -->
<template>
  <div>
      <div v-for="item in this.$store.state.ask" v-bind:key="item.item">{{ item.title }}</div>
  </div>
</template>

<script>
// import { fetchAskList } from '../api/index.js';

export default {
  data () {
    return {
      ask: []
    }
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
    /**
    fetchAskList()
      .then(response => this.ask = response.data)
      .catch(err => console.error(err))
    */
  }
}
</script>

<style>

</style>