<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
  </div>
</template>
<script>
// import storage from './storage/index'
export default {
  name: 'app',
  data () {
    return {
      res: {}
    }
  }
}
</script>
<style lang="scss">
@import './assets/scss/reset.scss';
@import 'assets/scss/config.scss';
@import 'assets/scss/button.scss';
</style>
