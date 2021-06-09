<!-- <vue>로 vue file 자동완성 -->
<template>
  <div>
      <div v-for="ask in asks" v-bind:key="ask.item">{{ ask }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js';

export default {
  data () {
    return {
      asks: []
    }
  },
  created() {
    var vm = this;
    fetchAskList()
      .then(response => vm.asks = response.data)
      .catch(err => console.error(err))
  }
}
</script>

<style>

</style>scf