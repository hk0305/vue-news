<!-- <vue>로 vue file 자동완성 -->
<template>
  <div>
      <p  v-for="item in this.$store.state.news" v-bind:key="item.id">
        <a v-bind:href="item.url">
          {{ item.title }}
        </a>
        <small>
            {{ item.time_ago }} by 
            <!-- <router-link v-bind:to="'/user/' + item.user"> {{ item.user }} </router-link> -->
            <router-link v-bind:to="`/user/${item.user}`"> {{ item.user }} </router-link>
        </small>
      </p>
  </div>
</template>

<script>
// import { fetchNewsList } from '../api/index.js'

export default {
  data () {
    return {
      users: []
    }
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
    // 객체를 맵핑
    // var vm = this;
    // console.log('호출 전 :', this); // 전역 this
    // axios는 promise 기반
    /**
    fetchNewsList()
      .then(response => {
        // 화살 함수 선언을 사용하면 vm = this 바인딩을 하지 않아도 this를 바로 사용할 수 있다.
        // then(function(response) { console.log(this);}) 이렇게 선언하면 this는 function 내부를 가르킨다.
        // console.log('호출 후 :', this);
        // vm.users = response.data;
        this.users = response.data;
      })
      .catch(err => console.error(err))
     */
  }
}
</script>

<style>

</style>