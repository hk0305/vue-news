<!-- <vue>로 vue file 자동완성 -->
<template>
  <div>
      <div v-for="job in jobs" v-bind:key="job.id">{{ job }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from '../api/index.js';

export default {
  data() {
    return {
      jobs: []
    }
  },
  created() {
    var vm = this;
    fetchJobsList()
      .then(response => vm.jobs = response.data)
      .catch(err => console.error(err))
  }
}
</script>

<style>

</style>