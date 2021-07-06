<!-- <vue>로 vue file 자동완성 -->
<template>
  <div>
      <p v-for="item in fetchedAsk" v-bind:key="item.item">
        <a v-bind:href="item.url">
          {{ item.title }}
        </a>
        <small>{{ item.time_ago }} by {{ item.user }}</small>
      </p>
  </div>
</template>

<script>
// import { fetchAskList } from '../api/index.js';

// vuex에서 제공하는 mapState, mapGetters
// $store.state를 편리하게 사용하기
// import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  computed: {
    //  #4 mapGetters Array 사용
    //  store index.js에서의 getters
    ...mapGetters(['fetchedAsk']),

    //  #3 mapGetters
    //  store index.js에서의 getters
    //  ...mapGetters({
    //    fetchedAsk : 'fetchedAsk'
    //  }),

    //  #2 mapState
    //  ...mapState({
    //    fetchedAsk: state => state.ask
    //  }),

    //  #1 default
    //  ask() {
    //    return this.$store.state.ask;
    //  },
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