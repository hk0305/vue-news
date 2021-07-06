<template>
  <div>

    <section>
      <!-- 질문 상세 정보 -->
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
          <div class="user-time">
            {{ fetchedItem.time_ago }}
          </div>
        </div>
      </div>
      <h2>{{ fetchedItem.title }}</h2>
    </section>

    <section>
      <!-- 질문 댓글 -->
      <!-- content안의 tag를 html로 표기 -->
      <div v-html="fetchedItem.content"></div>
    </section>

    <!-- 위로 리팩토링 -->
    <!-- <p>{{ fetchedItem.title }}</p>
    <div>
      {{ fetchedItem.content }}
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedItem']),
  },
  created() {
    const itemId = this.$route.params.id;
    // console.log(itemId);
    this.$store.dispatch('FETCH_ITEM', itemId);
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.user-time {
  font-size: 0.7rem;
}
</style>