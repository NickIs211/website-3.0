<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to  Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import anime from 'animejs/lib/anime.es.js';

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
