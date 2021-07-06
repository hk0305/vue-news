<!-- <vue>로 vue file 자동완성 -->
<template>
  <div>
    <p  v-for="job in this.$store.state.jobs" v-bind:key="job.id">
      <a :href="job.url">
        {{ job.title }}
      </a>
      <small>{{ job.time_ago }}, {{ job.domain }}</small>
    </p>
  </div>
</template>

<script>
// import { fetchJobsList } from '../api/index.js';

export default {
//data() {
//  return {
//    jobs: []
//  }
//},
  created() {
    this.$store.dispatch('FETCH_JOBS');
    /**
    fetchJobsList()
      .then(response => this.jobs = response.data)
      .catch(err => console.error(err))
    */
  }
}
</script>

<style>

</style>