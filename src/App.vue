<template>
  <div id="app">
    <Layout></Layout>
  </div>
</template>

<script>
import { Component } from 'vue-property-decorator';
import Vue from 'vue';

import { Layout } from './components';

export default Component({
  components: { Layout }
}) (
  class App extends Vue {    

  }
)
</script>

<style lang="scss">

@import url(https://fonts.googleapis.com/icon?family=Material+Icons);

* {
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
