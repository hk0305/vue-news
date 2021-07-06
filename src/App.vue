<template>
  <div id="app">
    <!-- ToolBar 컴포넌트를 태그로 등록 -->
    <!-- Mac: Option 누른 후 클릭 -->
    <!-- Window: Alt 누른 후 클릭 -->
    <!-- <ToolBal></ToolBal>와 동일하다 -->
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <!-- url 주소에 따른 view를 보여준다 -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ToolBar from './components/Toolbar.vue';

export default {
  components: {
    ToolBar,
  },
}
</script>

<style>
body {
  padding: 0px;
  margin: 0px;
}

/* Router Transiction */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
